import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { BasicAlertTitle, ClickIt, Primary } from "../../../Constants";
import { BasicAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BasicAlert = () => {
  const handleAlert = () => Swal.fire({ text: "Welcome! to the Zono theme", confirmButtonColor: Primary });
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={BasicAlertTitle} span={BasicAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-1" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicAlert;
