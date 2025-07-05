import { Linkedin, Mail } from "lucide-react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <h3>
        If you would like to contact us about any of our products, for any
        questions, or just to say hello, feel free to do so.
      </h3>
      <span className="contact-links">
        <a href="mailto:kristenson@gmail.com?subject=Contact%20from%20Haze%20Gray%20Site">
          <Mail />
          Email us
        </a>
        <a href="https://www.linkedin.com/company/haze-gray-consulting/posts/?feedView=all">
          <Linkedin />
          Follow us on Linkedin
        </a>
      </span>
    </>
  );
};

export default Contact;
