import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";


function App () {
  //Start time
  const startTime = 10000;

  //Remaining time value
  const [ timeLeft, setTimeLeft ] = useState(startTime);
  
  //Timer State - started or paused
  const [ isPaused, setIsPaused ] = useState(false);
  
  //Progressive State - started or not
  const [ isStarted, setIsStarted ] = useState(false);
  
  useEffect(() => { 

    const countdown = () => {
      if (isStarted && !isPaused) {
        setTimeLeft(timeLeft - 1000);
      }
    };

    const timer = setTimeout(countdown, 1000);

    if (isStarted === false) { 
      setTimeLeft(startTime);
      return clearTimeout(timer);
    };
      
      if (timeLeft === 0) {
        return clearTimeout(timer);
      }
    }, [ isStarted, timeLeft, isPaused ]);

    const getMinutes = () => {
      let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes;
    };

    //Convert time left to seconds
    const getSeconds = () => {
      let seconds = Math.floor((timeLeft / 1000) % 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return seconds;
    };

    //Reset values
    const resetTimer = () => { 
      setIsPaused(false);
      setIsStarted(false);
    };
      

  return (
    <div className="app">
      <div className="clock-section">
        <div className="clock-container">
          <CircularProgressbar
            maxValue={ startTime }
            value={ startTime - timeLeft }
            text={ `${getMinutes()}:${getSeconds()}` }
          />
        </div>
        <div className="button-section">
          { isStarted ? (
            <>
              <button onClick={ resetTimer }>Reset</button>
              <button onClick={ () => setIsPaused(!isPaused) }>
                {isPaused ? "Resume" : "Pause" }
              </button>
            </>
          ) : (
              <button onClick={() => setIsStarted(true) }>Start</button>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default App;
