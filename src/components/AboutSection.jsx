import Fact from "./Fact";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="About"
        subtitle="A little about who I am."
      />

      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I am an IT student from Cebu who enjoys learning how applications and
        websites are built. I chose Information Technology because I want to
        create useful applications and improve my programming skills. So far,
        I enjoy working with React, JavaScript, and Android development the
        most.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact
          label="School"
          value="Cebu Institute of Technology – University"
        />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
};

export default AboutSection;