import React, { useCallback, useEffect, useState, memo } from 'react';
import {
  Header,
  Head,
  Footer,
  Container,
  InfoDisplay,
  Widget,
  AppList,
  FlexDiv,
  ScatterChart,
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
      <Head title="Stats" />
      <Header />
      <Container>
        <FlexDiv
          flexDirection={{ default: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          marginBottom={{ default: '15px' }}
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
        <Widget title="Downloads & Revenue">
          <ScatterChart apps={stats.chartData} />
        </Widget>
      </Container>
      <Footer />
    </>
  );
};

export default memo(Home);
