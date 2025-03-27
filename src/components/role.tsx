import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Roles() {
  const roles = ["FRONTEND", "BACKEND", "FULLSTACK"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center text-4xl md:text-6xl text-white">
      <span className="text-red-500 text-5xl md:text-7xl">{"<"}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentRole]}
          className="text-white mx-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
      <span className="text-red-500 text-5xl md:text-7xl">{">"}</span>
    </div>
  );
}
