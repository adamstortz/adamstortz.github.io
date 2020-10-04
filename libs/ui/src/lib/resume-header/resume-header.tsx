import React from 'react';

import './resume-header.scss';

/* eslint-disable-next-line */
export interface ResumeHeaderProps {
  header: string,
  subheader: string,
  detail: string,
  children?: any,
}

export const ResumeHeader = (props: ResumeHeaderProps) => {
  return (
    <div className="container">
      <div className="row header-primary">
        <div className="col">
          <h1>{props.header}</h1>
          <h2>{props.subheader}</h2>
          <p>{props.detail}</p>
        </div>
      </div>
      <div className="row">
        {props.children.map(child => <div className="col-6">{child}</div>)}
      </div>
    </div>
  );
};

export default ResumeHeader;
