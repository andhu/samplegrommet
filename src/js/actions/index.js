import {
  FETCH_TASKS
} from './types';

const tasks = [
  {
    status: 'critical',
    item: 'Pay my rent.'
  },
  {
    status: 'ok',
    item: 'Walk with my dog this morning.'
  },
  {
    status: 'warning',
    item: 'San Jose Earthquakes game is tomorrow.'
  },
  {
    status: 'ok',
    item: 'Review Pull Request #45.'
  },
  {
    status: 'warning',
    item: 'Refresh Magnum stock.'
  }
];

export function fetchTasks() {
  return {
    type: FETCH_TASKS,
    payload: tasks
  };
}
