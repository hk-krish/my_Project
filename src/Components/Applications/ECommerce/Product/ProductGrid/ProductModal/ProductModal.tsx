import { useEffect, useState } from "react";
import { Button, Col, Modal, ModalHeader, Row } from "reactstrap";
import { useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { ProductItemInterface, ProductModalInterfaceType } from "../../../../../../Types/EcommerceType";
import { dynamicImage, Image } from "../../../../../../Utils";
import { ModalButtons } from "./ModalButtons";
import { ModalProductDetails } from "./ModalProductDetails";
import { ModalQuantity } from "./ModalQuantity";

const ProductModal: React.FC<ProductModalInterfaceType> = ({ value, setOpenModal, dataId }) => {
  const [open, setOpen] = useState(value);
  const { productItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);
  const [singleProduct, setSingleProduct] = useState<ProductItemInterface | undefined | [] | any>([]);

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataId) setSingleProduct(product);
    });
  }, [productItem, dataId]);

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };
  
  return (
    <Modal centered size="lg" isOpen={open} toggle={onCloseModal}>
      <ModalHeader className="position-relative border-0">
        <Button color="transparent" onClick={onCloseModal} className="btn-close modal-button"></Button>
        <Row className="product-box align-items-center">
          <Col lg="6" className="product-img">
           {singleProduct?.image && <Image className="img-fluid" src={dynamicImage(singleProduct?.image)} alt="image" />}
          </Col>
          <Col lg="6" className="product-details text-start">
            <ModalProductDetails singleProduct={singleProduct} />
            <div className="product-qnty">
              <ModalQuantity quantity={quantity} setQuantity={setQuantity} />
              <ModalButtons singleProduct={singleProduct} quantity={quantity} />
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  );
};
export default ProductModal;
