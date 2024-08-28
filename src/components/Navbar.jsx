import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-40 flex items-center justify-end py-6">
        <div className="flex items-center gap-4 text-2xl relative z-10">
          <a href="https://www.linkedin.com/in/manavi-sharma-521014222/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/manavisharma14" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:manavisharma14@gmail.com">
            <SiGmail />
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
