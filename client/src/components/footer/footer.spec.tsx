import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './footer';

describe('Footer component', () => {
  it('should render', () => {
    const result = render(<Footer />);
    expect(result).toMatchSnapshot();
  });
});
