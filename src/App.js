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
  const [ isPause, setIsPaused ] = useState(false);
  
  //Progressive State - started or not
  const [ isStarted, setStarted ] = useState(false);
  
  useEffect(() => { 

    const countdown = (() => {
      if (isStarted && !isPaused) {
      set
    }
  }
      
  });
  return <div className="App"></div>;
}

export default App;
