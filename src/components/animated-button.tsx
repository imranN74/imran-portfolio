"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

interface AnimateButton {
  onClick?: () => void;
  value: string;
  className?: string;
}
export function AnimatedButton({ onClick, value, className }: AnimateButton) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
      <Button className={`${className} cursor-pointer`} onClick={onClick}>
        {value}
      </Button>
    </motion.div>
  );
}
