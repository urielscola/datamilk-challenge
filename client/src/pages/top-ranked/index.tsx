import React, { useCallback, useEffect, useState, memo } from 'react';
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

const TopRanked: React.FC = () => {
  const [topRanked, setTopRanked] = useState({} as IGetTopRankedResponse);

  const fetchData = useCallback(async () => {
    const response = await getTopRanked();
    setTopRanked(response);
  }, [setTopRanked]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!topRanked.topRanked) return <div />;

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
