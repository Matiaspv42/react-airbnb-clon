import React from "react";
import Navbar from "./components/Navbar";
import data from './data'
import Hero from './components/Hero'
import Card from './components/Card'

console.log(data);

export default function App(){
    const cards = data.map((data)=>{
      return(
      <Card data={data}/>
      )
    })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
  
    </div>
  )
}