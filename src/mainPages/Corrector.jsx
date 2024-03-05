import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assests/style/spellingCorrectorPage.css";
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
    setTimer(0); // Reset the timer back to 0 when the "Yoxla" button is pressed

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/spellingchecker', { text: inputText });
      setCorrectedText(response.data.correctedText);
    } catch (error) {
      console.error('Error correcting text:', error);
    } finally {
      setLoading(false); // Set loading back to false when the response is received or an error occurs
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      {/* <div className="line"></div> */}

      <div className='spellingCorrectorPage'>
        <div className="row w-100 d-flex justify-content-around">
          <div className="spelling-checker-box mt-5 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <form onSubmit={handleSubmit}>
              <textarea
                className='textInput'
                placeholder='Mətn əlavə edin...'
                value={inputText}
                onChange={handleInputChange}
                rows="5"
                cols="33"
              ></textarea>
              <button type='submit' className='checkBtn' disabled={loading}>Yoxla</button>
            </form>

            {loading && <p>Timer: {timer} seconds</p>}
          </div>
          <div className="corrected-text-box mt-5 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
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
      </div>
    </>
  );
};

export default Corrector;
