import Nav from "./components/navgationbar/Nav";
import HomePage from "./Home/page";
import Scroll from "./components/scrollToTop/Scroll"

export default function Home() {
  return (
    <div>
      <Nav/>
      <HomePage />
      <Scroll />
      <div className="feed_back">
        <h2>feed back</h2>
      </div>
    </div>
  );
}