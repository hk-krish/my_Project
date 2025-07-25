import { CheckboxGroup, InlineInputType, VariationRadioItem, VerticalStyleItem } from "../../../Types/FormsType";

//checkbox & radios
export const DefaultCheckBoxSubTitle = [
  {
    text: `Use the`,
    code: `.form-check-input  `,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for checkbox.",
  },
];

export const DefaultCheckboxData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Default Checks",
    child: [
      {
        id: "10",
        labelText: "Default checkbox",
      },
      {
        id: "11",
        labelText: "Checked checkbox",
        check: "checked",
      },
    ],
  },
  {
    id: 2,
    title: "Disabled Checks",
    child: [
      {
        id: "12",
        labelText: "Disabled checkbox",
        disabled: "disabled",
      },
      {
        id: "13",
        labelText: "Disabled Checked checkbox",
        check: "checked",
        disabled: "disabled",
      },
    ],
  },
  {
    id: 3,
    title: "Right Checks",
    child: [
      {
        id: "14",
        groupClass: "form-check-reverse",
        labelText: "Reverse checkbox",
      },
      {
        id: "15",
        groupClass: "form-check-reverse",
        labelText: "Disabled reverse checkbox",
        check: "checked",
        disabled: "disabled",
      },
    ],
  },
];

export const CustomCheckBoxSubTitle = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for checkbox. And filled checkbox used",
    code: ".checkbox-solid-*",
  },
  { text: "and bordered checkbox used", code: ".checkbox-*." },
];

export const IconCheckboxData = [
  {
    id: "1",
    icon: "sliders",
    text: "Sliders",
  },
  {
    id: "2",
    icon: "user",
    text: "User",
    check: "checked",
  },
  {
    id: "3",
    icon: "tags",
    text: "Tags",
  },
  {
    id: "4",
    icon: "android",
    text: "Android",
  },
  {
    id: "5",
    icon: "eye-slash",
    text: "Hidden",
  },
  {
    id: "6",
    icon: "folder-open",
    text: "Folder",
  },
  {
    id: "7",
    icon: "paper-plane",
    text: "Send",
  },
  {
    id: "8",
    icon: "cloud-upload",
    text: "Upload",
  },
];

export const DefaultRadioSubTitle = [
  {
    text: `Use the`,
    code: `.form-check-input  `,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for radios.",
  },
];

export const DefaultRadioData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Custom Radios",
    child: [
      {
        id: "radio10",
        labelText: "Default radio",
        name: "flexRadioDefault",
      },
      {
        id: "radio11",
        labelText: "Default checked radio",
        check: "checked",
        name: "flexRadioDefault",
      },
    ],
  },
  {
    id: 2,
    title: "Disabled Radios",
    child: [
      {
        id: "radio12",
        labelText: "Disabled radio",
        disabled: "disabled",
        name: "flexRadioDisabled",
      },
      {
        id: "radio13",
        labelText: "Disabled Checked radio",
        check: "checked",
        disabled: "disabled",
        name: "flexRadioDisabled",
      },
    ],
  },
  {
    id: 3,
    title: "Right Radios",
    child: [
      {
        id: "radio14",
        groupClass: "form-check-reverse",
        labelText: "Reverse radio",
        name: "flexRadioDisabled",
      },
      {
        id: "radio15",
        groupClass: "form-check-reverse",
        labelText: "Disabled reverse radio",
        check: "checked",
        disabled: "disabled",
        name: "flexRadioDisabled",
      },
    ],
  },
];

export const ImagesWithCheckBoxSubTitle = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for image checkbox.",
  },
];

export const ImageWithCheckboxData = [
  {
    id: 1,
    title: "Custom",
    image: "1.jpg",
  },
  {
    id: 2,
    title: "Checked Image",
    image: "2.jpg",
    check: "checked",
  },
  {
    id: 3,
    title: "Disable Image",
    image: "3.jpg",
    disabled: "disabled",
  },
  {
    id: 4,
    title: "Disable Checked Image",
    image: "4.jpg",
    disabled: "disabled",
    check: "checked",
  },
];

