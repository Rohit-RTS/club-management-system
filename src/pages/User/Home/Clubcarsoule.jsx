import Clubcard from "../../../components/Clubcard";
import "./Clubcarsoule.css";


export default function Clubcarsoule({ clubs = [] }) {
  return (
    <div className="clubcar">
      <span className="txt-carsoule">Featured Clubs</span>

      <div 
        className="carousel"
        style={{ "--items": clubs.length }}
      >

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
    </div>
  );
}