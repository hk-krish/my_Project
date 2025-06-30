import { Direction } from "reactstrap/types/lib/Dropdown";
import { SpanType } from "./CommonComponents";

export interface SimpleNavProps {
  basicTab: string;
  setBasicTab: (data: string) => void;
}

export interface SimpleTabContentProp {
  tabId: string;
}

export interface BasicDropdownType {
  class: string;
  divClass?: string;
  bodyClass?: string;
  position?: Direction;
  text: string;
  menulist: string[];
  size?: string;
}

export interface DropdownCommonProp {
  item: BasicDropdownType;
  toggleClass?: string;
}

export interface DropdownCommonType {
  title: string;
  span?: SpanType[];
  colClass?: string;
  toggleClass?: string;
  bodyClass?: string;
  data: BasicDropdownType[];
}

export interface CollapseStateProp {
  collapse1: boolean;
  collapse2: boolean;
}

export interface CollapseBodyProp {
  collapseId: { collapse1: boolean; collapse2: boolean };
}

export enum Placement {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

export interface PopoverItems {
  id?: string;
  placement: Placement;
  popoverHeader?: string;
  popoverBody?: string;
  btnColor?: string;
  btnText?: string;
  trigger?: string;
  size?: string;
}

export interface CommonPopoverProp {
  data: PopoverItems;
}

export interface TooltipStateProps {
  tooltip1: boolean;
  tooltip2: boolean;
  tooltip3: boolean;
}

export interface ModalDataTypes {
  isOpen: boolean;
  header?: boolean;
  class?: string;
  footer?: boolean;
  toggler: () => void;
  title?: string;
  size?: string;
  bodyClass?: string;
  button?: string;
  center?: boolean;
}

export interface CommonModalProps {
  modalData: ModalDataTypes;
  children: string | JSX.Element | JSX.Element[];
}

export interface CenteredModalBodyProps {
  modal: boolean;
  toggle: () => void;
}

export interface StaticModalFormProp {
  toggle: () => void;
}

export interface GridCardFooterProps {
  code: string;
  value: string;
}

export interface CommonThemeModalTitleType {
  heading: string;
  subHeading: string;
  text: string;
}

export interface CustomModalBodyType {
  modal: boolean;
  toggle: () => void;
}

export interface ChildrenData {
  text: string;
  class: string;
  textClass: string;
  alertText: string;
  icons?: JSX.Element;
}

export interface LinkColorDataType {
  data: ChildrenData[];
}

export interface CommonLinkColorType {
  title: string;
  data: LinkColorDataType[];
  text?: boolean;
  bodyClass?: string;
  icon?: boolean;
}

export interface TopBottomOffCanvasType {
  title: string;
  direction: string;
  color: string;
  data?: boolean;
}

export interface CommonBelowModalType {
  title?: string;
  modalClass?: string;
  color?: string;
}

export interface DataType {
  id: number;
  color?: string;
  text?: string;
  iconName?: any;
  badgeClass?: string;
}

export interface BadgesType {
  title: string;
  span: SpanType[];
  data: DataType[];
  roundedPills?: boolean;
  number?: boolean;
  className?: string;
  icon?: boolean;
}

export interface ProgressSpan {
  text: string;
  code?: string;
}

export interface ProgressData {
  class?: string;
  value?: string;
  text?: string;
}

export interface ProgressType {
  title: string;
  span: ProgressSpan[];
  data: ProgressData[];
  striped?: boolean;
  animated?: boolean;
  tag?: boolean;
  progressClass?: string;
  value?: boolean;
}
