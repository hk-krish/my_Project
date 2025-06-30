import { Card, CardBody, Col } from "reactstrap";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MouseWheelVariantTitle } from "../../../Constants";
import { MouseWheelVariantData, MouseWheelVariantSubTitle } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const MouseWheelVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={MouseWheelVariantTitle} span={MouseWheelVariantSubTitle} />
        <CardBody>
          <Swiper slidesPerView={3} spaceBetween={30} mousewheel={true} pagination={{ clickable: true }} modules={[Mousewheel, Pagination]} className="mySwiper swiper-h">
            {MouseWheelVariantData.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={dynamicImage(`slider/${item}.jpg`)} className="d-block w-100" alt="Vertical_Slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MouseWheelVariant;
