
export default function Tag({title}: {title: string}) {
    return (
        <div id="tag" className=" px-2 text-sm py-1  bg-teal-400/20 text-teal-300 rounded-3xl text-center ">
            {title}
        </div>
    )
}