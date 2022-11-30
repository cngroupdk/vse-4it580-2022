import { memo } from 'react';
import { motion } from 'framer-motion';

import {
  Checkbox,
  IconButton,
  DeleteIcon,
  Spacer,
  Stack,
} from 'src/shared/design-system';

export const TodoListItem = memo(function TodoListItem({
  item,
  onSetCompleted,
  onDelete,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, height: 0 }}
      animate={{ opacity: 1, scale: 1, height: 'auto' }}
      exit={{ opacity: 0, scale: 0.01, height: 0 }}
    >
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
    </motion.div>
  );
});
