import Tag from "./Tag";

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  onTitleClickHandler?: () => void;
};

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  onTitleClickHandler,
}: ProjectCardProps) {
  const hasLink = link && link.length > 0;

  return (
    <div id="project-card" className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Title row */}
        <div
          onClick={hasLink ? onTitleClickHandler : undefined}
          className={`
            group
            flex items-center gap-2
            font-medium
            text-slate-100
            transition-colors
            ${hasLink ? "cursor-pointer hover:text-teal-500" : "cursor-default"}
          `}
        >
          <span>{title}</span>

          {hasLink && (
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
          )}
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
