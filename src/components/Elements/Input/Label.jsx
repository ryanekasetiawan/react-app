import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = (props) => {
  const {isDarkMode} = useContext(DarkMode);
  const {htmlFor, children} = props;
  return (
    <label htmlFor={htmlFor} className={`block text-slate-700 text-sm font-bold mb-2 ${isDarkMode && "text-white opacity-90"}`}>
      {children}
    </label>
  )
};

export default Label;