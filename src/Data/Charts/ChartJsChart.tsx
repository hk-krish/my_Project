import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale, Colors } from "chart.js";
import { Primary, Secondary } from "../../Constants";

ChartJS.register(CategoryScale, LinearScale, PointElement, Filler, LineElement, Colors, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale);

export const BarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [35, 59, 80, 81, 56, 55, 40],
      borderColor: Primary,
      backgroundColor: "rgb(43, 95, 96, 0.4)",
      highlightFill: "rgb(43, 95, 96, 0.6)",
      highlightStroke: Primary,
      borderWidth: 2,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: Secondary,
      backgroundColor: "rgb(192, 98, 64, 0.4)",
      highlightFill: "rgb(192, 98, 64, 0.6)",
      highlightStroke: Secondary,
      borderWidth: 2,
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
  },
};

export const BarChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export const LineGraphData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      borderColor: Primary,
      backgroundColor: Primary,
      strokeColor: Primary,
      pointColor: Primary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#000",
      data: [10, 59, 80, 81, 56, 55, 40],
      fill: {
        target: "origin",
        above: "rgb(43, 95, 96, 0.4)",
      },
    },
    {
      label: "My Second dataset",
      borderColor: Secondary,
      strokeColor: Secondary,
      backgroundColor: Secondary,
      pointColor: Secondary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#000",
      pointHighlightStroke: Secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: {
        target: "origin",
        above: "rgb(192, 98, 64, 0.4)",
      },
    },
  ],
};

export const LineGraphOptions = {
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 1,
      hoverRadius: 20,
    },
    line: {
      tension: 0.4,
    },
  },
};

export const RadarGraphData = {
  labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgb(43, 95, 96, 0.4)",
      strokeColor: Primary,
      borderColor: Primary,
      backgroundColor: "rgb(43, 95, 96, 0.4)",
      pointColor: Primary,
      pointStrokeColor: Primary,
      pointHighlightFill: Primary,
      pointHighlightStroke: "rgb(43, 95, 96, 0.4)",
      data: [12, 3, 5, 18, 7],
    },
  ],
};

export const RadarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export const LineChartData = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      backgroundColor: "rgba(0, 157 ,181, 0.2)",
      borderColor: Primary,
      pointColor: Primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      fill: {
        target: "origin",
        above: "rgba(0, 157 ,181, 0.2)",
      },
    },
    {
      backgroundColor: "rgb(192, 98, 64, 0.4)",
      borderColor: Secondary,
      pointColor: Secondary,
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      fill: {
        target: "origin",
        above: "rgb(192, 98, 64, 0.4)",
      },
    },
    {
      backgroundColor: "rgb(7, 188, 12, 0.4)",
      borderColor: "#07bc0c",
      pointColor: "#07bc0c",
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      fill: {
        target: "origin",
        above: "rgb(7, 188, 12, 0.2)",
      },
    },
  ],
};

export const LineChartOption = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    duration: 0,
  },
  scaleShowVerticalLines: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const DoughnutData = {
  labels: ["Primary", "Secondary", "Success"],
  datasets: [
    {
      data: [350, 50, 100],
      backgroundColor: [Primary, Secondary, "#07bc0c"],
    },
  ],
};
export const DoughnutOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const PolarData = {
  labels: ["Yellow", "Sky", "Black", "Grey", "Dark Grey"],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: [Primary, "#F99B0D", "#07bc0c", "#25C5F7", Secondary],
    },
  ],
};

export const PolarOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};
