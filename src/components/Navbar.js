import { motion } from "framer-motion";
import Link from "next/link";
export default function Navbar() {
  const linkClss = "me-5 text-2xl text-slate-800 underline";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-10 right-20 flex Nav-bar"
    >
      <motion.div
        whileHover={{ scale: 1.3, margin: 20 }}
        whileTap={{ opacity: 0, scale: 0.9 }}
      >
        <Link href={"/"} className={linkClss}>
          <span>Home</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, margin: 20 }}
        whileTap={{ opacity: 0, scale: 0.9 }}
      >
        <Link href={"/Aboutme"} className={linkClss}>
          <span>About me</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, margin: 20 }}
        whileTap={{ opacity: 0, scale: 0.9 }}
      >
        <Link href={"/Portafolio"} className={linkClss}>
          <span>Portfolio</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, margin: 20 }}
        whileTap={{ opacity: 0, scale: 0.9 }}
      >
        {" "}
        <Link href={"/Perfil"} className={linkClss}>
          <span>Professional Profile</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, margin: 20 }}
        whileTap={{ opacity: 0, scale: 0.9 }}
      >
        {" "}
        <Link href={"/Contact"} className={linkClss}>
          <span>Contact</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
