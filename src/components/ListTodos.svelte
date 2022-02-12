<script>
    import { todosState } from '../store';

    import Todo from './Todo.svelte';
</script>

<ul class="todos">
    {#each $todosState as todo}
        <Todo bind:todo />
    {/each}
</ul>
