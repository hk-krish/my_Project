import { ApexOptions } from "apexcharts";
import { Primary, Secondary } from "../../../Constants";
import { routes } from "../../../Routers/routes";

export const RecentActivityData = [
  {
    title: "Today",
    activityCard: [
      { class: "activity-removed", icon: "Chat", text: "Nick Mark mentioned Sara" },
      { icon: "Download", text: "The Post name was removed..." },
      { icon: "Swap", text: "Patrick Sullivan published..." },
    ],
  },
  {
    title: "Yesterday",
    activityCard: [
      { icon: "Send", text: "Nick Mark mentioned Sara" },
      { icon: "Work", text: "The Post name was removed..." },
    ],
  },
];

export const LatestSalesData = ["Yearly", "Monthly", "Weekly"];

export const LastOrdersData = [
  { name: "Dmitriy Groshev", country: "Switzerland", orderNo: "#790841", amount: "$2.499", payment: "Credit Card", date: "1 Oct, 14:43", avatar: "2.jpg" },
  { name: "Patrick Beverley", country: "Germany", orderNo: "#454489", amount: "$2.499", payment: "Paypal", date: "30 Sep, 23:01", avatar: "17.jpg" },
  { name: "Kevin Greem", country: "Canada", orderNo: "#594579", amount: "$2.499", payment: "Credit Card", date: "29 Sep, 09:31", avatar: "18.jpg" },
  { name: "William Barton", country: "United States", orderNo: "#478495", amount: "$2.499", payment: "Credit Card", date: "28 Sep, 04:34", avatar: "19.jpg" },
];

export const MonthlyInvoicesData = [
  { title: "Camelun ios Development", status: "20 paid month out of 24", amount: "$12,453.00", svgIcon: "bookmark", link: routes.ECommerce.Invoices.Invoice1, description: "Per Month" },
  { title: "ReactDT Motions", status: "Late payment 12 week - pay invoice", amount: "$54,459.00", svgIcon: "Ticket-Star", link: routes.ECommerce.Invoices.Invoice2, description: "Per month" },
  { title: "Arocca Store", status: "Error sending payment - Detail information", amount: "$87,884.00", svgIcon: "Discovery", link: routes.ECommerce.Invoices.Invoice3, description: "Per month" },
  { title: "EnterPress Project", status: "25 paid days out of 113", amount: "$79,955.00", svgIcon: "Shield-Done", link: routes.ECommerce.Invoices.Invoice4, description: "Per month" },
];

export const AllNotificationsData = [
  { id: 1, avatar: "2", text: "You have new comments in real finical law agency landing page design.", time: "Today 11:45pm" },
  { id: 2, avatar: "17", text: "Congrats! you complete all task for today. just need to join meting.", time: "Today 01:05pm" },
  { id: 3, avatar: "18", text: "You have new comments in real finical law agency landing page design.", time: "Today 06:55pm" },
  { id: 4, avatar: "19", text: "Congrats! you complete all task for today. just need to join meting.", time: "Today 06:55pm" },
];

export const ProjectSummaryHeadData = ["#", "Project Name", "Team", "Project Cost", "Project Status", "Payment"];

export const ProjectSummaryData = [
  { id: "A908", name: "Amazon Website", team: [8, 10, 2, "26+"], cost: "$23,490", status: "Completed", payment: "Done", paymentClass: "txt-success" },
  { id: "R840", name: "Paytm bank app", team: [2, 20, 12, "6+"], cost: "$45,459", status: "In Progress", payment: "Pending", paymentClass: "txt-danger" },
  { id: "V908", name: "Cytrust Dashboard", team: [14, 13], cost: "$78,748", status: "Completed", payment: "Done", paymentClass: "txt-success" },
  { id: "K450", name: "Project Mecha", team: [22, 15, 2], cost: "$98,878", status: "In Progress", payment: "Pending", paymentClass: "txt-danger" },
  { id: "D480", name: "Dynamic Program", team: [21, 23, 24, "5+"], cost: "$23,490", status: "In Progress", payment: "Pending", paymentClass: "txt-danger" },
];

export const SalesStatisticData = [
  { amount: "$4,875", goal: "1,00,00", goalReached: "85% goal reached", progress: 85, color: "primary" },
  { amount: "$7,560", goal: "1,00,00", goalReached: "45% goal reached", progress: 45, color: "secondary" },
];

export const SalesStatsOption: ApexOptions = {
  series: [70],
  chart: {
    height: 370,
    type: "radialBar",
    offsetY: 0,
  },

  stroke: {
    dashArray: 25,
    curve: "smooth",
    lineCap: "round",
  },
  grid: {
    padding: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "75%",
        image: "../assets/images/apexchart/radial-image.png",
        imageWidth: 140,
        imageHeight: 140,
        imageClipped: false,
      },
      track: {
        show: true,
        background: "rgba(43, 94, 94, 0.1)",
        strokeWidth: "97%",
        opacity: 0.4,
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "16px",
          fontFamily: undefined,
          fontWeight: 600,
          color: undefined,
          offsetY: -10,
        },
        value: {
          show: true,
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 600,
          fontSize: "20px",
          color: "#292929",
          offsetY: 6,
          formatter: (val) => val + "%",
        },
      },
    },
  },
  labels: ["New: 2.4k", "Returning: 3.2k"],
  colors: ["var(--theme-default)", "rgba(43, 94, 94, 0.1)"],
  legend: {
    show: true,
    position: "bottom",
    fontSize: "14px",
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600,
    markers: {
      strokeWidth: 5,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 600,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
              imageWidth: 110,
              imageHeight: 110,
            },
            dataLabels: {
              name: {
                fontSize: "14px",
                offsetY: -8,
              },
              value: {
                fontSize: "18px",
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        chart: {
          height: 350,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "68%",
            },
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 320,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
              imageWidth: 120,
              imageHeight: 120,
            },
          },
        },
      },
    },
    {
      breakpoint: 531,
      options: {
        chart: {
          height: 300,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
              imageWidth: 100,
              imageHeight: 100,
            },
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 280,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
              imageWidth: 100,
              imageHeight: 100,
            },
          },
        },
      },
    },
  ],
};

