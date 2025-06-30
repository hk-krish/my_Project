import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Col, List, ListInlineItem, Row } from "reactstrap";
import { SocialData, UserSocialData } from "../../../../../Data/Applications/Users";

const SocialMediaAndFollow = () => {
  return (
    <Fragment>
      <div className="social-media">
        <List type="inline" className="align-items-center">
          {UserSocialData.map(({ link, icon }, index) => (
            <ListInlineItem key={index}>
              <Link to={link} target="_blank">
                <i className={icon}></i>
              </Link>
            </ListInlineItem>
          ))}
        </List>
      </div>
      <div className="follow">
        <Row>
          {SocialData.map((item, index) => (
            <Col xs="6" className={item.class} key={index}>
              <CountUp end={item.count} className="follow-num counter" delay={1} />
              <span className="d-block">{item.text}</span>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default SocialMediaAndFollow;
