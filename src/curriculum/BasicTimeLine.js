import * as React from 'react';
import { MakeLink } from "../helpers";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


/* https://mui.com/material-ui/react-timeline/ */

const roseDark = '#8B3252'; // matches tailwind roseDark token

export default function BasicTimeLine() {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <MakeTimeLineEntry time={"now"} description={
                <span>
                    <b>Senior Fullstack Engineer</b> at <MakeLink url='https://www.sewerai.com/' name="SewerAI" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200"/> building AI software for sewer inspections
                </span>
            } />
            <MakeTimeLineEntry time={"2021 – 2023"} description={<span>
                Software Engineer and <b>Tech Lead</b> at <MakeLink url="https://imtf.com/" name="IMTF" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200"/> building AI software for fraud detection
            </span>} />
            <MakeTimeLineEntry time={"2020 – 2021"} description={<span>
                <b>Software Engineer</b> at <MakeLink url="https://www.ti8m.com/" name="ti&m" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200"/> Consulting in Zürich
            </span>} />
            <MakeTimeLineEntry time={"Spring 2020"} description={<span><b>Research</b> Intern at <MakeLink url="https://www.sap.com/index.html" name="SAP" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200" /> Labs France</span>} />
            <MakeTimeLineEntry time={"2018 – 2020"} description={<span>Back to EPFL for a <b>Master's Degree in Computer Science</b></span>} />
            <MakeTimeLineEntry time={"2018"} description={
                <span><b>Erasmus</b> Year at <MakeLink url="https://www.tuwien.at/en/" name="Vienna University of Technology (TUW)" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200"/></span>} />
            <MakeTimeLineEntry time={"2015 – 2017"} description={<span>
                Bachelor in <b>Computer Science</b> at the <MakeLink url="https://www.epfl.ch/en/" name="Swiss Institute for Technology Lausanne (EPFL)" className="text-roseDark hover:text-roseDark/70 underline decoration-roseDark/30 transition-colors duration-200"/>
                </span>} isLast={true} />
        </Timeline >
    );
}

function MakeTimeLineEntry({ time, description, isLast = false }) {
    return (<TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            {time}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: roseDark, boxShadow: 'none' }} />
            {!isLast && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{description}</TimelineContent>
    </TimelineItem>
    )

}