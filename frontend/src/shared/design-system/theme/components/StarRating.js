const { createMultiStyleConfigHelpers } = require('@chakra-ui/react');

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(['container', 'star']);

const baseStyle = definePartsStyle((props) => ({
  container: {
    p: '1',
    bg: `${props.colorScheme}.100`,
    borderRadius: 'md',
  },
  star: {
    color: `${props.colorScheme}.700`,
    boxSize: '4',
  },
}));

const sizes = {
  lg: definePartsStyle({
    container: {
      p: '2',
    },
    star: {
      boxSize: '5',
    },
  }),
  md: definePartsStyle({}),
  sm: definePartsStyle({
    container: {},
    star: {
      boxSize: '3',
    },
  }),
};

export const StarRating = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});
