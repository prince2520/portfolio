import { Icon } from '@iconify/react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="flex-center contact-me">
            <h3>CONTACT ME</h3>
            <div className='flex-center contact-me-container'>
                <div className="flex-center contact-data">
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div className="flex-center contact-data">
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