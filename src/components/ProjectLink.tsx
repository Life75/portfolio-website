import useLinkHandler from '../hooks/useLinkHandler';

export default function ProjectLink({url}: {url: string}) {
    return(
        <div className="text-slate-50" onClick={useLinkHandler(url)}>View Full Resume</div>
    )
}
