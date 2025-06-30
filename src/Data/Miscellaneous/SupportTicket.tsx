import { TableColumn } from "react-data-table-component";
import { CustomImageType, CustomProgressType, SupportDataType } from "../../Types/MiscellaneousType";
import { dynamicImage, Image } from "../../Utils";
import { Progress } from "reactstrap";

export const SupportTicketSubTitle = [{ text: "List of ticket opend by customers" }];

export const TicketListData = [
  {
    id: 1,
    title: "Order",
    count: 2563,
    color: "primary",
  },
  {
    id: 2,
    title: "Pending",
    count: 8943,
    color: "secondary",
  },
  {
    id: 3,
    title: "Running",
    count: 2500,
    color: "warning",
  },
  {
    id: 4,
    title: "Smooth",
    count: 2060,
    color: "info",
  },
  {
    id: 5,
    title: "Done",
    count: 5600,
    color: "success",
  },
  {
    id: 6,
    title: "Cancel",
    count: 2560,
    color: "danger",
  },
];

const CustomImage: React.FC<CustomImageType> = ({ src, name }) => {
  return (
    <div className="d-flex">
      <Image className="rounded-circle img-30 me-3" src={dynamicImage(`user/${src}`)} alt="Generic placeholder image" />
      <div className="flex-grow-1 align-self-center">
        <div>{name}</div>
      </div>
    </div>
  );
};

const CustomProgress: React.FC<CustomProgressType> = ({ value, color }) => {
  return (
    <div className="progress-showcase" style={{ width: "86px" }}>
      <Progress className="sm-progress-bar" value={value} color={color} />
    </div>
  );
};

