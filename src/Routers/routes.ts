
// Contains route path constants

export const routes = {
  Home: `/`,
  Login: `/login`,

  Dashboard: {
    Default: `/dashboard/default`,
    ECommerce: `/dashboard/e-commerce`,
  },

  Widgets: {
    General: `/widgets/general`,
    Charts: `/widgets/chart`,
  },

  Project: {
    List: `/project/project-list`,
    Create: `/project/create-new`,
  },

  ECommerce: {
    AddProduct: `/e-commerce/add-product`,
    Product: `/e-commerce/product`,
    ProductPage: `/e-commerce/product-page`,
    ProductList: `/e-commerce/product-list`,
    Payment: `/e-commerce/payment-details`,
    Orders: `/e-commerce/order-history`,
    Invoices: {
      Invoice1: `/e-commerce/invoices/invoice-1`,
      Invoice2: `/e-commerce/invoices/invoice-2`,
      Invoice3: `/e-commerce/invoices/invoice-3`,
      Invoice4: `/e-commerce/invoices/invoice-4`,
      Invoice5: `/e-commerce/invoices/invoice-5`,
      Invoice6: `/e-commerce/invoices/invoice-6`,
    },
    Cart: `/e-commerce/cart`,
    Wishlist: `/e-commerce/wishlist`,
    Checkout: `/e-commerce/checkout`,
    Pricing: `/e-commerce/pricing`,
  },

  Chats: {
    Private: `/chats/private-chat`,
    Group: `/chats/group-chat`,
  },

  Users: {
    Profile: `/users/user-profile`,
    Edit: `/users/edit-profile`,
    Cards: `/users/user-cards`,
  },

  FileManager: `/file-manager`,
  LetterBox: `/letter-box`,
  Bookmarks: `/bookmarks`,
  Contacts: `/contacts`,
  Tasks: `/tasks`,
  Calendar: `/calendar`,
  Social: `/social-app`,
  ToDo: `/to-do`,
  Search: `/search-result`,

  //Forms & Table
  Forms: {
    Controls: {
      Validation: `/forms/form-controls/form-validation`,
      BaseInput: `/forms/form-controls/base-input`,
      RadioCheckbox: `/forms/form-controls/radio-checkbox-control`,
      InputGroup: `/forms/form-controls/input-group`,
      InputMask: `/forms/form-controls/input-mask`,
      MegaOptions: `/forms/form-controls/mega-options`,
    },
    Widgets: {
      DatePicker: `/forms/form-widgets/datepicker`,
      TouchSpin: `/forms/form-widgets/touchspin`,
      Switch: `/forms/form-widgets/switch`,
      TypeAhead: `/forms/form-widgets/typeahead`,
      Clipboard: `/forms/form-widgets/clipboard`,
    },
    Layout: {
      Wizard1: `/forms/form-layout/form-wizard-1`,
      Wizard2: `/forms/form-layout/form-wizard-2`,
      TwoFactor: `/forms/form-layout/two-factor`,
    }
  },

  //Tables
  Tables: {
    Reactstrap: {
      Basic: `/table/reactstrap-tables/basic-table`,
      Components: `/table/reactstrap-tables/table-components`,
    },
    Data: {
      Basic: `/table/data-tables/basic-init`,
      Advanced: `/table/data-tables/advance-init`,
      API: `/table/data-tables/api`,
      Sources: `/table/data-tables/data-sources`,
    }
  },

  //Components
  UiKits: {
    Typography: `/ui-kits/typography`,
    Avatars: `/ui-kits/avatars`,
    HelperClasses: `/ui-kits/helper-classes`,
    Grid: `/ui-kits/grid`,
    TagPills: `/ui-kits/tag-pills`,
    Progress: `/ui-kits/progress`,
    Modal: `/ui-kits/modal`,
    Alert: `/ui-kits/alert`,
    Popover: `/ui-kits/popover`,
    Tooltip: `/ui-kits/tooltip`,
    Dropdown: `/ui-kits/dropdown`,
    Accordion: `/ui-kits/accordion`,
    Tabs: `/ui-kits/tabs`,
    Lists: `/ui-kits/lists`,
  },

  BonusUi: {
    Scrollable: `/bonus-ui/scrollable`,
    Tree: `/bonus-ui/tree`,
    Toasts: `/bonus-ui/toasts`,
    Rating: `/bonus-ui/rating`,
    Dropzone: `/bonus-ui/dropzone`,
    Tour: `/bonus-ui/tour`,
    SweetAlert2: `/bonus-ui/sweet-alert-2`,
    Carousel: `/bonus-ui/carousel`,
    Ribbons: `/bonus-ui/ribbons`,
    Pagination: `/bonus-ui/pagination`,
    Breadcrumb: `/bonus-ui/breadcrumb`,
    RangeSlider: `/bonus-ui/range-slider`,
    ImageCropper: `/bonus-ui/image-cropper`,
    BasicCard: `/bonus-ui/basic-card`,
    CreativeCard: `/bonus-ui/creative-card`,
    Timeline: `/bonus-ui/timeline`,
  },

  Icons: {
    Flag: `/icons/flag-icon`,
    FontAwesome: `/icons/font-awesome`,
    Ico: `/icons/ico-icon`,
    Themify: `/icons/themify-icon`,
    Feather: `/icons/feather-icon`,
    Whether: `/icons/whether-icon`,
  },

  Buttons: {
    Default: `/buttons/default-style`,
    Group: `/buttons/button-group`,
  },

  Charts: {
    Apex: `/charts/apex-chart`,
    Google: `/charts/google-chart`,
    ChartJs: `/charts/chart-js`,
  },

  //Pages
  Sample: `/sample-page`,

  //Other
  ErrorPages: {
    Error400: `/error-pages/error-400`, 
    Error401: `/error-pages/error-401`,
    Error403: `/error-pages/error-403`,
    Error404: `/error-pages/error-404`,
    Error500: `/error-pages/error-500`,
    Error503: `/error-pages/error-503`,
  },

  Auth: {
    Login: {
      Simple: `/auth/login`,
      BgImage: `/auth/login-bg-img`,
      BgTwoImage: `/auth/login-bg-img2`,
      Validation: `/auth/login-bs-validation`,
      Tooltip: `/auth/login-bs-tooltip`,
      SweetAlert: `/auth/login-sweetalert`,
    },
    Register: {
      Simple: `/auth/sign-up`,
      BgImage: `/auth/sign-bg-img`,
      BgTwoImage: `/auth/sign-bg-img2`,
      Wizard: `/auth/sign-wizard`,
    },
    Recovery: {
      ForgetPassword: `/auth/forget-password`,
      ResetPassword: `/auth/reset-password`,
    },
    UnlockUser: `/auth/unlock-user`,
    Maintenance: `/auth/maintenance`,
  },

  ComingSoon: {
    Simple: `/coming-soon/coming-simple`,
    Video: `/coming-soon/coming-bg-video`,
    Image: `/coming-soon/coming-bg-image`,
  },

  //Miscellaneous
  Gallery: {
    Grid: `/gallery/gallery-grid`,
    GridDescription: `/gallery/gallery-grid-description`,
    Masonry: `/gallery/masonry-gallery`,
    MasonryDescription: `/gallery/masonry-gallery-description`,
    Hover: `/gallery/gallery-hover`,
  },

  Blog: {
    Details: `/blog/blog-details`,
    Single: `/blog/blog-single`,
    AddPost: `/blog/add-post`,
  },

  JobSearch: {
    CardsView: `/job-search/job-cards-view`,
    ListView: `/job-search/job-list-view`,
    Details: `/job-search/job-details`,
    Apply: `/job-search/job-apply`,
  },

  Learning: {
    List: `/learning/learning-list-view`,
    CourseDetails: `/learning/course-details`,
  },

  Maps: {
    Google: `/maps/google-map`,
    Leaflet: `/maps/leaflet-map`,
  },

  Editors: {
    CkEditor: `/editors/ck-editor`,
    MdeEditor: `/editors/mde-editor`,
    ACECodeEditor: `/editors/ace-code-editor`,
  },
  Faq: `/faq`,
  KnowLedgeBase: `/knowledgebase`,
  SupportTicket: `/support-ticket`,
};
