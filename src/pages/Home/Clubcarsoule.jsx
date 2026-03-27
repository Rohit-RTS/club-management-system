
import Clubcard from "../../components/Clubcard";
import "./Clubcarsoule.css"
export default function Carousel() {
  return (
     <>
    <div className="clubcar">
        <span className="txt-carsoule">Featured Clubs</span>
    <div className="carousel">

      {[1,2,3,4,5,6].map((item) => (
          <article key={item}>
            <Clubcard />
          </article>
        ))}

    </div>
    </div>
    </>
  );
}