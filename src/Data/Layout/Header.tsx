import { FileText, Mail, Settings, User } from "react-feather";
import { routes } from "../../Routers/routes";

export const notifications = [
  { id: 1, avatar: "avtar/2.jpg", text: "You have new finical page design.", time: "Today 11:45pm" },
  { id: 2, avatar: "avtar/17.jpg", text: "Congrats! you all task for today.", time: "Today 01:05pm" },
  { id: 3, avatar: "avtar/18.jpg", text: "You have new in landing page design.", time: "Today 06:55pm" },
  { id: 4, avatar: "avtar/19.jpg", text: "Congrats! you all task for today.", time: "Today 06:55pm" },
];

export const bookMarks = [
  { icon: "form", title: "Forms", url: routes.Forms.Controls.Validation },
  { icon: "user", title: "Profile", url: routes.Users.Profile },
  { icon: "table", title: "Tables", url: routes.Tables.Reactstrap.Basic },
];

export const messages = [
  { image: "user/3.jpg", title: "Helen Walter", text: "Do you want to go see movie?" },
  { image: "user/6.jpg", title: "Jason Borne", text: "Thank you for rating us." },
  { image: "user/10.jpg", title: "Sarah Loren", text: "What`s project report update?" },
];

export const carts = [
  { id: 1, image: "05.jpg", name: "Women's Track Suit", price: 65.0, quantity: 8 },
  { id: 2, image: "02.jpg", name: "Women Top", price: 50.0, quantity: 10 },
];

export const languages = [
  { value: "en", icon: "us", name: "English" },
  { value: "du", icon: "de", name: "Deutsch" },
  { value: "es", icon: "es", name: "Español" },
  { value: "fr", icon: "fr", name: "Français" },
  { value: "pt", icon: "pt", name: "Português" },
  { value: "cn", icon: "cn", name: "简体中文" },
  { value: "ae", icon: "ae", name: "لعربية" },
];

export const profileList = [
  { id: 1, link: routes.Users.Profile, icon: <User />, text: "Account" },
  { id: 2, link: routes.LetterBox, icon: <Mail />, text: "Inbox" },
  { id: 3, link: routes.Tasks, icon: <FileText />, text: "Taskboard" },
  { id: 4, link: routes.Users.Edit, icon: <Settings />, text: "Settings" },
];
