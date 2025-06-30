import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { routes } from "../../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../../Utils";
import CountdownData from "../Common/CountdownData";

const SimpleComingSoon = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container className="p-0" fluid>
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Link to={routes.Dashboard.Default}>
              <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="logo" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="logo" />
            </Link>
            <h5>{"WE ARE COMING SOON"}</h5>
            <div className="countdown" id="clock-arrival">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SimpleComingSoon;
