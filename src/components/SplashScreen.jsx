import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
      onAnimationComplete={onFinish}
    >
      <motion.div
        className="splash-text"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.05, 1] }}
        transition={{
          duration: 2, // total animation duration
          times: [0, 0.5, 0.8, 1],
          type: "tween", // ✅ must be tween for keyframes
          ease: "easeInOut", // smooth easing
        }}
      >
        SG
      </motion.div>
    </motion.div>
  );
}
