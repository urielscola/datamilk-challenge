import React from 'react';
import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import '@testing-library/jest-dom/extend-expect';

import Head from './head';

describe('Head component', () => {
  it('should render with default title', () => {
    render(<Head />);
    const helmet: any = Helmet.peek();

    expect(helmet.title.join('').trim()).toBe('Fitness Apps');
  });
  it('should render with provided title', () => {
    render(<Head title="Home" />);
    const helmet: any = Helmet.peek();

    expect(helmet.title.join('').trim()).toBe('Fitness Apps | Home');
  });
  it('should render with childrens', () => {
    render(
      <Head>
        <link href="test" />
      </Head>
    );
    const helmet: any = Helmet.peek();
    expect(helmet.linkTags[0].href).toBe('test');
  });
});
