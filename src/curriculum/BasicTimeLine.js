import * as React from 'react';
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
                    <b>Senior Fullstack Engineer</b> at<a href='https://www.sewerai.com/' target="_blank" rel="noreferrer">SewerAI</a>building AI software for sewer inspections
                </span>
            } />
            < MakeTimeLineEntry time={"2021 - 2023"} description={<span>
                Software Engineer and <b>Tech Lead</b> at<a href="https://imtf.com/" target="_blank" rel="noreferrer">IMTF</a>building AI software for fraud detection
            </span>} />
            <MakeTimeLineEntry time={"2020 - 2021"} description={<span>
                <b>Software Engineer</b> at<a href="https://www.ti8m.com/" target="_blank" rel="noreferrer">ti&m</a>Consulting in Zürich
            </span>} />
            <MakeTimeLineEntry time={"Spring 2020"} description={<span><b>Research</b> Intern at<a href="https://www.sap.com/index.html" target="_blank" rel="noreferrer">SAP</a>Labs France</span>} />
            <MakeTimeLineEntry time={"2018 - 2020"} description={<span>Back to EPFL for a <b>Master's Degree in Computer Science</b></span>} />
            <MakeTimeLineEntry time={"2018"} description={
                <span><b>Erasmus</b> Year at<a href="https://www.tuwien.at/en/" target="_blank" rel="noreferrer">Vienna University of Technology (TUW)</a></span>} />
            <MakeTimeLineEntry time={"2015 - 2017"} description={<span>
                Bachelor in <b>Computer Science</b> at the <a href="https://www.epfl.ch/en/" target="_blank" rel="noreferrer">Swiss Institute for Technology Lausanne (EPFL)</a>
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
            <TimelineDot color="error" />
            {!isLast && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{description}</TimelineContent>
    </TimelineItem>
    )

}