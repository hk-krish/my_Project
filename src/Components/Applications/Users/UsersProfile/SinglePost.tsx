import { Ref } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col } from "reactstrap";
import { Href } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonUserFooter from "./Common/CommonUserFooter";
import CommonUserHeader  from "./Common/CommonUserHeader";

const SinglePost = () => {
  const ProfileData: string = "Spend time outdoors: Find a nearby park, forest, beach, or any natural setting where you can immerse yourself in nature. Take a walk, go hiking, or simply sit and observe the natural surroundings. Practice mindfulness: Engage in mindful activities that help you connect with nature on a deeper level.";

  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <hr />
          <p>{ProfileData}</p>
          <div className="img-container">
            <div className="my-gallery w-100" id="aniimated-thumbnials" itemScope>
              <Gallery withCaption>
                <figure className="m-0">
                  <Item original={dynamicImage(`other-images/profile-style-img3.png`)} width="1600" height="800" caption="Image Caption 1">
                    {({ ref, open }) => (
                      <a href={Href} onClick={open}>
                        <img className="img-fluid rounded" ref={ref as unknown as Ref<HTMLImageElement>} src={dynamicImage(`other-images/profile-style-img3.png`)} alt="_image" />
                      </a>
                    )}
                  </Item>
                </figure>
              </Gallery>
            </div>
          </div>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default SinglePost;
