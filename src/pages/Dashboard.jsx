import { Link } from "react-router-dom";
import "./Dashboard.css";
import Clubcard from "../components/Clubcard";
import Eventstrip from "../components/Eventstrip";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const [clubs,setClubs] = useState([]);

  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

     if (storedUser) {
      fetch(`http://localhost:5000/api/my-clubs/${storedUser.id}`)
        .then(res => res.json())
        .then(data => setClubs(data))
        .catch(err => console.log(err));
    }
  }, []);

  


  
  if (!user) {
    return <p>Login First</p>;
  }


  return (
    <>
      <div className="dash-banner">
        <div className="user-info">

          {/* ✅ Safe now */}
          <h2>Welcome Back, {user.username}</h2>

          <p>Here is what happening in your community {user.branch}</p>

          <div className="btns">
            <Link to="" className="btn1">Join</Link>
            <Link to="" className="btn2">Look Events</Link>
          </div>

        </div>
      </div>

      <div className="joined-club">
        <div className="txt-joined">Joined Clubs</div>
        <div className="clubs">
          {clubs.length === 0 ? (
        <p>No clubs joined</p>
      ) : (
       clubs.map((club) => (
  <Clubcard
    key={club.id}
    id={club.id}
    name={club.name}
    description={club.description}
    image={club.image}
  />
))
      )}
          
        </div>
      </div>

      <div className="user-events">
        <div className="event-txt">
          You at Events
        </div>
        <div className="events">
          <Eventstrip />
        </div>
      </div>
    </>
  );
}