import { Primary, Secondary } from "../../Constants";

export const GoogleChartData = {
  pieChart1: {
    width: "100%",
    height: 300,
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Work", 5],
      ["Eat", 10],
      ["Commute", 15],
      ["Watch TV", 20],
      ["Sleep", 25],
    ],
    option: {
      title: "My Daily Activities",
      colors: ["#f8d62b", "#51bb25", "#17a2b8", Secondary, Primary],
    },
  },
  pieChart2: {
    width: "100%",
    height: 300,
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Work", 2],
      ["Eat", 2],
      ["Commute", 11],
      ["Watch TV", 2],
      ["Sleep", 7],
    ],
    option: {
      title: "My Daily Activities",
      pieHole: 0.4,
      colors: ["#f8d62b", "#17a2b8", "#51bb25", Secondary, Primary],
    },
  },
  pieChart3: {
    width: "100%",
    height: 300,
    chartType: "PieChart",
    data: [
      ["Language", "Speakers (in millions)"],
      ["Assamese", 13],
      ["Bengali", 83],
      ["Bodo", 1.4],
      ["Dogri", 2.3],
      ["Gujarati", 46],
      ["Hindi", 300],
      ["Kannada", 38],
      ["Kashmiri", 5.5],
      ["Konkani", 5],
      ["Maithili", 20],
      ["Malayalam", 33],
      ["Manipuri", 1.5],
      ["Marathi", 72],
      ["Nepali", 2.9],
      ["Oriya", 33],
      ["Punjabi", 29],
      ["Sanskrit", 0.01],
      ["Santhali", 6.5],
      ["Sindhi", 2.5],
      ["Tamil", 61],
      ["Telugu", 74],
      ["Urdu", 52],
    ],
    option: {
      title: "Indian Language Use",
      legend: "none",
      pieSliceText: "label",
      slices: {
        4: { offset: 0.2 },
        12: { offset: 0.3 },
        14: { offset: 0.4 },
        15: { offset: 0.5 },
      },
      colors: ["#dc3545", Primary, Secondary, "#51bb25", "#17a2b8", "#f8d62b", "#dc3545", Primary, "#f8d62b", "#51bb25", Primary, Secondary, "#51bb25", Primary, "#17a2b8", "#f8d62b", Primary, Primary, "#17a2b8", Secondary, Primary, "#51bb25"],
    },
  },
  pieChart4: {
    width: "100%",
    height: 300,
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Work", 5],
      ["Eat", 10],
      ["Commute", 15],
      ["Watch TV", 20],
      ["Sleep", 25],
    ],
    option: {
      title: "My Daily Activities",
      is3D: true,
      colors: ["#f8d62b", "#17a2b8", "#51bb25", Secondary, Primary],
    },
  },
  areaChart1: {
    width: "100%",
    height: "400px",
    chartType: "AreaChart",
    data: [
      ["Year", "Sales", "Expenses"],
      ["2013", 1000, 400],
      ["2014", 1170, 460],
      ["2015", 660, 1120],
      ["2016", 1030, 540],
    ],
    option: {
      title: "Company Performance",
      hAxis: {
        title: "Year",
        titleTextStyle: {
          color: "#333",
        },
      },
      vAxis: {
        minValue: 0,
      },
      colors: [Primary, Secondary],
    },
  },
  areaChart2: {
    width: "100%",
    height: "400px",
    chartType: "AreaChart",
    data: [
      ["Year", "Cars", "Trucks", "Drones", "Segways"],
      ["2013", 100, 400, 2000, 400],
      ["2014", 500, 700, 530, 800],
      ["2015", 2000, 1000, 620, 120],
      ["2016", 120, 201, 2501, 540],
    ],
    option: {
      title: "Company Performance",
      hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
      vAxis: { minValue: 0 },
      width: "100%",
      height: 400,
      colors: [Primary, Secondary, "#51bb25", "#f8d62b"],
    },
  },
  lineChart: {
    height: 500,
    width: "100%",
    chartType: "Line",
    data: [
      ["month", "Guardians of the Galaxy", "The Avengers", "Transformers: Age of Extinction"],
      [1, 37.8, 80.8, 41.8],
      [2, 30.9, 10.5, 32.4],
      [3, 40.4, 57, 25.7],
      [4, 11.7, 18.8, 10.5],
      [5, 20, 17.6, 10.4],
      [6, 8.8, 13.6, 7.7],
      [7, 7.6, 12.3, 9.6],
      [8, 12.3, 29.2, 10.6],
      [9, 16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11, 5.3, 7.9, 4.7],
      [12, 6.6, 8.4, 5.2],
    ],
    option: {
      chart: {
        title: "Box Office Earnings in First Two Weeks of Opening",
        subtitle: "in millions of dollars (USD)",
      },
      colors: [Primary, Secondary, "#51bb25"],
    },
  },
  columnChart2: {
    width: "100%",
    height: "400px",
    chartType: "Bar",
    data: [
      ["Year", "Sales", "Expenses", "Profit"],
      ["2018", 1e3, 400, 250],
      ["2019", 1170, 460, 300],
      ["2024", 660, 1120, 400],
      ["2025", 1030, 540, 450],
    ],
    option: {
      chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
      },
      bars: "horizontal",
      vAxis: {
        format: "decimal",
      },
      colors: [Primary, Secondary, "#51bb25"],
    },
  },
  columnChart1: {
    width: "100%",
    height: "400px",
    chartType: "Bar",
    data: [
      ["Year", "Sales", "Expenses", "Profit"],
      ["2018", 1e3, 400, 250],
      ["2019", 1170, 460, 300],
      ["2024", 660, 1120, 400],
      ["2024", 1030, 540, 450],
    ],
    option: {
      colors: [Primary, Secondary, "#51bb25"],
      chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
      },
      bars: "vertical",
      vAxis: {
        format: "decimal",
      },
    },
  },
  barChart2: {
    width: "100%",
    height: "400px",
    chartType: "BarChart",
    data: [
      [
        "Element",
        "Density",
        {
          role: "style",
        },
        {
          sourceColumn: 1,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
      ["Copper", 10, "#17a2b8", 10],
      ["Silver", 12, "#f8d62b", 12],
      ["Gold", 14, Secondary, 14],
      ["Platinum", 16, Primary, 16],
    ],
    option: {
      title: "Density of Precious Metals, in g/cm^3",
      height: 400,
      bar: {
        groupWidth: "95%",
      },
      backgroundColor: "transparent",
      legend: {
        position: "none",
      },
    },
  },
  wordTreeChart: {
    width: "100%",
    height: "400px",
    chartType: "WordTree",
    data: [["Phrases"], ["cats are better than dogs"], ["cats eat kibble"], ["cats are better than hamsters"], ["cats are awesome"], ["cats are people too"], ["cats eat mice"], ["cats meowing"], ["cats in the cradle"], ["cats eat mice"], ["cats in the cradle lyrics"], ["cats eat kibble"], ["cats for adoption"], ["cats are family"], ["cats eat mice"], ["cats are better than kittens"], ["cats are evil"], ["cats are weird"], ["cats eat mice"]],
    option: {
      wordtree: {
        format: "implicit",
        word: "cats",
        backgroundColor: "transparent",
      },
    },
  },
};

export const GanttChartData = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  ["Research", "Find sources", new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
  ["Write", "Write paper", null, new Date(2015, 0, 9), 3 * 24 * 60 * 60 * 1000, 25, "Research,Outline"],
  ["Cite", "Create bibliography", null, new Date(2015, 0, 7), 1 * 24 * 60 * 60 * 1000, 20, "Research"],
  ["Complete", "Hand in paper", null, new Date(2015, 0, 10), 1 * 24 * 60 * 60 * 1000, 0, "Cite,Write"],
  ["Outline", "Outline paper", null, new Date(2015, 0, 6), 1 * 24 * 60 * 60 * 1000, 100, "Research"],
];

export const GanttChartOptions = {
  height: 300,
  gantt: {
    criticalPathEnabled: false,
    arrow: {
      angle: 100,
      width: 5,
      color: "#51bb25",
      radius: 0,
    },

    palette: [
      {
        color: Primary,
        dark: Secondary,
        light: "#047afb",
      },
    ],
  },
  backgroundColor: "transparent",
};

export const ComboChartData = [
  ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua", "Rwanda", "Average"],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const ComboChartOption = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  colors: [Primary, Secondary, "#51bb25", "#17a2b8", "#f8d62b"],
  series: { 5: { type: "line" } },
  backgroundColor: "transparent",
};
