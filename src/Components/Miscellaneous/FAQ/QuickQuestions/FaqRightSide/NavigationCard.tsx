import { Fragment } from "react";
import { MessageSquare, Settings } from "react-feather";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { AskQuestion, Navigation } from "../../../../../Constants";
import { NavigationData } from "../../../../../Data/Miscellaneous/FAQ";

const NavigationCard = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq">
        <CardHeader className="faq-header pb-0">
          <h4>{Navigation}</h4>
          <Settings />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <Button color="primary" className="d-flex"><MessageSquare className="m-r-10" /> {AskQuestion}</Button>
          </div>
          <div className="navigation-option">
            {NavigationData.map((data) => (
              <Fragment key={data.id}>
                <ul>
                  {data.child.map((item) => (
                    <li key={item.id}>
                      <Link to={item.link}>
                        {item.icon} {item.text}
                      </Link>
                      {item.badge && (<Badge color="primary" className="pull-right" pill>{item.badge}</Badge>)}
                    </li>
                  ))}
                </ul>
                {data.id !== NavigationData.length && <hr />}
              </Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NavigationCard;
