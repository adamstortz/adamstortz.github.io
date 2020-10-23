import React, { useState, useEffect } from 'react';
import { isNil, map, pipe, toPairs } from 'ramda';
import moment from 'moment';

import './app.scss';

import { ResumeHeader, ResumeHeaderProps } from '@adamstortz/ui';

import { NameValue } from '@adamstortz/ui';
import { TimelineItem } from '@adamstortz/ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const App = () => {

  const [data, setData]: [any, any] = useState();
  const [isLoading, setIsLoading]: [any, any] = useState(true);
 
  useEffect(() => {
    fetch('assets/data.json')
    .then(response => response.json())
    .then(data => setData(data))
    .then(() => setIsLoading(false))
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  const headerProps: ResumeHeaderProps = {
    header: data.name,
    subheader: data.title,
    detail: data.summary
  }

  const contacts = pipe(
    toPairs,
    map(([key, value]: [string, string]) => <NameValue key={`contact-${key}`} name={key} value={value} />)
  )(data.contacts)

  const timeline = map(job => {
    const end = isNil(job.end) ? null : moment(job.end)
   return <TimelineItem key={`timeline-job-${job.start}`} start={moment(job.start)} end={end}>{job.employer.name}</TimelineItem>
  }, data.jobs)

  return (
    <div className="app container">
      <div className="row">
        <div className="col-3">
          <img src="assets/headshot.jpg"></img>
        </div>
        <div className="col">
          <ResumeHeader {...headerProps}>{contacts}</ResumeHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          Sidebar!
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="col">
          {timeline}
        </div>
      </div>
    </div>
  );
};

export default App;
