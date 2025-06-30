import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const SideButtons = [
  {
    Name: "primary",
    icon: <Home />,
    title: "Home",
  },
  {
    className: "font-dark",
    Name: "light",
    icon: <Folder />,
    title: "All",
  },
  {
    Name: "light",
    className: "font-dark",
    icon: <Clock />,
    title: "Recent",
  },
  {
    Name: "light",
    className: "font-dark",
    icon: <Star />,
    title: "Starred",
  },
  {
    className: "font-dark",
    Name: "light",
    icon: <AlertCircle />,
    title: "Recovery",
  },
  {
    Name: "light",
    className: "font-dark",
    icon: <Trash2 />,
    title: "Deleted",
  },
];

export const QuickAccessData = [
  {
    id: 1,
    quickClass: "fa fa-youtube-play font-danger",
    quickTitle: "Videos",
  },
  {
    id: 2,
    quickClass: "fa fa-th font-info",
    quickTitle: "Apps",
  },
  {
    id: 3,
    quickClass: "fa fa-file-text-o font-secondary",
    quickTitle: "Document",
  },
  {
    id: 4,
    quickClass: "fa fa-music font-warning",
    quickTitle: "Music",
  },
  {
    id: 5,
    quickClass: "fa fa-download font-primary",
    quickTitle: "Download",
  },
  {
    id: 6,
    quickClass: "fa fa-folder font-info",
    quickTitle: "Folder",
  },
  {
    id: 7,
    quickClass: "fa fa-file-archive-o font-secondary",
    quickTitle: "Zip",
  },
  {
    id: 8,
    quickClass: "fa fa-trash font-danger",
    quickTitle: "Trash",
  },
];

export const FilesListData = [
  {
    id: 1,
    name: "Logo.psd",
    size: "2.0 MB",
    modify: "7 hour ago",
    icon: "folder font-info",
    folderClass: "file-archive-o",
    title: "Tivo admin",
    folderFiles: "20 files",
    folderTime: "2 day ago",
  },
  {
    id: 2,
    name: "Backend.xls",
    size: "3.0 GB",
    modify: "2 Day ago",
    icon: "file-excel-o font-success",
    folderClass: "folder",
    title: "Viho admin",
    folderFiles: "14 files",
    folderTime: "3 day ago",
  },
  {
    id: 3,
    name: "Project.zip",
    size: "1.9 GB",
    modify: "1 Day ago",
    icon: "file-archive-o font-warning",
    folderClass: "file-archive-o",
    title: "Unice admin",
    folderFiles: "15 files",
    folderTime: "3 Day ago",
  },
  {
    id: 4,
    name: "Report.font",
    size: "0.9 KB",
    modify: "1 Day ago",
    icon: "folder font-primary",
    folderClass: "folder",
    title: "koho admin",
    folderFiles: "10 files",
    folderTime: "1 Day ago",
  },
];
