import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initialItems = [
  ...Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `Todo item ${index}`,
      isCompleted: index % 2 === 0,
    })),
];

const useTodoListStore = create(
  persist(
    immer((set) => ({
      filter: 'all',
      items: initialItems,
      nextId: initialItems.length + 1,

      addItem: (name) => {
        set((draft) => {
          const newItem = {
            id: draft.nextId++,
            name,
            isCompleted: false,
          };

          draft.items.unshift(newItem);
        });
      },

      setItemCompleted: (id, isCompleted) => {
        set((draft) => {
          const item = draft.items.find((item) => item.id === id);
          if (!item) return;

          item.isCompleted = isCompleted;
        });
      },

      deleteItem: (id) => {
        set((prevState) => ({
          ...prevState,
          items: prevState.items.filter((item) => item.id !== id),
        }));
      },

      setFilter: (filter) => {
        set({ filter });
      },
    })),
    { name: 'global-todo-list' },
  ),
);

export function useTodoList() {
  const {
    items: rawItems,
    filter,
    addItem,
    setFilter,
    setItemCompleted,
    deleteItem,
  } = useTodoListStore();

  const items = useMemo(
    () =>
      filter === 'all'
        ? rawItems
        : rawItems.filter(
            (item) => item.isCompleted === (filter === 'completed'),
          ),
    [rawItems, filter],
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
