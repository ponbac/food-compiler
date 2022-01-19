import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // TODO: Remove this import!
import { useState } from "react";

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // TODO: Is this needed?

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    const body = document.querySelector("body")!;
    body.classList.toggle("dark");
  };

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
        <button aria-label="Toggle theme" className="" onClick={toggleDarkMode}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