export const ImagesWithRadioBoxSubTitle = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for image radio.",
  },
];

export const ImageWithRadioData = [
  {
    id: 1,
    title: "Custom",
    image: "5.jpg",
  },
  {
    id: 2,
    title: "Checked Image",
    image: "6.jpg",
    check: "checked",
  },
  {
    id: 3,
    title: "Disable Image",
    image: "7.jpg",
    disabled: "disabled",
  },
  {
    id: 4,
    title: "Disable Checked Image",
    image: "8.jpg",
    disabled: "disabled",
    check: "checked",
  },
];

export const CustomRadioBoxSubTitle = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for radios.",
  },
];

export const BorderedRadioData = [
  {
    id: 1,
    color: "secondary",
    check: "checked",
    text: "Sports Coach",
  },
  {
    id: 2,
    color: "success",
    text: "Physical Education Teacher",
  },
  {
    id: 3,
    color: "warning",
    text: "Sports Psychologist",
  },
  {
    id: 4,
    color: "primary",
    text: "Sports Nutritionist",
  },
];

export const IconRadioData = [
  {
    id: "1",
    icon: "sliders",
    text: "Sliders",
  },
  {
    id: "2",
    icon: "eye-slash",
    text: "Hidden",
    check: "checked",
  },
  {
    id: "3",
    icon: "folder-open",
    text: "Folder",
  },
  {
    id: "4",
    icon: "paper-plane",
    text: "Send",
  },
  {
    id: "5",
    icon: "user",
    text: "User",
  },
  {
    id: "6",
    icon: "trash-o",
    text: "Trash",
  },
  {
    id: "7",
    icon: "github",
    text: "github",
  },
  {
    id: "8",
    icon: "play-circle",
    text: "Play",
  },
];

export const FilledRadioData = [
  {
    id: 11,
    color: "primary",
    check: "checked",
    text: "Product",
  },
  {
    id: 12,
    color: "warning",
    text: "Order history",
  },
  {
    id: 13,
    color: "danger",
    text: "Invoice",
  },
  {
    id: 14,
    color: "info",
    text: "Wishlist",
  },
];

export const DefaultSwitchesSubTitle = [
  {
    code: `.form-switch`,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for switches.",
  },
];

export const DefaultSwitchesData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Custom Switches",
    child: [
      {
        id: "11",
        labelText: "Default switch checkbox input",
      },
      {
        id: "12",
        labelText: "Checked switch checkbox input",
        check: "checked",
      },
    ],
  },
  {
    id: 2,
    title: "Disabled Switches",
    child: [
      {
        id: "21",
        labelText: "Disabled switch checkbox input",
        disabled: "disabled",
      },
      {
        id: "22",
        labelText: "Disabled checked switch checkbox input",
        check: "checked",
        disabled: "disabled",
      },
    ],
  },
  {
    id: 3,
    title: "Right Switches",
    child: [
      {
        id: "31",
        groupClass: "form-check-reverse me-2",
        labelText: "Reverse switch checkbox input",
      },
      {
        id: "32",
        groupClass: "form-check-reverse me-2",
        labelText: "Disabled switch checkbox input",
        disabled: "disabled",
      },
    ],
  },
];

export const InlineInputTypesSubTitle = [
  {
    code: `.form-check-inline `,
    text: `Group checkboxes or radios on the same horizontal row by adding`,
  },
  {
    text: `to any`,
    code: `.form-check .`,
  },
];

export const InlineInputTypesData: InlineInputType[] = [
  {
    id: 1,
    title: "Inline Checkbox",
    child: [
      {
        id: 11,
        type: "checkbox",
        check: "checked",
        text: "I",
      },
      {
        id: 12,
        type: "checkbox",
        text: "II",
      },
      {
        id: 13,
        disabled: "disabled",
        type: "checkbox",
        text: "III (disabled)",
      },
    ],
  },
  {
    id: 2,
    title: "Inline Radios",
    child: [
      {
        id: 14,
        type: "radio",
        check: "checked",
        name: "inlineRadioOptions",
        text: "1",
      },
      {
        id: 15,
        type: "radio",
        name: "inlineRadioOptions",
        text: "2",
      },
      {
        id: 16,
        type: "radio",
        name: "inlineRadioOptions",
        disabled: "disabled",
        text: "3 (disabled)",
      },
    ],
  },
];

