import React from 'react';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useTimelineStyles } from './timeline.styles';

const StyledTimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      flex: 0,
      padding: 0,
    },
  },
})(TimelineItem);

const classNames = (...classNamez) => classNamez.join(' ');

const formatDate = (date) =>
  date ? moment(date).format('YYYY-MM-DD') : 'Present';

export const TimelineComponent = (props) => {
  const classes = useTimelineStyles();
  const timelineItems = props.timelineItems.map((timelineItem, index) => {
    const employerNode = (
      <StyledTimelineItem>
        <TimelineSeparator>
          <TimelineConnector
            className={
              index > 0 ? classes.primaryTail : classes.transparentTail
            }
          />
          <TimelineDot
            className={classNames(classes.logoDot, classes.primaryDot)}
            variant="outlined"
          >
            <img className={classes.logo} src={timelineItem.employer.logo} />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6" component="h1">
                {timelineItem.employer.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary" align="right">
                {formatDate(timelineItem.start)} -{' '}
                {formatDate(timelineItem.end)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" color="textSecondary">
            {timelineItem.title}
          </Typography>
          <Typography variant="body1">{timelineItem.description}</Typography>
        </TimelineContent>
      </StyledTimelineItem>
    );
    const projectNodes = timelineItem.projects.map((project, projectIndex) => (
      <StyledTimelineItem key={`timelineItem-${index}-project-${projectIndex}`}>
        <TimelineSeparator className={classes.emptyDotSeperator}>
          <TimelineConnector className={classes.primaryTail} />
          <TimelineDot
            className={classNames(classes.emptyDot, classes.primaryTail)}
          ></TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6" component="h1">
                {project.title}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" color="textSecondary" align="right">
                {project.tech.join(', ')}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">{project.description}</Typography>
        </TimelineContent>
      </StyledTimelineItem>
    ));
    return (
      <div key={`timelineItem-${index}`}>
        {employerNode}
        {projectNodes}
      </div>
    );
  });

  return <Timeline align="left">{timelineItems}</Timeline>;
};

export default TimelineComponent;
