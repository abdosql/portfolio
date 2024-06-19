'use client';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SlideFadeTransition = () => {
  const pathname = usePathname();
  return (
      <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
      </AnimatePresence>
  );
};

export default SlideFadeTransition;
