import { ReactNode } from "react";
import { MenuItem } from "./Layout";

export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: Object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

export interface SvgProps {
  iconId: string | undefined;
  className?: string;
  style?: {
    height?: number;
    width?: number;
    fill?: string;
    marginRight?: number;
  };
  onClick?: () => void;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export interface PropsTypes {
  mainTitle: string;
  parent: string;
}

export interface SubHeaderListType {
  menu: MenuItem[] | undefined;
  level: number;
}

export interface DashboardHeaderType {
  title: string;
  tagClass?: string;
  dropDownFalse?: boolean;
  children?: ReactNode;
  dropdownTitle?: string;
  dropdownClass?: string;
  days?: boolean;
  dropdownToggleClass?: string;
  headerClass?: string;
  dropdownIcon?: boolean;
}

export interface DashBoardCommonDropdown {
  days?: boolean;
  dropdownTitle?: string;
  dropdownClass?: string;
  dropdownToggleClass?: string;
  dropdownIcon?: boolean;
}

export interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
  tag?: boolean;
}