import logo from "../assets/logo-flat.png";

type HeaderProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled?: boolean;
};

export default function Header({ dark, setDark, scrolled = true }: HeaderProps) {
  return (
    <header
      className={`flex justify-between items-center px-8 py-4
        border-b border-gray-200 dark:border-gray-700
        bg-background dark:bg-darkbg transition
        fixed w-full h-30 z-50
        ${scrolled ? "opacity-100" : "opacity-70"}
      `}
    >
      <button
        onClick={() => setDark(!dark)}
        className="p-2 px-4 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Toggle theme"
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
