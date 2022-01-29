import { writable } from 'svelte/store';

export const todos = writable([
    {
        id: '61e16f0e8241ec78fe1f995f',
        title: 'Hello, world!',
        description: 'This is a sample task.',
        completed: false,
        created_at: '2022-01-14T12:39:42.018Z'
    },
    {
        id: '81e16f0e8241ec21ce1foad0',
        title: 'Task test',
        description: 'description to task test',
        completed: true,
        created_at: '2022-01-28T12:39:42.018Z'
    }
]);