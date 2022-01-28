<script>
	import Todo from './Todo.svelte';

    export let todos;
</script>

<ul class="todos">
    {#each todos as todo}
        <Todo {todo}/>
    {/each}
</ul>