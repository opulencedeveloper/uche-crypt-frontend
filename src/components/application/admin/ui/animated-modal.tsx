"use client";

import { motion, AnimatePresence } from "framer-motion";

import Portal from "@/components/ui/portal";
import { AnimatedModalProps } from "@/types/global";


export default function AnimatedModal({
  isOpen,
  onClose,
  children,
}: AnimatedModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} 
          >
         
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-md z-60"
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
