import SocialBar from "../components/SocialBar";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        id="intro"
        className=" text-slate-100 tracking-tight flex flex-col gap-4"
      >
        <title>Austyn Washington — Software Engineer</title>
        <div className="text-5xl font-semibold">Austyn Washington</div>
        <div className="text-lg ">Full Stack Engineer</div>
        <div className=" w-60 text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </div>
        <div className="mt-4">
          <SocialBar />
        </div>
      </div>
      <section id="about" className="mt-30 text-slate-100">
        <div className="sticky top-0 z-40 bg-slate-900">
          <h3 className="mx-auto max-w-6xl px-6 py-3 font-semibold tracking-widest text-sm">
            ABOUT
          </h3>
        </div>
        <div className="text-slate-400 mt-10">
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability. Currently, I'm a Senior Front-End
          Engineer at Klaviyo, specializing in accessibility. I contribute to
          the creation and maintenance of UI components that power Klaviyo’s
          frontend, ensuring our platform meets web accessibility standards and
          best practices to deliver an inclusive user experience. In the past,
          I've had the opportunity to develop software across a variety of
          settings — from advertising agencies and large corporations to
          start-ups and small digital product studios. Additionally, I also
          released a comprehensive video course a few years ago, guiding
          learners through building a web app with the Spotify API. In my spare
          time, I’m usually climbing, playing tennis, hanging out with my wife
          and two cats, or running around Hyrule searching for Korok seeds K o r
          o k s e e d s .
        </div>
      </section>
    </div>
  );
}
