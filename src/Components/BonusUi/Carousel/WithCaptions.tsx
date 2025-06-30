import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { WithCaptionTitle } from "../../../Constants";
import { WithCaptionData, WithCaptionDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const WithCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithCaptionTitle} span={WithCaptionData} headClass="pb-0" />
        <CardBody className="mt-2 mb-3">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}>
            {WithCaptionDataList?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <Image src={dynamicImage(slide.image)} alt="drawing-room" className="d-block w-100" />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>{slide.captionHeader}</h3>
                    <p>{slide.captionText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaptions;
