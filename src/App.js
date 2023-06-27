import React, { useContext, useState } from 'react';


const ThemeContext = React.createContext();
const ThemeComponent = () => {

  const theme = useContext(ThemeContext);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const backgroundColor = buttonClicked ? 'lightgreen' : theme.background;
  const textColor = buttonClicked ? 'white' : theme.text;
  const h1 = buttonClicked ? 'Lightgreen' : 'Lightblue';
  const p = buttonClicked ? 'lightgreen' : 'Lightblue';
  const btn = buttonClicked ? 'lightblue' : 'Lightgreen';

  return (
      <div style={{ backgroundColor, color: textColor }}>
        <h1>{h1}</h1>
        <p>This is a {p} component.</p>
        <button onClick={handleClick} style={{backgroundColor: btn}}>
          {buttonClicked ? 'change to LightBlue Background' : 'change to LightGreen Background'}
        </button>
      </div>
  );
};


const App = () => {

  const theme = {
    background: 'lightblue',
    text: 'black'
  };

  return (

      <ThemeContext.Provider value={theme}>
        <ThemeComponent />
      </ThemeContext.Provider>
  );
};

export default App;
