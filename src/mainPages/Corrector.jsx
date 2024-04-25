import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assests/style/spellingCorrectorPage.css";
import loadingGif from "../assests/images/loading.gif"
import correctTxtImg from "../assests/images/correct-img.webp"

const Corrector = () => {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId;

    if (loading) {
      // Start the timer if loading is true
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // Update the timer every second
    } else {
      // Reset the timer back to 0 when loading becomes false
      setTimer(0);
    }

    return () => {
      // Clear the interval when component unmounts or loading becomes false
      clearInterval(intervalId);
    };
  }, [loading]); // Run this effect whenever loading changes

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/spellingchecker', { text: inputText });
      setCorrectedText(response.data.correctedText);
    } catch (error) {
      console.error('Error correcting text:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <div className='spellingCorrectorPage '>
       
          <div className="spelling-checker-box 
          d-flex align-items-center justify-content-center flex-column">
            <form onSubmit={handleSubmit}>
              <textarea
                className='textInput'
                placeholder='Mətn əlavə edin...'
                value={inputText}
                onChange={handleInputChange}
              ></textarea>
              <button type='submit' className='checkBtn' disabled={loading}>Yoxla</button>
            </form>

            {loading && <img className='loadingGif' width={30} src={loadingGif} alt="Loading..." />
            }
          </div>
           {/* <p>Timer: {timer} seconds</p> */}

          <div className="corrected-text-box 
          d-flex align-items-center justify-content-center">
            <div className="corrected-text">
              {correctedText ? (
                <div>
                  <p>{correctedText}</p>
                </div>
              ) : (
                <img className='correctTxtImg' width={200} src={correctTxtImg} alt="" />
              )}
            </div>
          </div>
        </div>

    </>
  );
};

export default Corrector;
