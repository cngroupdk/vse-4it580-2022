import { Button, Input, Stack } from 'src/shared/design-system';

export function NewTodoItemForm({ name, onSetName, onSubmit }) {
  return (
    <Stack
      direction="row"
      as="form"
      onSubmit={(event) => {
        event.preventDefault();

        if (!name) return;
        onSubmit(name);
      }}
    >
      <Input
        value={name}
        onChange={(event) => onSetName(event.target.value)}
        type="text"
        placeholder="What needs to be done?"
      />
      <Button type="submit">Add</Button>
    </Stack>
  );
}
