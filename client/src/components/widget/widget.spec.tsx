import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Widget from './widget';

describe('Widget component', () => {
  it('should render', () => {
    const result = render(
      <Widget title="Top 5 apps">
        <p>Some content</p>
      </Widget>
    );
    expect(result).toMatchSnapshot();
  });
});
