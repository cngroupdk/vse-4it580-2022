import { useState } from 'react';

const initialItems = [
  {
    id: 1,
    name: 'go grocery shopping',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'wash the dishes',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'write some React code',
    isCompleted: true,
  },
];

export function useTodoList() {
  const [{ filter, items }, setTodoState] = useState({
    filter: 'all',
    items: initialItems,
    nextId: initialItems.length + 1,
  });

  const setFilter = (filter) => {
    setTodoState((prevState) => ({
      ...prevState,
      filter,
    }));
  };

  const addItem = (name) => {
    setTodoState((prevState) => {
      const { nextId } = prevState;

      return {
        ...prevState,
        items: [
          {
            id: nextId,
            name,
          },
          ...prevState.items,
        ],
        nextId: nextId + 1,
      };
    });
  };

  const setItemCompleted = (id, isCompleted) => {
    setTodoState((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted,
          };
        }

        return item;
      }),
    }));
  };

  const deleteItem = (id) => {
    setTodoState((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  const filteredItems = items.filter((item) => {
    console.time(`filter item ${item.id}`);
    let startTime = performance.now();
    while (performance.now() - startTime < 100) {
      // Do nothing for 100 ms to emulate extremely slow code
    }
    console.timeEnd(`filter item ${item.id}`);

    switch (filter) {
      case 'all':
        return true;

      case 'completed':
        return item.isCompleted;

      case 'not-completed':
        return !item.isCompleted;

      default:
        return true;
    }
  });

  return {
    filter,
    setFilter,
    items: filteredItems,
    addItem,
    setItemCompleted,
    deleteItem,
  };
}
