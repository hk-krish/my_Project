import DownloadLink from "react-download-link";
import SimpleMdeReact from "react-simplemde-editor";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { dynamicImage, Image } from "../../../../../Utils";
import { MdeEditorText } from "../../../../../Data/Applications/LetterBox";

const UserFooter = () => {
  return (
    <div className="user-footer">
      <div>
        <SvgIcon iconId="attchment" />
        <span className="f-light">{"Attachments"}</span>
      </div>
      <div className="d-inline-block">
        <div className="attchment-file common-flex">
          <div className="common-flex align-items-center">
            <Image src={dynamicImage(`email-template/pdfs.png`)} alt="pdf" />
            <div className="d-block">
              <p className="mb-0">Offer_Letter.pdf</p> 
              <p className="mb-0">200KB</p>
            </div>
          </div>
          <DownloadLink filename="myfile.txt" label={<i className="fa fa-download f-light"></i>} />
        </div>
      </div>
      <div className="toolbar-box">
        <div id="editor">
          <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
