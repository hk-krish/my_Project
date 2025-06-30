import { Card, CardBody, Col } from "reactstrap";
import { CustomScrollbarTitle } from "../../../Constants";
import { CustomScrollbarSubTitle } from "../../../Data/BonusUi/Scrollable";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ScrollBar from "react-perfect-scrollbar";

const CustomScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CustomScrollbarTitle} span={CustomScrollbarSubTitle} />
        <CardBody>
          <ScrollBar className="vertical-scroll scroll-demo custom-container">
            <h3 className="pb-2">{CustomScrollbarTitle}</h3>
            <p>
              {"I'm quite interested in learning more about "}
              <em className="txt-danger"> {"custom scrollbars"}</em> {"because they are becoming more and more common."}
            </p>
            <div className="scrollbar-images">
              <Image className="img-fluid" src={dynamicImage(`banner/1.jpg`)} alt="banner" />
            </div>
            <p>{"There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful"}</p>
            <p>{"I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."}</p>
            <p className="m-b-0">
              {"One crucial point to remember is that, depending on the design, a scrollbar may operate either "}
              <em className="txt-danger">{"horizontally or vertically"}</em> {". Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations."}
            </p>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomScrollbar;
