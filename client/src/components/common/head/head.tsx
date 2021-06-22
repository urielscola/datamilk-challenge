import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title?: string;
}

const Head: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Helmet data-testid="head">
        {children}
        <title>Fitness Apps{title ? ` | ${title}` : ''}</title>
      </Helmet>
    </>
  );
};

export default Head;
