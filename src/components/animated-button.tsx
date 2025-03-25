"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

interface AnimateButton {
  onClick?: () => void;
  value: string;
}
export function AnimatedButton({ onClick, value }: AnimateButton) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
      <Button className="cursor-pointer" onClick={onClick}>
        {value}
      </Button>
    </motion.div>
  );
}
