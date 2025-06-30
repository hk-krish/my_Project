import CommonFileUpload from "../../../../../CoreComponents/CommonFileUpload";

const ProductGallery = () => {
  return (
    <div className="product-upload">
      <p>
        Product Gallery<span className="text-danger"> *</span>
      </p>
      <CommonFileUpload />
    </div>
  );
};

export default ProductGallery;
