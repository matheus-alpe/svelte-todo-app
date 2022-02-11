<script>
    import { todos } from '../store';
    import { onDestroy } from 'svelte';

    let todoList;

    const unsubscribe = todos.subscribe((value) => {
        todoList = value;
    });

    onDestroy(unsubscribe);

    // chartjs config
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    let chartCanvas;

    let chartData = [1, todoList.length];
    let chartInstance;

    function addData(chart, data) {
        chart.data.datasets[0].data = data;
        chart.update();
    }

    function handler() {
        addData(chartInstance, [4, 1]);
    }

    onMount(() => {
        const chartConfig = {
            type: 'pie',
            data: {
                labels: ['Completed', 'Todo'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: chartData,
                        backgroundColor: ['#00800062', '#c3000062'],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {},
        };

        chartInstance = new Chart(chartCanvas.getContext('2d'), chartConfig);
    });
</script>

<div class="look-this-graph">
    <canvas bind:this={chartCanvas} on:click={handler} />
</div>
