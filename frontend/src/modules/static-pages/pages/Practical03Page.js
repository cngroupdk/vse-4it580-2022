import {
  Heading,
  Paragraph,
  StackDivider,
  BodyBackground,
  Stack,
  Textarea,
  Select,
  Switch,
  RadioGroup,
  Radio,
} from 'src/shared/design-system';

import { FormField } from 'src/shared/hook-form';

import { SettingsSection } from '../molecules';

export function Practical03Page() {
  return (
    <>
      <BodyBackground bg="gray.100" />
      <Heading pb="4">Practical 03</Heading>

      <Stack spacing="8" divider={<StackDivider borderColor="gray.300" />}>
        <SettingsSection
          title="Profile"
          description="This is your profile information."
          formProps={{
            defaultValues: {
              firstName: 'John',
              lastName: 'Doe',
              username: 'jdoe',
              email: 'john@doe.com',
              about: 'Lorem ipsum',
              agreeToc: true,
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <FormField name="firstName" label="First name" />
            <FormField name="lastName" label="Last name" />
          </Stack>
          <FormField name="username" label="User name" maxW="md" />
          <FormField
            name="email"
            label="Email address"
            type="email"
            maxW="md"
          />
          <FormField as={Textarea} name="about" label="Profile bio" />
          <FormField as={Select} name="visibility" label="Profile visibility">
            <option value="public">Public</option>
            <option value="friends">Only friends</option>
            <option value="private">Private</option>
          </FormField>
          <FormField name="agreeToc" as={Switch} variant="unstyled">
            {' '}
            Agree to Terms and Conditions
          </FormField>
        </SettingsSection>
        <SettingsSection
          title="Notifications"
          description="Setup how much notification you will receive"
          formProps={{
            defaultValues: {
              notificationsLevel: 'mentions',
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <FormField
            name="notificationsLevel"
            as={RadioGroup}
            variant="unstyled"
          >
            <Heading as="h5">Notify me</Heading>
            <Paragraph>When you should be notified:</Paragraph>
            <Stack pl="4">
              <Radio value="all">Every time someone quacks</Radio>
              <Radio value="mentions">Only mentions (@username)</Radio>
              <Radio value="never">Never</Radio>
            </Stack>
          </FormField>
        </SettingsSection>
      </Stack>
    </>
  );
}
