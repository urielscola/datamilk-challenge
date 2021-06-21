import styled from 'styled-components/macro';
import { medias } from 'assets/styles';

export const Container = styled('div')`
  ${medias.greaterThan('md')`
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      position: absolute;
    }
  `};
`;

export const MainContent = styled('div')`
  width: 100%;
  padding: 40px 60px 60px;
  background-color: ${({ theme }) => theme.colors.blue};

  ${medias.greaterThan('md')`
    padding: 60px;
  `};
`;

export const Heading = styled('div')`
  padding: 40px 35px 30px;
  width: 100%;
  border: solid 3px ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  margin: 60px 0 70px;
  max-width: 725px;

  &:nth-of-type(2) {
    max-width: 630px;
  }

  &:last-of-type {
    margin: 60px 0 0;
  }

  ${medias.greaterThan('md')`
    padding: 40px 35px 40px 70px;
    margin: 60px 0 45px;
  `};

  ${medias.greaterThan('lg')`
    padding: 30px 35px 30px 70px;
    margin: 30px 0 25px;

    &:last-of-type {
      margin: 30px 0 0;
    }
  `};

  ${medias.greaterThan('xlg')`
    padding: 40px 35px 40px 110px;
    margin: 60px 0 45px;
    &:last-of-type {
      margin: 60px 0 0;
    }
  `};

  > div {
    height: 80px;
    width: 80px;
    font-family: ${({ theme }) => theme.typography.familyBook};
    color: ${({ theme }) => theme.colors.orange};
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.16);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${medias.greaterThan('md')`
      top: 50%;
      left: 0;
      height: 90px;
      width: 90px;
      font-size: 30px;
    `};

    ${medias.greaterThan('xlg')`
      font-size: 50px;
      height: 150px;
      width: 150px;
    `};
  }
`;
