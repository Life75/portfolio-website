import {
    FaGithub,
    FaLinkedin,
    FaGoodreads,
    FaCodepen,
  } from "react-icons/fa";
  
  export default function SocialBar() {
    return (
      <nav
        aria-label="Social links"
        className="flex gap-4"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaGithub size={22} />
          <span className="sr-only">GitHub</span>
        </a>
  
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaLinkedin size={22} />
          <span className="sr-only">LinkedIn</span>
        </a>
  
        <a
          href="https://www.goodreads.com/user/show/yourid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Goodreads profile"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaGoodreads size={22} />
          <span className="sr-only">Goodreads</span>
        </a>
  
        <a
          href="https://codepen.io/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodePen profile"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaCodepen size={22} />
          <span className="sr-only">CodePen</span>
        </a>
      </nav>
    );
  }
  