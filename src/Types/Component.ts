//Button
interface CommonButtonsDataType {
  id: string;
  color: string;
  title: string;
  size?: string;
  active?: boolean;
  disabled?: boolean;
  outline?: boolean;
}

interface SubTitleObjectType {
  text?: string;
  code?: string;
}

export interface CommonButtonsInterface {
  raised?: boolean;
  className?: string;
  commonButtonsData: CommonButtonsDataType[];
  title: string;
  subTitle: SubTitleObjectType[];
}

export interface GroupButton {
  title: string;
  color: ButtonColor[];
}

interface ButtonColor {
  colorClass: string;
  btnClass?: string;
  colClass?: string;
  size?: string;
  differentClass?: string;
  leftButtonClass?: string;
  rightButtonClass?: string;
  title1: string;
  title2: string;
  title3: string;
}

export interface ButtonSub {
  btnClass: string;
  colorClass: string;
  divClass: string;
  id1: string;
  title1: string;
  id2: string;
  title2: string;
  checkBox?: boolean;
  colClass?: string;
  name?: string;
}

export interface RadioCheckboxItem {
  title: string;
  span: {
    text?: string;
    code?: string;
  }[];
  subButton: ButtonSub[];
}

export interface ButtonPropsType {
  item: ButtonSub;
}

interface NestingChildIcon {
  id: number;
  color: string;
  iconClass: string;
  size?: string;
}

export interface NestingIconDataItem {
  id: number;
  child: NestingChildIcon[];
}

export interface CommonDropdownType {
  color: string;
  className?: string;
}

//Icon
interface IconItem {
  feathericon?: string;
  icon?: string;
}

export interface IconMarkUpProps {
  icon: IconItem;
  iconTag: { iconTag: string };
  iconFClass: { iconFClass: string };
}

export interface AbbreviationIconType {
  getIconTag: (tag: { abbreviation: string }) => void;
}

export interface IconsBodyProps {
  title: string;
  iconType: string[];
  parentCallback: (tag: string) => void;
}

export interface GetIconTagType {
  getIconTag: (tag: string) => void;
}
