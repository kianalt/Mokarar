import { useTheme } from "./hooks/useTheme";
import logo from "../assets/logo-flat.png"; 

export default function Header() {
   const { dark, setDark } = useTheme();


 



  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200 dark:border-gray-700 bg-background dark:bg-darkbg transition fixed w-full h-30  z-50 `${scrolled ? `z-50` : `opacity-70`}`">
      
      {/* Logo */}
     

      {/* Theme toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="p-2 px-4  dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {dark ? "☀️" : "🌙"}
      </button>
 <img 
        src={logo}
        alt="Mokarar Logo"
        className="h-20 w-auto object-contain"
      />
    </header>
  );
}