export const AnimatedButtonsSubTitle = [
  {
    code: `.radio_animated `,
    text: `Use the`,
  },
  {
    text: `through animated checkbox and radios.`,
  },
];

export const AnimatedButtonsData: InlineInputType[] = [
  {
    id: 1,
    title: "Select your payment method",
    child: [
      {
        id: 11,
        type: "radio",
        name: "rdo-ani",
        text: "Visa",
      },
      {
        id: 12,
        type: "radio",
        name: "rdo-ani",
        text: "MasterCard",
      },
      {
        id: 13,
        type: "radio",
        name: "rdo-ani",
        check: "checked",
        text: "Paypal",
      },
      {
        id: 14,
        type: "radio",
        name: "rdo-ani",
        text: "G-pay",
      },
      {
        id: 15,
        type: "radio",
        name: "rdo-ani",
        text: "Bitpay",
      },
    ],
  },
  {
    id: 2,
    title: "What is your favorite social media?",
    child: [
      {
        id: 21,
        type: "checkbox",
        text: "Instagram",
      },
      {
        id: 22,
        type: "checkbox",
        text: "Facebook",
      },
      {
        id: 23,
        type: "checkbox",
        check: "checked",
        text: "Whatsapp",
      },
      {
        id: 24,
        type: "checkbox",
        text: "Twitter",
      },
    ],
  },
];

export const BasicRadioAndCheckBoxSubTitle = [
  {
    code: `.form-check-inline `,
    text: `Use the`,
  },
  {
    text: `through display inline.`,
  },
];

export const BasicCheckboxRadioData: InlineInputType[] = [
  {
    id: 1,
    title: "Simple Checkbox",
    child: [
      {
        id: 11,
        formGroupClass: "checkbox checkbox-dark mb-0",
        text: "Blog",
        type: "checkbox",
      },
      {
        id: 12,
        formGroupClass: "checkbox checkbox-dark mb-0",
        text: "Gallery",
        check: "checked",
        type: "checkbox",
      },
      {
        id: 13,
        formGroupClass: "checkbox checkbox-dark mb-0",
        text: "Faq",
        type: "checkbox",
      },
      {
        id: 14,
        formGroupClass: "checkbox checkbox-dark mb-0",
        text: "Email",
        type: "checkbox",
      },
      {
        id: 15,
        formGroupClass: "checkbox checkbox-dark mb-0",
        text: "Icons",
        type: "checkbox",
      },
    ],
  },
  {
    id: 2,
    title: "Simple Radios",
    child: [
      {
        id: 21,
        formGroupClass: "radio radio-primary",
        check: "checked",
        text: "Maps",
        type: "radio",
        name: "radio5",
      },
      {
        id: 22,
        formGroupClass: "radio radio-primary",
        text: "Tasks",
        type: "radio",
        name: "radio5",
      },
      {
        id: 23,
        formGroupClass: "radio radio-primary",
        text: "To-do",
        type: "radio",
        name: "radio5",
      },
      {
        id: 24,
        formGroupClass: "radio radio-primary",
        text: "Forms",
        type: "radio",
        name: "radio5",
      },
      {
        id: 25,
        formGroupClass: "radio radio-primary",
        text: "Login",
        type: "radio",
        name: "radio5",
      },
    ],
  },
];

export const RadioToggleButtonsSubTitle = [
  {
    code: `[any one selected]`,
    text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
  },
  {
    text: `.`,
  },
];

export const OutLinedCheckBoxStylesSubTitle = [
  {
    code: `[multiple selected]`,
    text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
  },
  {
    text: `.`,
  },
];

//input-mask
export const InputMasksSubTitle = [
  {
    text: "Input mask used in form-validations,forms,card-details,and etc.",
  },
];

//mega-options
export const VariationRadioSubTitle = [
  {
    text: "Use the",
    code: "radio ",
  },
  { text: "attribute through create variation of radio designs." },
];

