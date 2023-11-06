import ContactSectionIconTrust from "@/components/ContactSection/ContactSectionIconTrust";
import ContactSectionTalkAboutProjects from "@/components/ContactSection/ContactSectionTalkAboutProjects";
import FormComponent from "@/components/ui/form/form";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactSectionTalkAboutProjects />
      <ContactSectionIconTrust />
      <div className='flex flex-col items-center justify-center'>
        <FormComponent />
      </div>
    </div>
  );
};

export default Contact;
