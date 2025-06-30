import { Card, CardBody, Col } from "reactstrap";
import { GroupingTitle } from "../../../Constants";
import { AvatarGroupData, GroupSubTitle } from "../../../Data/UiKits/Avatars";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const Grouping = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={GroupingTitle} span={GroupSubTitle} />
        <CardBody>
          <div className="avatars avatar-showcase">
            {AvatarGroupData &&
              AvatarGroupData.map((data) => (
                <div className="customers d-inline-block avatar-group" key={data.id}>
                  <ul>
                    {data.child &&
                      data.child.map((item) => (
                        <li className="d-inline-block" key={item.id}>
                          <Image className={`img-${item.class}`} src={dynamicImage(`${item.image}`)} alt="user profile" />
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Grouping;
