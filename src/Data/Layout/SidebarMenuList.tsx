import { routes } from "../../Routers/routes";
import { MenuItem } from "../../Types/Layout";

export const menuList: MenuItem[] | undefined = [
  {
    title: "General",
    Items: [
      {
        id: 1,
        title: "Dashboard",
        icon: "home",
        type: "sub",
        active: false,
        menu: [
          { title: "Default", type: "link", url: routes.Dashboard.Default },
          { title: "Ecommerce", type: "link", url: routes.Dashboard.ECommerce },
        ],
      },
      {
        id: 2,
        title: "Widgets",
        icon: "widget",
        type: "sub",
        active: false,
        menu: [
          { title: "General", type: "link", url: routes.Widgets.General },
          { title: "Chart", type: "link", url: routes.Widgets.Charts },
        ],
      },
    ],
  },
  {
    title: "Applications",
    Items: [
      {
        id: 3,
        title: "Project",
        type: "sub",
        icon: "project",
        active: false,
        menu: [
          { title: "Project List", type: "link", url: routes.Project.List },
          { title: "Create New", type: "link", url: routes.Project.Create },
        ],
      },
      { id: 4, title: "File Manager", url: routes.FileManager, icon: "file", type: "link" },
      {
        id: 5,
        title: "Ecommerce",
        icon: "ecommerce",
        type: "sub",
        active: false,
        menu: [
          { title: "Add Products", type: "link", url: routes.ECommerce.AddProduct },
          { title: "Product", type: "link", url: routes.ECommerce.Product },
          { title: "Product Page", type: "link", url: routes.ECommerce.ProductPage },
          { title: "Product List", type: "link", url: routes.ECommerce.ProductList },
          { title: "Payment Details", type: "link", url: routes.ECommerce.Payment },
          { title: "Order History", type: "link", url: routes.ECommerce.Orders },
          {
            title: "Invoices",
            type: "sub",
            menu: [
              { title: "Invoice-1", type: "link", url: routes.ECommerce.Invoices.Invoice1 },
              { title: "Invoice-2", type: "link", url: routes.ECommerce.Invoices.Invoice2 },
              { title: "Invoice-3", type: "link", url: routes.ECommerce.Invoices.Invoice3 },
              { title: "Invoice-4", type: "link", url: routes.ECommerce.Invoices.Invoice4 },
              { title: "Invoice-5", type: "link", url: routes.ECommerce.Invoices.Invoice5 },
              { title: "Invoice-6", type: "link", url: routes.ECommerce.Invoices.Invoice6 },
            ],
          },
          { title: "Cart", type: "link", url: routes.ECommerce.Cart },
          { title: "Wishlist", type: "link", url: routes.ECommerce.Wishlist },
          { title: "Checkout", type: "link", url: routes.ECommerce.Checkout },
          { title: "Pricing", type: "link", url: routes.ECommerce.Pricing },
        ],
      },
      { id: 6, title: "Letter Box", url: routes.LetterBox, icon: "email", type: "link" },
      {
        id: 7,
        title: "Chats",
        icon: "chat",
        type: "sub",
        active: false,
        menu: [
          { title: "Private Chat", type: "link", url: routes.Chats.Private },
          { title: "Group Chat", type: "link", url: routes.Chats.Group },
        ],
      },
      {
        id: 8,
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        menu: [
          { title: "Users Profile", type: "link", url: routes.Users.Profile },
          { title: "Users Edit", type: "link", url: routes.Users.Edit },
          { title: "Users Cards", type: "link", url: routes.Users.Cards },
        ],
      },
      { id: 9, title: "Bookmarks", url: routes.Bookmarks, type: "link", icon: "bookmark" },
      { id: 10, title: "Contacts", icon: "contact", url: routes.Contacts, type: "link" },
      { id: 11, title: "Tasks", url: routes.Tasks, icon: "task", type: "link" },
      { id: 12, title: "Calendar", url: routes.Calendar, icon: "calendar", type: "link" },
      { id: 13, title: "Social App", url: routes.Social, icon: "social", type: "link" },
      { id: 14, title: "To-Do", url: routes.ToDo, icon: "to-do", type: "link" },
      { id: 15, title: "Search Result", url: routes.Search, icon: "search", type: "link" },
    ],
  },
  {
    title: "Forms & Table",
    Items: [
      {
        id: 16,
        title: "Forms",
        icon: "form",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Form Controls",
            type: "sub",
            menu: [
              { title: "Form Validation", type: "link", url: routes.Forms.Controls.Validation },
              { title: "Base Inputs", type: "link", url: routes.Forms.Controls.BaseInput },
              { title: "Checkbox & Radio", type: "link", url: routes.Forms.Controls.RadioCheckbox },
              { title: "Input Groups", type: "link", url: routes.Forms.Controls.InputGroup },
              { title: "Input Mask", type: "link", url: routes.Forms.Controls.InputMask },
              { title: "Mega Options", type: "link", url: routes.Forms.Controls.MegaOptions },
            ],
          },
          {
            title: "Form Widgets",
            type: "sub",
            menu: [
              { title: "Datepicker", type: "link", url: routes.Forms.Widgets.DatePicker },
              { title: "Touchspin", type: "link", url: routes.Forms.Widgets.TouchSpin },
              { title: "Switch", type: "link", url: routes.Forms.Widgets.Switch },
              { title: "Typeahead", type: "link", url: routes.Forms.Widgets.TypeAhead },
              { title: "Clipboard", type: "link", url: routes.Forms.Widgets.Clipboard },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            menu: [
              { title: "Form Wizard 1", type: "link", url: routes.Forms.Layout.Wizard1 },
              { title: "Form Wizard 2", type: "link", url: routes.Forms.Layout.Wizard2 },
              { title: "Two Factor", type: "link", url: routes.Forms.Layout.TwoFactor },
            ],
          },
        ],
      },
      {
        id: 17,
        title: "Tables",
        icon: "table",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Reactstrap Tables",
            type: "sub",
            menu: [
              { title: "Basic Tables", type: "link", url: routes.Tables.Reactstrap.Basic },
              { title: "Table Components", type: "link", url: routes.Tables.Reactstrap.Components },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            menu: [
              { title: "Basic Init", type: "link", url: routes.Tables.Data.Basic },
              { title: "Advance Init", type: "link", url: routes.Tables.Data.Advanced },
              { title: "API", type: "link", url: routes.Tables.Data.API },
              { title: "Data Sources", type: "link", url: routes.Tables.Data.Sources },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Components",
    Items: [
      {
        id: 18,
        title: "Ui Kits",
        icon: "ui-kits",
        type: "sub",
        active: false,
        menu: [
          { title: "Typography", type: "link", url: routes.UiKits.Typography },
          { title: "Avatars", type: "link", url: routes.UiKits.Avatars },
          { title: "Helper Classes", type: "link", url: routes.UiKits.HelperClasses },
          { title: "Grid", type: "link", url: routes.UiKits.Grid },
          { title: "Tag & Pills", type: "link", url: routes.UiKits.TagPills },
          { title: "Progress", type: "link", url: routes.UiKits.Progress },
          { title: "Modal", type: "link", url: routes.UiKits.Modal },
          { title: "Alert", type: "link", url: routes.UiKits.Alert },
          { title: "Popover", type: "link", url: routes.UiKits.Popover },
          { title: "Tooltip", type: "link", url: routes.UiKits.Tooltip },
          { title: "Dropdown", type: "link", url: routes.UiKits.Dropdown },
          { title: "Accordion", type: "link", url: routes.UiKits.Accordion },
          { title: "Tabs", type: "link", url: routes.UiKits.Tabs },
          { title: "Lists", type: "link", url: routes.UiKits.Lists },
        ],
      },
      {
        id: 19,
        title: "Bonus Ui",
        icon: "bonus-kit",
        type: "sub",
        active: false,
        menu: [
          { title: "Scrollable", type: "link", url: routes.BonusUi.Scrollable },
          { title: "Tree View", type: "link", url: routes.BonusUi.Tree },
          { title: "Toasts", type: "link", url: routes.BonusUi.Toasts },
          { title: "Rating", type: "link", url: routes.BonusUi.Rating },
          { title: "Dropzone", type: "link", url: routes.BonusUi.Dropzone },
          { title: "Tour", type: "link", url: routes.BonusUi.Tour },
          { title: "SweetAlert2", type: "link", url: routes.BonusUi.SweetAlert2 },
          { title: "Carousel", type: "link", url: routes.BonusUi.Carousel },
          { title: "Ribbons", type: "link", url: routes.BonusUi.Ribbons },
          { title: "Pagination", type: "link", url: routes.BonusUi.Pagination },
          { title: "Breadcrumb", type: "link", url: routes.BonusUi.Breadcrumb },
          { title: "Range Slider", type: "link", url: routes.BonusUi.RangeSlider },
          { title: "Image Cropper", type: "link", url: routes.BonusUi.ImageCropper },
          { title: "Basic Card", type: "link", url: routes.BonusUi.BasicCard },
          { title: "Creative Card", type: "link", url: routes.BonusUi.CreativeCard },
          { title: "Timeline", type: "link", url: routes.BonusUi.Timeline },
        ],
      },
      {
        title: "Icons",
        icon: "icons",
        id: 20,
        type: "sub",
        active: false,
        menu: [
          { title: "Flag Icon", type: "link", url: routes.Icons.Flag },
          { title: "Fontawesome Icon", type: "link", url: routes.Icons.FontAwesome },
          { title: "Ico Icon", type: "link", url: routes.Icons.Ico },
          { title: "Themify Icon", type: "link", url: routes.Icons.Themify },
          { title: "Feather Icon", type: "link", url: routes.Icons.Feather },
          { title: "Whether Icon", type: "link", url: routes.Icons.Whether },
        ],
      },
      {
        id: 21,
        title: "Buttons",
        icon: "button",
        type: "sub",
        menu: [
          { title: "Default Style", type: "link", url: routes.Buttons.Default },
          { title: "Button Group", type: "link", url: routes.Buttons.Group },
        ],
      },
      {
        title: "Charts",
        icon: "charts",
        type: "sub",
        id: 22,
        active: false,
        menu: [
          { title: "Apex Chart", type: "link", url: routes.Charts.Apex },
          { title: "Google Chart", type: "link", url: routes.Charts.Google },
          { title: "Chartjs Chart", type: "link", url: routes.Charts.ChartJs },
        ],
      },
    ],
  },
  {
    title: "Pages",
    Items: [
      { id: 23, title: "Sample Page", url: routes.Sample, icon: "sample-page", type: "link" },
      {
        id: 24,
        title: "Others",
        icon: "others",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Error Page",
            type: "sub",
            menu: [
              { title: "Error 400", type: "link", url: routes.ErrorPages.Error400 },
              { title: "Error 401", type: "link", url: routes.ErrorPages.Error401 },
              { title: "Error 403", type: "link", url: routes.ErrorPages.Error403 },
              { title: "Error 404", type: "link", url: routes.ErrorPages.Error404 },
              { title: "Error 500", type: "link", url: routes.ErrorPages.Error500 },
              { title: "Error 503", type: "link", url: routes.ErrorPages.Error503 },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            menu: [
              { title: "Login Simple", type: "link", url: routes.Auth.Login.Simple },
              { title: "Login with Bg Image", type: "link", url: routes.Auth.Login.BgImage },
              { title: "Login With Image Two", type: "link", url: routes.Auth.Login.BgTwoImage },
              { title: "Login With Validation", type: "link", url: routes.Auth.Login.Validation },
              { title: "Login With Tooltip", type: "link", url: routes.Auth.Login.Tooltip },
              { title: "Login With Sweetalert", type: "link", url: routes.Auth.Login.SweetAlert },
              { title: "Register Simple", type: "link", url: routes.Auth.Register.Simple },
              { title: "Register With Bg Image", type: "link", url: routes.Auth.Register.BgImage },
              { title: "Register With Bg Two", type: "link", url: routes.Auth.Register.BgTwoImage },
              { title: "Register Wizard", type: "link", url: routes.Auth.Register.Wizard },
              { title: "Unlock User", type: "link", url: routes.Auth.UnlockUser },
              { title: "Forget Password", type: "link", url: routes.Auth.Recovery.ForgetPassword },
              { title: "Reset Password", type: "link", url: routes.Auth.Recovery.ResetPassword },
              { title: "Maintenance", type: "link", url: routes.Auth.Maintenance },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            menu: [
              { title: "Coming Simple", type: "link", url: routes.ComingSoon.Simple },
              { title: "Coming With Bg Video", type: "link", url: routes.ComingSoon.Video },
              { title: "Coming With Bg Image", type: "link", url: routes.ComingSoon.Image },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    Items: [
      {
        id: 25,
        title: "Gallery",
        icon: "gallery",
        type: "sub",
        active: false,
        menu: [
          { title: "Gallery Grid", type: "link", url: routes.Gallery.Grid },
          { title: "Gallery Grid Desc", type: "link", url: routes.Gallery.GridDescription },
          { title: "Masonry Gallery", type: "link", url: routes.Gallery.Masonry },
          { title: "Masonry With Desc", type: "link", url: routes.Gallery.MasonryDescription },
          { title: "Hover Effects", type: "link", url: routes.Gallery.Hover },
        ],
      },
      {
        id: 26,
        title: "Blog",
        icon: "blog",
        type: "sub",
        active: false,
        menu: [
          { title: "Blog Single", type: "link", url: routes.Blog.Single },
          { title: "Blog Details", type: "link", url: routes.Blog.Details },
          { title: "Add Post", type: "link", url: routes.Blog.AddPost },
        ],
      },
      { id: 27, title: "FAQ", type: "link", icon: "faq", url: routes.Faq },
      {
        id: 28,
        title: "Job Search",
        icon: "job-search",
        type: "sub",
        active: false,
        menu: [
          { title: "Cards View", type: "link", url: routes.JobSearch.CardsView },
          { title: "List View", type: "link", url: routes.JobSearch.ListView },
          { title: "Job Details", type: "link", url: routes.JobSearch.Details },
          { title: "Apply", type: "link", url: routes.JobSearch.Apply },
        ],
      },
      {
        id: 29,
        title: "Learning",
        icon: "learning",
        type: "sub",
        active: false,
        menu: [
          { title: "Learning List", type: "link", url: routes.Learning.List },
          { title: "Detailed Course", type: "link", url: routes.Learning.CourseDetails },
        ],
      },
      {
        id: 30,
        title: "Maps",
        icon: "maps",
        type: "sub",
        active: false,
        menu: [
          { title: "Google Maps", type: "link", url: routes.Maps.Google },
          { title: "Leaflet Maps", type: "link", url: routes.Maps.Leaflet },
        ],
      },
      {
        id: 31,
        title: "Editors",
        icon: "editors",
        type: "sub",
        active: false,
        menu: [
          { title: "Ck Editor", type: "link", url: routes.Editors.CkEditor },
          { title: "MDE Editor", type: "link", url: routes.Editors.MdeEditor },
          { title: "ACE Code Editor", type: "link", url: routes.Editors.ACECodeEditor },
        ],
      },
      { id: 32, title: "Knowledgebase", icon: "knowledgebase", type: "link", active: false, url: routes.KnowLedgeBase },
      { id: 33, title: "Support Ticket", icon: "support-tickets", type: "link", active: false, url: routes.SupportTicket },
    ],
  },
];
