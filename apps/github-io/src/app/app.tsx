import React from 'react';
import { isNil, map, pipe, toPairs } from 'ramda';
import moment from 'moment';
import './app.scss';

import { ResumeHeader, ResumeHeaderProps } from '@adamstortz/ui';

import { NameValue } from '@adamstortz/ui';
import { TimelineItem } from '@adamstortz/ui';

export const App = () => {
  const data = {
    name: 'Adam Stortz',
    title: 'Cloud Solution Architect',
    summary: 'Ace problem solver',
    contacts: {
      phone: '3097149981',
      email: 'adam.stortz@live.com',
      LinkedIn: 'linkedin.com/in/adamstortz/',
      GitHub: 'github.com/adamstortz'
    },
    jobs: [
      {
        employer: {
          name: "Redstone Content Solutions",
          website: "https://www.redstonecontentsolutions.com/",
        },
        start: "20110415",
      },
      {
        employer: {
          name: "Stryker",
          website: "https://www.stryker.com/",
        },
        start: "20040215",
        end: "20110415",
      }
    ]
  }
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
   return <TimelineItem start={moment(job.start)} end={end}>{job.employer.name}</TimelineItem>
  }, data.jobs)

  return (
    <div className="app">
      <img src="assets/headshot.jpg"></img>
      <ResumeHeader {...headerProps}>{contacts}</ResumeHeader>
      {timeline}
    </div>
  );
};

export default App;
