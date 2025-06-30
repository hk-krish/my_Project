import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import { Dribble, FacebookLink, ProfileIntroTitle, TwitterLink } from "../../../../../Constants";
import { ProfileIntroData } from "../../../../../Data/Applications/SocialApp";
import HeaderWithIcon from "../HeaderWithIcon";

const ProfileIntroCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon Heading={ProfileIntroTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="filter-cards-view">
          {ProfileIntroData.map((data, index) => (
            <Fragment key={index}>
              <span className="f-w-500 mb-2 d-block">{data.title} :</span>
              <p>{data.paragraph}</p>
            </Fragment>
          ))}
          <div className="social-network theme-form">
            <span className="f-w-500">Social Networks</span>
            <Link to="https://www.facebook.com/" target="_blank">
              <Button color="transparent" className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5" />{FacebookLink}</Button>
            </Link>
            <Link to="https://www.twitter.com/" target="_blank">
              <Button color="transparent" className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5" />{TwitterLink}</Button>
            </Link>
            <Link to="https://dribbble.com/session/new" target="_blank">
              <Button color="transparent" className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5" />{Dribble}</Button>
            </Link>
          </div>
        </CardBody> 
      </Collapse>
    </Card>
  );
};

export default ProfileIntroCard;
