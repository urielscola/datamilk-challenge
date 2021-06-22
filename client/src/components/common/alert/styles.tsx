import styled from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Container = styled('div')<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  max-width: 450px;
  line-height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors[props.type]};
  border-left: 10px solid ${(props) => props.theme.colors[props.type]};
`;

export const Content = styled.div`
  width: 100%;
`;

export const Close = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  padding-left: 20px;
  font-weight: bold;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;
