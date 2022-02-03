<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    let chartCanvas;

    let chartData = [1, 1];
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

<canvas bind:this={chartCanvas} />
<button on:click={handler}>click</button>
