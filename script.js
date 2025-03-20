const ctx = document.getElementById('radarChart').getContext('2d');
let radarChart;

function showChart(skillType) {
    const skillData = {
        marketing: [80, 70, 60, 50], // Example skill levels
        design: [70, 80, 60, 40],
        ai: [60, 50, 90, 70],
        web: [50, 60, 80, 90]
    };

    const labels = ['Marketing', 'Design', 'AI', 'Web Development'];
    const data = skillData[skillType];

    if (radarChart) {
        radarChart.destroy();
    }

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Skill Level',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Initialize with the first tab
showChart('marketing');
