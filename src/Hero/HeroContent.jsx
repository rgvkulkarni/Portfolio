function HeroContent() {
  return (
    <div className="hero-content">
      <div className="intro-main">
        <div className="intro-main-container">
          <p>  ....</p>
            
          <p>Hi, my</p>
          <p>
            name is{" "}
            <span className="space blue-gradient desktop-name">Raghavendra.</span>
          </p>
        </div>
        <span className="space blue-gradient mobile-name">Raghavendra.</span>
      </div>
      <div className="intro-extra">
        <p>
          I'm a <span className="space pink-gradient">developer</span>{" "}
          <span className="space green-gradient"></span> from
        </p>
        <p>karnataka, India.</p>
      </div>
    </div>
  );
}

export default HeroContent;
