import useLinkHandler from '../hooks/useLinkHandler';
export default function ProjectLink(url: string) {
    //we can probably add text here so it can be passing anything we want later TODO 
    return(
        <div className="text-slate-50" onClick={useLinkHandler(url)}>View Full Resume</div>
    )
}