import React from 'react';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aryan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer</span>
          </h1>
          <p className="hero--section-description">
            Software Engineer with significant expertise in advanced AI/ML techniques, proficiently skilled in Python,
            C++, SQL, TensorFlow, and PyTorch.
            <br /> Experienced in efficient algorithm design, data structures, big data analysis, and machine
            learning.
          </p>
        </div>
        <button className="btn btn-primary" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
