import { Input, Label } from "reactstrap";
import { Brand } from "../../../../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../../ReduxToolkit/Hooks";
import { addNewBrand, removeBrand } from "../../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";
import { getBrands } from "../../../../../../../Utils/EcommerceService";

const BrandFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const Brands = getBrands(productItem);
  const { filter } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch();

  const clickBrandHandle = (event: React.ChangeEvent<HTMLInputElement>, category: string[]) => {
    const index = Brands.indexOf(event.target.value);
    if (event.target.checked === true) dispatch(addNewBrand(event.target.value));
    else dispatch(removeBrand({ index, category }));
  };

  return (
    <div className="product-filter">
      <h4 className="mb-1">{Brand}</h4>
      <div className="checkbox-animated mt-0">
        {Brands.map((brand, index) => (
          <Label className="d-block" key={index}>
            <Input className="checkbox_animated" onChange={(e) => clickBrandHandle(e, filter.category)} value={brand} defaultChecked={filter.brand.includes(brand) ? true : false} type="checkbox" />
            {brand}
          </Label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
