import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { routes } from "../../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../../Utils";
import CountdownData from "../Common/CountdownData";

const ComingWithBgVideo = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container className="p-0" fluid>
        <div className="comingsoon auth-bg-video">
          <video className="bgvideo-comingsoon" id="bgvid" poster={dynamicImage(`other-images/coming-soon-bg.jpg`)} playsInline autoPlay muted loop>
            <source src={process.env.PUBLIC_URL + "/assets/video/auth-bg.mp4"} type="video/mp4" />
          </video>
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
export default ComingWithBgVideo;
