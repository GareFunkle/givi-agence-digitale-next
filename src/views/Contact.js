import ContactSectionForm from "@/components/ContactSection/ContactSectionForm";
import ContactSectionIconTrust from "@/components/ContactSection/ContactSectionIconTrust";
import ContactSectionTalkAboutProjects from "@/components/ContactSection/ContactSectionTalkAboutProjects";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactSectionTalkAboutProjects />
      <ContactSectionIconTrust />
      <ContactSectionForm />
    </div>
  );
};

export default Contact;
