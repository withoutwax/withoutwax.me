import React from 'react';

import Experience from './experience';
import Volunteer from './volunteer';
import Education from './education';
import Award from './award';

export class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const resume = this.props.resume;
        console.log(resume)
        const experiences = resume.experience;
        const volunteers = resume.volunteer;
        const educations = resume.education;
        const awards = resume.award;

        return (
            <div className="resume-container">
                <h3>Experience</h3>
                {experiences.map((experience, index) => (
                    <Experience 
                        key={index}
                        company={experience.company}
                        position={experience.position}
                        startDate={experience.startDate}
                        currentlyWorking={experience.currentlyWorking}
                        endDate={experience.endDate}
                        locations={experience.location}
                        description={experience.description}
                    />
                ))}

                <h3>Volunteer</h3>
                {volunteers.map((volunteer, index) => (
                    <Volunteer 
                        key={index}
                        organization={volunteer.organization}
                        position={volunteer.position}
                        startDate={volunteer.startDate}
                        currentlyWorking={volunteer.currentlyWorking}
                        endDate={volunteer.endDate}
                        locations={volunteer.location}
                        description={volunteer.description}
                    />
                ))}

                {/* <h3>Featured Projects</h3>
                <p style={{marginTop:"5px", fontStyle:"italic"}}>Coming Soon</p> */}

                <h3>Honors & Awards</h3>
                {awards.map((award, index) => (
                    <Award 
                        key={index}
                        title={award.title}
                        date={award.date}
                        description={award.description}
                    />
                ))}

                <h3>Education</h3>
                {educations.map((education, index) => (
                    <Education
                        key={index}
                        school={education.school}
                        startDate={education.startDate}
                        currentlyAttending={education.currentlyAttending}
                        endDate={education.endDate}
                        degree={education.degree}
                        major={education.major}
                    />
                ))}

            </div>      
        );
    }
}
export default Resume;