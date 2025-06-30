import { Col, Nav, NavLink } from "reactstrap";
import { Href } from "../../../../../Constants";
import { organizationList } from "../../../../../Data/Applications/Contacts";
import { OrganizationListProps } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";

const OrganizationList: React.FC<OrganizationListProps> = ({ orgActiveTab, setOrgActiveTab }) => {

  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav className="flex-column" pills>
        {organizationList.map((item) => (
          <NavLink key={item.id} href={Href} className={orgActiveTab === item.id ? "active" : ""} onClick={() => setOrgActiveTab(item.id)}>
            <div className="d-flex">
              <Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage(`${item.avatar}`)} alt="" />
              <div className="flex-grow-1">
                <h6>{item.name}</h6>
                <p>{item.email}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </Nav>
    </Col>
  );
};

export default OrganizationList;