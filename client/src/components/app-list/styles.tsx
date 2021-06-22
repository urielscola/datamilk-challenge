import styled from 'styled-components/macro';
import { FlexDiv } from 'components';

export const Container = styled('div')`
  padding: 8px 0;
`;

export const Header = styled('div')`
  padding: 20px 15px;
`;

export const AppImage = styled('img')`
  width: 28px;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  margin-right: 12px;
`;

export const Row = styled(FlexDiv)`
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;
