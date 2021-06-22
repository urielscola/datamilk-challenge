import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './container';

describe('Container component', () => {
  it('should render', () => {
    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('Should render the component with childrens', async () => {
    const { container } = render(
      <Container>
        <p>children</p>
      </Container>
    );

    const element = container.querySelector('div') as HTMLDivElement;
    const children = container.querySelector('p') as HTMLParagraphElement;

    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('children');
    expect(children).toBeInTheDocument();
    expect(children.textContent).toBe('children');
  });
});
