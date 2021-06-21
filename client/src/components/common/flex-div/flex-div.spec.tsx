import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexDiv from './flex-div';

describe('FlexDiv component', () => {
  it('should render', () => {
    const result = render(<FlexDiv />);
    expect(result).toMatchSnapshot();
  });

  it('Should render the component with childrens', async () => {
    const { container, getByTestId } = render(
      <FlexDiv>
        <p>children</p>
      </FlexDiv>
    );

    const element = getByTestId('flex-div');
    const children = container.querySelector('p') as HTMLParagraphElement;

    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('children');
    expect(children.textContent).toBe('children');
  });

  it('Should render the component with specific style', async () => {
    const { getByTestId } = render(
      <FlexDiv flexDirection="column">
        <p>children</p>
      </FlexDiv>
    );

    const element = getByTestId('flex-div');
    expect(element).toHaveStyle(`flex-direction: column`);
  });
});
