import { Clock, CreditCard, Gift, MoreVertical, Truck } from "react-feather";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import SvgIcon from "../../Components/CoreComponents/SvgIcon";
import { Href } from "../../Constants";
import { OrderHistoryImageType, OrderHistoryTableColumns, ProductListTableDataColumnType, ProductListTableProduct } from "../../Types/EcommerceType";
import { dynamicImage, Image } from "../../Utils";
import { Badge } from "reactstrap";

export const InvoiceHeaderData = ["Product", "Quantity", "Price", "Unit", "Vat %", "Total"];

export const InvoiceTwoDataList = [
  {
    image: "dashboard-8/product-categories/laptop.png",
    title: "Apple Desktop",
    code: "#XDG-6437",
    quantity: "2",
    price: "100",
    unit: "Hour(s)",
    vat: "0",
    total: "200",
  },
  {
    image: "dashboard-8/product-categories/watch.png",
    title: "Smart Watch",
    code: "#XDG-6437",
    quantity: "1",
    price: "200",
    unit: "Hour(s)",
    vat: "0",
    total: "200",
  },
  {
    image: "dashboard-8/product-categories/phone.png",
    title: "Apple iphone 13 Pro",
    code: "#XDG-6437",
    quantity: "1",
    price: "10,000",
    unit: "Hour(s)",
    vat: "0",
    total: "10,000",
  },
  {
    image: "dashboard-8/product-categories/headphone.png",
    title: "Wireless Headphone",
    code: "#XDG-6437",
    quantity: "2",
    price: "8,000",
    unit: "Hour(s)",
    vat: "0",
    total: "16,000",
  },
];

export const InvoiceThreeData = [
  {
    title: "HTML Admin template",
    detail: "Regular License",
    quantity: "2",
    price: "35",
    total: "70",
    color: "#2b5e5e",
  },
  {
    title: "React Admin template",
    detail: "Regular License",
    quantity: "1",
    price: "25",
    total: "50",
    color: "#EA6F4E",
  },
  {
    title: "Laravel Admin template",
    detail: "Regular License",
    quantity: "2",
    price: "30",
    total: "60",
    color: "#58b232",
  },
  {
    title: "Vuejs Admin template",
    detail: "Regular License",
    quantity: "3",
    price: "20",
    total: "60",
    color: "#fc564a",
  },
];

export const InvoiceFourData = [
  {
    title: "Proposal & Brochure Design",
    detail: "Regular License",
    price: "300",
    quantity: "1",
    total: "300",
  },
  {
    title: "Web design and development",
    detail: "Regular License",
    price: "400",
    quantity: "2",
    total: "800",
  },
  {
    title: "Logo & Brand  design",
    detail: "Regular License",
    price: "240",
    quantity: "2",
    total: "480",
  },
  {
    title: "Stationary Design",
    detail: "Regular License",
    price: "100",
    quantity: "1",
    total: "100",
  },
];

export const Invoice5FourData = [
  { title: "Subtotal", price: "$6100.00" },
  { title: "VAT / Tax 15%", price: "$50.00" },
  { title: "Discount", price: "$30.00" },
];

export const InvoiceSixTableData = ["Item Description", "Hours", "Rate", "SubTotal"];

export const InvoiceSixData = [
  {
    title: "Red Shirt",
    detail: "Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.",
    hours: "5",
    price: "75",
    total: "375",
  },
  {
    title: "Brown Dress",
    detail: "Aask - Brown Polyester Blend Women's Fit & Flare Dress.",
    hours: "3",
    price: "75",
    total: "225",
  },
  {
    title: "Flower Dress",
    detail: "Skyblue Flower Printed Sleevless Strappy Dress.",
    hours: "10",
    price: "75",
    total: "750",
  },
  {
    title: "Red Skirt",
    detail: "R L F - Red Cotton Blend Women's A-Line Skirt.",
    hours: "10",
    price: "75",
    total: "750",
  },
];

export const AddProductNav = [
  {
    id: 1,
    icon: "product-detail",
    title: "Add Product Details",
    detail: "Add Product name & details",
  },
  {
    id: 2,
    icon: "product-gallery",
    title: "Product gallery",
    detail: "thumbnail & Add Product Gallery",
  },
  {
    id: 3,
    icon: "product-category",
    title: "Product Categories",
    detail: "Add Product category, Status and Tags",
  },
  {
    id: 4,
    icon: "pricing",
    title: "Selling prices",
    detail: "Add Product basic price & Discount",
  },
  {
    id: 5,
    icon: "advance",
    title: "Advance",
    detail: "Add Meta details & Inventory details",
  },
];

