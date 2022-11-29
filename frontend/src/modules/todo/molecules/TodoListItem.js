import {
  Checkbox,
  IconButton,
  DeleteIcon,
  Spacer,
  Stack,
} from 'src/shared/design-system';

export function TodoListItem({ item, onSetCompleted, onDelete }) {
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
        onChange={(event) => onSetCompleted(item.id, event.target.checked)}
      >
        {item.name}
      </Checkbox>
      <Spacer />
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        size="sm"
        visibility="hidden"
        _groupHover={{ visibility: 'visible' }}
        onClick={() => onDelete(item.id)}
      />
    </Stack>
  );
}
