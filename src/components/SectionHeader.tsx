interface Props {
    title: string;
  }
  
  export default function SectionHeader({ title }: Props) {
    return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-0 md:py-0 md:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest  text-slate-200 md:sr-only">
            {title}
          </h2>
        </div>
      );
  }
  