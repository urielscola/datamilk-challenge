import React, { useCallback, useEffect, useState, memo } from 'react';
import { useAlert } from 'react-alert';
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
import { useLoadingContext } from 'contexts/loading-context';

const Home: React.FC = () => {
  const [stats, setStats] = useState({
    marketSize: 0,
    topApps: [],
    chartData: [],
  } as IGetStatsResponse);
  const { loading, setLoading } = useLoadingContext();
  const alert = useAlert();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getStats();
      setStats(response);
    } catch (err) {
      alert.show(
        'Houve um problema ao buscar os dados. Tente novamente em alguns momentos.',
        { type: 'error' }
      );
    } finally {
      setLoading(false);
    }
  }, [setStats, setLoading, alert]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div />;

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
