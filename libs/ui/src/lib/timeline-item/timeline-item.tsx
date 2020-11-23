import React from 'react';
import moment from 'moment';
import { isNil, evolve, pipe } from 'ramda';
import './timeline-item.scss';

export interface TimelineItemProps {
  start: moment.Moment,
  end?: string,
  children?: any,
}

const formatDate = (date: moment.Moment) => isNil(date) ? 'Present' : date.format('YYYY-MM')

const prepProps = evolve({
  start: formatDate,
  end: formatDate
})

export const TimelineItemComponent = (props: TimelineItemProps) => {
  // console.log('a', props)
  // console.log('b', prepProps(props))
  return (
    <div>
      <h1>{props.start} - {props.end}</h1>
      {props.children}--
    </div>
  );
};
// export const TimelineItem: React.FC<TimelineItemProps> = pipe(prepProps, TimelineItemComponent);
export const TimelineItem: React.FC<TimelineItemProps> = TimelineItemComponent;
export default TimelineItem;
