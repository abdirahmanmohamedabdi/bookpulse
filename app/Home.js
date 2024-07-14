'use client'
import Navbar from "./components/navbar";
import Heroe from "./components/heroe";
import Features from "./components/features";
import Footer from "./components/footer";
export default function Homepage() {
  return (
  <div>
   <Navbar/>
   <Heroe/>
   <Features/>
   <Footer/>
  </div>
  );
}
