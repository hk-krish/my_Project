import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { DangerAlertTitle, DangerMode, Primary } from "../../../Constants";
import { DangerAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";

const DangerAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "it's danger",
      text: "Something went wrong!",
      icon: "error",
      confirmButtonColor: Primary
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={DangerAlertTitle} span={DangerAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="danger" className="sweet-7" onClick={handleAlert}>
            {DangerMode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DangerAlert;
