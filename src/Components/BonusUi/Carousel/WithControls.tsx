import { Card, CardBody, Col } from "reactstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { WithControlsTitle } from "../../../Constants";
import { WithControlData, WithControlDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";

const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithControlsTitle} span={WithControlData} />
        <CardBody>
          <Swiper navigation={true} modules={[Navigation]}>
            {WithControlDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={dynamicImage(item.image)} alt="drawing-room" className="d-block w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControls;
