import React from 'react';
import { render } from '@testing-library/react';

import TimelineItem from './timeline-item';

describe('ResumeHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineItem />);
    expect(baseElement).toBeTruthy();
  });
});
