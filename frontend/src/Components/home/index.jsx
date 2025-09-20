import CreateAccount from "./createAccount";
import Features from "./feature";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import SuccessStories from "./successStories";
import Work from "./work";
import "./home.css"

export default function Home() {
  return (
    <div className="bg-gray-50">
        <Navbar/>
        <Hero/>
        <Work/>
        <Features/>
        <SuccessStories/>
        <CreateAccount/>
        <Footer/>
    </div>
  );
}