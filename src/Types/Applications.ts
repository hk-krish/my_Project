import { ChangeEvent } from "react";
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { InputType } from "reactstrap/types/lib/Input";

//Social App
export interface SocialAppCallBackType {
  callback: (tab: number) => void;
}

export interface SocialAppTabContentProp {
  activeTab: number;
}

export interface HeaderWithIconPropsTypes {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  Heading: string;
}

export interface MyProfileClassCollapseProp {
  isFilter: boolean;
}

export interface PeopleYouMayKnowProp {
  heading: string;
}

export interface MyActivityProp {
  heading: string;
}

//Contacts
export interface UserProps {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  mobile: string;
}

export interface ContactStateProps {
  users: UserProps[];
  data: UserProps[];
  tempId: number;
  validate: boolean;
}

export interface ContactSidebarProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  changeTab: (tab: number) => void;
}

export interface AddContactFormProps {
  setModal: (value: boolean) => void;
  toggle: () => void;
}

export interface ContactFormProps {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

export interface ContactDetailsPanelProp {
  activeTab: number;
}

export interface EmptyStateProp {
  title?: string;
}

export interface PersonalTabProp {
  historyToggle: () => void;
}

export interface ContactListProps {
  users: UserProps[];
  userCallback: (user: UserCallbackUserType) => void;
  selectedUser: UserCallbackUserType;
}

export interface UpdateContactFormProps {
  editData: Partial<UserProps>;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface ContactDetailsProps {
  selectedUser: UserCallbackUserType;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
  historyToggle: () => void;
}

export interface UserActionsProps {
  selectedUser: UserCallbackUserType;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface PrintModalProps {
  printModal: boolean;
  selectedUser: UserCallbackUserType;
  toggleCallback: (toggle: boolean) => void;
}

export interface UserCallbackUserType {
  id?: number | undefined;
  name?: string;
  surname?: string;
  age?: number;
  mobile?: string;
  avatar?: string;
  email?: string;
}

export interface UserUpdateType {
  name?: string;
  surname?: string;
  email?: string;
  mobile?: string;
}

export interface HistoryCardProps {
  historyToggle: () => void;
  showHistory: boolean;
}

export interface OrganizationListProps {
  orgActiveTab: number;
  setOrgActiveTab: (value: number) => void;
}

interface OrganizationTabPaneItems {
  id: number;
  avatar: string;
  name: string;
  email: string;
  gender: string;
}

export interface OrganizationTabPaneProps {
  user: OrganizationTabPaneItems;
}

//Tasks
export interface NavClassType {
  activeToggle: (tab: string) => void;
}

export interface AddTaskData {
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface TabClassProp {
  activeTab: string;
}

export interface EmptyTaskClassProp {
  title: string;
}

export interface CreateTagProp {
  tagCallback: (val: boolean) => void;
  tagModal: boolean;
  setTagModal: (value: boolean) => void;
}

export interface AllTaskType {
  id: number;
  title: string;
  collection: string;
  description: string;
}

export interface TaskSliceType {
  allTask: [] | AllTaskType[];
  taskFilter: boolean;
  validation: boolean;
  myTask: [] | AllTaskType[];
  addModal: boolean;
  activeTab: string;
}

//Users
export interface CommonUserFooterType {
  listClass?: string;
}

export interface User {
  id: number;
  avatar?: string;
  icon?: string;
  name?: string;
  email?: string;
  totalPost?: string;
  follower?: string;
  following?: string;
}


export interface CommonUserFormGroupType {
  title: string;
  placeholder?: string;
  type: InputType;
  defaultValue?: string;
  row?: number;
}

export interface userCardTypes {
  id: number;
  card_bg: string;
  avatar: string;
  name: string;
  userProfile: string;
  follower: string;
  following: string;
  totalPost: string;
}

export interface UserCardsFooterProp {
  item: userCardTypes;
}

//Search Result
export interface SearchTabsPropsType {
  callbackActive: (val: number) => void;
  activeTabValue: number;
}
export interface InformationCommonPropsType {
  item: {
    id?: number;
    url: string;
    title: string;
    detail: string;
    star: string;
    vote: string;
    news: string;
    videoLink: string;
    showStar?: boolean;
  };
}

export interface SearchTabContentProp {
  activeTab: number;
}

export interface PagesSortProp {
  pageClass: string;
}

//Chats
export interface AllMemberType {
  id: number;
  name: string;
  image: string;
  status: string;
  online: string;
  time: string;
  badge?: number;
}

export interface MessageTypes {
  name?: string;
  sender: number;
  class?: string;
  time: string;
  text: string;
  status?: boolean;
}

export interface ChatsTypes {
  id?: number;
  users: number[];
  lastMessageTime: string;
  messages: MessageTypes[];
  time?: string;
}

export interface ChatSliceType {
  allMembers: AllMemberType[] | [];
  chats: ChatsTypes[] | [];
  members: AllMemberType[] | [];
  currentUser: null | AllMemberType;
  selectedUser?: null | AllMemberType;
}

export interface DropClassTypes {
  dropClass?: string;
}

// Bookmarks

export interface BookmarkFormModalProps {
  isOpen: boolean;
  toggle: () => void;
  initialData?: BookMarkData | null;
}

export interface BookMarkData {
  id: number;
  fillStar: boolean;
  image: string;
  title: string;
  website_url: string;
  desc: string;
  collection: string;
}

export interface BookmarkTabSliceProp {
  bookmark: [] | BookMarkData[];
  bookmarkFilter: boolean;
  activeTabs: string;
  addModal: boolean;
  bookmarkValidation: boolean;
  tagModal: boolean;
  gridView: boolean;
  editModal: boolean;
  editRow?: BookMarkData | null;
  bookMarkList: [] | BookMarkData[];
}
export interface DescriptionBookMarkPropsType {
  data: BookMarkData;
  onHandleClick: (book: BookMarkData) => void;
  removeFromBookmark: (bookmarkId: number) => void;
}

export interface FavDescriptionDataProp {
  myBookData: BookMarkData;
}

export interface CommonTabCardProp {
  tabId: string;
  title: string;
}

export interface EditFormBookmarkProps {
  register: UseFormRegister<BookMarkData>;
  errors: FieldErrors<BookMarkData>;
  handleSubmit: UseFormHandleSubmit<BookMarkData, undefined>;
  editToggle: () => void;
  updateBookMarkData: SubmitHandler<BookMarkData>;
}

export interface InitialStateType {
  modal: boolean;
  composeEmail: boolean;
  faIcon: boolean;
  interviewEmail: boolean;
  page?: boolean;
  inboxEmail: InboxEmailType[];
  emailValidation: boolean;
}

export interface InboxEmailType {
  id?: number;
  image?: string;
  shortName?: string;
  name?: string;
  color?: string;
  message?: string;
  subMessage?: string;
  badge?: InboxEmailType[];
  time?: string;
  star?: boolean;
  title?: string;
}

export interface CommonContentType {
  tableId: string;
  contentData: InboxEmailType[];
}

export interface AddNewEmailInterFace {
  userEmail: string;
  subject: string;
}

export interface EmailSubInputType {
  ccShow: boolean;
  bccShow: boolean;
}

export interface CommonDataType {
  data: InboxEmailType;
  ids: number;
}

export interface LetterBoxNavType {
  navId: string;
  setNavId: (key: string) => void;
}

export interface LetterBoxNavContentType {
  navId: string;
}

export interface MailPropsType {
  handlePrintData: () => void;
}

export interface TodoPropsType {
  todoData: TodoDataType[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoDataType[]>>;
}

export interface TodoDataType {
  id: number;
  title: string;
  badge: string;
  badgeClass: string;
  timeLimit: string;
  status: string;
}

export interface ToDoProp {
  id: number;
  title: string;
  status?: string;
  badge: string;
  badgeClass: string;
  timeLimit: string;
}

export interface ToDoSliceProp {
  showSideBar: boolean;
  todoList: ToDoProp[] | [];
  task: string;
  visible?: boolean;
  completeTask?: [];
  allTaskCompleted?: boolean;
}

export interface ProjectListData {
  id?: number;
  title: string;
  badge: string;
  image: string;
  sites: string;
  description: string;
  issue: string;
  resolved: string;
  comment: string;
  like: string;
  progress: number;
  customers_img1: string;
  customers_img2: string;
  customers_img3: string;
}

export interface ProjectType {
  activeTab: string;
  createdFormData: ProjectListData[];
}

export interface CommonProjectInterFace {
  item: ProjectListData;
}

export interface ProjectInitialValue {
  title: string;
  client: string;
  progress: number;
  type: string;
  priority: string;
  size: string;
  description: string;
}

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?: boolean;
}

export interface FileSearchBarProps {
  searchFile: string;
  setSearchFile: (value: string) => void;
}

export interface AddUploadMediaProps {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFileUpload: () => void;
}

export interface FileDataType {
  id: number;
  name: string;
  size: string;
  modify: string;
  icon: string;
  folderClass: string;
  title: string;
  folderFiles: string;
  folderTime: string;
}

export interface FileManagerBodyProps {
  myFile: FileDataType[];
  fileList: React.ReactNode;
  searchFile: string;
}

export interface FileFolderItemProp {
  item: FileDataType;
}
