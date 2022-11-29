import { useState } from 'react';

const initialItems = [
  ...Array(100)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `Todo item ${index}`,
      isCompleted: index % 2 === 0,
    })),
];

export function useTodoList() {
  const [{ items: rawItems, filter }, setState] = useState({
    filter: 'all',
    items: initialItems,
    nextId: initialItems.length + 1,
  });

  const addItem = (name) => {
    setState((prevState) => {
      const { nextId } = prevState;

      const newItem = {
        id: nextId,
        name,
        isCompleted: false,
      };

      return {
        ...prevState,
        items: [newItem, ...prevState.items],
        nextId: nextId + 1,
      };
    });
  };

  const setItemCompleted = (id, isCompleted) => {
    setState((prevState) => {
      return {
        ...prevState,
        items: prevState.items.map((item) => {
          if (item.id !== id) return item;

          return {
            ...item,
            isCompleted,
          };
        }),
      };
    });
  };

  const deleteItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  const setFilter = (filter) => {
    setState((prevState) => ({
      ...prevState,
      filter,
    }));
  };

  const items =
    filter === 'all'
      ? rawItems
      : rawItems.filter(
          (item) => item.isCompleted === (filter === 'completed'),
        );

  return {
    filter,
    items,
    addItem,
    setItemCompleted,
    deleteItem,
    setFilter,
  };
}
