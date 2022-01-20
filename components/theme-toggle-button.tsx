import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // TODO: Remove this import!
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let storedValue = window.localStorage.getItem("darkMode");
    if (storedValue != null) {
      setDarkMode(storedValue === "true" ? true : false);
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body")!;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className="inline-block"
        key={darkMode ? "dark" : "light"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          aria-label="Toggle theme"
          className=""
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
