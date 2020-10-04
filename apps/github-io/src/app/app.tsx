import React from 'react';
import { map, pipe, toPairs } from 'ramda';

import './app.scss';

import { ResumeHeader, ResumeHeaderProps } from '@adamstortz/ui';

import { NameValue, NameValueProps } from '@adamstortz/ui';

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
    experience: []
  }
  const headerProps: ResumeHeaderProps = {
    header: data.name,
    subheader: data.title,
    detail: data.summary
  }

  const contacts = pipe(
    toPairs,
    map(([key, value]: [string, string]) => <NameValue key={`contact-${key}`} name={key} value={value}/>)
  )(data.contacts)
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <ResumeHeader {...headerProps}>{contacts}</ResumeHeader>
    </div>
  );
};

export default App;
