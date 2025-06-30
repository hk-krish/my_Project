import { Fragment } from "react/jsx-runtime";

export const BasicTooltipSubTitle = [
  {
    text: "Use the ",
    code: "data-bs-title",
  },
  {
    text: " to change tooltip title and ",
    code: "data-bs-toggle",
  },
  {
    text: " to add tooltip attribute.",
  },
];

export const ColoredTooltipSubTitle = [
  {
    text: "Use the ",
    code: "btn- *",
  },
  {
    text: " to change dark background color and ",
    code: "data-bs-placement='*' ",
  },
  {
    text: "to tooltip positions change.",
  },
];

export const TooltipDirectionSubTitle = [
  {
    text: "Use the ",
    code: "btn- *",
  },
  {
    text: " to change dark background color and",
    code: " data-bs-placement='*'",
  },
  {
    text: "[top/right/bottom/left] to tooltip direction change.",
  },
];

export const HtmlTooltipSubTitle = [
  {
    text: "Use the ",
    code: "bg-*-light",
  },
  {
    text: " to change light background color and ",
    code: "data-bs-title ",
  },
  {
    text: " to the content under the HTML tag.",
  },
];

export const FilledTooltipSubTitle = [
  {
    text: "Tooltip in hover effect through fill dark color.",
    code: "[.btn-outline-*]",
  },
  {
    text: ". and",
    code: "data-bs-title ",
  },
  {
    text: "to the content under the HTML Tag.",
  },
];

export const TooltipPosition = [
  {
    class: "primary",
    position: "top",
  },
  {
    class: "secondary",
    position: "right",
  },
  {
    class: "success",
    position: "bottom",
  },
  {
    class: "warning",
    position: "left",
  },
];

export const HtmlTooltipData = [
  {
    class: "primary",
    text: "Notifications Received",
    tooltip: (
      <Fragment>
        <em>Thank</em> <u>you</u>
      </Fragment>
    ),
  },
  {
    class: "warning",
    text: "Last Warning",
    tooltip: (
      <Fragment>
        <b>Thank</b> <em>you</em>
      </Fragment>
    ),
  },
  {
    class: "danger",
    text: "It's Danger",
    tooltip: (
      <Fragment>
        <em>Thank</em> <u>you</u>
      </Fragment>
    ),
  },
  {
    class: "info",
    text: "Coming soon",
    tooltip: (
      <Fragment>
        <b>Thank</b> <em>you</em>
      </Fragment>
    ),
  },
];

export const FlippedTooltipData = [
  {
    class: "primary",
    text: "Tooltip Primary",
  },
  {
    class: "secondary",
    text: "Tooltip Secondary",
  },
  {
    class: "success",
    text: "Tooltip Success",
  },
  {
    class: "info",
    text: "Tooltip Info",
  },
];

export const ColorTooltipData = [
  {
    class: "primary",
    text: "Primary",
  },
  {
    class: "secondary",
    text: "Secondary",
  },
  {
    class: "success",
    text: "Success",
  },
  {
    class: "warning",
    text: "Warning",
  },
  {
    class: "danger",
    text: "Danger",
  },
  {
    class: "info",
    text: "info",
  },
];