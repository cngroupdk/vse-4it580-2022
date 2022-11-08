import {
  Box,
  Heading,
  Icon,
  Image,
  Link,
  LinkIcon,
  Stack,
  chakra,
} from '../../../shared/design-system';

export function FeatureWithSideBySideImage() {
  // Inspiration: https://pro.chakra-ui.com/components/marketing/features/feature-with-side-by-side-image?color=blue&theme=Chakra+UI+Pro

  return (
    <Stack>
      <Heading
        sx={{
          fontSize: 'sm',
          color: 'blue.400',
          mb: 0,
          letterSpacing: 'normal',
        }}
      >
        Features
      </Heading>
      <Heading
        sx={{
          fontSize: '3xl',
          fontWeight: 'semibold',
          letterSpacing: 'tight',
        }}
      >
        What can you expect?
      </Heading>

      <chakra.p
        __css={{
          color: 'gray.600',
          fontSize: 'lg',
        }}
      >
        A bundle of 210+ ready-to-use, responsive and accessible components with
        clever structured sourcode files.
      </chakra.p>

      <Stack
        pt="8"
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '12', md: '8' }}
      >
        <Stack flex="1" spacing="6">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Stack direction="row" spacing="3">
                <Icon
                  as={LinkIcon}
                  sx={{
                    p: '3',
                    boxSize: '10',
                    color: 'white',
                    borderRadius: 'md',
                    bg: 'blue.500',
                  }}
                />
                <Box key={index} pt="1.5" flex="1">
                  <Heading
                    sx={{
                      fontSize: 'lg',
                      color: 'gray.800',
                      fontWeight: 'medium',
                      letterSpacing: 'normal',
                    }}
                  >
                    210+ Components
                  </Heading>

                  <chakra.p __css={{ color: 'gray.600' }} pb="3">
                    Chakra UI Pro has 210+ componentsto help you develop your
                    project faster.
                  </chakra.p>

                  <Link
                    sx={{
                      fontWeight: 'semibold',
                      color: 'blue.500',
                    }}
                  >
                    <Stack direction="row" spacing="2" alignItems="center">
                      <Box>Read more</Box>
                      <Icon as={LinkIcon} display="inline" boxSize="4"></Icon>
                    </Stack>
                  </Link>
                </Box>
              </Stack>
            ))}
        </Stack>
        <Image
          sx={{
            objectFit: 'cover',
            maxW: { base: '100%', md: '40%' },
            height: 'auto',
          }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
      </Stack>
    </Stack>
  );
}
