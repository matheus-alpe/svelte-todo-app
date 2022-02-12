<script>
    import TaskForm from './components/TaskForm.svelte';
    import ListTodos from './components/ListTodos.svelte';
    import Canvas from './components/Canvas.svelte';

    export let name;

    import { todosState } from './store';
    $: completed = $todosState.filter((todo) => todo.completed).length;
    $: notCompleted = $todosState.filter((todo) => !todo.completed).length;
    $: data = [completed, notCompleted];
</script>

<main class="dark">
    <h1>{name}</h1>

    <div class="container">
        <div class="main-container">
            <TaskForm />

            <ListTodos />
        </div>
        <Canvas bind:chartData={data} />
    </div>
</main>
