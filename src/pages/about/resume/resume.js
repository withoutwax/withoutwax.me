import React from 'react';

import Experience from './experience';
import Volunteer from './volunteer';
import Education from './education';
import Award from './award';

export class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: "",
        }
    }

    componentDidMount() {
        if (typeof window === 'undefined') {
          return;
        }
        this.setState(() => ({ 
            resume: this.props.location.state.resume,
        }));
      }

    render() {
        // const resume = this.props.resume;
        const experiences = this.state.resume.experience;
        const volunteers = this.state.resume.volunteer;
        const educations = this.state.resume.education;
        const awards = this.state.resume.award;

        return (
            <div className="resume-container">
                <h3>Experience</h3>
                {experiences ? experiences.map((experience, index) => (
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
                )) : console.log("meh")}

                <h3>Volunteer</h3>
                {volunteers ? volunteers.map((volunteer, index) => (
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
                )) : console.log("meh")}

                {/* <h3>Featured Projects</h3>
                <p style={{marginTop:"5px", fontStyle:"italic"}}>Coming Soon</p> */}

                <h3>Honors & Awards</h3>
                {awards ? awards.map((award, index) => (
                    <Award 
                        key={index}
                        title={award.title}
                        date={award.date}
                        description={award.description}
                    />
                )) : console.log("meh")}

                <h3>Education</h3>
                {educations ? educations.map((education, index) => (
                    <Education
                        key={index}
                        school={education.school}
                        startDate={education.startDate}
                        currentlyAttending={education.currentlyAttending}
                        endDate={education.endDate}
                        degree={education.degree}
                        major={education.major}
                    />
                )) : console.log("meh")}

            </div>      
        );
    }
}
export default Resume;