export const MultiWithHeaderData = [{ name: "NBA Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }, { name: "", divider: true }, { name: "NHL Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }];

export const TypesOfProductData = [
  {
    id: "radio-icon",
    check: true,
    title: "Fixed Price",
  },
  {
    id: "radio-icon4",
    title: "BOGO(Buy one, Get one)",
    selected: true,
  },
  {
    id: "radio-icon5",
    title: "Seasonal or holiday discount",
  },
  {
    id: "radio-icon6",
    title: "Percentage-based discount(%)",
  },
  {
    id: "radio-icon7",
    title: "Volume or bulk discount",
  },
];

export const ProductFiveNavData = ["Inventory", "Additional Options", "Shipping"];

export const ProductListTableData = [
  {
    image: "dashboard-8/product-categories/laptop.png",
    name: "Apple Desktop 2024",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-8/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "dashboard-8/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-2/product/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/ipad.png",
    name: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: 45000.0,
    quantity: 10,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-8/product-categories/mouse.png",
    name: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "dashboard-2/product/1.png",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/dvd.png",
    name: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: 5600.0,
    quantity: 10,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/speaker.png",
    name: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: 12200.0,
    quantity: 50,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-8/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "dashboard-8/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-2/product/1.png",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-8/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "dashboard-8/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "dashboard-2/product/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "dashboard-8/product-categories/laptop.png",
    name: "Apple Desktop 2024",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-8/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "dashboard-8/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "dashboard-2/product/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 2,
  },
];

const ProductListTableAction = () => {
  return (
    <div className="product-action">
      <Link to={Href}>
        <SvgIcon iconId="stroke-editors" />
      </Link>
      <SvgIcon iconId="trash" />
    </div>
  );
};

const ProductListTableProductName: React.FC<ProductListTableProduct> = ({ images, name }) => {
  return (
    <div className="product-names my-2">
      <div className="light-product-box bg-img-cover">
        <Image className="img-fluid" src={dynamicImage(images)} alt="laptop" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const ProductListTableStatus: React.FC<ProductListTableProduct> = ({ name }) => {
  return (
    <Badge color="" className={`badge-light-${name === "Sold Out" ? "secondary" : "primary"}`}>
      {name}
    </Badge>
  );
};

const ProductListTableRating: React.FC<ProductListTableProduct> = ({ rate }) => {
  return <Rating initialValue={rate} size={17} fillColor="#ea9200" />;
};

export const ProductListTableDataColumn = [
  {
    name: "Product Name",
    selector: (row: ProductListTableDataColumnType) => `${row.name}`,
    cell: (row: ProductListTableDataColumnType) => <ProductListTableProductName images={row.image} name={row.name} />,
    sortable: true,
    grow: 2,
  },
  {
    name: "SKU",
    selector: (row: ProductListTableDataColumnType) => `${row.sku}`,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: ProductListTableDataColumnType) => `${row.category}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: ProductListTableDataColumnType) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Qty",
    selector: (row: ProductListTableDataColumnType) => `${row.quantity}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: ProductListTableDataColumnType) => `${row.name}`,
    cell: (row: ProductListTableDataColumnType) => <ProductListTableStatus name={row.status} />,
    sortable: true,
  },
  {
    name: "Rating",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableRating rate={row.rating} />,
  },
  {
    name: "Action",
    cell: () => <ProductListTableAction />,
  },
];

