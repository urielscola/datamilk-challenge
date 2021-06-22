import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

describe('Header component', () => {
  it('should render', () => {
    const result = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
