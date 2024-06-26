import { useEffect, useState } from "react";
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      <img width={30} height={30} src={theme == "light" ? sunIcon : moonIcon} alt="Theme icon" />
    </button>
  );
};

export default ThemeSwitcher;
