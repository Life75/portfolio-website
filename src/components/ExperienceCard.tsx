import Tag from "./Tag";

type ExperienceCardProps = {
  from: string;
  to: string;
  title: string;
  description: string;
  tags: string[];
  onTitleClickHandler?: () => void;
};

export default function ExperienceCard({
  from,
  to,
  title,
  description,
  tags,
  onTitleClickHandler,
}: ExperienceCardProps) {
  return (
    <div id="exp-card" className="flex flex-row gap-6">
      {/* Timeline */}
      <div
        id="timeline"
        className="
          text-slate-500
          min-w-[6.5rem]
          max-w-[9rem]
          flex-shrink-0
          whitespace-nowrap
        "
      >
        {from} &ndash; {to}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Title row */}
        <div
          onClick={onTitleClickHandler}
          className="
            group
            flex items-center gap-2
            font-medium
            text-slate-100
            cursor-pointer
            transition-colors
            hover:text-teal-500
          "
        >
          <span>{title}</span>

          {/* SVG Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
            w-4 h-4
            rotate-[-45deg]
            transition-transform
            group-hover:translate-x-[4px]
            group-hover:-translate-y-[4px]
          "
          
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>

        {/* Description */}
        <div className="text-slate-400">{description}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Tag key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
