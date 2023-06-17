import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
