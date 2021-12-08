import React, {useContext, useState, useCallback, useEffect} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '../constants';
const {THEMES} = CONSTANTS;
  const styleMap = {
    [THEMES.LIGHT]:{
      background:'#eee',color:'#333',height:'100vh'
    },
    [THEMES.DARK]:{
      background:'#333',color:'#eee',height:'100vh'
    }
  }

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [theme, themeState] = useContext(ThemeContext);
  const handlerTheme = useCallback(()=>{
    themeState(theme===THEMES.DARK?THEMES.LIGHT:THEMES.DARK);
  },[theme]);  
  const handlerLog = useCallback(()=>{console.log(value)},[value]);
  const handlerInput = useCallback(({target:{value}})=>{
    setValue(Number(value))
  },[])

  return (
    <div style={styleMap[theme]}>
      <h2>Value:{value}</h2>
      <input type='number' value={value} onChange={handlerInput}/>
      <button onClick={handlerTheme} >switch</button>
      <button onClick={handlerLog} >log value</button>
      <UserProfile />
    </div>
  );
}

export default HomePage;
