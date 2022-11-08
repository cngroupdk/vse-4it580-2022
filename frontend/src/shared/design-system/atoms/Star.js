import { Icon } from '@chakra-ui/react';

import { StarActive, StarInactive } from '../icons';

export function Star({ isActive, ...restProps }) {
  return <Icon as={isActive ? StarActive : StarInactive} {...restProps} />;
}
