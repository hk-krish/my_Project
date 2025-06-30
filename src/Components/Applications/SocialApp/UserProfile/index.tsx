import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import { Href } from "../../../../Constants";
import { UserProfileIconData } from "../../../../Data/Applications/SocialApp";
import { SocialAppCallBackType } from "../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../Utils";
import NavBarMain from "./NavBarMain";

const UserProfile: React.FC<SocialAppCallBackType> = ({ callback }) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image alt="user" src={dynamicImage(`user/1.jpg`)} />
            </div>
            <div className="icon-wrapper">
              <i className="icofont icofont-pencil-alt-5" />
            </div>
            <ul className="share-icons">
              {UserProfileIconData.map((item, index) => (
                <li key={index}>
                  <Link className={`social-icon bg-${item.color}`} to={Href}>
                    <i className={`fa fa-${item.icon}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
