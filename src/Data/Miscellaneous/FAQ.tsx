import { Aperture, BookOpen, Check, Codepen, DollarSign, Edit, FileText, Globe, Link, Mail, MessageCircle, RotateCw, Youtube } from "react-feather";
import { Href } from "../../Constants";

//Faq widgets
export const FaqWidgetsData = [
  {
    id: 1,
    title: "Articles",
    colClass: "box-col-6",
    paragraph: "How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day.",
    icon: <FileText />,
  },
  {
    id: 2,
    title: "Knowledgebase",
    colClass: "col-sm-6 box-col-6",
    paragraph: "A Website Designing course enables learners to use essential designing and programming tools required to do the job. The curriculum is a blend of various themes.",
    icon: <BookOpen />,
  },
  {
    id: 3,
    title: "Support",
    colClass: "col-sm-6 box-col-12",
    paragraph: "The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy.",
    icon: <Aperture />,
  },
];

export const FaqQuestionsData = [
  {
    id: 1,
    titles: [
      {
        id: 1,
        title: "Integrating WordPress with Your Website?",
        paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
      },
      {
        id: 2,
        title: "WordPress Site Maintenance ?",
        paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
      },
      {
        id: 3,
        title: "Meta Tags in WordPress ?",
        paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
      },
      {
        id: 4,
        title: "WordPress in Your Language ?",
        paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
      },
    ],
  },
  {
    id: 2,
    subTitle: "Intellectual Property",
    titles: [
      {
        id: 5,
        title: "WordPress Site Maintenance ?",
        paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
      },
      {
        id: 6,
        title: "WordPress in Your Language ?",
        paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
      },
      {
        id: 7,
        title: "Integrating WordPress with Your Website ?",
        paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
      },
    ],
  },
  {
    id: 3,
    subTitle: "Selling And Buying",
    titles: [
      {
        id: 8,
        title: "WordPress Site Maintenance ?",
        paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
      },
      {
        id: 9,
        title: "Meta Tags in WordPress ?",
        paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
      },
      {
        id: 10,
        title: "Validating a Website ?",
        paragraph: "Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
      },
      {
        id: 11,
        title: "Know Your Sources ?",
        paragraph: "A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information.",
      },
    ],
  },
  {
    id: 4,
    subTitle: "User Accounts",
    titles: [
      {
        id: 12,
        title: "Integrating WordPress with Your Website ?",
        paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
      },
      {
        id: 13,
        title: "WordPress Site Maintenance ?",
        paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
      },
      {
        id: 14,
        title: "WordPress in Your Language ?",
        paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
      },
      {
        id: 15,
        title: "Validating a Website ?",
        paragraph: "Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
      },
      {
        id: 16,
        title: "Meta Tags in WordPress ?",
        paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
      },
    ],
  },
];

export const NavigationData = [
  {
    id: 1,
    child: [
      {
        id: 1,
        link: Href,
        icon: <Edit />,
        text: "Tutorials",
      },
      {
        id: 2,
        link: Href,
        icon: <Globe />,
        text: "Help center",
      },
      {
        id: 3,
        link: `${process.env.PUBLIC_URL}/miscellaneous/knowledgebase`,
        icon: <BookOpen />,
        text: "Knowledgebase",
      },
      {
        id: 4,
        link: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
        icon: <FileText />,
        text: "Articles",
        badge: 42,
      },
      {
        id: 5,
        link: Href,
        icon: <Youtube />,
        text: "Video Tutorials",
        badge: 648,
      },
      {
        id: 6,
        link: Href,
        icon: <MessageCircle />,
        text: "Ask our community",
      },
      {
        id: 7,
        link: `${process.env.PUBLIC_URL}/applications/contacts`,
        icon: <Mail />,
        text: "Contact us",
      },
    ],
  },
  {
    id: 2,
    child: [
      {
        id: 6,
        link: Href,
        icon: <MessageCircle />,
        text: "Ask our community",
      },
      {
        id: 7,
        link: `${process.env.PUBLIC_URL}/applications/contacts`,
        icon: <Mail />,
        text: "Contact us",
      },
    ],
  },
];

