import { HorizontalTimelineType } from "../../Types/BonusUi";

export const BasicTimelineSubTitle = [
  {
    text: "Use ",
    code: ".timeline-dot ",
  },
  {
    text: "class to a square style timeline.",
  },
];

export const HoverTimelineSubTitle = [
  {
    text: "Use the ",
    code: ".square-timeline",
  },
  {
    text: " main class through create new variations of timeline.",
  },
];

export const VariationTimelineSubTitle = [
  {
    text: "Use the ",
    code: ".activity-dot- ",
  },
  {
    text: "through rounded animations.",
  },
];

export const HorizontalTimelineSubTitle = [
  {
    text: "Use ",
    code: "event-list ",
  },
  {
    text: "and ",
    code: "events ",
  },
  {
    text: "classes to create a new horizontal timeline.",
  },
];

export const TimelineMainSubTitle = [{ text: "This is a berlin timeline chart." }];

export const BasicTimeLineData = [
  {
    class: "primary",
    date: "2 Feb 2024",
    time: "7:00 AM",
    title: "CONFERENCE WITH CLIENT",
    text: "At noon today, there will be a meeting with a UK client.",
  },
  {
    class: "secondary",
    date: "22 March 2024",
    time: "3:45 PM",
    title: "DISCUSSION WITH MARKETING TEAM",
    text: "discussion with the marketing staff on the success of the most recent project<",
  },
  {
    class: "success",
    date: "16 May 2024",
    time: "1:22 AM",
    title: "INVEST IN A NEW HOSTING PLAN",
    text: "today at 2 pm AM, purchase a new hosting package as agreed upon with the management team.",
  },
  {
    class: "warning",
    date: "23 Nov 2024",
    time: "6:56 AM",
    title: "DISCUSSION WITH DESIGNER TEAM",
    text: "discussion with the designer employee on the success of the most recent project.",
  },
  {
    class: "info",
    date: "12 Dec 2024",
    time: "12:05 AM",
    title: "DISCUSSION WITH NEW THEME LAUNCH ",
    text: "discussion with the how many themes made in our portfolio.",
  },
  {
    class: "danger",
    date: "02 Jan 2024",
    time: "6:56 AM",
    title: "PURCHASE NEW CHAIRS FOR OFFICE ",
    text: "online purchase new chairs for office",
  },
];

export const HoverMeetupData = [
  {
    id: 1,
    image: "4.jpg",
    name: "Lillian J. Goodfellow",
    number: "239-664-7751",
  },
  {
    id: 2,
    image: "7.jpg",
    name: "Carolyn A. Sutton",
    number: "218-793-6609",
  },
];

export const HorizontalTimelineData: HorizontalTimelineType[] = [
  {
    id: 1,
    mainClass: "timeline-border",
    child: [
      {
        id: 1,
        colClass: "col-sm-6",
        color: "secondary",
        date: "1 Jan",
        header: "Conference",
        paragraph: "Conferences are intended to bring individuals with similar interests together to discuss problems.",
        verticalLine1: "vertical-line",
      },
      {
        id: 2,
        colClass: "col-sm-6",
        color: "primary",
        date: "4 Feb",
        header: "Meet-up",
        paragraph: "You may connect with males from all around the world using the friend-forward.",
        verticalLine1: "vertical-line",
      },
      {
        id: 3,
        colClass: "horizontal-timeline",
        color: "secondary",
        date: "22 March",
        header: "Meeting",
        paragraph: "If several languages coalesce the grammar of the resulting simple and regular social networking platform.",
        verticalLine1: "vertical-line",
      },
    ],
  },
  {
    id: 2,
    mainClass: "border-0",
    child: [
      {
        id: 1,
        colClass: "col-sm-6",
        verticalLine2: "vertical-line",
        color: "primary",
        date: "4 Jan",
        header: "Conference",
        paragraph: "A gathering of two or more people to talk about issues of interest.",
      },
      {
        id: 2,
        colClass: "col-sm-6",
        verticalLine2: "vertical-line",
        color: "secondary",
        date: "22 March",
        header: "Meeting",
        paragraph: "If several languages coalesce the grammar of the resulting simple and regular social networking platform.",
      },
      {
        id: 3,
        colClass: "horizontal-timeline",
        verticalLine2: "vertical-line",
        color: "primary",
        date: "7 Dec",
        header: "Launch Theme",
        paragraph: "Responsive Website is the approach that suggests website design and development should respond.",
      },
    ],
  },
];

export const CarouselTimelineData = [
  { id: 1, image: "2.jpg" },
  { id: 2, image: "1.jpg" },
  { id: 3, image: "3.jpg" },
];

export const VariationTimeLineDataList = [
  {
    color: "primary",
    date: "8th March, 2024",
    time: "12:00 PM",
    title: "Updated Product",
    subTitle: "Quisque a consequat ante sit amet magna...",
    subTitleClass: "f-light",
  },
  {
    color: "warning",
    date: "5th Feb, 2024",
    time: "Today",
    title: "Added Bew Items",
    subTitle: "Quisque a consequat ante sit amet magna...",
    subTitleClass: "f-light",
    image: ["dashboard-2/product/1.png", "dashboard-2/product/2.png", "dashboard-2/product/3.png"],
  },
  {
    className: "pb-0",
    color: "secondary",
    date: "20th Sep, 2024",
    time: "12:00 PM",
    title: "Tello just like your product",
    subTitle: "Quisque a consequat ante sit amet magna...",
  },
];
