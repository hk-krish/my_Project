import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { routes } from "../../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../../Utils";
import CountdownData from "../Common/CountdownData";

const ComingWithBgImage = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Link to={routes.Dashboard.Default}>
              <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="logo" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="logo" />
            </Link>
            <h5>{"WE ARE COMING SOON"}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ComingWithBgImage;
