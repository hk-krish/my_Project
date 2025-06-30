import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DarkVariantTitle } from "../../../Constants";
import { DarkVariantData, DarkVariantDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DarkVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DarkVariantTitle} span={DarkVariantData} headClass="pb-0" />
        <CardBody>
          <div className="carousel-dark">
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}>
              {DarkVariantDataList?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                    <Image src={dynamicImage(slide.image)} alt="drawing-room" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block carousel-opacity">
                      <h3>{slide.captionHeader}</h3>
                      <p>{slide.captionText}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
