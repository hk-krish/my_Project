import { Button, Card, Col, Table } from "reactstrap";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { AddProjectsAndUploadTitle, Delete, Edit, Href, Update } from "../../../../../Constants";
import { project } from "../../../../../Data/Applications/Users";

const Projects = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={AddProjectsAndUploadTitle} headClass={"pb-3"}/>
        <div className="table-responsive add-project">
          <Table className="card-table table-vcenter text-nowrap">
            <thead className="bg-light-primary">
              <tr>
                <th>ProjectName</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
            { project.map((data, index) => (
              <tr key={index}>
                <td className="add-project"><a className="text-inherit" href={Href}>Untrammelled Prevents</a></td>
                <td>{data.date}</td>
                <td><span className={`status-icon ${data.statusClass}`} /> {data.status}</td>
                <td>{data.price}</td>
                <td className="text-end">
                  <Button color="primary" tag="a" size="sm" href={Href}><i className="fa fa-pencil"/> {Edit}</Button>
                  <Button color="transparent" tag="a" size="sm" href={Href}><i className="fa fa-link"/> {Update}</Button>
                  <Button color="danger" tag="a" size="sm" href={Href}><i className="fa fa-trash"/> {Delete}</Button>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default Projects;
