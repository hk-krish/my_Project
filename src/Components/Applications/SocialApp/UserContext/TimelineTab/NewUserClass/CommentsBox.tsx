import { Button, Input, InputGroup } from "reactstrap";
import { dynamicImage, Image } from "../../../../../../Utils";
import { CommentsSocialPlaceholder } from "../../../../../../Constants";

const CommentsBox = () => {
  return (
    <div className="comments-box">
     <div className="d-flex gap-3">
        <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={dynamicImage(`user/1.jpg`)}/>
        <div className="flex-grow-1">
          <InputGroup className="text-box">
            <Input className="input-txt-bx shadow-none" type="text" name="message-to-send" placeholder={CommentsSocialPlaceholder} />
            <div className="input-group-append">
              <Button color="transparent"><i className="fa fa-smile-o"></i></Button>
            </div>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default CommentsBox;