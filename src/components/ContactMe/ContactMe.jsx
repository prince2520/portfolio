import { Icon } from "@iconify/react";

import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="flex-center contact-me">
      <h3>CONTACT ME</h3>

      <div className="flex-center contact-me-container">
        <div className="flex-center contact-data">
          <h5>Email</h5>
          <input type="email" />
        </div>
        <div className="flex-center contact-data">
          <h5>Message</h5>
          <textarea />
        </div>
        <button className="button-design cursor-btn flex-center send-btn ">
          <Icon icon="mingcute:send-fill" fontSize={"1.5rem"} />
          <h5 className="color-white">Send</h5>
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
