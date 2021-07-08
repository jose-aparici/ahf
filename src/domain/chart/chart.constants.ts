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
    decimation: {
      enabled: true,
      algorithm: 'lttb',
      samples: 500,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
