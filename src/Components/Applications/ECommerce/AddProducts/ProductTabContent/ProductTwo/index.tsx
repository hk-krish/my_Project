import CommonFileUpload from "../../../../../CoreComponents/CommonFileUpload";
import ProductGallery from "./ProductGallery";

const ProductTwo = () => {
  return (
    <div className="sidebar-body">
      <div className="product-upload">
        <p>
          Product Image<span className="text-danger"> *</span>
        </p>
        <CommonFileUpload />
      </div>
      <ProductGallery />
    </div>
  );
};

export default ProductTwo;
