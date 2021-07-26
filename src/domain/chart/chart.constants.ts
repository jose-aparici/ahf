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
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        mode: 'xy',
        speed: 100,
      },
      pan: {
        enabled: true,
        mode: 'xy',
        speed: 100,
      },
    },
  },
  animation: {
    duration: 0,
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
