import { educations } from '../../data';

import './Educations.css';

const Educations = () => {

    return (
        <div className="educations">
            <h3>EDUCATIONS</h3>
            
            <div className='flex-center education-container'>
            {
                educations.map(education => {
                    return <div className="education flex-center">
                        <div className="institute">
                            <h5>{education.institute}</h5>
                            <p>{education.designation}</p>
                        </div>  
                        <div className="marks">
                            <p>{education.marks}</p>
                        </div>
                    </div>
                })
            }

            </div>
        </div>
    );

};

export default Educations;