import { MouseEvent } from "react";
import { Colors } from "../../../../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../../ReduxToolkit/Hooks";
import { filterColor } from "../../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";
import { getColors } from "../../../../../../../Utils/EcommerceService";

const ColorsFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event: MouseEvent<HTMLLIElement>, color: string) => {
    const elem = document.getElementsByClassName("color-selector")[0].getElementsByTagName("li");
    for (let i = 0; i < elem.length; i++) {
      elem[i].classList.remove("active");
    }
    (event.target as Element).classList.add("active");
    dispatch(filterColor(color));
  };

  return (
    <div className="product-filter slider-product">
      <h4 className="mb-1">{Colors}</h4>
      <div className="color-selector">
        <ul className="d-flex flex-row gap-1">
          {colors.map((color, i) => (
            <li className={color} title={color} onClick={(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => colorHandle(e, color)} key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorsFilter;
