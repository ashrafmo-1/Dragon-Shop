import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/navgationbar/Nav";
import HomePage from "./Home/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>


      <Nav/>
      <HomePage />
    </div>
  );
}