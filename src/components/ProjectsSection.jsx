import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/nicolealdaya/CSIT340-Lab1-Aldaya.git"
        />

        <ProjectCard
          year="2026"
          title="Portfolio in Components"
          description="This portfolio, rebuilt in React with reusable components."
          tech="React · Tailwind CSS"
          link="https://github.com/nicolealdaya/CSIT340-Lab3-Aldaya.git"
        />

        <ProjectCard
          year="2025"
          title="QuickLink (Web + Database)"
          description="The web version of QuickLink, with a database that stores the saved links, categories, and notes."
          tech="Web · MySQL"
          link="https://github.com/nicolealdaya/Quicklink-Web-Database-.git"
        />

        <ProjectCard
          year="2025"
          title="FitTrack"
          description="An Android fitness tracking application for managing user profiles, check-ins, and activity history."
          tech="Kotlin · Android Studio · XML"
          link="https://github.com/nicolealdaya/FitTrack.git"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;