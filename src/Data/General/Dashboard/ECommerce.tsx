import { ApexOptions } from "apexcharts";
import { Primary, Secondary } from "../../../Constants";

export const SummaryProgressData = [
  { value: "$654.85K", label: "Summary", progress: 30, color: "primary" },
  { value: "$34.5K", label: "Orders", progress: 45, color: "secondary" },
  { value: "$3.86K", label: "Avg. Order Value", progress: 80, color: "secondary" },
  { value: "$3.86K", label: "Avg. Order Value", progress: 65, color: "secondary" },
];

export const RecentOrdersData = [
  { img: "16.png", name: "Camera Lens", brand: "Canon Camera", date: "14 Mar 2024", time: "10:00 AM", customer: "Brooklyn Simmons", price: "$ 247.92", status: { label: "Succeed", class: "txt-success" } },
  { img: "17.png", name: "Black Dress", brand: "Shasmi", date: "12 Mar 2024", time: "05:00 AM", customer: "Savannah Nguyen", price: "$ 695.20", status: { label: "Waiting", class: "txt-warning" } },
  { img: "19.png", name: "Argan Oil", brand: "Moroccan", date: "10 Mar 2024", time: "12:30 AM", customer: "Ronald Richards", price: "$ 189.30", status: { label: "Succeed", class: "txt-success" } },
  { img: "18.png", name: "Parfum", brand: "Bella Vita", date: "01 Mar 2024", time: "09:20 AM", customer: "Marvin McKinney", price: "$ 249.21", status: { label: "Canceled", class: "txt-danger" } },
];

const WorldPosition = { lat: 30, lng: 80 };

export const Setting = {
  center: WorldPosition,
  zoom: 2,
  maxZoom: 10,
  attributionControl: true,
  zoomControl: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  dragging: true,
  easeLinearity: 0.35,
};

export const TopTransactionData = [
  { img: "5.png", name: "Leather Crop", id: "#854692", date: "30 Mar 2024", method: "Credit Card", price: "$3,658" },
  { img: "9.png", name: "Female Bag", id: "#315984", date: "25 Mar 2024", method: "Bank Transfer", price: "$6,954" },
  { img: "6.png", name: "Shoes leather", id: "#315984", date: "20 Mar 2024", method: "Credit Card", price: "$1,945" },
  { img: "7.png", name: "Headphone", id: "#874596", date: "14 Mar 2024", method: "Bank Transfer", price: "$3,942" },
];

export const CustomerGrowthData = [
  { name: "United States", percentage: 70, flag: "1.png" },
  { name: "Sweden", percentage: 50, flag: "2.png" },
  { name: "Australia", percentage: 20, flag: "3.png" },
  { name: "France", percentage: 80, flag: "4.png" },
];

export const SellingProductData = [
  { image: "20.png", name: "Iphone", id: "#654892", stock: "In Stock", stockClass: "txt-primary", price: "$20.00", quantity: 652 },
  { image: "21.png", name: "Woolen hat", id: "#324856", stock: "Low stock", stockClass: "txt-warning", price: "$12.25", quantity: 123 },
  { image: "23.png", name: "Flower pot", id: "#954123", stock: "In Stock", stockClass: "txt-primary", price: "$30.99", quantity: 200 },
  { image: "22.png", name: "Athletic top", id: "#954026", stock: "Out of stock", stockClass: "txt-danger", price: "$34.68", quantity: 501 },
];

export const ProductColorVariants = [
  { id: "radio22", value: "option1", colorClass: "radio-primary", checked: true },
  { id: "radio23", value: "option2", colorClass: "radio-secondary", checked: false },
  { id: "radio24", value: "option3", colorClass: "radio-warning", checked: false },
  { id: "radio25", value: "option4", colorClass: "radio-info", checked: false },
  { id: "radio27", value: "option6", colorClass: "radio-danger", checked: false },
];

export const LatestOfferProductData = [10, 11, 12, 13, 10, 11, 12, 13];

export const LatestSalesChart: ApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [0, 5, 6, 11, 12, 14, 18, 18, 22, 30],
    },
  ],
  colors: ["rgba(43, 95, 96, 0.3)"],
  chart: {
    height: 142,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  stroke: {
    curve: "straight",
    colors: ["#2B5F60"],
  },
  fill: {
    opacity: [1, 0.02],
    type: "pattern",
    pattern: {
      style: ["verticalLines", "horizontalLines"],
      width: 15,
      height: 1,
      strokeWidth: 15,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#2B5F60",
        size: 6,
        shape: "circle",
      },
    ],
  },
  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#848789",
        fontWeight: 400,
      },
    },
  },
  yaxis: [
    {
      show: false,
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: y => {
        if (typeof y === "number") {
          return y.toFixed(2) + " points";
        }
        return y;
      },
    },
  },
  responsive: [
    {
      breakpoint: 1599,
      options: {
        chart: {
          height: 140,
        },
      },
    },
    {
      breakpoint: 1499,
      options: {
        chart: {
          height: 150,
        },
      },
    },
    {
      breakpoint: 1399,
      options: {
        chart: {
          height: 140,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 130,
        },
      },
    },
    {
      breakpoint: 1096,
      options: {
        chart: {
          height: 140,
        },
      },
    },
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 160,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 170,
        },
      },
    },
  ],
};

export const UserActivity: ApexOptions = {
  chart: {
    height: 250,
    type: "radialBar",
  },
  series: [67],
  colors: [Primary],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "57%", 
      },
      track: {
        background: ["rgba(43, 94, 94, 0.1)"], 
      },
      dataLabels: {
        name: {
          show: true,
          color: "#848789",
          fontSize: "20px",
          fontWeight: "600",
        },
        value: {
          color: "#1f2f3e",
          fontSize: "30px",
          fontWeight: "800",
          show: true,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
  labels: ["Progress"],
};

export const ChartDash: ApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [60, 80, 20, 90, 10, 30, 100, 10],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [100, 0, 100, 50, 30, 100, 10, 20],
    },
  ],
  chart: {
    height: 325,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 3,
      blur: 4,
      opacity: 0.3,
    },
  },
  stroke: {
    curve: ["straight", "smooth"],
    width: [3, 2],
    dashArray: [0, 4],
  },
  grid: {
    show: true,
  },
  fill: {
    type: "solid",
    opacity: [0, 1],
  },

  responsive: [
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 325,
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (y) => {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  annotations: {
    xaxis: [
      {
        x: 320,
        strokeDashArray: 3,
        borderWidth: 1,
        borderColor: "#072448",
      },
    ],
    points: [
      {
        x: 320,
        y: 330,
        marker: {
          size: 8,
          fillColor: Primary,
          strokeColor: "#ffffff",
          strokeWidth: 4,
        },
        label: {
          borderWidth: 1,
          offsetY: 0,
          text: "32.10k",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Nunito Sans ,sans-serif",
          },
        },
      },
    ],
  },
  legend: {
    show: false,
  },
  colors: [Primary, Secondary],
  xaxis: {
    labels: {
      style: {
        fontFamily: "Nunito Sans ,sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => {
        return value + "k";
      },
      style: {
        fontFamily: "Nunito Sans ,sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
};
