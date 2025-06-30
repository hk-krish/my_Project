import { BasicDropdownType } from "../../Types/UiKitsType";

export const BasicDropdownSubTitle = [
  {
    text: "To create any dropdown, use the ",
    code: 'dat-bs-toggle="dropdown" ',
  },
  {
    text: "attribute.",
  },
];

export const RoundedDropdownSubTitle = [
  {
    text: "Use ",
    code: " rounded-pill ",
  },
  {
    text: "class through to change rounded dropdowns. ",
  },
];

export const SplitDropdownSubTitle = [
  {
    text: "When the",
    code: ".show ",
  },
  {
    text: "class starts, dropdown appears. And split the dropdown ",
    code: ".dropdown-toggle-split",
  },
];

export const HeadingDropdownSubTitle = [
  {
    text: "Main heading and any sub-content in dropdown.",
  },
];

export const DropdownWithInputSubTitle = [
  {
    text: "Use checkbox using dropdown",
    code: "(type='checkbox'/'radio').",
  },
];

export const DarkDropdownSubTitle = [
  {
    code: ".dropdown-menu-dark ",
  },
  {
    text: "class through make dark mode.",
  },
];

export const UniqueDropdownSubTitle = [
  {
    text: "Unique way to represent form dropdown and text dropdown.",
  },
];

export const JustifyContentSubTitle = [
  {
    text: "Use the ",
    code: "(text-start/text-center/text-end)",
  },
  {
    text: " to change dropdown texts.",
  },
];

export const AlignmentsSubTitle = [
  {
    text: "Use ",
    code: "dropdown-menu-lg-start / dropstart / dropup / dropend ",
  },
  {
    text: "this classes through change dropdown directions.",
  },
];

export const HelperCardSubTitle = [
  {
    text: "When the",
    code: ".show ",
  },
  {
    text: "class starts, dropdown appears.",
  },
];

export const DividerDropdownSubTitle = [
  {
    text: "When the",
    code: ".show ",
  },
  {
    text: "class starts, dropdown appears. And",
    code: ".dropdown-divider",
  },
  {
    text: " to change dropdown section.",
  },
];

export const DropdownSizingSubTitle = [
  {
    text: "Use ",
    code: "btn-* ",
  },
  {
    text: "[sm / lg] class through buttons of all sizes including default and split dropdown buttons.",
  },
];

export const BasicDropdownData = [
  {
    class: "primary text-white",
    bodyClass: "dropdown-block",
    text: "Dashboard",
    menulist: ["Project", "Ecommerce", "Crypto"],
  },
  {
    class: "secondary text-white",
    bodyClass: "dropdown-block",
    text: "Ecommerce",
    menulist: ["Product", "Product details", "Cart"],
  },
  {
    class: "warning text-white",
    bodyClass: "dropdown-block",
    text: "Ui kits",
    menulist: ["Typography", "Avatars", "Grid"],
  },
  {
    class: "danger text-white",
    bodyClass: "dropdown-block",
    text: "Error page",
    menulist: ["Error 400", "Error 403", "Error 500"],
  },
];

export const RoundedDropdownData = [
  {
    class: "primary text-white",
    text: "Primary",
    bodyClass: "dropdown-block",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "success text-white",
    text: "Success",
    bodyClass: "dropdown-block",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "info text-white",
    text: "Info",
    bodyClass: "dropdown-block",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "warning text-white",
    text: "Warning",
    bodyClass: "dropdown-block",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "danger text-white",
    text: "danger",
    bodyClass: "dropdown-block",
    menulist: ["Dark", "Light", "Lighter"],
  },
];

export const SplitDropdownData = [
  {
    class: "primary",
    text: "Widgets",
    menulist: ["General", "Chart"],
  },
  {
    class: "secondary",
    text: "Animations",
    menulist: ["Animate", "AOS animations"],
  },
  {
    class: "success",
    text: "Charts",
    menulist: ["Echarts", "Apex chart"],
  },
  {
    class: "info",
    text: "Email",
    menulist: ["Email app", "Email compose"],
  },
  {
    class: "warning",
    text: "Icons",
    menulist: ["Flag icons", "Fontawesome icons", "Ico icons", "Feather icons"],
  },
  {
    class: "danger",
    text: "Learning",
    menulist: ["Learning List", "Detailed Course"],
  },
];

export const JustifyData = [
  {
    class: "primary text-white",
    bodyClass: "text-start dropdown-block",
    text: "Text-left",
    menulist: ["Hello..", "How are you?", "What are you doing? "],
  },
  {
    class: "info text-white",
    bodyClass: "text-center dropdown-block",
    text: "Text-center",
    menulist: ["Chocolate", "Ice-cream", "Trophy"],
  },
  {
    class: "primary text-white",
    bodyClass: "text-end dropdown-block",
    text: "Text-right",
    menulist: ["I'm fine.", "ohh wow!!", "That's the good news! "],
  },
];

export const AlignmentData: BasicDropdownType[] = [
  {
    class: "warning text-white",
    divClass: "group",
    position: "up",
    text: "Warning top",
    menulist: ["Menu item", "Menu item", "Menu item"],
  },
  {
    class: "success text-white",
    divClass: "group",
    position: "end",
    text: "Success right",
    menulist: ["Menu item", "Menu item", "Menu item"],
  },
  {
    class: "primary text-white",
    divClass: "group",
    position:"down",
    text: "Primary bottom",
    menulist: ["Menu item", "Menu item", "Menu item"],
  },
  {
    class: "danger text-white",
    divClass: "group",
    position: "start",
    text: "Danger",
    menulist: ["Menu item", "Menu item", "Menu item"],
  },
];

export const HelperCardData = [
  {
    class: "secondary text-white",
    text: "Helper Card",
    menulist: ["Learn More!", "There is a lot of information available here"],
  },
  {
    class: "warning text-white",
    text: "Warning Card",
    menulist: ["Warning!", "Please! Check your notifications."],
  },
  {
    class: "info text-white",
    text: "Alert Card",
    menulist: ["Danger", "It's a danger path."],
  },
];

export const DividerCommonData = [
  {
    class: "success text-white",
    text: "Wishlist",
    menulist: ["Shoes", "Bag", "Clothes ", "", "Separated link"],
  },
  {
    class: "primary text-white",
    text: "Sports ",
    menulist: ["Badminton", "Tenis ", "Kho-Kho", "", "Separated link"],
  },
  {
    class: "secondary text-white",
    text: "Colors ",
    menulist: ["Orange", "Yellow ", "Red ", "", "Separated link"],
  },
];

export const DropdownSizingData = [
  {
    class: "info text-white",
    text: "Large button",
    size:"lg",
    menulist: ["Small button", "Medium button", "Large button ", "", "Very large button"],
  },
  {
    class: "dark text-white",
    text: "Small button",
    size:"sm",
    menulist: ["Small button", "Very small button ", "Extra small button", "", "Extra extra small"],
  },
];
