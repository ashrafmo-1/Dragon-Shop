import Nav from "./components/navgationbar/Nav";
import HomePage from "./Home/page";
import Scroll from "./components/scrollToTop/Scroll"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav/>
      <HomePage />
      <Scroll />
      <div className="feed_back">
        <Link className="feedbackLink" href={"#feedback"}><h2>feed back</h2></Link>
      </div>
    </div>
  );
}