import React from 'react';
import { Text } from 'components';
import * as Styles from './styles';

interface Props {
  info: string;
  label: string;
}

const InfoDisplay: React.FC<Props> = ({ info, label }) => {
  return (
    <Styles.Container data-testid="info-display">
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
