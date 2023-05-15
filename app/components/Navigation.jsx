'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Components.module.css";
import localFont from "next/font/local";
import { useLayoutEffect } from "react";
const myfont = localFont({ src: "../assets/False.ttf" });
const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Sobre Nosotros",
    route: "/about",
  },
  {
    label: "Servicios",
    route: "/services",
  },
  {
    label: "Promociones",
    route: "/other",
  },
  {
    label: "Contacto",
    route: "/contact",
  },
];
export default function Nav() {
    return (
    <motion.ul
    
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${styles.Nav} fixed  rounded-full m-3 top-0 right-0`}
    >
      {links.map(({ label, route }) => (
        <li className={styles.Nav} key={route}>
          <Link className={`${myfont.className} hover:underline text-white text-xl hover:text-2xl`} href={route}>
            {label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}
