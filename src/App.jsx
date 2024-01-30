import { Contact } from "./components/Contact";
import { Destinations } from "./components/Destinations";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TopButton } from "./components/TopButton";
import { TopInfo } from "./components/TopInfo";

function App() {
  return (
    <>
      <TopButton />
      <TopInfo />
      <Navbar />
      <Hero />
      <Destinations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
