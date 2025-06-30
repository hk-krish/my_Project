import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { NewProjectInitialValue, NewProjectValidation } from "../../../../Data/Applications/Project";
import DateSection from "./DateSection";
import TitleAndClientSection from "./TitleAndClientSection";
import UploadProjectFile from "./UploadProjectFile";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCreatedData } from "../../../../ReduxToolkit/Reducers/ProjectSlice";
import { ProjectInitialValue } from "../../../../Types/Applications";
import { routes } from "../../../../Routers/routes";

const CreateNewProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { createdFormData } = useAppSelector((state) => state.project);
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values: ProjectInitialValue) => {
    const submittedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      image: "3.jpg",
      sites: "ThemeForest, australia",
      description: "Berlin Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customers_img1: "3.jpg",
      customers_img2: "5.jpg",
      customers_img3: "1.jpg",
      progress: values.progress,
      projectLevel: values.progress,
    };
    dispatch(setCreatedData([...createdFormData, submittedData]));
    navigate(routes.Project.List);
  };
  return (
    <Formik initialValues={NewProjectInitialValue} validationSchema={NewProjectValidation} onSubmit={projectSubmit}>
      {() => (
        <Form className="theme-form">
          <TitleAndClientSection />
          <DateSection />
          <UploadProjectFile />
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewProjectForm;
