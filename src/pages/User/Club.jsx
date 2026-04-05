import "./Club.css";
import Clubcard from "../../components/Clubcard";
import { useState,useEffect } from "react";

export default function Clubs() {

       
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
    
      <div className="banner-clubs">
        <h1>Explore the Clubs & Make Amazing College Memories</h1>

        <div className="search-club">
          <input type="text" placeholder="Explore Clubs..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>


      <div className="clubs-container">
         {clubs.length > 0 ? (
                 clubs.map((club, index) => (
                   <article key={club.id} style={{ "--i": index }}>
                     <Clubcard
                     id ={club.id}
                       name={club.name}
                       description={club.description}
                       image={club.image}
                     />
                   </article>
                 ))
               ) : (
                 <p>Loading...</p>
               )}
        
      </div>
    </>
  );
}