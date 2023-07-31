import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Posts color={"bg-amber-600"} />
      <Posts color={"bg-violet-600"} />
      <Footer />
    </div>
  );
}
