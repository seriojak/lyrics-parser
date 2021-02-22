import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimaryButton, TextField } from 'office-ui-fabric-react';
import { ThemeProvider } from "@fluentui/react-theme-provider";
import { getTheme, Stack } from '@fluentui/react';

const App = () => {
  const theme = getTheme()
  const [lyrics, setLyrics] = React.useState('')
  const [clearLyrics, setClearLyrics] = React.useState('')

  const handleOnSubmitClick = () => {
    fetch('/api/lyrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({lyrics})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.lyrics)
        setClearLyrics(data.lyrics)
      })
    console.log(lyrics)
  }

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Stack horizontal verticalAlign="center">
            <div style={{minWidth: 500}}>
              <TextField
                label="With auto adjusting height"
                multiline
                rows={15}
                style={{width: 100}}
                autoAdjustHeight
                onChange={(_, value) => value && setLyrics(value)}
              />
            </div>
            <PrimaryButton text='Submit' onClick={handleOnSubmitClick}/>
            <div style={{minWidth: 500}}>
              <TextField
                label="With auto adjusting height"
                multiline
                rows={15}
                style={{width: 100}}
                autoAdjustHeight
                value={clearLyrics}
              />
            </div>
          </Stack>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
