import { Table } from "reactstrap";
import { CustomExpandableComponentProps } from "../../../../../../Types/TablesType";

const CustomExpandableComponent: React.FC<CustomExpandableComponentProps> = ({ data }) => {
  return (
    <Table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
      <tbody>
        <tr>
          <td>{"ID"}:</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>{"Full name"}:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>{"Extra info"}:</td>
          <td>{"And any further details here (images etc)..."}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default CustomExpandableComponent;
