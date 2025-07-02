import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-5 overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          
          <div className="flex justify-center">
            <img
              src="/assets/profile_picture_harman.jpg" 
              alt="Harmanpreet Singh"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-84 lg:h-84 rounded-full object-cover shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-bold font-spacegrotesk bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Harmanpreet Singh
            </h1>
            <h2 className="text-2xl md:text-3xl font-sans text-base text-slate-400 mt-">
              MERN STACK DEVELOPER
            </h2>

            <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
