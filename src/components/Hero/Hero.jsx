import "./Hero.css";
import Carousel from "./Carousel";

export default function Hero({ onExploreClick }){
    return(
        <section className="hero">
            <Carousel/>
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Elegance Redifined</h1>
                    <p>Timeless jewelry crafted for each occasion</p>
                    <button onClick={onExploreClick} className="hero-btn">Explore Collection</button>
                </div>
            </div>
        </section>
    );
}