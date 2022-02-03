<script>
    import TaskForm from './components/TaskForm.svelte';
    import ListTodos from './components/ListTodos.svelte';
    import Canvas from './components/Canvas.svelte';
    export let name;
</script>

<main class="dark">
    <h1>{name}</h1>

    <Canvas />
    <TaskForm />

    <ListTodos />
</main>
