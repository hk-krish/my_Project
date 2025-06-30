import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { HelperClasses, UIKits } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BackgroundColors from "./BackgroundColors";
import BorderColor from "./BorderColor";
import BorderStyles from "./BorderStyles";
import BordersAndDisplays from "./BordersAndDisplays";
import FontSize from "./FontSize";
import FontStyle from "./FontStyle";
import FontWeight from "./FontWeight";
import ImageSize from "./ImageSize";
import TextColors from "./TextColors";

const HelperClassContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={HelperClasses} parent={UIKits} />
      <Container fluid>
        <Row>
          <BorderStyles />
          <BordersAndDisplays />
          <BackgroundColors />
          <BorderColor />
          <ImageSize />
          <FontStyle />
          <FontWeight />
          <TextColors />
          <FontSize />
        </Row>
      </Container>
    </Fragment>
  );
};
export default HelperClassContainer;
