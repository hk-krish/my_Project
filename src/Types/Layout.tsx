export interface MenuItem {
  title: string;
  lanClass?: string;
  Items?: MenuItem[];
  id?: number;
  icon?: string;
  type?: string;
  active?: boolean;
  menu?: MenuItem[];
  url?: string;
  badge?: boolean;
  badgeName?: string;
  badgeColor?: string;
}

export interface MenuListProps {
  menu: MenuItem[] | undefined;
  setActiveMenu: (temp: MenuItem[]) => void;
  activeMenu: any;
  level: number;
}

export interface BookmarkedDataType {
  icon: string;
  title: string;
  url: string;
  id?: number | undefined;
  bookmarked?: boolean;
}

export interface LayoutStateProps {
  flip: boolean;
  pinedMenu: string[];
  responsiveSearch: boolean;
  linkItemsArray: BookmarkedDataType[] | [];
  bookmarkedData: BookmarkedDataType[];
}

export interface SearchSuggestionItem {
  icon: string | undefined;
  title: string;
  url: string;
  id?: number;
  bookmarked?: boolean;
}

export interface SearchSuggestionListType {
  searchedArray: SearchSuggestionItem[];
  setSearchedWord: (key: string) => void;
}

export interface CallbackNavType {
  (select: string, open: boolean): void;
}

export interface CustomizerProps {
  callbackNav: CallbackNavType;
  selected: string;
};

export interface ConfigurationProps {
  modal: boolean;
  toggle: () => void;
}

export interface ColorsType {
  colorBackground1: string;
  colorBackground2: string;
}

export interface LanguageType {
  value: string;
  icon: string;
  name: string;
}