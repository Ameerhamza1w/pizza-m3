import Banner from "@/components/Banner";
import ProductList from "@/components/burger";
import Burger from "@/components/burger";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Menuitem from "@/components/Menuitem";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Progressor from "@/components/Progressor";
import Reservation from "@/components/Reservation";
import React from "react";

 

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-600 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <br />
      <Burger />
      <Banner />
      <ProductList />
     <Menuitem />
      <Offer />
      <Card />
      <Reservation />
      
      <Footer />
    </div>
  );
}
