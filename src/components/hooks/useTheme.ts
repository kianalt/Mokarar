import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    // Read once, sync with the pre-head script
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // If nothing saved, default to dark (same as index.html script)
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, setDark };
}
