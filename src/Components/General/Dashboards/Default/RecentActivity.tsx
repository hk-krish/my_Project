import { Card, CardBody, Col } from "reactstrap";
import { Href, RecentActivityTitle, View } from "../../../../Constants";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import { RecentActivityData } from "../../../../Data/General/Dashboard/Default";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routers/routes";
import DashboardHeader from "../Common/DashboardHeader";

const RecentActivity = () => {
  return (
    <Col xl="3" md="6" className="box-col-5 proorder-md-2">
      <Card>
        <DashboardHeader title={RecentActivityTitle} dropdownToggleClass="dropdown-toggle" dropdownClass="setting-menu" />
        <CardBody>
          {RecentActivityData.map((item, index) => (
            <Fragment key={index}>
              <div className={`activity-day${index === 1 ? " mt-4" : ""}`}>
                <h6>{item.title}</h6>
              </div>
              <div className="recent-activity-card">
                <ul>
                  {item.activityCard.map((item, index) => (
                    <li className={item.class} key={index}>
                      <div className="recent-activity-data">
                        <div className="activity-name">
                          <span>
                            <SvgIcon iconId={item.icon} />
                          </span>
                          <Link to={routes.LetterBox}>{item.text}</Link>
                        </div>
                        <div className="view-btn">
                          <Link to={Href}>{View}<SvgIcon iconId="Arrow-Right-2" /></Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentActivity;
