import { Label } from "reactstrap";
import { HoverMeetupText1 } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { HoverMeetupData } from "../../../../Data/BonusUi/Timeline";

const HoverMeetup = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">{"December 2024 - Meetup"}</p>
        <h5>{HoverMeetupText1}</h5>
        <div className="text-muted">
          {"2209 Leverton Cove RoadSpringfield, MA 01109"}
          <div className="designer-details">
            {HoverMeetupData.map((data) => (
              <div className="designer-profile" key={data.id}>
                <div className="designer-wrap">
                  <Image className="designer-img" src={dynamicImage(`avtar/${data.image}`)} alt="profile" />
                  <div className="designer-content">
                    <h6>{data.name}</h6>
                    <p>{data.number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
export default HoverMeetup;
