
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { Cancel, Collection, Description, Group, MyBookmarkTitle, Save, Title, WebUrl } from "../../../../../Constants";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { BookMarkData, BookmarkFormModalProps } from "../../../../../Types/Applications";
import { addNewBookmark, setAddModal, updateBookMark, setEditModal, setEditRow } from "../../../../../ReduxToolkit/Reducers/BookmarkTabSlice";

const BookmarkFormModal: React.FC<BookmarkFormModalProps> = ({ isOpen, toggle, initialData }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors }, setValue, reset,} = useForm<BookMarkData>();

  useEffect(() => {
    if (initialData) {
      setValue("website_url", initialData.website_url || "");
      setValue("title", initialData.title || "");
      setValue("desc", initialData.desc || "");
    } 
  }, [initialData, setValue]);

  const onSubmit: SubmitHandler<BookMarkData> = async (data) => {
    try {
      if (initialData) {
        dispatch(updateBookMark({ id: initialData.id, data }));
        dispatch(setEditModal());
        dispatch(setEditRow(null));
      } else {
        dispatch(addNewBookmark(data));
        dispatch(setAddModal());
        reset();
      }
      toggle();
    } catch (error) {
      console.error("Error saving bookmark:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>{initialData ? "Edit Bookmark" : "Add Bookmark"}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row className="g-2">
            <Col md="12" className="mb-3 mt-0">
              <Label>{WebUrl}</Label>
              <input className="form-control" type="text" {...register("website_url", { required: true })} />
              {errors.website_url && <span className="text-danger">Url is required</span>}
            </Col>
            <Col md="12" className="mt-0 mb-3">
              <Label>{Title}</Label>
              <input className="form-control" type="text" {...register("title", { required: true })} />
              {errors.title && <span className="text-danger">Title is required</span>}
            </Col>
            <Col md="12" className="mt-0 mb-3">
              <Label>{Description}</Label>
              <input className="form-control" type="textarea" {...register("desc", { required: true })} />
              {errors.desc && <span className="text-danger">Description is required</span>}
            </Col>
            <Col md="6" className="mt-0 mb-3">
              <Label>{Group}</Label>
              <Input type="select" name="group">
                <option value="bookmark">{MyBookmarkTitle}</option>
              </Input>
            </Col>
            <Col md="6" className="mt-0 mb-3">
              <Label>{Collection}</Label>
              <Input type="select" name="collection">
                <option value="General">General</option>
                <option value="Fs">Fs</option>
              </Input>
            </Col>
          </Row>
          <Button color="primary" type="submit" className="me-1">{Save}</Button>
          <Button color="secondary" onClick={toggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default BookmarkFormModal;