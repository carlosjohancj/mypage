import logo from '../assets/logo.svg'
import Image from 'next/image'
import styles from './Components.module.css'
export  const Logo = () => {return <div className={`${styles.Div} absolute top-5 left-5 `}><Image src={logo} className={`${styles.img}`} /></div> }