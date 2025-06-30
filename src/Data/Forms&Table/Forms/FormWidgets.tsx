import { CalendarItemType, CustomSwitchDataItem, IconsUncheckedBordersSwitchProp, ReactstrapCalendarItem, SwitchSizingIconsTypes } from "../../../Types/FormsType";

//switch
export const CustomSwitchSubTitle = [
  {
    text: "A switch has the markup of a custom checkbox but uses the .form-switch class to render a ",
    code: "toggle switch",
  },
  {
    text: ".",
  },
];

export const CustomSwitchData: CustomSwitchDataItem[] = [
  {
    id: 1,
    child: [
      { id: 1, color: "primary" },
      { id: 2, color: "secondary" },
      { id: 3, color: "success" },
      { id: 4, color: "danger" },
      { id: 5, color: "warning" },
      { id: 6, color: "info" },
      { id: 7, color: "dark" },
    ],
  },
  {
    id: 2,
    cardClass: "radius-none",
    formSize: "default-square",
    child: [
      { id: 1, color: "primary" },
      { id: 2, color: "secondary" },
      { id: 3, color: "success" },
      { id: 4, color: "danger" },
      { id: 5, color: "warning" },
      { id: 6, color: "info" },
      { id: 7, color: "dark" },
    ],
  },
  {
    id: 3,
    cardClass: "common-flex",
    child: [
      { id: 1, color: "primary", disabled: "disabled" },
      { id: 2, color: "secondary", disabled: "disabled" },
      { id: 3, color: "success", disabled: "disabled" },
      { id: 4, color: "danger", disabled: "disabled" },
      { id: 5, color: "warning", disabled: "disabled" },
      { id: 6, color: "info", disabled: "disabled" },
      { id: 7, color: "dark", disabled: "disabled" },
    ],
  },
];

const IconsSwitchSubTitle = [
  {
    text: "Use the",
    code: ".switch-state ",
  },
  {
    text: "and",
    code: "icon-state ",
  },
  {
    text: "through defined icons switches.",
  },
];

const UnCheckedSwitchSubTitle = [
  {
    text: "Use the",
    code: ".bg-*",
  },
  {
    text: "class through created default switches.",
  },
];

const BordersWithIconsSubTitle = [
  {
    text: "Use the",
    code: ".switch-outline ",
  },
  {
    text: "and",
    code: ".icon-state",
  },
  { text: "class through created outline and icons. " },
];

export const IconsUncheckedBordersSwitchData: IconsUncheckedBordersSwitchProp[] = [
  {
    id: 1,
    title: "Icons Switch",
    subTitle: IconsSwitchSubTitle,
    child: [
      {
        id: 1,
        mediaBodyClass: "icon-state",
        color: "primary",
        labelText: "Primary Switch",
      },
      {
        id: 2,
        mediaBodyClass: "icon-state",
        color: "secondary",
        labelText: "Secondary Switch",
      },
      {
        id: 3,
        mediaBodyClass: "icon-state",
        color: "success",
        labelText: "Success Switch",
      },
      {
        id: 4,
        mediaBodyClass: "icon-state",
        color: "danger",
        labelText: "Danger Switch",
      },
      {
        id: 5,
        mediaBodyClass: "icon-state",
        color: "warning",
        labelText: "Warning Switch",
      },
      {
        id: 6,
        mediaBodyClass: "icon-state",
        color: "info",
        labelText: "Info Switch",
      },
      {
        id: 7,
        mediaBodyClass: "icon-state",
        color: "dark",
        labelText: "Dark Switch",
      },
    ],
  },
  {
    id: 2,
    title: "Unchecked Switch",
    subTitle: UnCheckedSwitchSubTitle,
    child: [
      {
        id: 1,
        color: "primary",
        labelText: "Unchecked Primary Switch",
      },
      {
        id: 2,
        color: "secondary",
        labelText: "Unchecked Secondary Switch",
      },
      {
        id: 3,
        color: "success",
        labelText: "Unchecked Success Switch",
      },
      {
        id: 4,
        color: "danger",
        labelText: "Unchecked Danger Switch",
      },
      {
        id: 5,
        color: "warning",
        labelText: "Unchecked Warning Switch",
      },
      {
        id: 6,
        color: "info",
        labelText: "Unchecked Info Switch",
      },
      {
        id: 7,
        color: "dark",
        labelText: "Unchecked Dark Switch",
      },
    ],
  },
  {
    id: 3,
    title: "Borders with Icons",
    subTitle: BordersWithIconsSubTitle,
    child: [
      {
        id: 1,
        mediaBodyClass: "icon-state switch-outline",
        color: "primary",
        labelText: "Bordered Primary Switch",
      },
      {
        id: 2,
        mediaBodyClass: "icon-state switch-outline",
        color: "secondary",
        labelText: "Bordered Secondary Switch",
      },
      {
        id: 3,
        mediaBodyClass: "icon-state switch-outline",
        color: "success",
        labelText: "Bordered Success Switch",
      },
      {
        id: 4,
        mediaBodyClass: "icon-state switch-outline",
        color: "danger",
        labelText: "Bordered Danger Switch",
      },
      {
        id: 5,
        mediaBodyClass: "icon-state switch-outline",
        color: "warning",
        labelText: "Bordered Warning Switch",
      },
      {
        id: 6,
        mediaBodyClass: "icon-state switch-outline",
        color: "info",
        labelText: "Bordered Info Switch",
      },
      {
        id: 7,
        mediaBodyClass: "icon-state switch-outline",
        color: "dark",
        labelText: "Bordered Dark Switch",
      },
    ],
  },
];

