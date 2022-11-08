import { Stack, Star } from '../atoms';
import { useMultiStyleConfig } from '../hooks';

export function StarRating({ rating = 0, stars = 5, ...props }) {
  // const styles = useMultiStyleConfig('StarRating', { ...props });

  return (
    <Stack direction="row">
      {[
        Array(stars)
          .fill(null)
          .map((_, index) => <Star isActive={rating > index} />),
      ]}
    </Stack>
  );
}
