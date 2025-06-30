import { Fragment } from "react";
import { Categories, NewProducts, Price } from "../../../../../../../Constants";
import GenderFilter from "./GenderFilter";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";
import RangeSlider from "./RangeSlider";

const Category = () => {
  return (
    <Fragment>
      <div className="product-filter">
        <h4 className="mb-1">{Categories}</h4>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0 price-range">
        <h4 className="mb-1">{Price}</h4>
        <RangeSlider />
        <h4 className="mt-5">{NewProducts}</h4>
      </div>
    </Fragment>
  );
};

export default Category;
