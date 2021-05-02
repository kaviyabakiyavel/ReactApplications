import React from 'react';
import './App.css';

let counter = 0;
const getData = () => {
  //making Api call and getting the respobse data 
  console.log('fetching Data...', counter++)
}

const debouncefunction = (fn, delay) => {
  // anonymous  function
  let timer ;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData()
    }, delay);
  }
}
const higherorderfunction = debouncefunction(getData, 1000)

function App() {
  return (
    <div className="App" style={{paddingTop:"20%"}}>
      <span style={{fontWeight:"700",padding:"4px"}}>Debounce function is to reduce the API call request to server</span><br/>
      <input type="text" placeholder="search..." onKeyUp={higherorderfunction} />
    </div>
  );
}

export default App;
