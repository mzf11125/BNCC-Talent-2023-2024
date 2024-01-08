"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{}}
      >
        {children}
      </motion.div>
      {/* {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )} */}
    </AnimatePresence>
  </>
);