export const LastOrdersOption: ApexOptions = {
  series: [
    {
      data: [
        {
          x: "Jan",
          y: [210, 400],
        },
        {
          x: "Feb",
          y: [300, 490],
        },
        {
          x: "Mar",
          y: [350, 500],
        },
        {
          x: "Apr",
          y: [210, 390],
        },
        {
          x: "May",
          y: [280, 400],
        },
        {
          x: "Jun",
          y: [110, 250],
        },
        {
          x: "Jul",
          y: [210, 400],
        },
        {
          x: "Aug",
          y: [290, 390],
        },
        {
          x: "Sep",
          y: [250, 490],
        },
        {
          x: "Oct",
          y: [210, 390],
        },
        {
          x: "Nov",
          y: [190, 310],
        },
        {
          x: "Dec",
          y: [250, 450],
        },
      ],
    },
  ],
  chart: {
    type: "rangeBar",
    height: 300,
    offsetY: 13,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    borderColor: "#F5F5F5",
    position: "back",

    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["var(--theme-default)"],
  plotOptions: {
    bar: {
      borderRadius: 7,
      horizontal: false,
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },

  yaxis: {
    labels: {
      show: true,
      align: "right",
      style: {
        colors: "#848789",
        fontSize: "14px",
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: 600,
      },

      formatter: (value) => {
        return `${value}k`;
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontWeight: 400,
        colors: "#848789",
        fontSize: "14px",
        fontFamily: '"Nunito Sans", sans-serif',
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: "var(--light-bg)",
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 295,
        },
        series: [
          {
            data: [
              {
                x: "Jan",
                y: [210, 400],
              },
              {
                x: "Feb",
                y: [300, 490],
              },
              {
                x: "Mar",
                y: [350, 500],
              },
              {
                x: "Apr",
                y: [210, 390],
              },
              {
                x: "May",
                y: [280, 400],
              },
              {
                x: "Jun",
                y: [110, 250],
              },
              {
                x: "Jul",
                y: [210, 400],
              },
            ],
          },
        ],
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 270,
        },
        series: [
          {
            data: [
              {
                x: "Jan",
                y: [210, 400],
              },
              {
                x: "Feb",
                y: [300, 490],
              },
              {
                x: "Mar",
                y: [350, 500],
              },
              {
                x: "Apr",
                y: [210, 390],
              },
              {
                x: "May",
                y: [280, 400],
              },
            ],
          },
        ],
      },
    },
    {
      breakpoint: 676,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
        xaxis: {
          labels: {
            maxHeight: 30,
            offsetX: 0,
            offsetY: 0,
            rotate: -45,
            rotateAlways: true,
            style: {
              fontSize: "14px",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 34,
            style: {
              fontSize: "14px",
            },
            formatter: (value: any) => {
              console.log("Formatter called with value:", value);
              return `${value}k`;
            },
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 200,
        },
        xaxis: {
          labels: {
            maxHeight: 34,
            rotate: -70,
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 31,
            style: {
              fontSize: "13px",
            },
          },
        },
      },
    },
  ],
};

export const OptionsOverView: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [0, 20, 70, 25, 100, 45, 25],
    },
    {
      name: "Order",
      type: "area",
      data: [0, 50, 40, 90, 60, 120, 150],
    },
  ],
  chart: {
    height: 310,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: [Primary, Secondary],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  markers: {
    size: 5,
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: "var(--light-bg)",
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
    min: 0,
    tickAmount: 6,
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1299,
      options: {
        chart: {
          height: 310,
        },
        series: [
          {
            name: "Earning",
            type: "area",
            data: [0, 20, 70, 25, 100],
          },
          {
            name: "Order",
            type: "area",
            data: [0, 50, 40, 90, 60],
          },
        ],
      },
    },
  ],
};

export const GroupBarChart: ApexOptions = {
  series: [
    {
      name: "Good",
      data: [170, 250, 350, 150, 230, 120, 330, 350, 280, 300, 250, 110],
    },
    {
      name: "Very Good",
      data: [290, 180, 120, 290, 370, 250, 230, 200, 140, 220, 220, 330],
    },
  ],
  colors: [Primary, Secondary],
  chart: {
    type: "bar",
    height: 305,
    width: "100%",
    offsetY: 10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
      columnWidth: "45%",
      barHeight: "100%",
      dataLabels: {
        position: "top",
      },
    },
  },

  grid: {
    show: false,
    padding: {
      left: -8,
      right: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["var(--recent-chart-bg)"],
  },
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: true,
      format: "dd MMM",
      formatter: undefined,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 400,
    logBase: 100,
    tickAmount: 4,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 300,
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
          },
        ],
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 193,
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "55%",
          },
        },
      },
    },
    {
      breakpoint: 531,
      options: {
        chart: {
          height: 170,
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230, 120, 330],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370, 250, 230],
          },
        ],
      },
    },
    {
      breakpoint: 426,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "65%",
          },
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370],
          },
        ],
      },
    },
  ],
};
