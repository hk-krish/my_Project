import React, { useRef } from "react";
import { StudentValidationFormProp } from "../../../../../../Types/FormsType";
import { Col, Input, Label, Row } from "reactstrap";
import { dynamicImage } from "../../../../../../Utils";
import { AddProfile, PortfolioURL, ProjectDescriptionText } from "../../../../../../Constants";

const ProfileForm: React.FC<StudentValidationFormProp> = ({ formData, updateFormData, selectedImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = () => {
    if (fileInputRef && fileInputRef.current) fileInputRef.current.click();
  };
  return (
    <Row className="g-3 avatar-upload">
      <Col xs="12">
        <div>
          <div className="avatar-edit">
            <Input onChange={updateFormData} innerRef={fileInputRef} type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
            <Label htmlFor="imageUpload" onClick={handleImageChange} />
          </div>
          <div className="avatar-preview">
            <div id="image" style={{ backgroundImage: selectedImage ? `url(${selectedImage})` : `url(${dynamicImage}forms/user.png)` }} />
          </div>
        </div>
        <h6>{AddProfile}</h6>
      </Col>
      <Col xs="12">
        <Label>{PortfolioURL}</Label>
        <Input value={formData.portfolioURL} onChange={updateFormData} name="portfolioURL" type="url" placeholder="https://yuri" />
      </Col>
      <Col xs="12">
        <Label>{ProjectDescriptionText}</Label>
        <Input type="textarea" value={formData.projectDescription} onChange={updateFormData} name="projectDescription" rows={2} />
      </Col>
    </Row>
  );
};
export default ProfileForm;
