import React, { useState, useEffect } from 'react';
import { isNil, map, pipe, toPairs } from 'ramda';
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from 'moment';

import './app.scss';

import { ResumeHeader, ResumeHeaderProps } from '@adamstortz/ui';

import { NameValue } from '@adamstortz/ui';
// import { TimelineItem } from '@adamstortz/ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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

import { HeaderComponent, TimelineComponent } from './components';

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
    flex: 'none',
    backgroundColor: 'red',
  },
}));

const StyledTimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      flex: 0,
      padding: 0,
    },
  },
})(TimelineItem);

export const App = () => {
  const [data, setData]: [any, any] = useState();
  const [isLoading, setIsLoading]: [any, any] = useState(true);

  useEffect(() => {
    fetch('assets/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  // const headerProps: ResumeHeaderProps = {
  //   header: data.name,
  //   subheader: data.title,
  //   detail: data.summary
  // }

  // const contacts = pipe(
  //   toPairs,
  //   map(([key, value]: [string, string]) => <NameValue key={`contact-${key}`} name={key} value={value} />)
  // )(data.contacts)

  // const timeline = map(job => {
  //   const end = isNil(job.end) ? null : moment(job.end)
  //  return <TimelineItem key={`timeline-job-${job.start}`} start={moment(job.start)} end={end}>{job.employer.name}</TimelineItem>
  // }, data.jobs)

  // return (
  //   <React.Fragment>
  //     <CssBaseline />
  //     <div className="app container">
  //       <div className="row">
  //         <div className="col-3">
  //           <img src="assets/headshot.jpg"></img>
  //         </div>
  //         <div className="col">
  //           <ResumeHeader {...headerProps}>{contacts}</ResumeHeader>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-3">
  //           Sidebar!
  //           <FontAwesomeIcon icon={faCoffee} />
  //         </div>
  //         <div className="col">
  //           {timeline}
  //         </div>
  //       </div>
  //     </div>
  //   </React.Fragment>

  // );
  return (
    <>
      <HeaderComponent avatar={data.avatar} contactOptions={data.contacts} />
      <TimelineComponent timelineItems={data.jobs}></TimelineComponent>
    </>
  );
};

export default App;
