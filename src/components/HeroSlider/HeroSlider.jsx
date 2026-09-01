import heroImage from "../../assets/images/hero.jpg";

function HeroSlider() {
  return (
    <article className="hero-slider">

      <img
        src={heroImage}
        alt="خدمات حرفه‌ای"
        className="hero-image"
      />

      <div className="hero-overlay" />

      <div className="hero-text">
        تجربه‌ای بی‌نظیر با خدمات ما، از شروع تا پایان!
      </div>

      <div className="slider-dots">

        <span></span>

        <span className="active"></span>

        <span></span>

        <span></span>

        <span></span>

      </div>

    </article>
  );
}

export default HeroSlider;