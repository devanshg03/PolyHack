import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {

  const currentUser = await getCurrentUser()

  return (
    <div>
      <Navbar currentUser={currentUser}/>
      <Main />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
