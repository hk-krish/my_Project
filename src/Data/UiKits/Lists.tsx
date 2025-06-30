import { Fragment } from "react/jsx-runtime";
import { dynamicImage, Image } from "../../Utils";

export const DefaultListSubTitle = [
  {
    text: "Use the ",
    code: ".list-group ",
  },
  {
    text: "define the list of items. and used ",
    code: ".list-group-item ",
  },
  {
    text: "to indicate the current content.",
  },
];

export const ActiveListSubTitle = [
  {
    text: "Use",
    code: ".active ",
  },
  {
    text: "to a",
    code: ".list-group-item",
  },
  {
    text: " to indicate the current active.",
  },
];

export const FlushListSubTitle = [
  {
    text: "Use ",
    code: " .list-group-flush",
  },
  {
    text: " to remove some borders and rounded corners to render list group items.",
  },
];

export const ContextualClassSubTitle = [
  {
    text: "Use contextual classes to style list items with a stateful background and color.",
    code: ".list-light-*",
  },
  {
    text: " and ",
    code: "txt-*.",
  },
];

export const HorizontalListSubTitle = [
  {
    text: "Use ",
    code: ".list-group-horizontal",
  },
  {
    text: "to change the layout of list group items from vertical to horizontal across all breakpoints.",
    code: ".list-group-horizontal-[sm/md/lg/xl/xxl].",
  },
];

export const CustomListSubTitle = [
  {
    text: "Use the ",
    code: ".list-group-item",
  },
  {
    text: " through make custom design of all lists.",
  },
];

export const ListWithCheckboxSubTitle = [
  {
    text: "Use the ",
    code: ".form-check-input ",
  },
  {
    text: "to check your checkbox.",
  },
];

export const ListWithRadioSubTitle = [
  {
    text: "Use the ",
    code: ".form-check-input ",
  },
  {
    text: "to check your radio buttons.",
  },
];

export const ListWithNumberSubTitle = [
  {
    text: "Use the ",
    code: ".list-group-numbered",
  },
  {
    text: " to ordered wise print numbers.",
  },
];

export const JsBehaviorSubTitle = [
  {
    text: "Use the tab JavaScript plugin—include it individually or through the compiled",
    code: " bootstrap.js ",
  },
  {
    text: "file to extend our list group to create table panes of local content.",
  },
];

export const NumBadgeListSubTitle = [
  {
    text: "Use the",
    code: " .list-group-numbered",
  },
  {
    text: " modifier class to  numbered list group items.Numbers are generated via CSS for better placement inside list group items.",
  },
];

export const DisableListSubTitle = [
  {
    text: "Use",
    code: " .disabled ",
  },
  {
    text: "to a ",
    code: ".list-group-item",
  },
  {
    text: " to make it appear disabled.",
  },
];

export const ScrollableListSubTitle = [
  {
    text: "Use the property ",
    code: "overflow:auto ",
  },
  {
    text: "through scrollable lists.",
  },
];

