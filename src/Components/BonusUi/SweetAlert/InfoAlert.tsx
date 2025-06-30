import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import { InfoAlertTitle, Informational, Primary } from "../../../Constants";
import { InfoAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const InfoAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonText: "ok",
      confirmButtonColor: Primary
    }).then((result) => {
      result.isConfirmed && Swal.fire({ text: "Thank you for visit Zono theme: true",confirmButtonColor: Primary });
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={InfoAlertTitle} span={InfoAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="info" className="sweet-4" onClick={handleAlert}>
            {Informational}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;
