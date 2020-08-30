import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { ResumeHeader } from '@adamstortz/ui';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <ResumeHeader></ResumeHeader>
    </div>
  );
};

export default App;
