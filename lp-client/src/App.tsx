import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [lyrics, setLyrics] = React.useState('')
const handleOnSubmitClick = () => {
  console.log(lyrics)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <textarea  rows={10} cols={50} value={lyrics} onChange={(event) => setLyrics(event.target.value)} />
        <button onClick={handleOnSubmitClick}>submit</button>
      </header>
    </div>
  );
}

export default App;