export const DisabledOutlineSwitchSubTitle = [
  {
    text: "Use the",
    code: ".switch-outline ",
  },
  {
    text: "class through created outline. ",
  },
];

export const DefaultTouchSpinData = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];

export const VariationOfSwitchSubTitle = [
  {
    text: "Use the",
    code: ".tgl-skewed/tgl-flip",
  },
  {
    text: " class through created variations. ",
  },
];

export const VariationSwitchesData1 = [
  {
    id: 1,
    class: "skewed",
    on: "ON",
    off: "OFF",
    text: "Skewed",
  },
  {
    id: 2,
    class: "flip",
    on: "Yeah!",
    off: "Nope",
    text: "Flip",
  },
];

export const VariationSwitchesData2 = [
  {
    id: 1,
    color: "warning",
    text: "Checked",
  },
  {
    id: 2,
    color: "success",
    text: "Flat",
  },
];

const SwitchSizingSubTitle = [
  {
    text: "Use the",
    code: ".switch-sm",
  },
  {
    text: " and ",
    code: ".switch-lg ",
  },
  { text: "class through defined switch sizing." },
];

const SwitchSizingWithIconsSubTitle = [
  {
    text: "Use the",
    code: ".icon-state ",
  },
  {
    text: "class through visible icons in switches.",
  },
];

export const SwitchSizingIconsData: SwitchSizingIconsTypes[] = [
  {
    id: 1,
    title: "Switch Sizing",
    subTitle: SwitchSizingSubTitle,
    child: [
      {
        id: 1,
        labelText: "Small Size",
        size: "switch-sm",
        check: "checked",
      },
      {
        id: 2,
        labelText: "Small Size Unchecked",
        size: "switch-sm",
      },
      {
        id: 3,
        labelText: "Normal Size",
        check: "checked",
      },
      {
        id: 4,
        labelText: "Normal Unchecked",
      },
      {
        id: 5,
        labelText: "Disabled State",
        disabled: "disabled",
      },
      {
        id: 6,
        labelText: "Large Size",
        size: "switch-lg",
        check: "checked",
        spanClass: "large-switch",
      },
      {
        id: 7,
        labelText: "Large Unchecked",
        size: "switch-lg",
        spanClass: "large-switch",
      },
      {
        id: 8,
        labelText: "Disabled",
        size: "switch-lg",
        disabled: "disabled",
        spanClass: "large-switch",
      },
    ],
  },
  {
    id: 2,
    title: "Switch with Icons",
    subTitle: SwitchSizingWithIconsSubTitle,
    child: [
      {
        id: 1,
        labelText: "Small Size",
        size: "switch-sm icon-state",
        check: "checked",
      },
      {
        id: 2,
        labelText: "Small Size Unchecked",
        size: "switch-sm icon-state",
      },
      {
        id: 3,
        labelText: "Normal Size",
        size: "icon-state",
        check: "checked",
      },
      {
        id: 4,
        labelText: "Normal Unchecked",
        size: "icon-state",
      },
      {
        id: 5,
        labelText: "Disabled With Icon",
        size: "icon-state",
        disabled: "disabled",
      },
      {
        id: 6,
        labelText: "Large Size",
        size: "switch-lg icon-state",
        check: "checked",
      },
      {
        id: 7,
        labelText: "Large Unchecked",
        size: "switch-lg icon-state",
      },
      {
        id: 8,
        labelText: "Disabled",
        size: "switch-lg icon-state",
        disabled: "disabled",
      },
    ],
  },
];

//typeahead
export const BasicTypeAheadSubTitle = [
  {
    text: "This is the simple demo for Typeahead.",
  },
];

export const CustomTemplateSubTitle = [
  {
    text: "Custom templates give you full control over how suggestions get rendered",
  },
];

export const MultipleSelectionSubTitle = [
  {
    text: "Two datasets that are prefetched, stored, and searched on the client. Highlighting is enabled.",
  },
];

export const PrefetchSubTitle = [
  {
    text: "Prefetched data is fetched and processed on initialization",
  },
];

export const RemoteTypeAheadSubTitle = [
  {
    text: "Remote data is only used when the data provided by local and prefetch is insufficient",
  },
];

export const BloodHoundSubTitle = [
  {
    text: "Bloodhound offers advanced functionalities such as prefetching and backfilling with remote data.",
  },
];

