import { AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import { Box } from 'src/shared/design-system';

import { TodoListItem } from '../molecules';

export const TodoList = memo(function TodoList({
  items,
  onSetCompleted,
  onDelete,
}) {
  return (
    <Box
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      overflow="hidden"
    >
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            onSetCompleted={onSetCompleted}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </Box>
  );
});
