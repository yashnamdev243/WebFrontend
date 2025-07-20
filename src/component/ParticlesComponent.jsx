import React, { useEffect } from "react";
const ParticlesComponent = () => {
  useEffect(() => {
    const loadScripts = () => {
      const particlesScript = document.createElement("script");
      particlesScript.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      particlesScript.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#182D4C" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#182D4C" },
            move: { enable: true, speed: 6, direction: "none" },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
      };

      document.body.appendChild(particlesScript);

      const statsScript = document.createElement("script");
      statsScript.src = "http://threejs.org/examples/js/libs/stats.min.js";
      statsScript.onload = () => {
        const stats = new window.Stats();
        stats.setMode(0);
        stats.domElement.style.position = "absolute";
        stats.domElement.style.left = "0px";
        stats.domElement.style.top = "0px";
        stats.domElement.style.bottom = "0px";

        document.body.appendChild(stats.domElement);

        const countParticles = document.querySelector(".js-count-particles");
        const update = () => {
          stats.begin();
          stats.end();
          if (window.pJSDom && window.pJSDom[0]?.pJS?.particles?.array) {
            countParticles.innerText =
              window.pJSDom[0].pJS.particles.array.length;
          }
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      };

      document.body.appendChild(statsScript);
    };

    loadScripts();
  }, []);

  return (
    <>
      <div id="particles-js" style={styles.particlesContainer}></div>
    </>
  );
};

const styles = {
  particlesContainer: {
    position: "fixed",
     top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },
};

export default ParticlesComponent;
