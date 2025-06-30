import { Link } from "react-router-dom";
import { Href, ReadMore, WilliamJennings } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { Fragment } from "react/jsx-runtime";
import { routes } from "../../../../Routers/routes";
import { PainterTour, PainterTourSpan, PainterTourTitle, WonderfulTour } from "../../../../Data/BonusUi/Tour";

const SecondStyleAboutSection = () => {
  return (
    <Fragment>
      <h5 className="pb-3">{WonderfulTour}</h5>
      <p className="block-ellipsis">
        {PainterTourTitle}
        <em className="text-danger">{WilliamJennings}</em>
        {PainterTour}
      </p>
      <div className="img-container">
        <div id="aniimated-thumbnials">
          <Link to={Href}>
            <Image className="img-fluid rounded" src={dynamicImage(`other-images/profile-style-img3.png`)} alt="gallery" />
          </Link>
          <p className="block-ellipsis pt-3">
            {PainterTourSpan}
            <Link className="text-danger ms-1" to={routes.Users.Profile}>
              {ReadMore}
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default SecondStyleAboutSection;