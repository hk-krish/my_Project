import { Facebook, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import { CreateAccount, FacebookLink, LinkedIn, SignInWith, TwitterLink } from "../../../../../Constants";
import { SocialLinksProp } from "../../../../../Types/OthersType";
import { Fragment } from "react/jsx-runtime";
import { routes } from "../../../../../Routers/routes";

const SocialLinks: React.FC<SocialLinksProp> = ({ logtext, btntext }) => {
  return (
    <Fragment>
      <h6 className="text-muted mt-4 or">{SignInWith}</h6>
      <div className="social mt-4">
        <div className="btn-showcase">
          <Link to="https://www.linkedin.com/login" className="btn btn-light" target="_blank">
            <Linkedin className="txt-linkedin" /> {LinkedIn}
          </Link>
          <Link to="https://twitter.com/login?lang=en" className="btn btn-light" target="_blank">
            <Twitter className="txt-twitter" /> {TwitterLink}
          </Link>
          <Link to="https://www.facebook.com/" className="btn btn-light" target="_blank">
            <Facebook className="txt-fb" /> {FacebookLink}
          </Link>
        </div>
      </div>
      <p className="mt-4 mb-0 text-center">
        {logtext ? logtext : "Don't have account?"}
        {!logtext && !btntext ? (
          <Link className="ms-2" to={routes.Auth.Register.Simple}>{CreateAccount}</Link>
        ) : (
          <Link to={routes.Auth.Login.Simple} className="ms-2">{btntext}</Link>
        )}
      </p>
    </Fragment>
  );
};
export default SocialLinks;
