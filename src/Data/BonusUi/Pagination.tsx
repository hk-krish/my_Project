export const DefaultPageSubTitle = [
  {
    text: "If the pagination component is used to navigate between a set of search results, an appropriate label could be ",
    code: 'aria-label="Search results pages',
  },
];

export const ActiveDisableSubTitle = [
  {
    text: "Use ",
    code: ".disabled ",
  },
  {
    text: "for links that appear un-clickable and",
    code: " .active",
  },
  {
    text: " to indicate the current page.",
  },
];

export const IconPageSubTitle = [{ text: "Use an icon or symbol in place of text for some pagination links." }];

export const RoundedPageSubTitle = [
  {
    text: "Used in rounded pagination.Use an icon or symbol in place of text for some pagination links.",
    code: "[.rounded-circle]",
  },
];

export const PageAlignSubTitle = [
  {
    text: "Change the alignment of pagination components with flexbox utilities. For example, with ",
    code: ".justify-content-center:",
  },
  {
    text: ".",
  },
];

export const PageSizeSubTitle = [
  {
    text: "Use ",
    code: "[pagination-lg/pagination-md/pagination-lg]",
  },
  {
    text: " for additional sizes.",
  },
];

export const DefaultPageData = [
  {
    id: "Pagination1",
    text: "Previous",
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: "2",
  },
  {
    id: "Pagination4",
    text: "3",
  },
  {
    id: "Pagination5",
    text: "Next",
  },
];

export const IconListData = [
  {
    id: "Pagination1",
    text: <span aria-hidden="true">«</span>,
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: "2",
  },
  {
    id: "Pagination4",
    text: "3",
  },
  {
    id: "Pagination5",
    text: "...",
  },
  {
    id: "Pagination6",
    text: "20",
  },
  {
    id: "Pagination7",
    text: <span aria-hidden="true">»</span>,
  },
];

export const RoundedListData = [
  {
    id: "Pagination1",
    text: <span aria-hidden="true">«</span>,
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: "2",
  },
  {
    id: "Pagination4",
    text: "...",
  },
  {
    id: "Pagination5",
    text: "20",
  },
  {
    id: "Pagination6",
    text: <span aria-hidden="true">»</span>,
  },
];

export const AlignCenterData = [
  {
    id: "Pagination1",
    text: "Previous",
  },
  {
    id: "Pagination2",
    text: "I",
  },
  {
    id: "Pagination3",
    text: "II",
  },
  {
    id: "Pagination4",
    text: "III",
  },
  {
    id: "Pagination5",
    text: "Next",
  },
];

export const AlignBottomData = [
  {
    id: "Pagination1",
    text: "Previous",
  },
  {
    id: "Pagination2",
    text: "i",
  },
  {
    id: "Pagination3",
    text: "ii",
  },
  {
    id: "Pagination4",
    text: "iii",
  },
  {
    id: "Pagination5",
    text: "Next",
  },
];

export const PaginationAlignData = [
  { pageClass: "m-b-30", pageColor: "primary", data: DefaultPageData },
  { pageClass: "m-b-30", pageColor: "danger", data: AlignCenterData, active: true, listClass: "justify-content-center" },
  { pageClass: "m-b-30", pageColor: "success", data: AlignCenterData, listClass: "justify-content-end" },
];

export const PaginationSizeData = [
  { pageClass: "m-b-30", pageColor: "info", size: "lg", data: DefaultPageData },
  { pageClass: "m-b-30", pageColor: "info", size: "md", data: DefaultPageData },
  { pageClass: "m-b-30", pageColor: "info", size: "sm", data: DefaultPageData },
];
