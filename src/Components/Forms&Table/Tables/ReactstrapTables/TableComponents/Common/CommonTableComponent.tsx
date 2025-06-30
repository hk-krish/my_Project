import React, { Fragment } from "react";
import { Card, Col, Row, Table } from "reactstrap";
import { CommonTableComponentProps } from "../../../../../../Types/TablesType";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";

const CommonTableComponent: React.FC<CommonTableComponentProps> = ({ title, data, tableClass }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={title} headClass="pb-20" />
        <div>
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive custom-scrollbar">
                <Table className={tableClass ? tableClass : ""} bordered>
                  <tbody>
                    {data.map((component, index) => (
                      <tr key={index}>
                        <td className={component.tdClassName}>{component.tittle}</td>
                        <td className="w-50">{component.tableColData}</td>
                        <td>
                          <span>
                            {component.details.map((detail, i) => (
                              <Fragment key={i}>
                                {detail.text}
                                {detail.code && <code> {detail.code} </code>}
                              </Fragment>
                            ))}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};
export default CommonTableComponent;
