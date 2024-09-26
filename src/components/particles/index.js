// import Particles from "react-particles";
// import Particles from "@tsparticles/react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import {}
import particlesConfig from "./particles.confiq";
import { useCallback, useEffect, useMemo, useState } from "react";

const Particless = () => {
  //   const [init, setInit] = useState(false);

  //   useEffect(() => {
  //     initParticlesEngine(async (engine) => {
  //       await loadSlim(engine);
  //     }).then(() => {
  //       setInit(true);
  //     });
  //   }, []);

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };

  //   const options = useMemo(
  //     () => ({
  //       background: {
  //         color: {
  //           value: "#0d47a1",
  //         },
  //       },
  //       fpsLimit: 120,
  //       interactivity: {
  //         events: {
  //           onClick: {
  //             enable: true,
  //             mode: "push",
  //           },
  //           onHover: {
  //             enable: true,
  //             mode: "repulse",
  //           },
  //         },
  //         modes: {
  //           push: {
  //             quantity: 4,
  //           },
  //           repulse: {
  //             distance: 200,
  //             duration: 0.4,
  //           },
  //         },
  //       },
  //       particles: {
  //         color: {
  //           value: "#ffffff",
  //         },
  //         links: {
  //           color: "#ffffff",
  //           distance: 150,
  //           enable: true,
  //           opacity: 0.5,
  //           width: 1,
  //         },
  //         move: {
  //           direction: "none",
  //           enable: true,
  //           outModes: {
  //             default: "bounce",
  //           },
  //           random: false,
  //           speed: 6,
  //           straight: false,
  //         },
  //         number: {
  //           density: {
  //             enable: true,
  //           },
  //           value: 80,
  //         },
  //         opacity: {
  //           value: 0.5,
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         size: {
  //           value: { min: 1, max: 5 },
  //         },
  //       },
  //       detectRetina: true,
  //     }),
  //     []
  //   );

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const partclesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  //   if (init) {

  //   }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={partclesLoaded}
      options={particlesConfig}
    ></Particles>
  );
};

export default Particless;
