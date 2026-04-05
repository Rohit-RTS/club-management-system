import HeroSection from "./HeroSection";
import Stats from "./Stats";
import Clubcarsoule from "./Clubcarsoule";
import Events from "./Events";
import { useState, useEffect } from "react";

export default function Home() {

  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clubs")
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setClubs(data);    
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <HeroSection />
      <Stats />
      <Clubcarsoule clubs={clubs} />
      <Events />
    </>
  );
}