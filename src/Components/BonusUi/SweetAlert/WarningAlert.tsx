import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { Primary, Warning, WarningAlertTitle } from "../../../Constants";
import { WarningAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";

const WarningAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Primary
    }).then((result) => {
      if (result.isConfirmed) Swal.fire({ text: "Poof! Your imaginary file has been deleted!", icon: "success" ,confirmButtonColor: Primary});
      else Swal.fire({ text: "Your imaginary file is safe!" });
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={WarningAlertTitle} span={WarningAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-5" onClick={handleAlert}>
            {Warning}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WarningAlert;
