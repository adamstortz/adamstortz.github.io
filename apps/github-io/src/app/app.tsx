import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { ResumeHeader, ResumeHeaderProps } from '@adamstortz/ui';

export const App = () => {
  const data = {
    name: 'Adam Stortz',
    title: 'Cloud Solution Architect',
    summary: 'Ace problem solver',
    experience: []
  }
  const headerProps: ResumeHeaderProps = {
    header: data.name,
    subheader: data.title,
    detail: data.summary
  }
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <ResumeHeader {...headerProps}></ResumeHeader>
    </div>
  );
};

export default App;