export const VariationCheckBoxSubTitle = [
  {
    text: "We can create any creative design by using",
    code: "(type='checkbox') ",
  },
  { text: "attribute." },
];

export const DefaultStyleSubTitle = [
  {
    text: "This option is show by default you don't need to add any extra class.",
  },
];

export const WithoutBordersStyleSubTitle = [
  {
    text: "By adding",
    code: ".plain-style ",
  },
  { text: "class to", code: ".mega-inline" },
  { text: " You can archive this style" },
];

export const SolidBordersStyleSubTitle = [
  {
    text: "Use the ",
    code: ".border-style ",
  },
  {
    text: "class to ",
    code: ".mega-inline ",
  },
  {
    text: "you can archive this style.",
  },
];

export const OfferStyleBorderSubTitle = [{ text: "Use the ", code: ".offer-style " }, { text: "class to ", code: " .mega-inline " }, { text: " you can archive this style." }];

export const InlineStyleSubTitle = [{ text: "For Create inline megaoption add", code: ".mega-inline" }, { text: "class in form tag" }];

export const VerticalStyleSubTitle = [
  {
    text: "vertical style in mega-options. Use the",
    code: ".mega-vertical ",
  },
  {
    text: "class through created vertical alignments.",
  },
];

export const HorizontalStyleSubTitle = [
  {
    text: "horizontal style in mega-options. Use the",
    code: ".mega-horizontal",
  },
  { text: "class through created horizontal alignments." },
];

export const VariationRadioData: VariationRadioItem[] = [
  {
    id: 1,
    title: "Select your payment method",
    child: [
      {
        id: 1,
        labelText: "BOB",
        image: "card.png",
        name: "radio1",
      },
      {
        id: 2,
        labelText: "MasterCard",
        image: "mastercard.png",
        check: "checked",
        name: "radio1",
      },
      {
        id: 3,
        labelText: "Paypal",
        image: "paypal.png",
        name: "radio1",
      },
      {
        id: 4,
        labelText: "VISA",
        image: "visa.png",
        name: "radio1",
      },
    ],
  },
  {
    id: 2,
    title: "What are the most important things to learn about web design?",
    child: [
      {
        id: 5,
        labelText: "A. HTML",
        name: "radio3",
      },
      {
        id: 6,
        labelText: "B. CSS",
        name: "radio3",
      },
      {
        id: 7,
        labelText: "C. Javascript",
        check: "checked",
        name: "radio3",
      },
      {
        id: 8,
        labelText: "D. Above the all",
        name: "radio3",
      },
    ],
  },
  {
    id: 3,
    title: "Radios With Creative Options & SVG Icons",
    child: [
      {
        id: 9,
        labelText: "The notification icon displayed new messages.",
        icon: "notification",
        iconColor: "danger",
        name: "radio2",
      },
      {
        id: 10,
        labelText: "The download icon indicated completion.",
        icon: "stroke-calendar",
        iconColor: "success",
        name: "radio2",
      },
      {
        id: 11,
        labelText: "The tag icon allowed easy categorization.",
        icon: "tag",
        iconColor: "warning",
        check: "checked",
        name: "radio2",
      },
      {
        id: 12,
        labelText: "The email icon was inaccessibly located.",
        icon: "stroke-email",
        iconColor: "primary",
        name: "radio2",
      },
    ],
  },
];

export const ActivitiesVariationCheckbox = [
  {
    id: 1,
    color: "success",
    text: "Reading",
  },
  {
    id: 2,
    color: "success",
    text: "Watching TV",
    check: "checked",
  },
  {
    id: 3,
    color: "danger",
    text: "Listening to music",
  },
  {
    id: 4,
    color: "danger",
    text: "Playing video games",
  },
  {
    id: 5,
    color: "success",
    text: "Painting/Drawing",
  },
];

