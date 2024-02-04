import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/navgationbar/Nav";
import HomePage from "./Home/page";
import Link from "next/link";
import Scroll from "./components/scrollToTop/Scroll"

export default function Home() {
  return (
    <div>
      <Nav/>
      <HomePage />
      <Scroll />
    </div>
  );
}