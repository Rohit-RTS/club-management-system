import "./Events.css";
import Eventstrip from "../../../components/Eventstrip";
import { useState,useEffect } from "react";

export default function Events() {

    let [Events,setEvents] = useState([]);

           useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setEvents(data);    
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="events-page">

      {/* HEADER */}
      <div className="events-header">
        <h1>All Events</h1>
        <p>Explore and register for exciting club events</p>
      </div>

      {/* EVENTS LIST */}
      <div className="events-container">
           {Events.map((e) => (
          <Eventstrip key={e.id} event={e} />
        ))}
       
      </div>

    </div>
  );
}