export const UpgradeVariationCheckbox = [
  {
    id: 1,
    text: "Voxo",
    sales: "270 Sales",
  },
  {
    id: 2,
    text: "Zono",
    sales: "4.8K Sales",
  },
  {
    id: 3,
    text: "Multikart",
    sales: "2.6k Sales",
  },
  {
    id: 4,
    text: "Viho",
    sales: "2k Sales",
    check: "checked",
  },
];

export const DefaultStyleFormData = [
  {
    id: 1,
    color: "primary",
    badgeTitle: "COD",
    digits: "50 INR",
    text: "Estimated 2 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    id: 2,
    color: "secondary",
    badgeTitle: "Fast",
    digits: "100 INR",
    text: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
  },
];

export const WithoutBordersStyleFormData = [
  {
    id: 1,
    color: "warning",
    badgeTitle: "$39",
    digits: "100 MBPS",
    text: "Plans for 2/4/6 months are offered to new clients.",
    check: "checked",
  },
  {
    id: 2,
    color: "success",
    badgeTitle: "$50",
    digits: "Hired",
    text: "Plans for 2 years projects offered to new clients.",
  },
];

export const SolidBorderStyleFormData = [
  {
    id: 1,
    image: "img.png",
    spanText: "We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.",
  },
  {
    id: 2,
    image: "blog.jpg",
    spanText: "When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.",
  },
];

export const OfferStyleBorderFormData = [
  {
    id: 1,
    color: "success",
    image: "11.jpg",
    spanText: "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
  },
  {
    id: 2,
    color: "danger",
    image: "10.jpg",
    spanText: "Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.",
    check: "checked",
  },
];

export const InlineStyleFormData = [
  {
    id: 1,
    color: "warning",
    badgeTitle: "COD",
    digits: "50 INR",
    text: "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    id: 2,
    color: "secondary",
    badgeTitle: "Fast",
    digits: "100 INR",
    text: "Estimated 1 Day Shipping ( Duties end tax may be due upon delivery )",
  },
  {
    id: 3,
    color: "secondary",
    badgeTitle: "Standard",
    digits: "80 INR",
    text: "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    id: 4,
    color: "warning",
    badgeTitle: "Local",
    digits: "Free",
    text: "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
];

export const VerticalStyleFormData: VerticalStyleItem[] = [
  {
    id: 1,
    megaTitle: "Delivery Option",
    child: [
      {
        id: 1,
        color: "primary",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "COD",
        digits: "50 INR",
        spanText: "Estimated 10 to 15 Day Shipping ( Duties end taxes may be due delivery )",
      },
      {
        id: 2,
        color: "secondary",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Fast",
        digits: "100 INR",
        spanText: "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )",
      },
      {
        id: 3,
        color: "success",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Standard",
        digits: "80 INR",
        spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due delivery )",
      },
      {
        id: 4,
        color: "info",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Local",
        digits: "Free",
        spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )",
        check: "checked",
      },
    ],
  },
  {
    id: 2,
    megaTitle: "Buying Option",
    child: [
      {
        id: 5,
        color: "warning",
        name: "radio7",
        badgeTitle: "Casio",
        digits: "250 INR",
        check: "checked",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, icon: "star", class: "txt-warning" },
          { id: 2, icon: "star", class: "txt-warning" },
          { id: 3, icon: "star", class: "txt-warning" },
          { id: 4, icon: "star", class: "txt-warning" },
          { id: 5, icon: "star", class: "txt-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 6,
        color: "danger",
        cardClass: "mb-0",
        name: "radio7",
        badgeTitle: "Timex",
        digits: "150 INR",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, icon: "star", class: "txt-warning" },
          { id: 2, icon: "star", class: "txt-warning" },
          { id: 3, icon: "star" },
          { id: 4, icon: "star" },
          { id: 5, icon: "star", class: "m-r-5" },
        ],
        spanText: "2 start rating",
      },
    ],
  },
];

