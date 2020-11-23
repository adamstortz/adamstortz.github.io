import React, { useState, useEffect } from 'react';

import './app.scss';

import {
  HeaderComponent,
  TimelineComponent,
  SkillsComponent,
} from './components';

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
  return (
    <>
      <HeaderComponent avatar={data.avatar} contactOptions={data.contacts} />
      <TimelineComponent timelineItems={data.jobs}></TimelineComponent>
      <SkillsComponent skills={data.skills}></SkillsComponent>
    </>
  );
};

export default App;
