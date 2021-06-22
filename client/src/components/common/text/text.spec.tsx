import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './text';

describe('Text component', () => {
  it('should render', () => {
    const result = render(<Text>Teste</Text>);
    expect(result).toMatchSnapshot();
  });
  it('should render as h1 heading', () => {
    const result = render(<Text as="h1">Heading h1</Text>);
    expect(result).toMatchSnapshot();
  });
});
