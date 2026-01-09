import SocialBar from "../components/SocialBar";
import SectionHeader from "../components/SectionHeader";
import SectionJumper from "../components/SectionJumper";
import { useState, useEffect } from "react";
import about from '../data/about.json'
import ProjectLink from '../components/ProjectLink';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const sectionIds = ["about", "experience", "project"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex md:flex-row flex-col md:justify-between">
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

      <div id="content" className="flex flex-col  md:w-1/2 md:mt-0 my-28 mx-6">
        <section
          id="about"
          className="md:mt-12 md:mt-0 relative text-slate-100"
        >
          <SectionHeader title="ABOUT" />
          <div className="text-slate-400 mt-10 md:mt-0  space-y-3">
            {about.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="text-slate-100 mt-10 flex flex-col gap-10"
        >
          <SectionHeader title="EXPERIENCE" />
            <ExperienceList/>
        </section>
        <section id="Resume"
          className="text-slate-100 mt-10 flex "
        >
          <ProjectLink/>
        </section>
        <section
          id="project"
          className="text-slate-100 mt-10 flex flex-col gap-10"
        >
          <SectionHeader title="PROJECTS" />
          <ProjectList />
        </section>
      </div>
    </div>
  );
}
