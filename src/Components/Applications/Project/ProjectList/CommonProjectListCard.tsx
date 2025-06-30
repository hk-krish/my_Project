import { Badge, Col, Progress, Row } from "reactstrap";
import { Comment, Done, Issues, Resolved } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { CommonProjectInterFace } from "../../../../Types/Applications";

export const CommonProjectListCard:React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <Col xxl="4" lg="4" className="box-col-33 col-md-6">
      <div className={`project-box ${item.progress === 100 ? "b-light1-success" : " b-light1-secondary"}`}>
        <Badge color={item.badge === "Done" ? "success" : "secondary"}>{item.badge}</Badge>
        <h3 className="f-w-600">{item.title}</h3>
        <div className="d-flex">
          <Image className="img-20 me-1 rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="Project" />
          <div className="flex-grow-1"><p>{item.sites}</p></div>
        </div>
        <p>{item.description}</p>
        <Row className="details">
          <Col xs="6"><span>{Issues}</span></Col>
          <Col xs="6" className={`font-${item.badge === "Done" ? "success" : "secondary"}`}>{item.issue}</Col>
          <Col xs="6"><span>{Resolved}</span></Col>
          <Col xs="6" className={`font-${item.badge === "Done" ? "success" : "secondary"}`}>{item.resolved}</Col>
          <Col xs="6"><span>{Comment}</span></Col>
          <Col xs="6" className={`font-${item.badge === "Done" ? "success" : "secondary"}`}>{item.comment}</Col>
        </Row>
        <div className="customers">
          <ul>
            <li className="d-inline-block">
              <Image className="img-30 rounded-circle" src={dynamicImage(`user/${item.customers_img1}`)} alt="Project" />
            </li>
            <li className="d-inline-block">
              <Image className="img-30 rounded-circle" src={dynamicImage(`user/${item.customers_img2}`)} alt="Project" />
            </li>
            <li className="d-inline-block">
              <Image className="img-30 rounded-circle" src={dynamicImage(`user/${item.customers_img3}`)} alt="Project" />
            </li>
            <li className="d-inline-block ms-2">
              <p className="f-12">{`+${item.like} More`}</p>
            </li>
          </ul>
        </div>
        <div className="project-status mt-4">
          <div className="d-flex mb-0">
            <p>{item.progress}%</p>
            <div className="flex-grow-1 text-end">{Done}</div>
          </div>
          {item.progress === 100 ? <Progress className="sm-progress-bar" color="success" value={item.progress} animated striped /> : <Progress className="sm-progress-bar" animated striped color="secondary" value={item.progress} />}
        </div>
      </div>
    </Col>
  );
};
