import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [stateName, setStateName] = useState("USA")
  const [cityName, setCityName] = useState("Anytown")

  // ****** use useEffect to make an api call to
  // https://freegeoip.app/json/ whose response
  // you will use to update the cityName and 
  // stateName variables. The API call should
  // be made only once.


  

  return (
    <main>
      <h1>(Hi there/Howdy)</h1>
      <p>How's life in {cityName}, {stateName}?</p>
    </main>
  );
}

export default App;


// Instructions

// In this lesson, you will use React's useEffect hook to contain a side effect. You'll make one fetch request to Free Geo IP, a publicly available API that converts an IP address into a physical location. Then, you will show the city and state of the user on the screen.

// If you want an extra challenge, modify the greeting (Hi there/Howdy) to update based on the result of the API call. Say 'Howdy' if the user is from Texas, or say 'Hi there' otherwise.
