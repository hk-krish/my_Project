import { Container, Row } from "reactstrap";
import { BonusUi, SweetAlert } from "../../../Constants";
import AutoCloseAlert from "./AutoCloseAlert";
import BasicAlert from "./BasicAlert";
import DangerAlert from "./DangerAlert";
import InfoAlert from "./InfoAlert";
import MovieAlert from "./MovieAlert";
import PikachuAlert from "./PikachuAlert";
import QuestionAlert from "./QuestionAlert";
import SuccessMessage from "./SuccessMessage";
import TitleWithText from "./TitleWithText";
import UserNameAlert from "./UserNameAlert";
import WarningAlert from "./WarningAlert";
import WarningMode from "./WarningMode";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const SweetAlertContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={SweetAlert} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicAlert />
          <TitleWithText />
          <InfoAlert />
          <WarningAlert />
          <PikachuAlert />
          <QuestionAlert />
          <UserNameAlert />
          <SuccessMessage />
          <DangerAlert />
          <WarningMode />
          <AutoCloseAlert />
          <MovieAlert />
        </Row>
      </Container>
    </Fragment>
  );
};
export default SweetAlertContainer;
