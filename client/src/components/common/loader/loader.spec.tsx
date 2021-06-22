import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './loader';

describe('Loader component', () => {
  it('should render', () => {
    const result = render(<Loader />);
    expect(result).toMatchSnapshot();
  });
});
