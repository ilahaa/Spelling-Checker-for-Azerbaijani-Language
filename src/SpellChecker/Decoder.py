import tensorflow as tf
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
import pandas as pd
import unicodedata
import pickle
import re
import numpy as np
from keras.layers import LSTM, Input, Dense, Embedding, Concatenate, TimeDistributed
from keras.models import Model, load_model, model_from_json
from keras.utils import plot_model
from .Attention import AttentionLayer


json_file = open('SpellChecker/initial/Sc_model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
model_loaded = model_from_json(loaded_model_json, custom_objects={'AttentionLayer': AttentionLayer})

model_loaded.load_weights("SpellChecker/initial/SC_model_weight.h5")


with open('SpellChecker/initial/InputTokenizer.pkl', 'rb') as f:
    inputTokenizer = pickle.load(f)
    
with open('SpellChecker/initial/OutputTokenizer.pkl', 'rb') as f:
    outputTokenizer = pickle.load(f)
    
    
Eindex2word = inputTokenizer.index_word
Mindex2word = outputTokenizer.index_word


latent_dim=300
# encoder inference
encoder_inputs = model_loaded.input[0]  #loading encoder_inputs
encoder_outputs, state_h, state_c = model_loaded.layers[4].output #loading encoder_outputs


encoder_model = Model(inputs=encoder_inputs,outputs=[encoder_outputs, state_h, state_c])

# decoder inference
# Below tensors will hold the states of the previous time step
decoder_state_input_h = Input(shape=(latent_dim,), name="decoder_state_input_h")
decoder_state_input_c = Input(shape=(latent_dim,), name="decoder_state_input_c")
decoder_hidden_state_input = Input(shape=(30,latent_dim))

# Get the embeddings of the decoder sequence
decoder_inputs = model_loaded.layers[1].output

dec_emb_layer = model_loaded.layers[3]

dec_emb2= dec_emb_layer(decoder_inputs)

# To predict the next word in the sequence, set the initial states to the states from the previous time step
decoder_lstm = model_loaded.layers[5]
decoder_outputs2, state_h2, state_c2 = decoder_lstm(dec_emb2, initial_state=[decoder_state_input_h, decoder_state_input_c])

#attention inference
attn_layer = model_loaded.layers[6]
attn_out_inf, attn_states_inf = attn_layer([decoder_hidden_state_input, decoder_outputs2])

concate = model_loaded.layers[7]
decoder_inf_concat = concate([decoder_outputs2, attn_out_inf])

# A dense softmax layer to generate prob dist. over the target vocabulary
decoder_dense = model_loaded.layers[8]
decoder_outputs2 = decoder_dense(decoder_inf_concat)

# Final decoder model
decoder_model = Model([decoder_inputs] + [decoder_hidden_state_input,decoder_state_input_h, decoder_state_input_c],
[decoder_outputs2] + [state_h2, state_c2])


def decode_sequence(input_seq):
    # Encode the input as state vectors.
    e_out, e_h, e_c = encoder_model.predict(input_seq, verbose=0)

    # Generate empty target sequence of length 1.
    target_seq = np.zeros((1,1))

    # Chose the 'start' word as the first word of the target sequence
    target_seq[0, 0] = Mword2index['<']

    stop_condition = False
    decoded_sentence = ''
    while not stop_condition:
        output_tokens, h, c = decoder_model.predict([target_seq] + [e_out, e_h, e_c], verbose=0)

        # Sample a token
        sampled_token_index = np.argmax(output_tokens[0, -1, :])
        if sampled_token_index == 0:
          break
        else:
          sampled_token = Mindex2word[sampled_token_index]

          if(sampled_token!='>'):
              decoded_sentence += ''+sampled_token

              # Exit condition: either hit max length or find stop word.
              if (sampled_token == '>' or len(decoded_sentence.split()) >= (26-1)):
                  stop_condition = True

          # Update the target sequence (of length 1).
          target_seq = np.zeros((1,1))
          target_seq[0, 0] = sampled_token_index

          # Update internal states
          e_h, e_c = h, c

    return decoded_sentence



def seq2summary(input_seq):
    newString=''
    for i in input_seq:
      if((i!=0 and i!=Mword2index['<']) and i!=Mword2index['>']):
        newString=newString+Mindex2word[i]+''
    return newString

def seq2text(input_seq):
    newString=''
    for i in input_seq:
      if(i!=0):
        newString=newString+Eindex2word[i]+''
    return newString


Mword2index = outputTokenizer.word_index



# def predict_summary_for_long_sentences(given, max_length=30, chunk_size=2):

#     result = ''

#     if len(given) < max_length-2:
#         # If the length is less than or equal to max_length, directly call the decoder function
#         new_sample = ["< " + given + " >"]
#         new_sample = np.array(pad_sequences(inputTokenizer.texts_to_sequences(new_sample), maxlen=max_length, padding='post'))

#         result = decode_sequence(new_sample.reshape(1, max_length)).strip()  # Remove leading and trailing spaces

#     else:
#         words = given.split(' ')
#         chunks = [words[i:i + chunk_size] for i in range(0, len(words), chunk_size)]

#         final_result = []

#         for i, chunk in enumerate(chunks):
#             chunk_sentence = ' '.join(chunk)
#             # print('chunk sentence: ', chunk_sentence)

#             new_sample = ["< " + chunk_sentence + " >"]
#             new_sample = np.array(pad_sequences(inputTokenizer.texts_to_sequences(new_sample), maxlen=max_length,
#                                                 padding='post'))

#             partial_result = decode_sequence(new_sample.reshape(1, max_length)).strip()  # Remove leading and trailing spaces
#             # print('partial_result: ', partial_result)

#             # Add space only if it's not the first chunk
#             if i > 0:
#                 partial_result = ' '.join(partial_result.split())

#             final_result.append(partial_result)

#         result = ' '.join(final_result).strip()

#     return result

import numpy as np
import re

def remove_emojis(data):
    emoj = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
        u"\U00002500-\U00002BEF"  # chinese char
        u"\U00002702-\U000027B0"
        u"\U00002702-\U000027B0"
        u"\U000024C2-\U0001F251"
        u"\U0001f926-\U0001f937"
        u"\U00010000-\U0010ffff"
        u"\u2640-\u2642"
        u"\u2600-\u2B55"
        u"\u200d"
        u"\u23cf"
        u"\u23e9"
        u"\u231a"
        u"\ufe0f"  # dingbats
        u"\u3030"
                      "]+", re.UNICODE)
    return re.sub(emoj, '', data)

