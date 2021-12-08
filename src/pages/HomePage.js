import React, { useContext, useState, useCallback, useEffect, useMemo} from "react";
import UserProfile from "../components/UserProfile";
import { ThemeContext } from "../context";
import CONSTANTS from "../constants";
import NameList from "../components/FuncNameList";
const { THEMES } = CONSTANTS;

function calcValue(n){
  let res = 0
  for(let i=0;i<1000000;i++){res+=i}
  
  return n**5};

const styleMap = {
  [THEMES.LIGHT]: {
    background: "#eee",
    color: "#333",
    height: "100vh",
  },
  [THEMES.DARK]: {
    background: "#333",
    color: "#eee",
    height: "100vh",
  },
};

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [theme, themeState] = useContext(ThemeContext);
  const handlerTheme = useCallback(() => {
    themeState(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  }, [theme]);
  const handlerLog = useCallback(() => {
    console.log(value);
  }, [value]);
  const handlerInput = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);
  const showCalcValue = useMemo(()=>calcValue(value),[value])
  return (
    <div style={styleMap[theme]}>
      <h2>Value:{showCalcValue}</h2>
      <input type="number" value={value} onChange={handlerInput} />
      <button onClick={handlerTheme}>switch</button>
      <button onClick={handlerLog}>log value</button>
      <UserProfile />
      <NameList/>
    </div>
  );
};

export default HomePage;
