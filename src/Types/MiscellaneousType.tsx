import { ReactNode } from "react";

export interface AccordionCardItems {
  id: number;
  title: string;
  paragraph: string;
}

export interface AccordionCardProp {
  item: AccordionCardItems;
}

export interface ArticleVideo {
  id: number;
  colClass: string;
  icon: ReactNode;
  title: string;
  text: string;
}

export interface LatestArticlesVideosDataItem {
  id: number;
  child: ArticleVideo[];
}
export interface LatestArticlesVideosProps {
  titleClass?: string;
  rowClass?: string;
  divClass?: string;
  data: LatestArticlesVideosDataItem[];
}

export interface AccordionCardData {
  id: string;
  title: string;
  subTitle?: string;
}

export interface CommonAccordionCardProps {
  items: {
    id: number;
    heading: string;
    buttonTitle: string;
    data: AccordionCardData[];
  };
}

export interface RightSidebarCardProps {
  startLimit?: number;
  colClass?: string;
  pagination?: boolean;
  endLimit?: number;
}

export interface CheckboxItem {
  id: number;
  type: string;
  text: string;
  name?: string;
  check?: string;
}

export interface CourseCheckboxProps {
  id: number;
  title: string;
  child: CheckboxItem[];
}

export interface CommentItemType {
  id: number;
  src: string;
  name?: string;
  role?: string;
  hits?: string;
  comments?: string;
  paragraph?: string;
}

export interface CommentSectionProps {
  socialComment?: boolean;
  colClass: string;
  item: CommentItemType;
}

export interface CustomImageType {
  src: string;
  name: string;
}

export interface CustomProgressType {
  value: number;
  color: string;
}

export interface SupportDataType {
  id: number;
  image: string;
  position: string;
  salary: string;
  office: string;
  skillColor: string;
  skillValue: number;
  extension: number;
  name: string;
  email: string;
}
