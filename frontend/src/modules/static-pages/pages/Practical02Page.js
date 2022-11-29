import { useState } from 'react';

import { useTodoList, TodoListTemplate } from 'src/modules/todo';

export function Practical02Page() {
  const { addItem, items, setItemCompleted, deleteItem, filter, setFilter } =
    useTodoList();
  const [newItemName, setNewItemName] = useState('');

  return (
    <TodoListTemplate
      items={items}
      setItemCompleted={setItemCompleted}
      deleteItem={deleteItem}
      filter={filter}
      setFilter={setFilter}
      newItemName={newItemName}
      setNewItemName={setNewItemName}
      onNewItemSubmit={(name) => {
        addItem(name);
        setNewItemName('');
      }}
    />
  );
}
