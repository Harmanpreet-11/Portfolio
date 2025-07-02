import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
  
    <footer className="bg-black py-4 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          © Harmanpreet 2025. All rights reserved.
        </p>

        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          <a
            href="https://github.com/Harmanpreet-11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/harmanpreet-singh-user01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:harmanharjeet2003@gmail.com"
            aria-label="Email"
            className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
      );
};
