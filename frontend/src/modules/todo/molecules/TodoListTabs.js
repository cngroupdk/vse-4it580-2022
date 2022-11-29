import { Tab, TabList, Tabs } from 'src/shared/design-system';

const STATES = ['all', 'completed', 'not-completed'];

export function TodoListTabs({ filter, setFilter }) {
  return (
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
  );
}
