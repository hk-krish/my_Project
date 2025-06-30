import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import { AlertMode, Primary, WarningModeTitle } from "../../../Constants";
import { WarningModeSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const WarningMode = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "warning",
      confirmButtonColor: Primary
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={WarningModeTitle} span={WarningModeSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-6" onClick={handleAlert}>
            {AlertMode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WarningMode;
