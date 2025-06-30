import { ReactNode } from "react";
import { SpanType } from "./CommonComponents";

export interface TimelineItem {
  id: number;
  colClass: string;
  color: string;
  date: string;
  header: string;
  paragraph: string;
  verticalLine1?: string;
  verticalLine2?: string;
}

export interface HorizontalTimelineType {
  id: number;
  mainClass: string;
  child: TimelineItem[];
}

export interface PaginationListData {
  id: string;
  text: string | JSX.Element;
}

export interface DefaultPaginationListProp {
  pageClass?: string;
  pageColor?: string;
  active?: boolean;
  disabled?: boolean;
  classLink?: string;
  listClass?: string;
  size?: string;
  data?: PaginationListData[];
}

export interface CommonPaginationListType {
  title: string;
  span?: SpanType[];
  pageClass?: string;
  pageColor?: string;
  active?: boolean;
  disabled?: boolean;
  classLink?: string;
  listClass?: string;
  size?: string;
  data?: PaginationListData[];
  multiData?: DefaultPaginationListProp[];
  colClass?: string;
}

export interface SocialMediaProp {
  className?: string;
}

export interface UniqueToastContentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export interface CommonToastProps {
  icon: ReactNode;
  smallClass?: string;
  strongText: string;
  smallText: string;
  bodyText: string;
}

export interface ToastPlacementContentProp {
  selectedPosition: string;
}

export interface CarouselDataProp {
  id: number;
  image: string;
  captionText?: string;
  captionHeader?: string;
}

export interface CommonTourSocialMediaProp {
  time?: string;
  className?: string;
}

export interface CommonTourHeaderProp {
  date: string;
  time: string;
}

export interface BasicTreesProp {
  variant?: string;
  isOpen?: boolean;
  className?: string;
  onClick?: (e: object) => void;
}

export interface NestedItem {
  id: string;
  content: string;
  children?: NestedItem[];
}

export interface NestedSortableListProps {
  items: NestedItem[];
}

export interface SortableSwapListType {
  items: SortableItem[];
}

export interface SortableItem {
  id: string;
  content: string;
  image: string;
  children?: SortableItem[];
}
export interface PositionAlertType {
  position: string | any;
  color: string;
  title: string;
  span: SpanType[];
}

export interface LoginFormResult {
  username: string;
  password: string;
}
