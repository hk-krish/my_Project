import { ChangeEvent, Fragment, useState } from "react";
import { toast } from "react-toastify";
import { ActiveCallbackProp } from "../../../../../../../Types/FormsType";
import { SavedAddress, ShippingInformation, ShippingMethod } from "../../../../../../../Constants";
import HomeAndOfficeAddress from "./HomeAndOfficeAddress";
import NewAddressModal from "./NewAddressModal";
import ShippingMethods from "./ShippingMethods";
import { Button } from "reactstrap";

const ShippingFormContent: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
  const [radioBoxValues, setRadioBoxValues] = useState({ address: "", shippingMethod: "" });
  const { address, shippingMethod } = radioBoxValues;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setRadioBoxValues({ ...radioBoxValues, [name]: value });
  };
  const handleBackButton = () => activeCallBack(1);
  const handleNextButton = () => {
    if (address !== "" && shippingMethod !== "") activeCallBack(3);
    else return toast.error("please fill out all the fields before moving on to the next step");
  };
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <Fragment>
      <h6>{ShippingInformation}</h6>
      <p className="f-light">{" Fill up the following information to send you the order"}</p>
      <div className="shipping-title">
        <h6 className="mb-2">{SavedAddress}</h6>
        <Button onClick={toggle} color="primary">
          <i className="fa fa-plus-square f-20" />
        </Button>
        <NewAddressModal showModal={showModal} toggle={toggle} />
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} updateFormData={updateFormData} />
      <h6 className="mt-4 mb-2">{ShippingMethod}</h6>
      <ShippingMethods radioBoxValues={radioBoxValues} updateFormData={updateFormData} handleNextButton={handleNextButton} handleBackButton={handleBackButton} />
    </Fragment>
  );
};
export default ShippingFormContent;
