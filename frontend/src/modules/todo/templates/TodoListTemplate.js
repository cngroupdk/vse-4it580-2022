import { Box, Heading } from 'src/shared/design-system';

import { TodoListTabs, NewTodoItemForm } from '../molecules';
import { TodoList } from '../organisms';

export function TodoListTemplate({
  items,
  setItemCompleted,
  deleteItem,
  filter,
  setFilter,
  newItemName,
  setNewItemName,
  onNewItemSubmit,
}) {
  return (
    <Box>
      <Heading>Practical 02</Heading>

      <NewTodoItemForm
        name={newItemName}
        onSubmit={onNewItemSubmit}
        onSetName={setNewItemName}
      />

      <TodoListTabs filter={filter} setFilter={setFilter} />

      <TodoList
        key={filter}
        items={items}
        onSetCompleted={setItemCompleted}
        onDelete={deleteItem}
      />
    </Box>
  );
}
