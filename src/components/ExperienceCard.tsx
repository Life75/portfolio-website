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
        <div id="exp-card" className="flex flex-row md:flex-col">
            <div id="timeline">
                {from} -- {to}
            </div>
            <div className="flex flex-col">
                <div>{title}</div>
                <div>{description}</div>
                <div className="flex-row ">
                    {tags.map(tag => (
                        <Tag title={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}