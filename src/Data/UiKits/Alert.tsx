import { AlertCircle, AlertTriangle, BarChart2, CheckSquare, Layers, Loader, Octagon, ThumbsUp } from "react-feather";

export const LinkColorSubTitle = [
  {
    text: "Use the ",
    code: ".alert-link",
  },
  {
    text: " utility class to quickly provide matching colored links within any alert",
  },
];

export const LinkLightSubTitle = [
  {
    text: "Use the ",
    code: ".alert-* ",
  },
  {
    text: "utility class to quickly provide matching colored links within any alert.",
  }
];

export const OutlineAlertSubTitle = [
  {
    text: "Use the ",
    code: ".border-*",
  },
  {
    text: "utility class to quickly provide matching border and border-width within any alert.",
  },
];

export const AlertWithIconSubTitle = [
  {
    text: "Use the ",
    code: ".dismiss-text",
  },
  {
    text: " class to add dismiss text instead of icon",
  },
];

export const DismissAlertSubTitle = [
  {
    text: "Use the ",
    code: ".alert-dismissible",
  },
  {
    text: " utility class to quickly remove the alerts.",
  },
];

export const LiveAlertSubTitle = [
  {
    text: "Click the button below to show an alert,then dismiss it with the built-in close button.",
  },
];

export const LeftBorderAlertSubTitle = [
  {
    text: "Use the ",
    code: ".border-left-wrapper ",
  },
  {
    text: "to change border-left radius.",
  },
];

export const AdditionalAlertSubTitle = [
  {
    text: "Use the ",
    code: ".alert",
  },
  {
    text: " utility class to quickly provide additional content within any alerts.",
  },
];

export const AlertColorData = [
  {
    data: [
      {
        text: "Primary Alert",
        class: "primary d-flex align-items-center",
        alertText: "primary alert",
        textClass: "light",
        icons:<BarChart2 className="stroke-primary"/>
      },
      {
        text: "Secondary Alert",
        class: "secondary d-flex align-items-center",
        textClass: "light",
        alertText: "secondary alert ",
        icons:<Layers className="stroke-secondary"/>

      },
      {
        text: "Success Alert",
        class: "success d-flex align-items-center",
        textClass: "light",
        alertText: "success alert ",
        icons:<AlertTriangle className="stroke-success"/>

      },
      {
        text: "Info Alert",
        textClass: "light",
        class: "info d-flex align-items-center",
        alertText: "info alert ",
        icons:<CheckSquare className="stroke-info"/>

      },
    ],
  },
  {
    data: [
      {
        text: "Warning Alert",
        class: "warning d-flex align-items-center",
        textClass: "light",
        alertText: "warning alert ",
        icons:<AlertCircle className="stroke-warning"/>
      },
      {
        text: "Danger Alert",
        class: "danger d-flex align-items-center",
        alertText: "danger alert ",
        icons:<Octagon className="stroke-danger"/>,
        textClass: "light",
      },
      {
        text: "Light Alert",
        textClass: "dark",
        class: "light d-flex align-items-center",
        alertText: "light alert ",
        icons:<ThumbsUp className="stroke-dark"/>

      },
      {
        text: "Dark Alert",
        textClass: "light",
        class: "dark d-flex align-items-center",
        alertText: "dark alert ",
        icons:<Loader className="stroke-dark"/>

      },
    ],
  },
];

export const AlertLightColorData = [
  {
    data: [
      {
        text: "Primary Light Alert",
        class: "light-primary",
        textClass: "primary",
        alertText: "primary alert",
      },
      {
        text: "Secondary Light Alert",
        class: "light-secondary",
        textClass: "secondary",
        alertText: "secondary alert",
      },
      {
        text: "Success Light Alert",
        class: "light-success",
        textClass: "success",
        alertText: "success alert",
      },
      {
        text: "Info Light Alert",
        class: "light-info",
        textClass: "info",
        alertText: "info alert",
      },
    ],
  },
  {
    data: [
      {
        text: "Warning Light Alert",
        class: "light-warning",
        textClass: "warning",
        alertText: "warning alert",
      },
      {
        text: "Danger Light Alert",
        class: "light-danger",
        textClass: "danger",
        alertText: "danger alert",
      },
      {
        text: "Light Light Alert",
        class: "light-light",
        textClass: "dark",
        alertText: "light alert",
      },
      {
        text: "Dark Light Alert",
        class: "light-dark",
        textClass: "dark",
        alertText: "dark alert",
      },
    ],
  },
];

export const AdditionalAlertData = [
  {
    class: "primary",
    head: "Please! Check your notifications",
    text: "The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.",
    subtext: "The emergency notification system is free and is available in all 50 states.",
  },
  {
    class: "secondary",
    head: "Something went wrong! Please, chrome update.",
    text: "The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.",
    subtext: "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
  },
  {
    class: "success",
    head: "Please! Hidden cameras were not installed.",
    text: "Due to increasingly accessible technology, hidden cameras have grown in popularity among regular people in recent years.",
    subtext: "Consider moving clocks and plush animals from your area if you think they may be concealing cameras because they are both portable items.",
  },
];
