import React, { ChangeEvent, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Table } from "reactstrap";
import { CustomFilteringTitle } from "../../../../../Constants";
import { CustomFilteringSearchSubTitle, FilterDataTableColumns, FilterDataTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/API";
import { FilterDataTableProp } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const CustomFiltering = () => {
  const [filterText, setFilterText] = useState("");
  const [first, setfirst] = useState<FilterDataTableProp[]>(FilterDataTableData);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  useEffect(() => {
    const filteredData = FilterDataTableData.filter((item) => {
      const age = item.age;
      return age >= minAge && age <= maxAge;
    });
    setfirst(filteredData);
  }, [minAge, maxAge]);

  const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => setMinAge(parseInt(event.target.value, 10));
  const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => setMaxAge(parseInt(event.target.value, 10));

  const filteredItems: FilterDataTableProp[] = first.filter((item: FilterDataTableProp) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={CustomFilteringTitle} span={CustomFilteringSearchSubTitle} />
        <CardBody>
          <div className="table-responsive dataTables_wrapper me-0">
            <Table>
              <tbody className="dataTables_filter">
                <tr>
                  <td>{"Minimum age:"}</td>
                  <td>
                    <Input type="search" name="minValue" onChange={handleMinAgeChange} />
                  </td>
                </tr>
                <tr>
                  <td>{"Maximum age:"}</td>
                  <td>
                    <Input type="search" name="maxValue" onChange={handleMaxAgeChange} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive user-datatable">
            <DataTable className="custom-scrollbar" columns={FilterDataTableColumns} data={filteredItems} pagination striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomFiltering;
