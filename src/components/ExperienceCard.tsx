import Tag from './Tag';
type ExperienceProps = {
    from: string,
    to: string, 
    title: string,
    description: string, 
    tags: Array<string> 
}
export default function ExperienceCard({ 
    from,
    to,
    title, 
    description, 
    tags
}: ExperienceProps) {
    return (
        <div id="exp-card" className="flex flex-row gap-6">
        {/* Timeline */}
        <div
          id="timeline"
          className="
            text-slate-500
            min-w-[6.5rem]
            flex-1
            max-w-[9rem]
            whitespace-nowrap
          "
        >
          {from} &ndash; {to}
        </div>
      
        {/* Content */}
        <div className="flex flex-col gap-2 flex-[3]">
          <div className="font-medium text-slate-100">{title}</div>
          <div className="text-slate-400">{description}</div>
      
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        </div>
      </div>
      
    )
}