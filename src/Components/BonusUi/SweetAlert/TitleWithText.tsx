import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Primary, Surprise, TitleWithTextTitle } from "../../../Constants";
import { TitleWithTextSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const TitleWithText = () => {
  const handleAlert = () => Swal.fire({ title: "It's Magic!", text: "Thank you for visiting Zono Theme", confirmButtonColor: Primary });

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={TitleWithTextTitle} span={TitleWithTextSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-2" onClick={handleAlert}>
            {Surprise}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TitleWithText;
