import { Fragment } from "react/jsx-runtime";
import { dynamicImage, Image } from "../../Utils";

export const CustomScrollbarSubTitle = [
  {
    text: "Used ",
    code: ".vertical-scroll ",
  },
  {
    text: "and ",
    code: ".scroll-demo ",
  },
  {
    text: "through design scrollbar.",
  },
];

export const ProfileScrollSubTitle = [
  {
    text: "Use the ",
    code: ".list-group-item ",
  },
  {
    text: " through made profile and with used ",
    code: " .vertical-scroll . ",
  },
];

export const SmallSizeScrollSubTitle = [
  {
    text: "Use the ",
    code: ".scrollbar-margins ",
  },
  {
    text: "through small scroll and image is draggable. ",
  },
];

export const BadgesScrollSubTitle = [
  {
    text: "Use the",
    code: ".badge ",
  },
  {
    text: " class through create more badges and ",
    code: ".vertical-scroll ",
  },
  {
    text: "used as vertical scroll. ",
  },
];

export const ScrollContentSubTitle = [
  {
    text: "Use the ",
    code: ".list-group-item ",
  },
  {
    text: "through made profile and with used ",
    code: ".vertical-scroll.",
  },
];

export const HorizontalScrollSubTitle = [
  {
    text: "Use the ",
    code: ".horizontal-scroll ",
  },
  {
    text: "through move content horizontally.",
  },
];

export const BothSideScrollSubTitle = [
  {
    text: "Use the ",
    code: ".visible-scroll ",
  },
  {
    text: "through visible both side scrollbar.",
  },
];

export const BadgeScrollData = [
  {
    text: "Stella Nowland",
    class: "warning",
    badge: "Freelance",
  },
  {
    text: "Lola Stanford",
    class: "danger text-white",
    badge: "Issue",
  },
  {
    text: "Caitlin Coungeau",
    class: "primary text-white",
    badge: "Social",
  },
  {
    text: "Graciela W. McClaran",
    class: "danger text-white",
    badge: "Issue",
  },
  {
    text: "Derek T. Aldridge",
    class: "warning text-white",
    badge: "Freelance ",
  },
  {
    text: "Annie A. Riley",
    class: "primary text-white",
    badge: "Social ",
  },
  {
    text: "Hana J. Boyd",
    class: "danger text-white",
    badge: "Issue",
  },
  {
    text: "Karen R. Pryce",
    class: "warning text-white",
    badge: "Freelance",
  },
  {
    text: "Cordie C. Pope",
    class: "primary text-white",
    badge: "Social",
  },
];

export const ProfileScrollData = [
  {
    image: "3.png",
    text: "Gloria D. Acheson",
  },
  {
    image: "2.jpg",
    text: "Sharon C. Obrien",
  },
  {
    image: "5.jpg",
    text: "Bryan A. Owens",
  },
  {
    image: "12.png",
    text: "Ronald M. Enger",
  },
  {
    image: "14.png",
    text: "Herbert A. Clary",
  },
  {
    image: "6.jpg",
    text: "Dino A. Cannon",
  },
  {
    image: "3.jpg",
    text: "Danny A. McLean",
  },
  {
    image: "2.jpg",
    text: "Betty K. Curtis",
  },
];
export const ScrollableContentData = [
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

export const BothSideScroll = [
  {
    text: (
      <Fragment>
        <div className="visible-wrapper">
          <Image src={dynamicImage(`banner/2.jpg`)} alt="office-work" />
        </div>
        <div className="pt-3">
          {"Inspiration can take many different forms, and "}
          <em className="txt-danger">{"professional growth never stops"}</em>
          {". In light of this, we've compiled a comprehensive list of web design blogs that will keep your mind stimulated for the entire year. You won't find any stinkers on this list, so don't worry. We value your time and believe that you should only receive the greatest. Because of this, we've only gathered web design blogs that have recently being updated. Get ready to add numerous subscriptions by creating your Feebly account."}
          <ul className="d-flex flex-column gap-1">
            <li>{"--> Responsive..."}</li>
            <li>{"--> Secure your domain..."}</li>
            <li>{"--> Testing..."}</li>
            <li>{"--> Content creation..."}</li>
            <li>{"--> Visual elements..."}</li>
            <li>{"--> Launch..."}</li>
          </ul>
        </div>
      </Fragment>
    ),
  },
  {
    text: (
      <Fragment>
        <h3 className="pb-2">{"Latest trends"}</h3>
        <p>{"You should stay current with all the most recent advances in the business whether you operate as a freelance web designer or for an agency or design studio. You may be sure you're constantly providing the most intelligent and original design solutions by doing this."}</p>
        <p>{"You can keep up with evolving design trends by reading web design blogs. You'll need to be able to comprehend new trends' causes and how they affect user experience. Additionally, you'll discover upgrades to current tools as well as new ones that have recently hit the market."}</p>
        <div className="visible-wrapper">
          <Image src={dynamicImage(`email/3.jpg`)} alt="office" />
        </div>
      </Fragment>
    ),
  },
  {
    text: (
      <Fragment>
        <h3 className="pb-2">{"The best UX designer"}</h3>
        <span>{"The internet is teeming with free resources, no matter what stage of your UX journey you're in, and UX design blogs should be your first point of call. The abundance of blogs available, though, can be somewhat of a double-edged sword because there are so many to choose from. How do you decide which blogs are actually worthwhile reading?"}</span>
        <div>
          {"We've collected a selection of the top UX design blogs available right now to spare you hours of scrolling and sorting through search results. We possess:"}
          <ol className="d-flex flex-column gap-1">
            <li>
              <strong>{"Muzli "}</strong>
            </li>
            <li>
              <strong>{"Facebook Design"} </strong>
            </li>
            <li>
              <strong>{"Awwwards"}</strong>
            </li>
          </ol>
        </div>
        <p>{"If you already work in the UX field, the Inside Design blog has all the information you need to expand your knowledge, especially if you're interested in streamlining your UX teams and procedures and getting a better understanding of the whole product design and development process. This is an excellent location to keep an eye out for the most recent UX trends, tools, resources, and events because they are always adding new stuff."}</p>
      </Fragment>
    ),
  },
  {
    text: (
      <Fragment>
        <h3 className="pb-2">{"How to make best website ideas "}</h3>
        <div className="visible-wrapper">
          <Image src={dynamicImage(`banner/3.jpg`)} alt="website" />
        </div>
        <ul className="d-flex flex-column gap-1 pt-2">
          <li>{"--> Blog "}</li>
          <li>{"--> Portfolio website "}</li>
          <li>{"--> Event website"} </li>
          <li>{"--> personal website "}</li>
          <li>{"--> Fashion website "}</li>
          <li>{"--> Admin dashboards "}</li>
          <li>{"--> E-commerce website "}</li>
          <li>{"--> Beauty website "}</li>
          <li>{"--> Food website"}</li>
          <li>{"--> Animation website "}</li>
          <li>{"--> Financial website"}</li>
        </ul>
      </Fragment>
    ),
  },
];
