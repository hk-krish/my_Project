import { useState } from "react";
import { Card, Row } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { getVisibleProducts } from "../../../../../Utils/EcommerceService";
import { ProductItemInterface } from "../../../../../Types/EcommerceType";
import { dynamicImage, Image } from "../../../../../Utils";
import { HoverButtons } from "./HoverButtons";
import ProductDetails from "./ProductDetails";
import ProductModal from "./ProductModal/ProductModal";
import SearchNotFoundClass from "../../../../CoreComponents/SearchNotFoundClass";

const ProductGrid = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataId, setDataId] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleProducts(productItem, filter);
  
  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      <Row className="gridRow">
        {products.length !== 0 ? (
          products.map((item: ProductItemInterface, index: number) => {
            return (
              <div id="gridId" className={`${colClass} ${listView ? "col-xl-12" : ""}`} key={index}>
                <Card>
                  <div className="product-box">
                    <div className="product-img bg-img-cover">
                      {item.status !== "none" && <div className={`ribbon-index ${item.ribbonClassName}`}>{item.status}</div>}
                      <Image className="img-fluid" src={dynamicImage(item.image)} alt="" />
                      <HoverButtons setDataId={setDataId} setOpenModal={setOpenModal} item={item} />
                    </div>
                    <ProductDetails item={item} />
                  </div>
                </Card>
              </div>
            );
          })
        ) : (
          <SearchNotFoundClass word="Product" />
        )}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataId={dataId} />}
      </Row>
    </div>
  );
};
export default ProductGrid;
