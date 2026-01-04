export default function SectionHeader({title}) {
    return(
        <div className="sticky top-0 z-40 ">
        <h3 className="mx-auto max-w-6xl  font-semibold tracking-widest text-sm px-6">
          {title}
        </h3>
      </div>
    )
}