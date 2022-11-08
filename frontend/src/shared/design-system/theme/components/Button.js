import { defineStyle } from '@chakra-ui/react';

const variants = {
  subtle: defineStyle((props) => {
    console.log('--- props', props);

    return {};
  }),
};

export const Button = defineStyle({
  variants,
  defaultProps: {},
});
