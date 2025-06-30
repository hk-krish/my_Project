import { Link } from "react-router-dom";
import { Card, CardBody, Col, Table } from "reactstrap";
import { ProjectSummaryTitle } from "../../../../Constants";
import { ProjectSummaryData, ProjectSummaryHeadData } from "../../../../Data/General/Dashboard/Default";
import { routes } from "../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../Utils";
import DashboardHeader from "../Common/DashboardHeader";

const ProjectSummary = () => (
  <Col xl="6" sm="12" className="proorder-md-9 box-col-6">
    <Card>
      <DashboardHeader title={ProjectSummaryTitle} headerClass="card-no-border" dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody>
        <div className="table-responsive custom-scrollbar">
          <Table className="project-summary">
            <thead>
              <tr>
                {ProjectSummaryHeadData.map((item, index) => (<th key={index}>{item}</th>))}
              </tr>
            </thead>
            <tbody>
              {ProjectSummaryData.map((project, idx) => (
                <tr key={idx}>
                  <td className="f-w-600">{project.id}</td>
                  <td><Link to={routes.Project.List}>{project.name}</Link></td>
                  <td className="team-avtar">
                    <div className="customers d-inline-block avatar-group">
                      <ul>
                        {project.team.map((member, index) => (
                          <li key={index} className="d-inline-block">
                            {typeof member === "string" ? <p>{member}</p> : <Image className="img-40 rounded-circle" src={dynamicImage(`dashboard/avtar/${member}.jpg`)} alt="" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>{project.cost}</td>
                  <td>{project.status}</td>
                  <td className={project.paymentClass}>{project.payment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProjectSummary;
