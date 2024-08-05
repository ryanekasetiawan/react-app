import { useContext, forwardRef } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Input = forwardRef((props, ref) => {
  const {isDarkMode} = useContext(DarkMode);
  const {type, placeholder, name} = props
  return (
    <input 
    type={type} 
    className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-60 ${isDarkMode && "placeholder: opacity-80"}`} 
    placeholder={placeholder}
    name={name}
    id={name}
    ref={ref}
    />
  );
}); 

export default Input;