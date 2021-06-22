import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppList from './app-list';

describe('AppList component', () => {
  it('should render', () => {
    const result = render(
      <AppList data="downloads" apps={[]} label="Downloads" />
    );
    expect(result).toMatchSnapshot();
  });
});
