import TimelineItem from "./TimelineItem";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Learning web development, databases, software development, mobile application development, and more."
        />

        <TimelineItem
          period="2025"
          title="Information Management 1"
          place="QuickLink (Web + Database)"
          description="Developed a web application with a MySQL database for storing saved links, categories, and notes."
        />

        <TimelineItem
          period="2025"
          title="Platform Based Development 3 (Mobile)"
          place="FitTrack"
          description="Developed an Android fitness tracking application using Kotlin, XML layouts, and Android Studio for managing user profiles, check-ins, and activity history."
        />
      </ol>
    </section>
  );
};

export default ExperienceSection;