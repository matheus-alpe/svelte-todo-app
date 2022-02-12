<script>
    export let chartData = [0, 0];

    let chartCanvas;
    let chartInstance;

    $: {
        !!chartInstance && updateDataChart(chartInstance, chartData);
    }

    // chartjs config
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    onMount(() => {
        const chartConfig = {
            type: 'pie',
            data: {
                labels: ['Completed', 'Todo'],
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: ['#00800062', '#c3000062'],
                        hoverOffset: 4,
                    },
                ],
            },
        };

        chartInstance = new Chart(chartCanvas.getContext('2d'), chartConfig);
    });

    function updateDataChart(chart, data) {
        chart.data.datasets[0].data = data;
        chart.update();
    }
</script>

<div class="look-this-graph">
    <canvas bind:this={chartCanvas} />
</div>
