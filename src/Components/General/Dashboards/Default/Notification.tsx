import { Button, Card, CardBody, Col } from "reactstrap";
import { AllNotificationTitle } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routers/routes";
import { AllNotificationsData } from "../../../../Data/General/Dashboard/Default";
import DashboardHeader from "../Common/DashboardHeader";

const Notification = () => {
  return (
    <Col xl="4" md="6" className="proorder-md-8 box-col-6">
      <Card>
      <DashboardHeader title={AllNotificationTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody>
          <div className="notification-card">
            <ul>
            {AllNotificationsData.map((item) => (
              <li key={item.id}>
                <div className="user-notification">
                  <div>
                    <Image src={dynamicImage(`dashboard/avtar/${item.avatar}.jpg`)} alt="avatar" />
                  </div>
                  <div className="user-description">
                    <Link to={routes.LetterBox}><h4>{item.text}</h4></Link>
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="notification-btn">
                  <Button color="primary" className="btn-pill">Accpet</Button>
                  <Button color="secondary" className="btn-pill">Decline</Button>
                </div>
                <div className="show-btn">
                  <Link to={routes.Dashboard.Default}><span>Show</span></Link>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notification;
