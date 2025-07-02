import Marquee from "react-fast-marquee";
import { RevealOnScroll } from "../RevealOnScroll";

export const SkillsMarquee = () => {
  const skillLogos = [
    { name: "HTML5", src: "/assets/skills/html.png" },
    { name: "CSS3", src: "/assets/skills/css3.png" },
    { name: "JavaScript", src: "/assets/skills/javascript.png" },
    { name: "Node.js", src: "/assets/skills/nodejs.png" },
    { name: "React", src: "/assets/skills/react.png" },
    { name: "Express", src: "/assets/skills/expressjs.png" },
    { name: "C", src: "/assets/skills/c.png" },
    { name: "C++", src: "/assets/skills/c++.png" },
    { name: "Bootstrap", src: "/assets/skills/bootstrap.png" },
    { name: "Tailwind CSS", src: "/assets/skills/tailwindcss.png" },
    { name: "MySQL", src: "/assets/skills/mySQL.png" },
    { name: "MongoDB", src: "/assets/skills/mongodb.png" },
  ];

  return (
    <section id="skills-marquee" className="py-20 bg-black ">
      <RevealOnScroll>
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Core Technologies
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {skillLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-6 mb-2 mt-15 flex items-center justify-center border border-cyan-500/10 rounded-xl p-4 bg-white/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </Marquee>
      </RevealOnScroll>
    </section>
  );
};
