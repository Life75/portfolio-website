interface SectionJumperProps {
  title: string;
  targetId: string;
  isActive: boolean;
  onClick: () => void;
}

export default function SectionJumper({ title, targetId, isActive, onClick }: SectionJumperProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick();
  };

  return (
    <div
      className="flex items-center cursor-pointer text-sm"
      onClick={handleClick}
    >
      {/* Animated line */}
      <div
        className={`h-[0.1px] bg-slate-100 transition-all duration-300 ease-out mr-2 ${
          isActive ? "w-16" : "w-8 opacity-30"
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
