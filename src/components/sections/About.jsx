import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-500"
>
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 text-gray-300">
          <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-blue-500/30 transition duration-300">
            <p className="text-lg leading-relaxed text-justify mb-6">
              I’m a dedicated <span className="text-cyan-400 font-semibold">full-stack developer</span> driven by the challenge of turning ideas into meaningful digital experiences. With a strong focus on building intuitive user interfaces and architecting efficient backend systems, I strive to deliver solutions that are both visually engaging and technically robust.
            </p>
            <p className="text-lg leading-relaxed text-justify">
             "From front-end to backend, I bring creativity, problem-solving, and a passion for building impactful digital products."            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-xl border border-white/10 shadow hover:shadow-blue-500/30 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">🏫 Education</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>
                  <strong>B.Tech in Computer Science</strong> <br />
                  JIS College of Engineering, Kalyani (2022–2026)
                </li>
                <li>
                  <span className="text-md">
                    Relevant coursework: Data Structures, Web Development, Cloud Computing, Software Engineering.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 shadow hover:shadow-blue-500/30 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">💼 Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Front-End Software Engineering Virtual Internship
                  </h4><br />
                  <p className="text-sm text-gray-400">April 2025</p>
                  <p className="mt-1">
                    Built a React-based Backpack web app following component architecture, state management best practices, and responsive UI principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
