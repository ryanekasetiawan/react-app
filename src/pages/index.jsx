import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"; // Path disesuaikan
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const RootPage = () => {
  const navigate = useNavigate();
  const username = useLogin();
  const {isDarkMode} = useContext(DarkMode);

  // Jika tidak login, arahkan ke halaman login
  if (!username) {
    navigate("/login", { replace: true });
    return null;
  }

  return (
    <>
        <Navbar />
        <div className={`min-h-screen flex justify-center items-center ${isDarkMode && "bg-black text-white"}`}>
            <h1 className={"text-xl font-semibold"}>Selamat Datang, {username}!</h1>
        
        </div>
    </>
  );
};

export default RootPage;
