import { CourseCheckboxProps } from "../../Types/MiscellaneousType";

export const FindCourseCheckbox: CourseCheckboxProps[] = [
  {
    id: 1,
    title: "Categories",
    child: [
      {
        id: 1,
        type: "checkbox",
        text: "Accounting",
      },
      {
        id: 2,
        type: "checkbox",
        text: "Design",
      },
      {
        id: 3,
        type: "checkbox",
        text: "Development",
      },
      {
        id: 4,
        type: "checkbox",
        text: "Management",
      },
    ],
  },
  {
    id: 2,
    title: "Duration",
    child: [
      {
        id: 5,
        type: "checkbox",
        text: "0-50 hours",
      },
      {
        id: 6,
        type: "checkbox",
        text: "50-100 hours",
      },
      {
        id: 7,
        type: "checkbox",
        text: "100+ hours",
      },
    ],
  },
  {
    id: 3,
    title: "Price",
    child: [
      {
        id: 8,
        type: "radio",
        text: "All Courses",
        name: "rdo-ani",
      },
      {
        id: 9,
        type: "radio",
        text: "Paid Courses",
        name: "rdo-ani",
      },
      {
        id: 10,
        type: "radio",
        text: "Free Courses",
        name: "rdo-ani",
        check: "checked",
      },
    ],
  },
  {
    id: 4,
    title: "Status",
    child: [
      {
        id: 11,
        type: "checkbox",
        text: "Registration",
      },
      {
        id: 12,
        type: "checkbox",
        text: "Progress",
      },
      {
        id: 13,
        type: "checkbox",
        text: "Completed",
      },
    ],
  },
];

export const CategoriesData = [
  {
    id: 1,
    title: "Design",
    child: [
      {
        id: 1,
        text: "UI Design",
        value: 28,
      },
      {
        id: 2,
        text: "UX Design",
        value: 35,
      },
      {
        id: 3,
        text: "Interface Design",
        value: 17,
      },
      {
        id: 4,
        text: "User Experience",
        value: 26,
      },
    ],
  },
  {
    id: 2,
    title: "Development",
    child: [
      {
        id: 1,
        text: "Frontend Development",
        value: 48,
      },
      {
        id: 2,
        text: "Backend Development",
        value: 19,
      },
    ],
  },
];

export const UpcomingCoursesData = [
  {
    id: 1,
    title: "UX Development",
    anchorText: "Howard Moore",
    value: 18,
    month: "Dec",
    star: [
      { id: 1, class: "star" },
      { id: 2, class: "star" },
      { id: 3, class: "star" },
      { id: 4, class: "star" },
      { id: 5, class: "star-half-o" },
    ],
  },
  {
    id: 2,
    title: "Business Analyst",
    anchorText: "Crystal Markey",
    value: 28,
    month: "Dec",
    star: [
      { id: 1, class: "star" },
      { id: 2, class: "star" },
      { id: 3, class: "star" },
      { id: 4, class: "star" },
      { id: 5, class: "star" },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    anchorText: "Jerry Reel",
    value: 25,
    month: "Jan",
    star: [
      { id: 1, class: "star" },
      { id: 2, class: "star" },
      { id: 3, class: "star" },
      { id: 4, class: "star" },
      { id: 5, class: "star-o" },
    ],
  },
];

export const LearningListData = [
  {
    id: 1,
    image: "1.jpg",
    date: "05",
    month: "January 2024",
    title: "Java Language",
    by: "by: Paige Turner",
    hits: "15 Hits",
    paragraph: "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.",
  },
  {
    id: 2,
    image: "2.jpg",
    date: "10",
    month: "March 2024",
    title: "Web Development",
    by: "by: Petey Cruiser",
    hits: "34 Hits",
    paragraph: "Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.",
  },
];

export const LearningGridData = [
  {
    id: 1,
    src: "3.jpg",
    date: "3 April 2024",
    title: "Web Devlopment.",
    content: "This course is designed to start you on a path toward future studies in web development and design.",
  },
  {
    id: 2,
    src: "1.jpg",
    date: "12 April 2024",
    title: "Web Design.",
    content: "A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn",
  },
  {
    id: 3,
    src: "4.jpg",
    date: "5 May 2024",
    title: "UX Development.",
    content: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
  },
  {
    id: 4,
    src: "2.jpg",
    date: "28 July 2024",
    title: "Spoken English",
    content: "Spoken English Courses are pursued by candidates from all levels to improve their communication skills.",
  },
  {
    id: 5,
    src: "4.jpg",
    date: "29 July 2024",
    title: "Web Devlopment.",
    content: "This course is designed to start you on a path toward future studies in web development and design.",
  },
  {
    id: 6,
    src: "3.jpg",
    date: "30 July 2024",
    title: "Advance Design.",
    content: "A Web Development course belongs to the field of Computer Science and IT. It enables students to learn",
  },
];

export const CommentBoxData = [
  {
    id: 1,
    src: "comment.jpg",
    name: "Jolio Mark",
    paragraph: 'This well put-together theory urges designers to provide their works creative, clear explanations so that spectators may comprehend and, in a sense, "read" them at all times.',
  },
  {
    id: 2,
    src: "9.jpg",
    name: "Jolio Mark",
    paragraph: "Web design is a broad field, thus there are many topics to discuss and factors to take into account. It suggests that the look, layout, overall ambience, content, user experience, and accessibility have all been successfully integrated. To satisfy the timeline and the clients' expectations, hundreds of different yet related jobs must be completed.",
  },
  {
    id: 3,
    src: "4.jpg",
    name: "Jolio Mark",
    paragraph: "They meticulously plan each shot, considering factors such as lighting, angles, and props to convey the desired message effectively. Commercial photographers are adept at using their technical expertise to highlight the unique features and qualities of their subjects, often manipulating lighting and post-processing techniques to achieve the desired aesthetic.",
  }
];

export const SingleBlogContentTop = ['Knowledge may be characterised as factual awareness or as useful skills, and it can also relate to familiarity with things or circumstances. The term "knowledge of facts," also known as "propositional knowledge," refers to a real belief that may be distinguished from an opinion or educated guess by the use of evidence. Although there is broad consensus among philosophers that it is a type of genuine belief, many philosophical debates centre on the necessity for justification, including whether it is even necessary, how to understand it, and if something else is required in addition to it.', "Various processes can be used to create knowledge. Perception, which is the use of the five senses, is the most significant source. Many theories also regard introspection as a way of learning about one's own mental states rather than about external physical things. Memory, logical intuition, inference, and witness are some more sources that are frequently brought up. Some of these sources, according to foundationalism, are fundamental in the sense that they are able to support beliefs independently of other mental states. Coherentists dispute this assertion."];
