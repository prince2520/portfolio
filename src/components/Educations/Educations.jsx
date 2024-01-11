import './Educations.css';

const Educations = () => {

    const educations =  [
        {
            institute: 'GB Pant Govt. Engineering College',
            designation: 'Bachelor of Technology',
            marks: '8.640 CGPA'
        },
        {
            institute: 'Sarvodaya CoEd S S S F/U Blk Pitampura',
            designation: '12th , Science',
            marks: '79 %'
        },
        {
            institute: 'Mata SukhDevi Public School Nangli Poona',
            designation: '10th',
            marks: '8.2 CGPA'
        }
    ];


    return (
        <div className="educations">
            <h3>EDUCATIONS</h3>
            <div className='flex-center education-container'>
            {
                educations.map(education => {
                    return <div className="education flex-center">
                        <div className="institute">
                            <h4>{education.institute}</h4>
                            <h5>{education.designation}</h5>
                        </div>  
                        <div className="marks">
                            <h5>{education.marks}</h5>
                        </div>
                    </div>
                })
            }

            </div>
        </div>
    );

};

export default Educations;