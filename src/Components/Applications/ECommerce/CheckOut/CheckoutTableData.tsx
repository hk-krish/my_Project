import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { Address, AddressRequired, CheckMeOut, CheckoutRequired, CityRequired, Country, EmailAddress, EmailRequired, FirstName, FirstNameRequired, LastName, LastNameRequired, Phone, PhoneRequired, PincodeRequired, PlaceOrder, PostalCode, StateCountry, StateRequired, TownCity } from "../../../../Constants";
import { CheckoutFormType } from "../../../../Types/EcommerceType";
import { routes } from "../../../../Routers/routes";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },reset} = useForm<CheckoutFormType>();
  const onSubmit: SubmitHandler<CheckoutFormType> = (data) => {
    if (data !== undefined) navigate(routes.ECommerce.Invoices.Invoice1);
    reset();
  };

  return (
    <Col xl="6" sm="12">
      <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
        <Row>
          <Col sm="6" className="mb-3">
            <Label>{FirstName}</Label>
            <input className="form-control" type="text" {...register("firstName", { required: true })} />
            {errors.firstName && <span className="text-danger">{FirstNameRequired}</span>}
          </Col>
          <Col sm="6" className="mb-3">
            <Label>{LastName}</Label>
            <input className="form-control" type="text" {...register("lastName", { required: true })} />
            {errors.lastName && <span className="text-danger">{LastNameRequired}</span>}
          </Col>
        </Row>
        <Row>
          <Col sm="6" className="mb-3">
            <Label>{Phone}</Label>
            <input className="form-control" type="number" {...register("phone", { required: true })} />
            {errors.phone && <span className="text-danger">{PhoneRequired}</span>}
          </Col>
          <Col sm="6" className="mb-3"> 
            <Label>{EmailAddress}</Label>
            <input className="form-control" type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="text-danger">{EmailRequired}</span>}
          </Col>
        </Row>
        <div className="mb-3">
          <Label>{Country}</Label>
          <Input type="select" defaultValue={"Choose..."}>
            <option>Choose...</option><option>...</option>
          </Input>
        </div>
        <div className="mb-3">
          <Label>{Address}</Label>
          <input className="form-control" type="text" {...register("address", { required: true, min: 20, max: 120 })} />
          {errors.address && <span className="text-danger">{AddressRequired}</span>}
        </div>
        <div className="mb-3">
          <Label>{TownCity}</Label>
          <input className="form-control" type="text" {...register("city", { required: true })} />
          {errors.city && <span className="text-danger">{CityRequired}</span>}
        </div>
        <div className="mb-3">
          <Label>{StateCountry}</Label>
          <input className="form-control" type="text" {...register("state", { required: true })} />
          {errors.state && <span className="text-danger">{StateRequired}</span>}
        </div>
        <div className="mb-3">
          <Label>{PostalCode}</Label>
          <input className="form-control" type="text" {...register("pincode", { pattern: /\d+/ })} />
          {errors.pincode && <span className="text-danger">{PincodeRequired}</span>}
        </div>
        <div className="mb-3">
          <input type="checkbox"  id="gridCheck"  className="form-check-input me-2" {...register("chech", { required: true })} />
          <Label className="m-0" for="gridCheck">{CheckMeOut}</Label>
          {errors.chech && <span className="text-danger mt-0">{CheckoutRequired}</span>}
        </div>
        <div className="text-end order-place mb-3">
          <Button color="primary">{PlaceOrder}</Button>
        </div>
      </Form>
    </Col>
  );
};

export default CheckoutForm;
