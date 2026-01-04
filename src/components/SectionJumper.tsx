import { useEffect, useState } from "react";

interface SectionJumperProps {
  title: string;
  targetId: string; // the id of the section to scroll to
  isActive: boolean; 
  onClick: () => void; 
}

export default function SectionJumper({ title, targetId, isSelected, onClick }: SectionJumperProps) {
  const [isActive, setIsActive] = useState(false);

  // Function to scroll to section
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick()
  };

  useEffect(() => {
    setIsActive(isSelected)
    
  }, [isSelected])

  // Listen for scroll to activate when the section is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(targetId);
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsActive(rect.top >= 0 && rect.top < window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  return (
    <div
      className="flex items-center cursor-pointer text-sm"
      onClick={handleClick}
    >
      {/* Animated line */}
      <div
        className={` h-[0.1px] bg-slate-100 transition-all duration-300 ease-out mr-2 ${
          isActive ? " w-16" : "w-8 opacity-30"
        }`}
      ></div>

      {/* Title */}
      <span
        className={`font-semibold transition-colors duration-300 text-xs tracking-widest ${
          isActive ? "text-slate-100" : "text-slate-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
