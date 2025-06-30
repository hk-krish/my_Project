import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AutoPlayVariantTitle } from "../../../Constants";
import { AutoPlayVariantSubTitle, AutoPlayVariantData } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariantTitle} span={AutoPlayVariantSubTitle} />
        <CardBody>
          <Swiper slidesPerView={3} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper swiper-h">
            {AutoPlayVariantData.map((item, index) => (
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

export default AutoPlayVariant;
