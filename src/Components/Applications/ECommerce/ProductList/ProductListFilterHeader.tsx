import { Filter } from "react-feather";
import { Link } from "react-router-dom";
import { Href } from "../../../../Constants";
import { routes } from "../../../../Routers/routes";
import { ProductListFilterHeaderType } from "../../../../Types/EcommerceType";

const ProductListFilterHeader: React.FC<ProductListFilterHeaderType> = ({ ButtonName, setShowList, showList }) => {
  return (
    <div>
      <div className="light-box" onClick={() => setShowList(!showList)}>
        <Link to={Href}>
          <Filter className={`filter-icon ${showList ? "hide" : "show"}`} />
          <i className={`icon-close filter-close ${showList ? "show" : "hide"}`} />
        </Link>
      </div>
      <Link className="btn btn-primary" to={routes.ECommerce.AddProduct}>
        <i className="fa fa-plus" />
        {ButtonName}
      </Link>
    </div>
  );
};
export default ProductListFilterHeader;
