export const OPTIONS = {
  plugins: {
    legend: {
      display: false,
    },
    label: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
      },
      zoom: {
        enabled: true,
        drag: true,
        mode: 'xy',
      },
    },
  },
  maintainAspectRatio: false,

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
