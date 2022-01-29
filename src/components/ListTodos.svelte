<script>
    import { todos } from '../store'

	import Todo from './Todo.svelte';

    export let todoList;

    todos.subscribe(value => {
        todoList = value;
    })
</script>

<ul class="todos">
    {#each todoList as todo}
        <Todo bind:todo={todo}/>
    {/each}
</ul>