export const ContextualListData = [
  {
    class: "list-light-primary",
    htmlText: (
      <Fragment>
        This is Primary bg you can use <em className="txt-primary fw-bold">.list-light-primary</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-secondary",
    htmlText: (
      <Fragment>
        This is Secondary bg you can use <em className="txt-secondary fw-bold">.list-light-secondary</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-success",
    htmlText: (
      <Fragment>
        This is Success bg you can use <em className="txt-success fw-bold">.list-light-success</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-danger",
    htmlText: (
      <Fragment>
        This is Danger bg you can use<em className="txt-danger fw-bold">.list-light-danger</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-warning",
    htmlText: (
      <Fragment>
        This is Warning bg you can use <em className="txt-warning fw-bold">.list-light-warning</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-info",
    htmlText: (
      <Fragment>
        This is Info bg you can use <em className="txt-info fw-bold">.list-light-info</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-white",
    htmlText: (
      <Fragment>
        This is White bg you can use <em className="txt-white fw-bold">.list-light-white</em> class.
      </Fragment>
    ),
  },
  {
    class: "list-light-dark",
    htmlText: (
      <Fragment>
        This is White bg you can use <em className="txt-white fw-bold">.list-light-dark</em> class.
      </Fragment>
    ),
  },
];

export const HorizontalColor: string[] = ["border-left-primary", "border-left-secondary", "border-left-warning", "border-left-success", "border-left-info"];

export const HorizontalListData = [
  {
    class: "list-group-horizontal-sm pb-2",
    data: ["Product", "Product details", "Pricing", "Payment details", "Checkout", "Mega options"],
  },
  {
    class: "list-group-horizontal-md pb-2",
    data: ["Basic table", "Sizing table ", "Border table", "Basic inputs ", "Form validations"],
  },
  {
    class: "list-group-horizontal-lg pb-2",
    data: ["Flat style", "Edge style", "Button group", "Rating", "Crypto"],
  },
  {
    class: "list-group-horizontal-xl pb-2",
    data: ["Blog", "Blog details", "Blog single", "Order history"],
  },
  {
    class: "list-group-horizontal-xxl",
    data: ["Gallery grid ", "Gallery desc", "Masonry Desc"],
  },
];

export const CustomListData = [
  {
    class: "active bg-primary",
    head: "Molly Boake",
    mail: "MollyBoake@rhyta.com",
    image: "1.jpg",
    span: "5 days ago",
    subtext: "Next step is to choose a tone of voice for your content type. From casual to convincing, pick one from 20+ tones in the dropdown.Why did we say “snag eyeballs” instead of “get attention?” Why do we say “brick-and-mortar words” instead of “concrete words?” Because, in your email subject lines, it’s better to use words that people can picture.",
    follower: "20K Followers",
  },
  {
    class: "list-hover-primary",
    head: "Gabrielle Fahey",
    mail: "GabrielleFahey@dayrep.com",
    image: "3.png",
    span: "10 days ago",
    subtext: "Your aim with this blog is to advertise yourself and your services in blog design. That means it's vital to create content about just that: blog design. Anything else on your page may act as a distraction to your potential customers, and you don't want that!",
    follower: "100 Followers",
  },
  {
    class: "list-hover-primary",
    head: "Lucinda Moseley",
    mail: "LucindaMoseley@teleworm.us",
    image: "2.jpg",
    span: "3 days ago",
    subtext: "People who are looking to hire a web designer may not know what to look out for. This will give you a chance to prove your trustworthiness by providing potential customers with advice and will let you sell your services by highlighting their best qualities.",
    follower: "23M Followers",
  },
];

export const ListCheckboxData = [
  {
    class: "primary",
    text: "Auto Start",
    idFor: "firstCheckbox",
  },
  {
    class: "secondary",
    text: "Auto Update",
    idFor: "secondCheckbox",
  },
  {
    class: "success",
    text: "Don't check auth key",
    idFor: "thirdCheckbox",
  },
  {
    class: "warning",
    text: "Success all",
    idFor: "fourthCheckbox",
  },
];

export const ListRadioData = [
  {
    class: "radio-secondary active",
    text: " Meditations",
    check: "checked",
  },
  {
    class: "radio-info",
    text: " Read a book",
  },
  {
    class: "radio-warning",
    text: " Learn to code ",
  },
  {
    class: "radio-danger",
    text: " Drink more water",
  },
];

export const NumberListData = [
  {
    class: "txt-primary",
    text: "known for delivery of useful and usable solutions",
  },
  {
    class: "txt-danger",
    text: "Solve your problem with us",
  },
  {
    class: "txt-success",
    text: "Certified Professionals",
  },
  {
    class: "txt-warning",
    text: "Growth-Driven ",
  },
];

export const JsBehaviorNavData = ["Home", "Profile", "Contact Us", "Settings"];


export const JsBehaviorListData = [
  {
    id: "1",
    class: "fade list-behaviors",
    htmlText: (
      <Fragment>
        <div className="d-flex mb-xl-4 list-behavior-1 mb-lg-2">
          <div className="flex-shrink-0">
            <Image className="tab-img img-fluid" src={dynamicImage(`blog/img.png`)} alt="home" />
          </div>
          <div className="flex-grow-1">
            <p className="mb-xl-0 mb-sm-4">{"We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively."}</p>
          </div>
        </div>
        <div className="d-flex list-behavior-1 mb-xl-4">
          <div className="flex-shrink-0">
            <Image className="tab-img img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="home" />
          </div>
          <div className="flex-grow-1">
            <p className="mb-0">{"When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value, and guiding visitors to the next step all depend on a page's design."}</p>
          </div>
        </div>
      </Fragment>
    ),
  },
  {
    id: "2",
    class: "fade dark-list",
    htmlText: (
      <div className="flex-space align-items-center contact-profile">
        <Image className="tab-img b-r-10" src={dynamicImage(`avtar/11.jpg`)} alt="profile" />
        <ul className="d-flex flex-column gap-2">
          <li>
            <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020
          </li>
          <li>
            <strong>Mail Us:</strong>contact@us@gmail.com
          </li>
          <li>
            <strong>Contact Number: </strong>(954) 357-7760
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "3",
    class: "fade",
    htmlText: (
      <ul className="d-flex flex-column gap-1">
        <li>Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.</li>
        <li>
          <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020
        </li>
        <li>
          <strong>Mail Us:</strong>contact@us@gmail.com
        </li>
        <li>
          <strong>Contact Number: </strong>(954) 357-7760
        </li>
      </ul>
    ),
  },
  {
    id: "4",
    class: "fade",
    htmlText: (
      <ul className="d-flex flex-column gap-2">
        <li>
          <strong>{"Available pages in Theme: "}</strong>
        </li>
        <li>{"--> Typography: Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader."}</li>
        <li>{"--> Tooltip: A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI)."}</li>
      </ul>
    ),
  },
];

export const BadgeListData = [
  {
    text: "Stella Nowland",
    badgeClass: "warning",
    badgeText: "Freelance",
  },
  {
    text: "Lola Stanford",
    badgeClass: "danger text-white",
    badgeText: "Issue",
  },
  {
    text: "Caitlin Coungeau",
    badgeClass: "primary text-white",
    badgeText: "Social",
  },
  {
    text: "Graciela W. McClaran",
    badgeClass: "danger text-white",
    badgeText: "Issue",
  },
];

export const DisableListData = [
  {
    class: "list-hover-primary  active",
    image: "1.jpg",
    text: "Teresa J. Mosteller",
  },
  {
    class: "list-hover-primary ",
    image: "3.png",
    text: "Gloria D. Acheson",
  },
  {
    class: "disabled",
    image: "2.jpg",
    text: "Sharon C. Obrien",
  },
  {
    class: "disabled",
    image: "5.jpg",
    text: "Bryan A. Owens",
  },
];

export const ScrollableListData = [
  {
    image: "9.jpg",
    head: "Molly Boake",
    mail: "MollyBoake@rhyta.com",
    small: "5 days ago",
  },
  {
    image: "10.jpg",
    head: "Gabrielle Fahey",
    mail: "GabrielleFahey@dayrep.com",
    small: "10 days ago",
  },
  {
    image: "2.jpg",
    head: "Lucinda Moseley",
    mail: "LucindaMoseley@teleworm.us",
    small: "3 days ago",
  },
  {
    image: "12.png",
    head: "Francis K. Henriques",
    mail: "FrancisKHenriques@teleworm.us",
    small: "2 days ago",
  },
  {
    image: "14.png",
    head: "Jose A. Seay",
    mail: "JoseASeay@rhyta.com",
    small: "15 days ago",
  },
  {
    image: "3.jpg",
    head: "Phil F. Cunningham",
    mail: "PhilFCunningham@dayrep.com",
    small: "6 days ago",
  },
  {
    image: "7.jpg",
    head: "Richard E. Johnson",
    mail: "RichardEJohnson@teleworm.us",
    small: "20 days ago",
  },
  {
    image: "2.png",
    head: "Lawrence L. Nash",
    mail: "LawrenceLNash@jourrapide.com",
    small: "8 days ago",
  },
];
