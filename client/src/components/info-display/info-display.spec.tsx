import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoDisplay from './info-display';

describe('InfoDisplay component', () => {
  it('should render', () => {
    const result = render(<InfoDisplay info="$10.6B" label="Market size" />);
    expect(result).toMatchSnapshot();
  });
});
