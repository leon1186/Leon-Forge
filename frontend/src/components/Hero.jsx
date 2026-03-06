import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src="https://images.pexels.com/photos/33895100/pexels-photo-33895100.jpeg"
        alt="Main photograph"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Leon Forge</h1>
        <p>Design, straightness and precision.</p>
        <button>See more</button>
      </div>
    </section>
  );
}

export default Hero;
