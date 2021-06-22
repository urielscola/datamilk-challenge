import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import { Text } from 'components';
import * as Styles from './styles';

interface CustomProps {
  info: string;
  label: string;
}

type Props = CustomProps & SpaceProps & LayoutProps;

const InfoDisplay: React.FC<Props> = ({ info, label, ...props }) => {
  return (
    <Styles.Container data-testid="info-display" {...props}>
      <Text
        appearence="light"
        fontSize={{ default: '40px', md: '46px', lg: '64px' }}
        marginBottom={{ default: '15px' }}
        fontWeight={{ default: 700 }}
      >
        {info}
      </Text>
      <Text appearence="light" fontWeight={{ default: 700 }}>
        {label}
      </Text>
    </Styles.Container>
  );
};

export default InfoDisplay;
