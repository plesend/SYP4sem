import React, { useEffect, useState } from 'react';
import './App.css';
import Calculator from "./components/Calculator";

function App() {
  const [isDarkTheme,setTheme] = useState<boolean>(false)

  function changeTheme()
  {
    setTheme(!isDarkTheme)
  }
  let themeClass:string = 'lightTheme'
  if(isDarkTheme)
  {
    themeClass = 'darkTheme'
  }
  return (
   
    <div className={`main ${themeClass}`}>
      <Calculator/>
      <button className='changetheme' onClick={changeTheme}>Сменить тему</button>
    </div>
    
  );
}
export default App;