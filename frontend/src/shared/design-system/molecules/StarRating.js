import { Stack, Star } from '../atoms';
import { useMultiStyleConfig } from '../hooks';

export function StarRating({ rating = 0, stars = 5, ...props }) {
  const styles = useMultiStyleConfig('StarRating', props);

  return (
    <Stack direction="row" __css={styles.container}>
      {[
        Array(5)
          .fill(null)
          .map((_, index) => (
            <Star __css={styles.star} isActive={rating > index} />
          )),
      ]}
    </Stack>
  );
}
