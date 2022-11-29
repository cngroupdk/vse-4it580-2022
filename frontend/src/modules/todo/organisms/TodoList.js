import { Box } from 'src/shared/design-system';

import { TodoListItem } from '../molecules';

export function TodoList({ items, onSetCompleted, onDelete }) {
  return (
    <Box
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      overflow="hidden"
    >
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onSetCompleted={onSetCompleted}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
}
