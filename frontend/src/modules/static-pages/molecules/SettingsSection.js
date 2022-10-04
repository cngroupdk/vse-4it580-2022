import {
  Box,
  Button,
  Heading,
  Paragraph,
  Stack,
} from 'src/shared/design-system';

import { Form } from 'src/shared/hook-form';

export function SettingsSection({ formProps, title, description, children }) {
  return (
    <Form {...formProps}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Box flex="1">
          <Heading as="h4">{title}</Heading>
          {description && <Paragraph color="gray.600">{description}</Paragraph>}
        </Box>
        <Box
          flex="2"
          bg="white"
          borderRadius="md"
          boxShadow="base"
          overflow="hidden"
        >
          <Stack p="3" spacing="4">
            {children}
          </Stack>
          <Box bg="gray.50" textAlign="right" p="3">
            <Button colorScheme="green" type="submit" alignSelf="flex-end">
              Save
            </Button>
          </Box>
        </Box>
      </Stack>
    </Form>
  );
}
