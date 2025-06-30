import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import { LoginSuccessfully, Primary, SuccessMessageTitle } from "../../../Constants";
import { SuccessMessageSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SuccessMessage = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      confirmButtonColor: Primary
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={SuccessMessageTitle} span={SuccessMessageSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="success" className="sweet-8" onClick={handleAlert}>
            {LoginSuccessfully}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SuccessMessage;
