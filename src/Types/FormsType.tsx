import { ChangeEvent } from "react";
import { InputType } from "reactstrap/types/lib/Input";

export interface SubTitleObjectProps {
  text?: string;
  code?: string;
}

export interface FormDataTypes {
  firstName: string;
  lastName: string;
  username: string;
  city: string;
  state: string;
  zip: string;
  password: string;
  file: string;
  description: string;
}

export interface RadioPayMethodProps {
  colClass: string;
}

export interface CommonInputType {
  colClass?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  title?: string;
  inputType?: InputType;
  formGroup?: boolean;
  floating?: boolean;
  groupClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export interface CommonSelectDataType {
  value: string;
  label: string;
}

export interface CommonSelectType {
  colClass?: string;
  id?: string;
  title?: string;
  data: CommonSelectDataType[];
  labelClass?: string;
  inputClass?: string;
}

export interface CommonCheckboxType {
  id?: string;
  labelClass?: string;
  inputType: InputType;
  required?: boolean;
  title: string;
  name?: string;
  check?: boolean;
  inputClass?: string;
}

export interface CommonSelectDropdownProps {
  inputClass?: string;
  options: string[];
  title: string;
  multiple?: boolean;
  optionClass?: string;
}

export interface CommonOpenMenuProps {
  inputId: string;
  colClass: string;
  options: string[];
}

export interface CheckboxItem {
  id: string;
  labelText: string;
  check?: string;
  disabled?: string;
  groupClass?: string;
  name?: string;
}

export interface CheckboxGroup {
  id: number;
  title: string;
  child: CheckboxItem[];
}

export interface InlineCheckboxItem {
  id: number;
  type: "checkbox";
  check?: string;
  disabled?: string;
  text: string;
  formGroupClass?: string;
}

export interface InlineRadioItem {
  id: number;
  type: "radio";
  check?: string;
  disabled?: string;
  name: string;
  text: string;
  formGroupClass?: string;
}

export interface InlineInputType {
  id: number;
  title: string;
  child: (InlineCheckboxItem | InlineRadioItem)[];
}

export interface CommonCardFooterProps {
  footerClass?: string;
  color1: string;
  btn2Class?: string;
  btn1Class?: string;
  color2: string;
}

export interface StepperHorizontalProp {
  step: number;
  finishClicked: boolean;
}

export interface BasicInfoFormData {
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  placeHolderName: string;
  cardNumber: string;
  expiration: string;
  cvvNumber: string;
  uploadDocumentation: string;
  informationCheckBox: boolean;
  linkedInLink: string;
  gitHubLink: string;
  giveFeedBack: string;
  state: string;
  agreeConditions: boolean;
}

export interface BasicInfoFormProps {
  updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: BasicInfoFormData;
}

export interface StudentValidationFormData {
  password: string;
  name: string;
  email: string;
  confirmPassWord: string;
  portfolioURL: string;
  projectDescription: string;
  twitterUrl: string;
  gitHubUrl: string;
}
export interface StudentValidationFormProp {
  updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: StudentValidationFormData;
  selectedImage?: string | null;
}

export interface VerticalWizardFormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  state: string;
  zip: string;
  recipientUserName: string;
  userName: string;
  cardNumber: string;
  expirationDate: string;
  cvvNumber: string;
  documentationName: string;
  bankName: string;
  feedBack: string;
}

export interface VerticalWizardFormProps {
  updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: VerticalWizardFormData;
}

export interface SwitchItem {
  id: number;
  color: string;
  disabled?: string;
}

export interface CustomSwitchDataItem {
  id: number;
  cardClass?: string;
  formSize?: string;
  child: SwitchItem[];
}

export interface IconSwitchItem {
  id: number;
  mediaBodyClass?: string;
  color: string;
  labelText: string;
}

export interface IconsUncheckedBordersSwitchProp {
  id: number;
  title: string;
  subTitle: SubTitleObjectProps[];
  child: IconSwitchItem[];
}

export interface SwitchSizingIconItems {
  id: number;
  labelText: string;
  size?: string;
  check?: string;
  disabled?: string;
  spanClass?: string;
}

export interface SwitchSizingIconsTypes {
  id: number;
  title: string;
  subTitle: SubTitleObjectProps[];
  child: SwitchSizingIconItems[];
}

export interface CommonTypeAheadProps {
  title: string;
  subTitle: SubTitleObjectProps[];
  options: string[] | OptionType[];
  placeholder: string;
  labelKey?: string;
  className?: string;
  id: string;
}

export interface OptionType {
  name: string;
  header?: boolean;
  divider?: boolean;
}

export interface CustomWizardFormProps {
  title: string;
  divClass?: string;
  navColClass: string;
  tabColClass: string;
  differentId?: boolean;
}

export interface VerticalWizardNavProps {
  activeCallBack: (tab: number) => void;
  steps: number;
  differentId?: boolean;
}

export interface ActiveCallbackProp {
  activeCallBack: (tab: number) => void;
  differentId?: boolean;
}

export interface NewAddressModalProps {
  toggle: () => void;
  showModal: boolean;
}

export interface RadioBoxValuesInterFace {
  address: string;
  shippingMethod: string;
}
export interface ShippingInformationProps {
  handleNextButton?: () => void;
  handleBackButton?: () => void;
  radioBoxValues: RadioBoxValuesInterFace;
  updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PaymentFormProps {
  payMethod: string;
  updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
  differentId?: boolean;
}

export interface FirstModalProps {
  toggle: () => void;
  modalOne: boolean;
}

export interface SecondModalProps {
  toggle2: () => void;
  modal2: boolean;
}

export enum CalendarItemType {
  DateTimeLocal = "datetime-local",
  Date = "date",
  Month = "month",
  Week = "week",
  Time = "time",
}

export interface ReactstrapCalendarItem {
  id: number;
  labelText: string;
  type: CalendarItemType;
  value: string;
}

export interface MultiplesDateOptions {
  validatedValue: string | string[];
  input: HTMLElement;
  isTyping: boolean;
}

export interface TouchSpinProp {
  color: string;
  arrowIcon?: boolean;
  outline?: boolean;
  btnClass?: string;
}

export interface CommonPrefixAndPostfixProp {
  postIcon?: boolean;
  preIcon?: boolean;
  preButton?: boolean;
  PostButton?: boolean;
  color?: boolean;
}
export interface CustomFormSelectProps {
  inputId: string;
  options: string[];
  title: string;
}

export interface ButtonDropdownListProps {
  color: string;
  title?: string;
  options: string[];
  outline?: boolean;
  divider?: boolean;
  split?: boolean;
  span?: boolean;
}

export interface StarItem {
  id: number;
  icon: string;
  class?: string;
}

export interface ChildFormItem {
  id: number;
  color: string;
  name: string;
  mediaBodyClass?: string;
  badgeTitle: string;
  digits: string;
  spanClass?: string;
  star?: StarItem[];
  spanText: string;
  colClass?: string;
  cardClass?: string;
  check?: string;
}

export interface VerticalStyleItem {
  id: number;
  megaTitle: string;
  child: ChildFormItem[];
}

export interface RadioOption {
  id: number;
  labelText: string;
  image?: string;
  check?: string;
  name: string;
  icon?: string;
  iconColor?: string;
}

export interface VariationRadioItem {
  id: number;
  title: string;
  child: RadioOption[];
}
