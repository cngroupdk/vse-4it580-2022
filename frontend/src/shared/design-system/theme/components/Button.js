import { defineStyle } from '@chakra-ui/react';

const variants = {
  subtle: defineStyle((props) => {
    console.log('--- props', props);

    return {
      bg: `${props.colorScheme}.400`,
      color: 'white',
      _disabled: {
        opacity: 'initial',
        color: 'black',
        bg: `${props.colorScheme}.200`,
      },
      _hover: {
        _disabled: {
          bg: `${props.colorScheme}.200`,
        },
      },
    };
  }),
};

export const Button = defineStyle({
  baseStyle: {},
  variants,
  defaultProps: {},
});