export const HorizontalStyleFormData: VerticalStyleItem[] = [
  {
    id: 1,
    megaTitle: "Delivery Option",
    child: [
      {
        id: 11,
        color: "primary",
        name: "radio22",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "COD",
        digits: "50 INR",
        spanText: "Estimated 5 Day Shipping(Duties end taxes may be due delivery)",
      },
      {
        id: 12,
        colClass: "offset-sm-3",
        color: "secondary",
        name: "radio22",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Fast",
        digits: "100 INR",
        spanText: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
        check: "checked",
      },
    ],
  },
  {
    id: 2,
    megaTitle: "Buying Option",
    child: [
      {
        id: 13,
        color: "success",
        name: "radio23",
        badgeTitle: "Bulova",
        digits: "250 INR",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, icon: "star", class: "txt-warning" },
          { id: 2, icon: "star", class: "txt-warning" },
          { id: 3, icon: "star", class: "txt-warning" },
          { id: 4, icon: "star", class: "txt-warning" },
          { id: 5, icon: "star", class: "txt-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 14,
        colClass: "offset-sm-3",
        cardClass: "mb-0",
        color: "info",
        name: "radio23",
        badgeTitle: "Zenith",
        digits: "150 INR",
        check: "checked",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, icon: "star", class: "txt-warning" },
          { id: 2, icon: "star" },
          { id: 3, icon: "star" },
          { id: 4, icon: "star" },
          { id: 5, icon: "star", class: "m-r-5" },
        ],
        spanText: "1 start rating",
      },
    ],
  },
];
//form validation
export const Options = [
  { value: "", label: "Choose..." },
  { value: "us", label: "U.S" },
  { value: "thailand", label: "Thailand" },
  { value: "india", label: "India" },
  { value: "uk", label: "U.K" },
];

export const TooltipFormValidationSubTitle = [
  {
    text: "If your form layout allows it, you can swap the",
    code: `.{valid|invalid}`,
  },
  {
    text: "-feedback classes for",
    code: `.{valid|invalid}`,
  },
  {
    text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
    code: "position: relative",
  },
  { text: "on it for tooltip positioning." },
];