export const LatestUpdatesData = [
  {
    id: 1,
    icon: <RotateCw className="font-primary" />,
    anchor: "Debora P. Smith",
    title: "requested money back for a double debit card charge",
    time: "10 minutes ago",
  },
  {
    id: 2,
    icon: <DollarSign className="font-primary" />,
    title: "All sellers have received monthly payouts",
    time: "3 hours ago",
  },
  {
    id: 3,
    icon: <Link className="font-primary" />,
    name: "User Christopher",
    anchor: "Wallace",
    title: "is on hold and awaiting for staff reply",
    time: "21 minutes ago",
  },
  {
    id: 4,
    icon: <Check className="font-primary" />,
    name: "Ticket #697201 has been closed by ",
    anchor: "Berry E. Strickland",
    time: "Dec 2, 11:10",
  },
];

export const FeaturedTutorialsData = [
  {
    id: 1,
    image: "1.jpg",
    description: "A Web Designing course belongs to the field of Computer It enables students to learn various techniques.",
    title: "Web Design",
    date: "Dec 22, 2024",
  },
  {
    id: 2,
    image: "2.jpg",
    description: "A Web Development course belongs to the field of Computer It enables students to learn various techniques.",
    title: "Web Development",
    date: "Dec 12, 2024",
  },
  {
    id: 3,
    image: "3.jpg",
    description: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
    title: "UI Design",
    date: "Dec 10, 2024",
  },
  {
    id: 4,
    image: "4.jpg",
    description: "User Experience design (UX) is the design for machines and software, such as mobile devices, computers.",
    title: "UX Design",
    date: "Dec 20, 2024",
  },
];

export const LatestArticlesVideosFaq = [
  {
    id: 1,
    child: [
      {
        id: 1,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Using Video",
        text: "The web is a very big place, and if you are the typical internet base user.",
      },
      {
        id: 2,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Knows your sources",
        text: "A book giving information on many subjects or on many aspects of one subject.",
      },
      {
        id: 3,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Sources credible/reliable",
        text: "Simple demos of frequently asked questions about using the information resources",
      },
    ],
  },
  {
    id: 2,
    child: [
      {
        id: 1,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Validate website",
        text: "Website is the process of ensuring that the pages on the website conform.",
      },
      {
        id: 2,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Tailwind Design",
        text: "Tailwind is so low-level, it never encourages you to design the same site twice.",
      },
      {
        id: 3,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Knows your sources",
        text: "A book giving information on many subjects or on many aspects of one subject.",
      },
    ],
  },
  {
    id: 3,
    child: [
      {
        id: 1,
        colClass: "col-xl-12 col-md-6",
        icon: <Youtube className="m-r-30" />,
        title: "Sources Demos",
        text: "Simple demos of frequently asked questions about using the information resources",
      },
      {
        id: 2,
        colClass: "col-xl-12 col-md-6",
        icon: <Youtube className="m-r-30" />,
        title: "Validate Html",
        text: "Website is the process of ensuring that the pages on the website conform.",
      },
      {
        id: 3,
        colClass: "col-xl-12",
        icon: <Youtube className="m-r-30" />,
        title: "Web Design",
        text: "Web is so high-level, it never encourages you to design the same site twice",
      },
    ],
  },
];

export const LatestArticlesVideosknowledge = [
  {
    id: 1,
    child: [
      {
        id: 1,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Using Video",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 2,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Vel illum qu",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 3,
        colClass: "col-sm-12",
        icon: <Codepen className="m-r-30" />,
        title: "Cum sociis natoqu",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
    ],
  },
  {
    id: 2,
    child: [
      {
        id: 1,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Donec pede justo",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 2,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Nam quam nunc",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 3,
        colClass: "col-sm-12",
        icon: <FileText className="m-r-30" />,
        title: "Using Video",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
    ],
  },
  {
    id: 3,
    child: [
      {
        id: 1,
        colClass: "col-xl-12 col-md-6",
        icon: <Youtube className="m-r-30" />,
        title: "Vel illum qu",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 2,
        colClass: "col-xl-12 col-md-6",
        icon: <Youtube className="m-r-30" />,
        title: "Cum sociis natoqu",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
      {
        id: 3,
        colClass: "col-xl-12",
        icon: <Youtube className="m-r-30" />,
        title: "Donec pede justo",
        text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      },
    ],
  },
];
