import {
  Button,
  Checkbox,
  Heading,
  Radio,
  Stack,
  Star,
  StarRating,
} from 'src/shared/design-system';
import { FeatureWitSideBySideImage } from '../organisms';

export function Practical08Page() {
  return (
    <Stack maxW="xl" mx="auto" alignItems="flex-start">
      <FeatureWitSideBySideImage />

      <Heading pb="4" pt="40">
        Theme
      </Heading>

      <Button colorScheme="purple">Button</Button>
      <Button variant="subtle" colorScheme="blue">
        Subtle Button
      </Button>
      <Button variant="subtle" colorScheme="purple">
        Subtle Button
      </Button>

      <Radio isChecked={true}>Hello</Radio>
      <Checkbox isChecked={true}>Hello</Checkbox>

      <Star isActive={false} />
      <Star isActive={true} />

      <StarRating rating={4} size="lg" colorScheme="red" />
      <StarRating rating={3} size="md" />
      <StarRating rating={2} stars={3} size="sm" />
    </Stack>
  );
}
