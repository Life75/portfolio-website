import SocialBar from "../components/SocialBar";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import SectionJumper from "../components/SectionJumper";
import { useState } from "react";
import about from '../data/about.json'
import ProjectLink from '../components/ProjectLink';
export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="flex md:flex-row flex-col ">
      <div className="md:sticky lg:h-screen relative top-0 ">
        <div
          id="header"
          className="text-slate-100 tracking-tight flex flex-col h-full gap-4 px-6 flex-1 mt-12"
        >
          <title>Austyn Washington — Software Engineer</title>
          <div className="md:text-5xl text-4xl font-semibold">
            Austyn Washington
          </div>
          <div className="text-lg ">Full Stack Engineer</div>
          <div className="w-60 text-slate-400">
            I build accessible, pixel-perfect digital experiences for the web.
          </div>

          {/* Section Jumpers */}
          <div className="mt-4 flex flex-col  justify-between">
            <div id="section-jump" className="lg:flex hidden md:flex-col gap-5">
              <SectionJumper
                title="ABOUT"
                targetId="about"
                isActive={activeSection === "about"}
                onClick={() => setActiveSection("about")}
              />
              <SectionJumper
                title="EXPERIENCE"
                targetId="experience"
                isActive={activeSection === "experience"}
                onClick={() => setActiveSection("experience")}
              />
              <SectionJumper
                title="PROJECTS"
                targetId="project"
                isActive={activeSection === "project"}
                onClick={() => setActiveSection("project")}
              />
            </div>

            {/* SocialBar at the bottom */}
            <div className="flex flex-col">
              <div className="hidden md:flex h-72"></div>
              <SocialBar />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 md:mt-0 mt-28">
        <section
          id="about"
          className="md:mt-12 md:mt-0 relative text-slate-100"
        >
          <SectionHeader title="ABOUT" />
          <div className="text-slate-400 mt-10 md:mt-0 px-6 space-y-3">
            {about.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="Experience"
          className="text-slate-100 mt-10 flex flex-col gap-10"
        >
          <SectionHeader title="EXPERIENCE" />
          <div className="flex flex-col px-6">
            <ExperienceCard
              from="2021"
              to="2025"
              title="Senior Frontend Engineer, Accessibility · Klaviyo"
              projectLink="https://www.google.com"
              description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
              tags={["JavaScript", "React"]}
            />
          </div>
        </section>
        <section id="Resume"
          className="text-slate-100 mt-10 flex "
        >
          <ProjectLink/>
        </section>
        <section
          id="Projects"
          className="text-slate-100 mt-10 flex flex-col gap-10"
        >
          <SectionHeader title="PROJECTS" />
          <div className="text-slate-400 mt-10 md:mt-0 px-6">
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently, I'm a
            Senior Front-End Engineer at Klaviyo, specializing in accessibility.
            I contribute to the creation and maintenance of UI components that
            power Klaviyo’s frontend, ensuring our platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience. In the past, I've had the opportunity to develop
            software across a variety of settings — from advertising agencies
            and large corporations to start-ups and small digital product
            studios. Additionally, I also released a comprehensive video course
            a few years ago, guiding learners through building a web app with
            the Spotify API. In my spare time, I’m usually climbing, playing
            tennis, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds K o r o k s e e d s .
          </div>
        </section>
      </div>
    </div>
  );
}
