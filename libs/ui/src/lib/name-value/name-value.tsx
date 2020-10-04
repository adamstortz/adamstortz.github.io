import React from 'react';

import './name-value.scss';

/* eslint-disable-next-line */
export interface NameValueProps {
  name: string,
  value: string,
}

export const NameValue = (props: NameValueProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.value}</p>
    </div>
  );
};

export default NameValue;
