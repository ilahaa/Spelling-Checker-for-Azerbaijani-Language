import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assests/style/spellingCorrectorPage.css";

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
            <button type='submit' className='checkBtn' disabled={loading}>Yoxla</button>
          </form>

          {loading && <p>Timer: {timer} seconds</p>}

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
