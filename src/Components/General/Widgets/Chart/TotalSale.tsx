import ReactApexChart from "react-apexcharts";
import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col, Row } from "reactstrap";
import { TotalSaleData } from "../../../../Data/General/Widgets/Chart";

const TotalSale = () => {
  return (
    <Fragment>
      {TotalSaleData.map((item, index) => (
        <Col xl="4" md="12" className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="pb-0 m-0">
                <Row>
                  <Col xl="9" lg="8" xs="9">
                    <h4 className="mb-2">{item.title}</h4>
                    <h4>{item.price}</h4>
                    <span>{`Compare to last month`}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="text-end">
                    <h6 className="txt-success">{`+65%`}</h6>
                  </Col>
                </Row>
              </CardBody>
              <div>
                <div className={item.chartClass}>
                  <ReactApexChart options={item.chart} series={item.chart.series} type={item.chart.chart?.type} height={item.chart.chart?.height} />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default TotalSale;
