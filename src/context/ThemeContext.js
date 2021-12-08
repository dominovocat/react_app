import { createContext } from "react";
import CONSTANTS from '../constants';
const {THEMES} = CONSTANTS;

const ThemeContext = createContext(THEMES.DARK);

export default ThemeContext;