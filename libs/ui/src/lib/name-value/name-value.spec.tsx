import React from 'react';
import { render } from '@testing-library/react';

import NameValue from './name-value';

describe('NameValue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NameValue name="a" value="b" />);
    expect(baseElement).toBeTruthy();
  });
});
