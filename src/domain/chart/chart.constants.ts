export const OPTIONS = {
  plugins: {
    legend: {
      display: false,
    },
    label: {
      display: false,
    },
    interaction: {
      intersect: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        ticks: {
          maxRotation: 0,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
