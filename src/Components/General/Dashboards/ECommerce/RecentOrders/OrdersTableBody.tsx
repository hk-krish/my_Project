import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { RecentOrdersData } from "../../../../../Data/General/Dashboard/ECommerce";
import { routes } from "../../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../../Utils";
import { DashboardDropdown } from "../../Common/DashboardDropdown";

const OrdersTableBody = () => {
  return (
    <tbody>
      {RecentOrdersData.map((order, index) => (
        <tr key={index}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
            </div>
          </td>
          <td>
            <div className="user-data">
              <Image src={dynamicImage(`product/${order.img}`)} alt="product" />
              <div>
                <Link to={routes.ECommerce.Product}>
                  <h4>{order.name}</h4>
                </Link>
                <span className="f-w-600">{order.brand}</span>
              </div>
            </div>
          </td>
          <td>
            <div className="user-time">
              <Link to={routes.ECommerce.Product}>
                <h4>{order.date}</h4>
              </Link>
              <span className="f-w-600">{order.time}</span>
            </div>
          </td>
          <td>{order.customer}</td>
          <td>{order.price}</td>
          <td className={order.status.class}>{order.status.label}</td>
          <td>
            <DashboardDropdown dropdownToggleClass="dropdown-toggle" dropdownIcon />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrdersTableBody;