export const TicketTableData: SupportDataType[] = [
  {
    id: 1,
    image: "5.jpg",
    name: "Airi Satou",
    position: "Accountant",
    salary: "$162,700",
    office: "Tokyo",
    skillColor: "success",
    skillValue: 70,
    extension: 5407,
    email: "a.satou@datatables.net",
  },
  {
    id: 2,
    image: "7.jpg",
    name: "Ashton Cox",
    position: "Junior Technical Author",
    salary: "$86,000",
    office: "San Francisco",
    skillColor: "danger",
    skillValue: 60,
    extension: 1562,
    email: "a.cox@datatables.net",
  },
  {
    id: 3,
    image: "6.jpg",
    name: "Bradley Greer",
    position: "Software Engineer",
    salary: "$132,000",
    office: "London",
    skillColor: "primary",
    skillValue: 30,
    extension: 2558,
    email: "b.greer@datatables.net",
  },
  {
    id: 4,
    image: "11.png",
    name: "Brielle Williamson",
    position: "Integration Specialist",
    salary: "$372,000",
    office: "New York",
    skillColor: "info",
    skillValue: 55,
    extension: 4804,
    email: "b.williamson@datatables.net",
  },
  {
    id: 5,
    image: "4.jpg",
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    salary: "$106,450",
    office: "New York",
    skillColor: "success",
    skillValue: 20,
    extension: 8330,
    email: "c.vance@datatables.net",
  },

  {
    id: 6,
    image: "1.jpg",
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    salary: "$433,060",
    office: "Edinburgh",
    skillColor: "success",
    skillValue: 50,
    extension: 6224,
    email: "c.kelly@datatables.net",
  },

  {
    id: 7,
    image: "9.jpg",
    name: "Charde Marshall",
    position: "Regional Director",
    salary: "$470,600",
    office: "San Francisco",
    skillColor: "secondary",
    skillValue: 80,
    extension: 6741,
    email: "c.marshall@datatables.net",
  },

  {
    id: 8,
    image: "8.jpg",
    name: "Colleen Hurst",
    position: "Javascript Developer",
    salary: "$205,500",
    office: "San Francisco",
    skillColor: "info",
    skillValue: 100,
    extension: 6224,
    email: "c.hurst@datatables.net",
  },

  {
    id: 9,
    image: "2.jpg",
    name: "Dai Rios",
    position: "Personnel Lead",
    salary: "$217,500",
    office: "Edinburgh",
    skillColor: "success",
    skillValue: 24,
    extension: 2290,
    email: "d.rios@datatables.net",
  },

  {
    id: 10,
    image: "11.png",
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    office: "Tokyo",
    skillColor: "warning",
    skillValue: 40,
    extension: 8422,
    email: "g.winters@datatables.net",
  },

  {
    id: 11,
    image: "6.jpg",
    name: "Gloria Little",
    position: "Systems Administrator",
    salary: "$237,500",
    office: "New York",
    skillColor: "secondary",
    skillValue: 40,
    extension: 1721,
    email: "g.little@datatables.net",
  },

  {
    id: 12,
    image: "2.jpg",
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    salary: "$313,500",
    office: "London",
    skillColor: "success",
    skillValue: 15,
    extension: 3597,
    email: "h.kennedy@datatables.net",
  },

  {
    id: 13,
    image: "7.jpg",
    name: "Herrod Chandler",
    position: "Sales Assistant",
    salary: "$137,500",
    office: "San Francisco",
    skillColor: "success",
    skillValue: 50,
    extension: 9608,
    email: "h.chandler@datatables.net",
  },

  {
    id: 14,
    image: "11.png",
    name: "Jena Gaines",
    position: "Office Manager",
    salary: "$90,560",
    office: "London",
    skillColor: "warning",
    skillValue: 80,
    extension: 3814,
    email: "j.gaines@datatables.net",
  },
  {
    id: 15,
    image: "9.jpg",
    name: "Jenette Caldwell",
    position: "Development Lead",
    salary: "$345,000",
    office: "New York",
    skillColor: "warning",
    skillValue: 80,
    extension: 1937,
    email: "j.caldwell@datatables.net",
  },

  {
    id: 16,
    image: "4.jpg",
    name: "Michael Silva",
    position: "Marketing Designer",
    salary: "$198,500",
    office: "London",
    skillColor: "primary",
    skillValue: 20,
    extension: 1581,
    email: "m.silva@datatables.net",
  },
  {
    id: 17,
    image: "5.jpg",
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    salary: "$725,000",
    office: "New York",
    skillColor: "primary",
    skillValue: 20,
    extension: 3059,
    email: "p.byrd@datatables.net",
  },
  {
    id: 18,
    image: "12.png",
    name: "Quinn Flynn",
    position: "Support Lead",
    salary: "$342,000",
    office: "Edinburgh",
    skillColor: "success",
    skillValue: 10,
    extension: 9497,
    email: "q.flynn@datatables.net",
  },
  {
    id: 19,
    image: "8.jpg",
    name: "Rhona Davidson",
    position: "Integration Specialist",
    salary: "$327,900",
    office: "Tokyo",
    skillColor: "success",
    skillValue: 10,
    extension: 6200,
    email: "r.davidson@datatables.net",
  },
  {
    id: 20,
    image: "10.jpg",
    name: "Sonya Frost",
    position: "Software Engineer",
    salary: "$103,600",
    office: "Edinburgh",
    skillColor: "primary",
    skillValue: 10,
    extension: 1667,
    email: "s.frost@datatables.net",
  },
  {
    id: 21,
    image: "7.jpg",
    name: "Tatyana Dens",
    position: "Regional Director",
    salary: "$385,750",
    office: "London",
    skillColor: "success",
    skillValue: 80,
    extension: 1667,
    email: "t.fitzpatrick@datatables.net",
  },
  {
    id: 22,
    image: "1.jpg",
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    office: "Edinburgh",
    skillColor: "primary",
    skillValue: 30,
    extension: 5421,
    email: "t.nixon@datatables.net",
  },
  {
    id: 23,
    image: "10.jpg",
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    salary: "$675,000",
    office: "New York",
    skillColor: "danger",
    skillValue: 60,
    extension: 6154,
    email: "y.berry@datatables.net",
  },
];

export const TicketTableColumns: TableColumn<SupportDataType>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
    cell: (row) => <CustomImage src={row.image} name={row.name} />,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row["position"],
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row) => row["salary"],
    sortable: true,
  },
  {
    name: "Office",
    selector: (row) => row["office"],
    sortable: true,
  },
  {
    name: "Skill",
    selector: (row) => row.skillValue,
    cell: (row) => <CustomProgress value={row.skillValue} color={row.skillColor} />,
    sortable: true,
  },
  {
    name: "Extn",
    selector: (row) => row["extension"],
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row["email"],
    sortable: true,
  },
];
