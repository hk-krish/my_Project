import { Button, Card, CardBody, Col } from "reactstrap";
import { AddProject, MonthlyInvoicesTitle } from "../../../../Constants";
import { MonthlyInvoicesData } from "../../../../Data/General/Dashboard/Default";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routers/routes";
import DashboardHeader from "../Common/DashboardHeader";

const MonthlyInvoices = () => (
  <Col xl="4" md="6" className="proorder-md-6 box-col-6">
    <Card>
      <DashboardHeader title={ MonthlyInvoicesTitle } dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody>
        <div className="monthly-invoices">
          <ul>
            {MonthlyInvoicesData.map((invoice, index) => (
              <li key={index}>
                <div className="monthly-data">
                  <div className="invoice-data-icon">
                    <span><SvgIcon iconId={invoice.svgIcon}/></span>
                    <div>
                      <Link to={invoice.link}><h4>{invoice.title}</h4></Link>
                      <h5>{invoice.status}</h5>
                    </div>
                  </div>
                  <div className="invoice-price">
                    <span>{invoice.amount}</span>
                    <span>{invoice.description}</span>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <Button color="light" outline active className="txt-dark w-100">
                <Link className="d-flex gap-2 align-items-center" to={routes.Project.Create}>
                  <SvgIcon iconId="Plus-Circle"/>{AddProject}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default MonthlyInvoices;
