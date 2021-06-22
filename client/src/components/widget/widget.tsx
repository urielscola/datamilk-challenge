import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import { Text } from 'components';
import * as Styles from './styles';

interface CustomProps {
  title: string;
}

type Props = CustomProps & SpaceProps & LayoutProps;

const Widget: React.FC<Props> = ({ title, children, ...props }) => {
  return (
    <Styles.Container data-testid="widget" {...props}>
      <Styles.Header>
        <Text appearence="dark3" fontWeight={{ default: 700 }}>
          {title}
        </Text>
      </Styles.Header>
      {children}
    </Styles.Container>
  );
};

export default Widget;