export const FiltersData = [
  {
    name: "Choose Product",
    options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];

export const OrderData = [
  {
    id: 1,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 2,
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    id: 3,
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    id: 4,
    name: "Denim T-shirt",
    image: "product-table-3.png",
  },
  {
    id: 5,
    name: "T-shirt",
    image: "product-table-2.png",
  },
  {
    id: 6,
    name: "Blue T-shirt",
    image: "product-table-1.png",
  },
  {
    id: 7,
    name: "Blue T-shirt",
    image: "product-table-1.png",
  },
  {
    id: 8,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 9,
    name: "Men Shirt",
    image: "product-table-5.png",
  },
];

export const OrderHistoryData = [
  {
    image: "1.png",
    productName: "Long Top",
    tag: "Processing",
    size: "M",
    color: "Lavender",
    articleNumber: 4215738,
    units: 1,
    price: "$21",
    icon: <MoreVertical />,
  },
  {
    image: "13.png",
    productName: "Fancy watch",
    tag: "Processing",
    size: "35mm",
    color: "Blue",
    articleNumber: 5476182,
    units: 1,
    price: "$10",
    icon: <MoreVertical />,
  },
  {
    image: "4.png",
    productName: "Man shoes",
    tag: "Processing",
    size: "8",
    color: "Black & white",
    articleNumber: 1756457,
    units: 1,
    price: "$18",
    icon: <MoreVertical />,
  },
  {
    image: "10.png",
    productName: "Ladies side bag",
    tag: "Shipped",
    size: "22cm x 18cm",
    color: "Brown",
    articleNumber: 7451725,
    units: 1,
    price: "$13",
    icon: <MoreVertical />,
  },
  {
    image: "12.png",
    productName: "Ladies Slipper",
    tag: "Shipped",
    size: "6",
    color: "Brown & white",
    articleNumber: 4127421,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
  {
    image: "3.png",
    productName: "Fancy Ladies Jacket",
    tag: "Shipped",
    size: "XL",
    color: "Light gray",
    articleNumber: 3581714,
    units: 1,
    price: "$24",
    icon: <MoreVertical />,
  },
  {
    image: "2.png",
    productName: "Ladies Handbag",
    tag: "Shipped",
    size: "25cm x 20cm",
    color: "Black",
    articleNumber: 6748142,
    units: 1,
    price: "$14",
    icon: <MoreVertical />,
  },
  {
    image: "15.png",
    productName: "Iphone6 mobile",
    tag: "Cancelled",
    size: "10cm x 15cm",
    color: "Black",
    articleNumber: 5748214,
    units: 1,
    price: "$25",
    icon: <MoreVertical />,
  },

  {
    image: "14.png",
    productName: "Watch",
    tag: "Cancelled",
    size: "27mm",
    color: "Brown",
    articleNumber: 2471254,
    units: 1,
    price: "$12",
    icon: <MoreVertical />,
  },

  {
    image: "11.png",
    productName: "Slipper",
    tag: "Cancelled",
    size: "6",
    color: "Blue",
    articleNumber: 8475112,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
];

const OrderHistoryImage: React.FC<OrderHistoryImageType> = ({ name }) => {
  return <Image className="img-fluid img-30" src={dynamicImage(`product/${name}`)} alt="#" />;
};

const OrderDataHistory: React.FC<OrderHistoryImageType> = ({ name, tag }) => {
  return (
    <div className="product-name">
      <Link to={Href}>{name}</Link>
      <div className="order-process">
        <span className={`order-process-circle ${tag === "Cancelled" ? "cancel-order" : tag === "Shipped" ? "shipped-order" : ""} `}></span>
        {tag}
      </div>
    </div>
  );
};

export const OrderHistoryDataColumn = [
  {
    name: "Product",
    cell: (row: OrderHistoryTableColumns) => <OrderHistoryImage name={row.image} />,
  },
  {
    name: "Product Name",
    selector: (row: OrderHistoryTableColumns) => `${row.productName}`,
    cell: (row: OrderHistoryTableColumns) => <OrderDataHistory name={row.productName} tag={row.tag} />,
    sortable: true,
    grow: 2,
  },
  {
    name: "Size",
    selector: (row: OrderHistoryTableColumns) => `${row.size}`,
    sortable: true,
  },
  {
    name: "Color",
    selector: (row: OrderHistoryTableColumns) => `${row.color}`,
    sortable: true,
  },
  {
    name: "Article Number",
    selector: (row: OrderHistoryTableColumns) => row["articleNumber"],
    sortable: true,
    grow: 2,
  },
  {
    name: "Units",
    selector: (row: OrderHistoryTableColumns) => row["units"],
  },
  {
    name: "Price",
    selector: (row: OrderHistoryTableColumns) => row["price"],
    sortable: true,
  },
  {
    name: <MoreVertical />,
    cell: (row: OrderHistoryTableColumns) => row["icon"],
  },
];

export const WhishListProduct = [
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue Shirt",
    image: "product-table-2.png",
  },
  {
    name: "Red Shirt",
    image: "product-table-1.png",
  },
  {
    name: "Red Shirt",
    image: "product-table-1.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue Shirt",
    image: "product-table-2.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
];

export const BecomeMemberData = [
  {
    type: "Standard",
    price: 10,
    benefit: ["50GB Disk Space", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Premium",
    price: 20,
    benefit: ["10% on all product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Author pack",
    price: 50,
    benefit: ["Upload 50 product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Author pack",
    price: 50,
    benefit: ["Upload 50 product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
];

export const SimplePricingData = [
  {
    title: "Standard",
    price: 15,
    plan: "Standard Plan",
  },
  {
    title: "Business",
    price: 25,
    plan: "Business Plan",
  },
  {
    title: "Premium",
    price: 35,
    plan: "Premium Plan",
  },
  {
    title: "Extra",
    price: 45,
    plan: "Extra Plan",
  },
];

export const ProductSocialLinks = [
  {
    link: "https://www.facebook.com/",
    text: "fa fa-facebook",
  },
  {
    link: "https://accounts.google.com/",
    text: "fa fa-google-plus",
  },
  {
    link: "https://twitter.com/",
    text: "fa fa-twitter",
  },
  {
    link: "https://www.instagram.com/",
    text: "fa fa-instagram",
  },
  {
    link: "https://rss.app/",
    text: "fa fa-rss",
  },
];

export const ProductColorData = ["primary", "secondary", "success","info","warning"]

export const BrandsData = ["Clothing", "Bags", "Footwear", "Watches", "ACCESSORIES"];

export const ProductBrandData = [
  {
    icon: <Truck />,
    text: "Free Shipping",
    span: "Free Shipping World Wide",
  },
  {
    icon: <Clock />,
    text: "24 X 7 Service",
    span: "Online Service For New Customer",
  },
  {
    icon: <Gift />,
    text: "Festival Offer",
    span: "New Online Special Festival",
  },
  {
    icon: <CreditCard />,
    text: "Online Payment",
    span: "Contrary To Popular Belief. ",
  },
];

export const ProductDetailData = "Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.";

export const ClothsDetailsData = ["Febric", "Video", "Details", "Brand"];

export const ClothsDetailsTabData = [
  ["Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink colour Classic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash..", 'Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, art, styles that "combine heritage with modernity, simplicity, playfulness and street style".'],
  ["Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With", "Button Closure Long Sleeve Casual Torn Lycra Denim Jacket."],
  ["Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton", "T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve."],
  [
    `Product Dimensions : 18 x 18 x 4 cm <br />
     Date First Available : 31 March 2024 <br />
     Manufacturer : Tee Stores <br />
     Item part number : TS-WT721-XS-WHITE`,
  ],
];

export const FilterProductData = [
  {
    id: 2,
    colClass: "col-xl-6 col-sm-6",
    filterData: ["1", "2"],
  },
  {
    id: 3,
    colClass: "col-xl-4 col-sm-4",
    filterData: ["3", "4", "5"],
  },
  {
    id: 4,
    colClass: "col-xl-3 col-sm-3",
    filterData: ["6", "7", "8", "9"],
  },
  {
    id: 6,
    colClass: "col-xl-2 col-md-4 col-sm-5",
    filterData: ["10", "11", "12", "13", "14", "15"],
  },
];

export const Settings = {
  slidesToShow: 1,
  swipeToSlide: false,
  arrows: true,
  dots: false,
};

export const ProductSliderOne = [
  {
    image: "01.jpg",
    title: "Woman T-shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Dream Beauty Fashion",
    text: "$150.00",
  },
  {
    image: "03.jpg",
    title: "VOXATI",
    text: "$200.00",
  },
];

export const ProductSliderTwo = [
  {
    image: "01.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "03.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
];

export const CartTableHeader = ["Product", "Product Name", "Price", "Quantity", "Action", "Total"];

export const CreditSelect = ["Select Type", "Master", "Visa"];

export const DebitMonthSelect = ["Select Month", "Jan", "Fab", "March", "April"];

export const DebitYearSelect = ["Select Year", "2015", "2016", "2017", "2023", "2019"];

export const EmiBankSelect = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];

export const EmiCardSelect = ["Select Card", "2", "3", "4", "5"];

export const EmiYearSelect = ["Select Duration", "2015-2016", "2016-2017", "2017-2023", "2023-2019"];
