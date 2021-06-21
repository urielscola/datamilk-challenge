import styled from 'styled-components';
import { compose, color, variant, space, typography } from 'styled-system';
import { theme } from 'assets/styles';

const size = {
  prop: 'size',
  variants: {
    small: {
      fontSize: theme.typography.sizeSmall,
    },
    normal: {
      fontSize: theme.typography.sizeNormal,
    },
    medium: {
      fontSize: theme.typography.sizeMedium,
    },
  },
};

const appearence = {
  prop: 'appearence',
  variants: {
    light: {
      color: theme.colors.white,
    },
    dark1: {
      color: theme.colors.gray1,
    },
    dark2: {
      color: theme.colors.gray2,
    },
    dark3: {
      color: theme.colors.gray3,
    },
  },
};

interface Props {
  [key: string]: any;
}

export const Component = styled('p')<Props>`
  ${compose(variant(size), variant(appearence))};
  ${space};
  ${color};
  ${typography};
`;
