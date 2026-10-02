import ContactLink from "./ContactLink";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Say hi."
      />

      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:sheennicole78@gmail.com"
          text="sheennicole78@gmail.com"
        />

        <ContactLink
          label="CIT Email"
          href="mailto:nicolesheen.aldaya@cit.edu"
          text="nicolesheen.aldaya@cit.edu"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/nicolealdaya"
          text="github.com/nicolealdaya"
        />
      </ul>
    </section>
  );
};

export default ContactSection;