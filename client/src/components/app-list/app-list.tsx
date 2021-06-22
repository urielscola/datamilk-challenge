import React, { memo } from 'react';
import { Text, FlexDiv } from 'components';
import { IAppWithCount } from 'constants/models';
import * as Styles from './styles';

interface Props {
  apps: IAppWithCount[];
  data: 'downloads' | 'timesInTop10';
  label: string;
}

const AppList: React.FC<Props> = ({ apps, data, label }) => {
  return (
    <Styles.Container data-testid="widget">
      <FlexDiv
        justifyContent={{ default: 'space-between' }}
        alignItems={{ default: 'center' }}
        marginBottom={{ default: '7px' }}
      >
        <Text appearence="dark2" size="x-small">
          App name
        </Text>
        <Text appearence="dark2" size="x-small">
          {label}
        </Text>
      </FlexDiv>

      {apps.map((app, index) => (
        <Styles.Row
          key={app.name}
          justifyContent={{ default: 'space-between' }}
          alignItems={{ default: 'center' }}
        >
          <FlexDiv alignItems={{ default: 'center' }}>
            <Text
              size="small"
              appearence="dark1"
              marginRight={{ default: '10px' }}
            >
              {index + 1}
            </Text>
            <Styles.AppImage src={app.image} alt={app.name} />
            <Text size="small" appearence="dark3">
              {app.name}
            </Text>
          </FlexDiv>
          <Text size="small" appearence="dark3">
            {data === 'downloads' ? app.downloads : app.timesInTop10}
          </Text>
        </Styles.Row>
      ))}
    </Styles.Container>
  );
};

export default memo(AppList);
