import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, Table, TabPane } from "reactstrap";
import { Href, MaterialStyleTabTitle } from "../../../Constants";
import { MaterialData, MaterialStyleSubTitle, MaterialNavData } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
const MaterialStyleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={MaterialStyleTabTitle} span={MaterialStyleSubTitle} />
        <CardBody>
          <Nav tabs className="border-tab border-0 mb-0 nav-danger">
            {MaterialNavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={`nav-border txt-danger nav-danger ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                  <i className={`icofont ${item.icon}`} />{item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {MaterialData.map((item) => (
              <TabPane className={`fade ${basicTab === item.id ? "show" : ""}`} tabId={item.id} key={item.id}>
                <CardBody className="px-0 pb-0 pt-3">
                  <h6 className="fw-bold">{item.data.title}</h6>
                  <Table responsive className="mb-0">
                    <thead>
                      <tr>
                        {item.data.headers.map((header, index) => <th scope="col" key={index}>{header}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MaterialStyleTab;
