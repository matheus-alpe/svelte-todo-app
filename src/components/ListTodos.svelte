<script>
    import { todos } from '../store';
    import { onDestroy } from 'svelte';

    import Todo from './Todo.svelte';

    export let todoList;

    const unsubscribe = todos.subscribe((value) => {
        todoList = value;
    });

    onDestroy(unsubscribe);
</script>

<ul class="todos">
    {#each todoList as todo}
        <Todo bind:todo />
    {/each}
</ul>
