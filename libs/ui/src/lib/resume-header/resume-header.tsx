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
    <div>
      <h1>{props.header}</h1>
      <h2>{props.subheader}</h2>
      <p>{props.detail}</p>
      {props.children}
    </div>
  );
};

export default ResumeHeader;
