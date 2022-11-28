import {
  Checkbox,
  DeleteIcon,
  IconButton,
  Spacer,
  Stack,
} from '../../../shared/design-system';

export function TodoListItem({ item, onSetItemCompleted, onDeleteItem }) {
  console.time(`TodoListItem ${item.id}`);
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Do nothing for 100 ms to emulate extremely slow code
  }
  console.timeEnd(`TodoListItem ${item.id}`);

  return (
    <Stack
      direction="row"
      role="group"
      p="2"
      spacing="1"
      textDecoration={item.isCompleted ? 'line-through' : 'none'}
      color={item.isCompleted ? 'gray.500' : 'black'}
      _hover={{ bg: 'gray.100' }}
    >
      <Checkbox
        isChecked={item.isCompleted}
        onChange={(event) => onSetItemCompleted(item.id, event.target.checked)}
      >
        {item.name}
      </Checkbox>
      <Spacer />
      <IconButton
        aria-label={`Delete item ${item.name} from the list`}
        icon={<DeleteIcon />}
        colorScheme="red"
        size="sm"
        visibility="hidden"
        _groupHover={{ visibility: 'visible' }}
        onClick={() => onDeleteItem(item.id)}
      />
    </Stack>
  );
}
