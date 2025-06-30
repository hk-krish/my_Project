import { Label, ListGroup, ListGroupItem } from "reactstrap";
import { HoverFresherText1, MollyBoake } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";

const HoverFresherInterview = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">{"March 2024 - Fresher Interview"}</p>
        <h5 className="f-w-500">{HoverFresherText1}</h5>
        <div className="text-muted">
          {"A fresher's interview is to be conducted"}
          <ListGroup className="main-lists-content">
            <ListGroupItem action className="border-0 p-0 mb-4">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="list-wrapper">
                  <Image className="list-img img-fluid me-0 mb-0" src={dynamicImage(`user/1.jpg`)} alt="profile" />
                  <div className="list-content">
                    <h6>{MollyBoake}</h6>
                    <p>{"MollyBoake@rhyta.com"}</p>
                  </div>
                </div>
                <div className="timeline-icon">
                  <i className="icon-facebook"></i>
                  <i className="icon-google"> </i>
                  <i className="icon-twitter-alt"></i>
                </div>
              </div>
              <p className="mb-1">{"Next step is to choose a tone of voice for your content type."}</p>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </li>
  );
};
export default HoverFresherInterview;
