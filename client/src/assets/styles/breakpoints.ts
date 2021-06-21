import { generateMedia } from 'styled-media-query';

export const breakpoints = ['767px', '992px', '1224px', '1600px'];

const breakpointsObj = {
  sm: '767px',
  md: '992px',
  lg: '1224px',
  xlg: '1600px',
};

export const medias = generateMedia(breakpointsObj);
