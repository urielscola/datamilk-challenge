import React, { useCallback, useEffect, useState, memo } from 'react';
import { useAlert } from 'react-alert';
import {
  Header,
  Head,
  Footer,
  Container,
  Widget,
  AppList,
  FlexDiv,
} from 'components';
import { getTopRanked, IGetTopRankedResponse } from 'services';
import { useLoadingContext } from 'contexts/loading-context';

const TopRanked: React.FC = () => {
  const [topRanked, setTopRanked] = useState({
    topRanked: [],
  } as IGetTopRankedResponse);
  const { loading, setLoading } = useLoadingContext();
  const alert = useAlert();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getTopRanked();
      setTopRanked(response);
    } catch (err) {
      alert.show(
        'Houve um problema ao buscar os dados. Tente novamente em alguns momentos.',
        { type: 'error' }
      );
    } finally {
      setLoading(false);
    }
  }, [setLoading, setTopRanked, alert]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div />;

  return (
    <>
      <Head title="Top Ranked" />
      <Header />
      <Container>
        <FlexDiv
          flexDirection={{ default: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          marginBottom={{ default: '15px' }}
        >
          <Widget title="Top Ranked">
            <AppList
              apps={topRanked.topRanked}
              label="X no Top 10"
              data="timesInTop10"
            />
          </Widget>
        </FlexDiv>
      </Container>
      <Footer />
    </>
  );
};

export default memo(TopRanked);
