import React, { Fragment, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import CollapseFilterData from "./CollapseFilterData";
import ProductListFilterHeader from "./ProductListFilterHeader";
import { AddProduct, ECommerce, ProductList, SearchTableButton } from "../../../../Constants";
import { ProductListTableData, ProductListTableDataColumn } from "../../../../Data/Applications/ECommerce";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import { StyleSheetManager } from "styled-components";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");
  const [showList, setShowList] = useState(false);
  const filteredItems = ProductListTableData.filter((item) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Fragment>
      <Breadcrumbs mainTitle={ProductList} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="list-product-header">
                  <ProductListFilterHeader ButtonName={AddProduct} setShowList={setShowList} showList={showList} />
                  <CollapseFilterData showList={showList} />
                </div>
                <div className="list-product">
                  <div className="table-responsive">
                    <StyleSheetManager shouldForwardProp={(prop) => prop !== "align" && prop !== "grow"}>
                      <DataTable className="custom-scrollbar" data={filteredItems} columns={ProductListTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
                    </StyleSheetManager>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductListContainer;
