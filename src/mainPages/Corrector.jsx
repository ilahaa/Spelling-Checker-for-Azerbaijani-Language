import React, { useState } from 'react';
import axios from 'axios';
import "../assests/style/spellingCorrectorPage.css";

const Corrector = () => {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/spellingchecker', { text: inputText });
      setCorrectedText(response.data.correctedText);
    } catch (error) {
      console.error('Error correcting text:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <div className="line"></div>

      <div className='spellingCorrectorPage'>
        <div className="spelling-checker-box mt-5">
          <div className="box-icons mb-2">
            <i className="fa-regular fa-paste"></i>
            <i className="fa-solid fa-cloud-arrow-up ml-3" style={{ marginLeft: "10px" }}></i>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              className='textInput'
              placeholder='Mətn əlavə edin...'
              value={inputText}
              onChange={handleInputChange}
              rows="5"
              cols="33"
            ></textarea>
            <button type='submit' className='checkBtn'>Yoxla</button>
          </form>

          {correctedText && (
            <div>
              <h2>Corrected Text:</h2>
              <p>{correctedText}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Corrector;
