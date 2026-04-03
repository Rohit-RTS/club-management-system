import "./Clubcard.css";

export default function Clubcard({id,name,discription,image}) {

 
  let handleJoin = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first !");
      return;
    }

    const res = await fetch("http://localhost:5000/api/join-club", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: user.id,
        club_id: id,
      }),
    });

    const data = await res.json();
    alert(data.message);

  } catch (err) {
    console.log(err);
    alert("Something went wrong ❌");
  }
};



  return (
    <div className="clubcard">

      
      <div className="club-img"> <img src={image} alt={name} className="club-image" /></div>


      <div className="club-info">
        <h3>{name}</h3>
        <p className="desc">
         {discription}
        </p>

        <div className="club-meta">
          <span className="category">Tech</span>
          <span className="members">120 members</span>
        </div>

        <button className="join-btn" onClick={handleJoin}>View Club</button>
      </div>

    </div>
  );
}