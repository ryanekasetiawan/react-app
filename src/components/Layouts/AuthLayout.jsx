import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import DarkModeButton from "../Elements/DarkModeButton";

const AuthLayout = (props) => {
  const {children, title, type} = props;
  let {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs text-bl">
        <div className="absolute right-4 top-4 z-10">
          <DarkModeButton />
        </div>
        <h1 className={`text-3xl font-bold mb-2 text-blue-600 ${isDarkMode && "text-blue-400"}`}>{title}</h1>
        <p className={`font-medium text-slate-500 mb-8 ${isDarkMode && "text-slate-400"}`}>
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>  
    </div>
  );
};

const Navigation = ({type}) => {
  let {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  if (type === 'login') {
    return (
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Don't have an account?{" "}
        <Link to="/register" className={`font-bold text-blue-600 ${isDarkMode && "text-blue-400"}`}>
          Register
        </Link>
      </p>
    );  
  } else {
    return (
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Already have an account?{" "}
        <Link to="/login" className={`font-bold text-blue-600 ${isDarkMode && "text-blue-400"}`}>
          Login
        </Link>
      </p>  
    );
  }
};

export default AuthLayout;