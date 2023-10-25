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
                    Senior Fullstack Engineer at<a href='https://www.sewerai.com/' target="_blank" rel="noreferrer">SewerAI</a>for AI Sewer Inspection Software, working remote in Chicago
                </span>
            } />
            < MakeTimeLineEntry time={"2021 - 2023"} description={<span>
                Software Engineer, then Tech Lead at<a href="https://imtf.com/" target="_blank" rel="noreferrer">IMTF</a>building AI software for name matching
            </span>} />
            <MakeTimeLineEntry time={"2020 - 2021"} description={<span>
                Software Engineer at<a href="https://www.ti8m.com/" target="_blank" rel="noreferrer">ti&m</a>Consulting in Zürich
            </span>} />
            <MakeTimeLineEntry time={"Spring 2020"} description={<span>Research Intern at<a href="https://www.sap.com/index.html" target="_blank" rel="noreferrer">SAP</a>Labs France</span>} />
            <MakeTimeLineEntry time={"2018 - 2020"} description={"Back to EPFL for a Master's Degree in Computer Science"} />
            <MakeTimeLineEntry time={"2018"} description={
                <span>Erasmus Year at<a href="https://www.tuwien.at/en/" target="_blank" rel="noreferrer">Vienna University of Technology (TUW)</a></span>} />
            <MakeTimeLineEntry time={"2015 - 2017"} description={<span>
                Bachelor in Computer Science at the <a href="https://www.epfl.ch/en/" target="_blank" rel="noreferrer">Swiss Institute for Technology Lausanne (EPFL)</a>
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