export const BrowserDefaultsSubTitle = [
  {
    text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.`,
  },
];

export const ValidationFormSubTitle = [
  {
    text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for",
    code: `<select>`,
  },
  {
    text: "s are only available with ",
    code: `.form-select`,
  },
  {
    text: "and not",
    code: ".form-control.",
  },
];

//BasicForm
export const BasicFormSubTitle = [
  {
    text: "Use the",
    code: `.form-label `,
  },
  {
    text: "and",
    code: `.form-control `,
  },
  {
    text: "through create basic form.",
  },
];

export const FloatingFormSubTitle = [
  {
    text: "Use the",
    code: `.form-floating`,
  },
  {
    text: " through create floating form.",
  },
];

export const SelectSizingSubTitle = [
  {
    code: ".form-select",
  },
  {
    code: `[form-select-lg/form-select-sm].`,
    text: `to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:-`,
  },
];

export const SelectSizingData = [
  { value: "", label: "What's your hobbies? " },
  { value: "1", label: "Kho-kho" },
  { value: "2", label: "Reading Books" },
  { value: "3", label: "Creativity" },
];

export const FormControlSizingSubTitle = [
  {
    text: `Set heights using classes like`,
    code: ".form-control-lg",
  },
  {
    code: `.form-control-sm`,
    text: `and`,
  },
];

export const FileInputSubTitle = [
  {
    code: `<input>`,
    text: `For default file/multiple file/disabled file/small file/large file input for use`,
  },
  {
    code: `(type='file').`,
    text: `with`,
  },
];

export const FlatInputStyleSubTitle = [
  {
    code: `.btn-square `,
    text: `Use the`,
  },
  {
    text: `through defined 0px border-radius.`,
  },
];

export const RomanFlatInputData = ["I", "II", "III", "IV", "V"];

export const MultiplePaintingFlatData = ["Landscape", "Portrait", "Oil Painting", "Abstract art", "Acrylic"];

export const RomanOpenMenu = ["I", "II", "III"];

export const CharOpenMenu = ["One", "Two", "Three"];

export const BasicHTMLInputControlSubTitle = [
  {
    text: `Give textual form controls like`,
    code: `<input>`,
  },
  {
    code: `<textarea>`,
    text: `s and`,
  },
  { text: "s an upgrade with custom styles, sizing, focus states, and more." },
];

export const BasicFloatingInputControlSubTitle = [
  {
    text: `Give textual form controls like`,
    code: `<input>`,
  },
  {
    code: `<textarea>`,
    text: `s and`,
  },
  { text: "s an upgrade with custom styles, sizing, focus states, and more." },
];

export const EdgesInputStyleSubTitle = [
  {
    text: `Use the`,
    code: `.btn-pill`,
  },
  {
    text: `through defined border-radius.`,
  },
];

export const CareerEdgesList = ["Graphic Designer", "Photographer", "Musician", "Online Tutor", "Architect", "Social Worker", "Nonprofit Manager", "Environmental Engineer"];

export const RaiseInputStyleSubTitle = [
  {
    text: `Use the`,
    code: `input-air-*`,
  },
  {
    text: `through defined bottom box-shadow.`,
  },
];

export const PixelStrapRaiSetList = ["Tivo", "Roxo", "Wingo", "Zono", "Koho"];

export const ColorsListBaseInput = ["Red", "Yellow", "Orange", "White", "Black", "Gray", "Brown", "Purple", "White"];

//Input groups
export const ButtonAddonsSubTitle = [
  {
    text: "Multiple add-ons are supported and can be mixed with buttons input versions.",
  },
];

export const CustomFormsSubTitle = [
  {
    text: "Input groups include support for",
    code: "custom selects and custom file inputs",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const CustomFileInputSubTitle = [
  {
    text: "Input groups include support for custom selects and custom",
    code: "file uploads",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const ButtonsWithDropdownSubTitle = [
  {
    text: "Use the",
    code: ".input-group ",
  },
  {
    text: "and",
    code: `[aria-label='']`,
  },
  {
    text: "through buttons with dropdowns.",
  },
];

export const SegmentedButtonsSubTitle = [
  {
    text: "Multiple add-ons are supported and can be mixed with",
    code: " dropdowns ",
  },
  {
    text: "versions.",
  },
];

export const CheckBoxesAndRadiosSubTitle = [
  {
    text: "Place any checkbox or radio option within an input group's addon instead of text. We recommend adding",
    code: ".mt-0",
  },
  {
    text: "to the",
    code: `.form-check-input`,
  },
  {
    text: "when there's no visible text next to the input.",
  },
];

export const SizingSubTitle = [
  {
    text: "Add the relative form sizing classes to the",
    code: " .input-group",
  },
  {
    text: "itself and contents within will automatically resize—no need for repeating the form control size classes on each element.",
  },
];

export const MultipleInputsSubTitle = [
  {
    text: "While multiple",
    code: `<input>`,
  },
  {
    text: "s are supported visually, validation styles are only available for input groups with a single ",
    code: `<input>`,
  },
  {
    text: ".",
  },
];

export const BasicInputGroupsSubTitle = [
  {
    text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
    code: `<label>`,
  },
  {
    text: "s outside the input group.",
  },
];

export const VariationOfAddonsSubTitle = [
  {
    text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
    code: `<label>`,
  },
  {
    text: "s outside the input group.",
  },
];

export const CareerSelectList = ["Data Scientist", "Biomedical Engineer", "Software Developer"];

export const FavoriteColorsData = ["Yellow", "Red", "Orange"];

export const FavoriteChocolatesData = ["Dark Chocolates", "Dairy Milk", "Kitkat"];

export const FavoriteItemsData = ["Canvas", "Colors", "Brushes"];

export const ButtonDropdownData1 = ["Ecommerce", "Email", "Users", "Bookmarks"];

export const ButtonDropdownData2 = ["Starter kit", "Gallery", "Blog", "Maps"];

export const ButtonDropdownData3 = ["Widgets", "Project", "Contacts", "Tasks"];

export const ButtonDropdownData4 = ["To-Do", "FAQ", "Knowledgebase", "Support Ticket"];

export const SegmentedButtonsData1 = ["Learning", "Editors", "Users", "Social App"];

export const SegmentedButtonsData2 = ["Search Result", "Tasks", "Projects", "Animation"];
