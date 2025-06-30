import { ArrowDownRight, ArrowUpRight } from "react-feather";
import { BalanceIconWrapData } from "../../../../../Data/UiKits/Modal";
import { Badge } from "reactstrap";

const BalanceIconWrap=()=> {
  return (
    <ul>
      {BalanceIconWrapData.map((item) => (
        <li key={item.id}>
          <div className={`balance-item ${item.color}`}>
            <div className="balance-icon-wrap">
              <div className="balance-icon">{item.id === 1 ? <ArrowDownRight /> : <ArrowUpRight />}</div>
            </div>
            <div>
              <span className="f-12 f-light">{item.text} </span>
              <h5>{item.rate}{"K"}</h5>
              <Badge color={`light-${item.color}`} pill className={`text-${item.color}`}>{item.badge}{"%"}</Badge>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default BalanceIconWrap