def preprocess_sentence(w):
    # Convert the input to a string
    w = str(w)

    # Remove emojis
    w = remove_emojis(w)

    # Remove extra spaces
    w = re.sub(r'[" "]+', " ", w)

    # Prepend a start token "< " and append an end token " >"
    w = '< ' + w.strip() + ' >'

    return w

def predict_summary_for_long_sentences(given, max_length=30, chunk_size=2):

    result = ''

    # Preprocess the given sentence
    given = preprocess_sentence(given)

    if len(given) < max_length-2:
        # If the length is less than or equal to max_length, directly call the decoder function
        new_sample = [given]
        new_sample = np.array(pad_sequences(inputTokenizer.texts_to_sequences(new_sample), maxlen=max_length, padding='post'))

        result = decode_sequence(new_sample.reshape(1, max_length)).strip()  # Remove leading and trailing spaces

    else:
        words = given.split(' ')
        chunks = [words[i:i + chunk_size] for i in range(0, len(words), chunk_size)]

        final_result = []

        for i, chunk in enumerate(chunks):
            chunk_sentence = ' '.join(chunk)

            new_sample = [chunk_sentence]
            new_sample = np.array(pad_sequences(inputTokenizer.texts_to_sequences(new_sample), maxlen=max_length,
                                                padding='post'))

            partial_result = decode_sequence(new_sample.reshape(1, max_length)).strip()  # Remove leading and trailing spaces

            if i > 0:
                partial_result = ' '.join(partial_result.split())

            final_result.append(partial_result)

        result = ' '.join(final_result).strip()

    return result


def predictor(text: str):
    result = predict_summary_for_long_sentences(text)
    return result
    
