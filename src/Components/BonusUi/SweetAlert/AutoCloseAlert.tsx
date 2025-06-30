import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import { AutoCloseAlertTitle, Primary, Timer } from "../../../Constants";
import { AutoCloseAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const AutoCloseAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Auto close alert!",
      text: "just a wait! I will close in 30 second!",
      timer: 3000,
      showConfirmButton: false,
      confirmButtonColor: Primary
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoCloseAlertTitle} span={AutoCloseAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-14" onClick={handleAlert}>
            {Timer}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AutoCloseAlert;
