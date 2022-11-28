import { Paragraph, Stack } from 'src/shared/design-system';
import { TodoListItem } from '../molecules';

export function TodoList({ items, onSetItemCompleted, onDeleteItem }) {
  return (
    <Stack
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      overflow="hidden"
      spacing="0"
      mb="4"
    >
      {items.length === 0 && (
        <Paragraph m="3" color="gray">
          No items
        </Paragraph>
      )}
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onSetItemCompleted={onSetItemCompleted}
          onDeleteItem={onDeleteItem}
        >
          {item.name}
        </TodoListItem>
      ))}
    </Stack>
  );
}
