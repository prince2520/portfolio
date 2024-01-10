import { Icon } from '@iconify/react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="contact-me">
            <h2>CONTACT ME</h2>
            <div className='contact-me-container flex-center'>
                <div className="flex-center contact-data">
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div className="contact-data flex-center">
                    <label>Message</label>
                    <textarea/>
                </div>
                <button className='button-design cursor-btn flex-center send-btn'>
                    <Icon icon="mingcute:send-fill" fontSize={"1.5rem"} />
                    <h3>Send</h3>
                </button>
            </div>
        </div>
    );
};

export default ContactMe;