import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center p-2 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/BANNER.webp')" }}
    >
      <div className="flex gap-6 mb-2">
        <a
          href="https://github.com/KaterynaNat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kateryna-naturkach"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm bg-pink-900 bg-opacity-50 px-4 py-1 rounded-lg">
        &copy; {new Date().getFullYear()} Contact Book. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


