import { useState } from 'react';
import { useTodoList } from 'src/modules/todo/hooks';
import { TodoList } from 'src/modules/todo/organisms';
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Tab,
  TabList,
  Tabs,
  FormLabel,
} from 'src/shared/design-system';

const STATES = ['all', 'completed', 'not-completed'];

export function Practical11Page() {
  const { items, filter, setFilter, addItem, setItemCompleted, deleteItem } =
    useTodoList();
  const [newItemName, setNewItemName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f7f7f7');

  return (
    <Box p="4" backgroundColor={backgroundColor}>
      <Heading>Practical 11</Heading>
      <Stack
        as="form"
        direction="horizontal"
        gap="1"
        onSubmit={(event) => {
          event.preventDefault();
          addItem(newItemName);
          setNewItemName('');
        }}
      >
        <Input
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <Button type="submit">Add</Button>
      </Stack>

      <Tabs
        index={STATES.indexOf(filter)}
        onChange={(index) => setFilter(STATES[index])}
        variant="soft-rounded"
        colorScheme="blue"
        my="4"
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed</Tab>
          <Tab>Not completed</Tab>
        </TabList>
      </Tabs>

      <TodoList
        items={items}
        onSetItemCompleted={setItemCompleted}
        onDeleteItem={deleteItem}
      />

      <Stack direction="horizontal">
        <FormLabel htmlFor="backgroundColor">Background color:</FormLabel>
        <input
          id="backgroundColor"
          type="color"
          value={backgroundColor}
          onChange={(event) => setBackgroundColor(event.target.value)}
        />
      </Stack>
    </Box>
  );
}
