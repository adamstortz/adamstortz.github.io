import React from 'react';
import moment from 'moment';
import { isNil, evolve, pipe } from 'ramda';
import './timeline-item.scss';

/* eslint-disable-next-line */
export interface TimelineItemProps {
  start: moment.Moment,
  end?: moment.Moment,
  children?: any,
}

const formatDate = (date: moment.Moment) => isNil(date) ? 'Present' : date.format('YYYY-MM')

const prepProps = evolve({
  start: formatDate,
  end: formatDate
})

export const TimelineItemComponent = (props: TimelineItemProps) => {
  return (
    <div>
      <h1>{props.start} - {props.end}</h1>
      {props.children}
    </div>
  );
};
export const TimelineItem: React.FC<TimelineItemProps> = pipe(prepProps, TimelineItemComponent);
export default TimelineItem;
