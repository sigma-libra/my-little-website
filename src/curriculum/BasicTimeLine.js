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
            <MakeTimeLineEntry time={"now"} description={"Tech Lead at IMTF"} />
            <MakeTimeLineEntry time={"August 2021"} description={"Joined IMTF as a Software Engineer"} />
            <MakeTimeLineEntry time={"2020 - 2021"} description={"Software Engineer at ti&m Consulting in Zürich"} />
            <MakeTimeLineEntry time={"Spring 2020"} description={"Research Intern at SAP Labs France"} />
            <MakeTimeLineEntry time={"2018 - 2020"} description={"Back to EPFL for a Master's Degree in Computer Science"} />
            <MakeTimeLineEntry time={"2018"} description={"Erasmus Year at Vienna University of Technology (TUW)"} />
            <MakeTimeLineEntry time={"2015 - 2017"} description={"Bachelor in Computer Science at the Swiss Institute for Technology Lausanne (EPFL)"} />
            <MakeTimeLineEntry time={"2012 - 2015"} description={"Bilingual Swiss Maturity Degree"} isLast={true} />
        </Timeline>
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