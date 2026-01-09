import { motion } from "framer-motion";

export default function Admin() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard.</p>
    </motion.div>
  );
}
