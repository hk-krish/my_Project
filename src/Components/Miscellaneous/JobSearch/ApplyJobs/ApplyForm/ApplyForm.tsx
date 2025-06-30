import { Button, Card, CardBody, CardFooter, Col } from "reactstrap";
import { Cancel, Href, SaveThisJob, Submit, UIDesigner } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import PersonalDetails from "./PersonalDetails";
import UploadFiles from "./UploadFiles";
import YourEducation from "./YourEducation";
import YourExperience from "./YourExperience";
import { Rating } from "react-simple-star-rating";

const ApplyForm = () => {
  return (
    <Col xl="9" className="xl-60 box-col-12">
      <Card>
        <div className="job-search">
          <CardBody className="pb-0">
            <div className="d-flex">
              <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
              <div className="flex-grow-1">
                <h6 className="f-w-600">
                  <a href={Href}>{UIDesigner}</a>
                  <span className="pull-right">
                    <Button color="primary"><span><i className="fa fa-check text-white"></i></span>{SaveThisJob}</Button>
                  </span>
                </h6>
                <p>{"Endless Telecom & Technologies , NY"}<span><Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={16} /></span></p>
              </div>
            </div>
            <div className="job-description">
              <PersonalDetails />
              <YourEducation />
              <YourExperience />
              <UploadFiles />
            </div>
          </CardBody>
          <CardFooter>
            <Button color="primary" className="me-2">{Submit}</Button>
            <Button color="light">{Cancel}</Button>
          </CardFooter>
        </div>
      </Card>
    </Col>
  );
};
export default ApplyForm;
