import React, { useState, useEffect } from 'react';
import { isNil, map, pipe, toPairs } from 'ramda';
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from 'moment';

import './timeline.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  transparentTail: {
    backgroundColor: 'transparent',
  },
  noOpposite: {
    flex: 'none'
  },
}));

const StyledTimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      flex: 0,
      padding: 0
    },
  }
})(TimelineItem);

const formatDate = date => date ? moment(date).format('YYYY-MM-DD') : 'Present';

export const TimelineComponent = (props) => {
  const classes = useStyles();
  const timelineItems = props.timelineItems.map((timelineItem, index) => (
    <StyledTimelineItem key={`timelineItem-${index}`}>
      <TimelineSeparator>
        <TimelineConnector className={classes.secondaryTail} />
        <TimelineDot style={{"width": "24px", "height": "24px"}}  variant="outlined" color="secondary">
            <img src={timelineItem.employer.logo} />
          </TimelineDot>
        <TimelineConnector className={classes.secondaryTail}/>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={1} className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6" component="h1">
                {timelineItem.employer.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary" align="right">
                {formatDate(timelineItem.start)} - {formatDate(timelineItem.end)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" color="textSecondary">{timelineItem.title}</Typography>
          <Typography variant="body1">{timelineItem.description}</Typography>
        </Paper>
      </TimelineContent>
    </StyledTimelineItem>
  ));

  return (
    <Timeline align="left">
      {timelineItems}
    </Timeline>);
};

export default TimelineComponent;
