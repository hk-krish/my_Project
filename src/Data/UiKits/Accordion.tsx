import { Bell, CheckSquare, MessageCircle } from "react-feather";
import { Fragment } from "react/jsx-runtime";

export const SimpleAccordionSubTitle = [
  {
    text: "Click the accordions below to expand/collapse the accordion content. Use the ",
    code: ".accordion ",
  },
  {
    text: ".",
  },
];

export const SimpleAccordion1 = (
  <p className="mb-0">
    Web design <em className="font-danger">identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
  </p>
);

export const SimpleAccordion2 = (
  <p>
    <strong> Search engine optimization: </strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it. <br /> <br />
    <strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease. <br />
    <br /> <strong> Improved sales:</strong>Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.
  </p>
);

export const SimpleAccordion3 = (
  <Fragment>
    <p>The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:</p>
    <ul className="d-flex flex-column gap-2 accordions-content">
      <li>{"--> Layout"}</li>
      <li>{"--> Images"}</li>
      <li>{"--> Visual hierarchy"}</li>
      <li>{"--> Color scheme"}</li>
      <li>{"--> Typography"}</li>
      <li>{"--> Navigation"}</li>
      <li>{"--> Readability"}</li>
      <li>{"--> Content"}</li>
    </ul>
  </Fragment>
);

export const AccordionList = [
  {
    id: "1",
    icon: true,
    accordionHeading: "What do web designers do ?",
    bodyText: SimpleAccordion1,
  },
  {
    id: "2",
    icon: true,
    accordionHeading: "What is the use of web design?",
    bodyText: SimpleAccordion2,
  },
  {
    id: "3",
    icon: true,
    accordionHeading: "What are the elements of web design?",
    bodyText: SimpleAccordion3,
  },
];

export const FlushAccordionSubTitle = [
  {
    text: "Add ",
    code: ".accordion-flush",
  },
  {
    text: " to remove the default",
    code: "background-color",
  },
  {
    text: " , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.",
  },
];

export const MultipleCollapseSubTitle = [
  {
    text: "A ",
    code: "<button/>",
  },
  {
    text: " can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute",
  },
];

export const IconAccordionSubTitle = [
  {
    text: "Use the ",
    code: ".accordion ",
  },
  {
    text: "&",
    code: "feather icons ",
  },
  {
    text: "through change look icons accordion.",
  },
];

export const OutlineAccordionSubTitle = [
  {
    text: "make custom  ",
    code: ".accordion-wrapper",
  },
  {
    text: " class use to bring border-left side.",
  },
];

export const HorizontalAccordionSubTitle = [
  {
    text: "Add the ",
    code: ".collapse-horizontal",
  },
  {
    text: " and ",
    code: "Row & Col ",
  },
  {
    text: " modifier class and tag to transition the width instead of height and set a width on the immediate child element.",
  },
];

export const CollapseAccordionSubTitle = [
  {
    text: "you can change state by using",
    code: " onClick",
  },
  {
    text: " event and change toggle show and hide without any collapse class.",
  },
];

export const FlushData = [
  {
    id: "flush1",
    head: "What is bootstrap?",
    child: [{ text: "--> Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website." }, { text: "--> It is absolutely free to download and use." }],
  },
  {
    id: "flush2",
    head: "Why Should You Use Bootstrap?",
    child: [{ text: "First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started." }, { text: "One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them." }, { text: "You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. " }, { text: "To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects." }],
  },
  {
    id: "flush3",
    head: "Bootstrap Image System",
    child: [{ text: "Bootstrap handles the image display and responsiveness with its predefined HTML and CSSrules." }, { text: "Adding the .img-responsive class will automatically resize images based on theusers' screen size. This will benefit your website’s performance, as reducing image sizes ispart of the site optimization process." }, { text: "Bootstrap also provides additional classes likeimg-circle and .img-rounded, which help to modify the images' shape." }],
  },
];

export const IconDemoData = [
  {
    id: "icon1",
    icon: <Bell className="svg-wrapper me-2" />,
    head: " Keep in touch",
    text: (
      <p>
        <em className="txt-danger">
          {'" This page might not behave as expected because Windows Internet Explorer'}
          {"isn't"} {'configured to load unsigned ActiveX controls."'}
        </em>
        {'or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)'}
      </p>
    ),
  },
  {
    id: "icon2",
    icon: <MessageCircle className="svg-wrapper me-2" />,
    head: " Chats with others",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>{"You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails."}</li>
        <li>
          <strong>{"Chat:"}</strong> {"Use when you prefer a dedicated chat experience and don't mind switching between different apps."}
        </li>
      </ul>
    ),
  },
  {
    id: "icon3",
    icon: <CheckSquare className="svg-wrapper me-2" />,
    head: " Right way to code ",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>{"1) Decide on the indentation and keep it that way."}</li>
        <li>{"2) Make comments."}</li>
        <li>{"3) Consistent name scheme."}</li>
        <li>{"4) Don't repeat code."}</li>
        <li>{"5) Avoid writing long code lines."}</li>
        <li>{"6) Break down a big task into smaller chunks."}</li>
        <li>{"7) Organize your program into smaller files."}</li>
        <li>{"8) Write clever code that is also readable."}</li>
      </ul>
    ),
  },
];
