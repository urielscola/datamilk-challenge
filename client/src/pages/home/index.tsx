import React, { useCallback, useEffect, useState, memo } from 'react';
import {
  Header,
  Container,
  InfoDisplay,
  Widget,
  AppList,
  FlexDiv,
} from 'components';
import { getStats, IGetStatsResponse } from 'services';
import { formatMarketSize } from 'utils';

const Home: React.FC = () => {
  const [stats, setStats] = useState({} as IGetStatsResponse);

  const fetchData = useCallback(async () => {
    const response = await getStats();
    setStats(response);
  }, [setStats]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!stats.topApps) return <div />;

  return (
    <>
      <Header />
      <Container>
        <FlexDiv
          flexDirection={{ default: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <InfoDisplay
            info={formatMarketSize(stats.marketSize)}
            label="Market size"
            margin={{ default: '0 0 15px 0', md: '0 15px 0 0' }}
          />
          <Widget title="Top 5 apps">
            <AppList apps={stats.topApps} label="Downloads" data="downloads" />
          </Widget>
        </FlexDiv>
      </Container>
    </>
  );
};

export default memo(Home);
