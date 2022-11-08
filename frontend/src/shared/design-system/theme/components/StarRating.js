const { createMultiStyleConfigHelpers } = require('@chakra-ui/react');

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(['container', 'star']);

const baseStyle = definePartsStyle((props) => ({
  container: {},
  star: {},
}));

const sizes = {
  lg: definePartsStyle({
    container: {},
    star: {},
  }),
  md: definePartsStyle({}),
  sm: definePartsStyle({
    container: {},
    star: {},
  }),
};

export const StarRating = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});