export const ScrollableDropdownSubTitle = [
  {
    text: "Dataset shows in scrollable dropdown menu.",
  },
];

export const RTlSupportSubTitle = [
  {
    text: "Dataset shows in Right Side.",
  },
];

export const StatesOfUSA = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export const CountryList = ["Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Antarctica", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "Åland", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Saint Barthélemy", "Bermuda", "Brunei", "Bolivia", "Bonaire", "Brazil", "Bahamas", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos [Keeling] Islands", "Congo", "Central African Republic", "Republic of the Congo", "Switzerland", "Ivory Coast", "Cook Islands", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Curacao", "Christmas Island", "Cyprus", "Czechia", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "Micronesia", "Faroe Islands", "France", "Gabon", "United Kingdom", "Grenada", "Georgia", "French Guiana", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "British Indian Ocean Territory", "Iraq", "Iran", "Iceland", "Italy", "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis", "North Korea", "South Korea", "Kuwait", "Cayman Islands", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova", "Montenegro", "Saint Martin", "Madagascar", "Marshall Islands", "Macedonia", "Mali", "Myanmar [Burma]", "Mongolia", "Macao", "Northern Mariana Islands", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn Islands", "Puerto Rico", "Palestine", "Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russia", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia", "Svalbard and Jan Mayen", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "São Tomé and Príncipe", "El Salvador", "Sint Maarten", "Syria", "Swaziland", "Turks and Caicos Islands", "Chad", "French Southern Territories", "Togo", "Thailand", "Tajikistan", "Tokelau", "East Timor", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ukraine", "Uganda", "U.S. Minor Outlying Islands", "United States", "Uruguay", "Uzbekistan", "Vatican City", "Saint Vincent and the Grenadines", "Venezuela", "British Virgin Islands", "U.S. Virgin Islands", "Vietnam", "Vanuatu", "Wallis and Futuna", "Samoa", "Kosovo", "Yemen", "Mayotte", "South Africa", "Zambia", "Zimbabwe"];

export const MovieList = ["Around the World in 80 Days", "All Quiet on the Western Front", "Gentleman's Agreement", "All the Kings Men", "All About Eve", "An American in Paris", "The Apartment", "The Broadway Melody", "Mutiny on the Bounty", "The Best Years of Our Lives", "The Bridge on the River Kwai", "Ben-Hur", "Cimarron", "Cavalcade", "You Can't Take It with You", "Casablanca", "The Life of Emile Zola", "The Greatest Show on Earth", "From Here to Eternity", "Grand Hotel", "The Great Ziegfeld", "Gone with the Wind", "How Green Was My Valley", "Going My Way", "Gigi", "It Happened One Night", "Hamlet", "Mrs. Miniver", "Marty", "Rebecca", "Wings"];

export const OscarWinnersMovieList = ["West Side Story", "Lawrence of Arabia", "Tom Jones", "My Fair Lady", "The Sound of Music", "A Man for All Seasons", "In the Heat of the Night", "Oliver!", "Midnight Cowboy", "Patton", "The French Connection", "The Godfather", "The Sting", "The Godfather Part II", "One Flew over the Cuckoo's Nest", "Rocky", "Annie Hall", "The Deer Hunter", "Kramer vs. Kramer", "Ordinary People", "Chariots of Fire", "Gandhi", "Terms of Endearment", "Amadeus", "Out of Africa", "Platoon", "The Last Emperor", "Rain Man", "Driving Miss Daisy", "Dances With Wolves", "The Silence of the Lambs", "Unforgiven", "Schindler’s List", "Forrest Gump", "Braveheart", "The English Patient", "Titanic", "Shakespeare in Love", "American Beauty", "Gladiator", "A Beautiful Mind", "Chicago", "The Lord of the Rings: The Return of the King", "Million Dollar Baby", "Crash", "The Departed", "No Country for Old Men", "Slumdog Millionaire", "The Hurt Locker", "The King's Speech", "The Artist", "Argo"];

export const MultipleWithHeadersData = [{ name: "NBA Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }, { name: "", divider: true }, { name: "NHL Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }];

export const ReactstrapCalendarData: ReactstrapCalendarItem[] = [
  {
    id: 1,
    labelText: "Date and time",
    type: CalendarItemType.DateTimeLocal,
    value: "2024-05-03T18:45:00",
  },
  {
    id: 2,
    labelText: "Date",
    type: CalendarItemType.Date,
    value: "2024-05-01",
  },
  {
    id: 3,
    labelText: "Month",
    type: CalendarItemType.Month,
    value: "2024-01",
  },
  {
    id: 4,
    labelText: "Week",
    type: CalendarItemType.Week,
    value: "2024-W09",
  },
  {
    id: 5,
    labelText: "Time",
    type: CalendarItemType.Time,
    value: "21:45:00",
  },
];

export const TouchSpinSubTitle = [
  {
    text: "Use the",
    code: ".decrement-touchspin ",
  },
  {
    text: "and",
    code: ".increment-touchspin ",
  },
  { text: "class." },
];