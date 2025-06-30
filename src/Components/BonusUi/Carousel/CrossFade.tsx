import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { CrossFadeData, CrossFadeDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import { CrossFadeTitle } from "../../../Constants";

const CrossFade = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={CrossFadeTitle} span={CrossFadeData} headClass="pb-0" />
        <CardBody>
          <Swiper modules={[Autoplay, EffectFade, Navigation]} effect="fade" navigation loop autoplay={{ delay: 2000 }} slidesPerView={1} onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}>
            {CrossFadeDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <Image src={dynamicImage(item.image)} alt="drawing-room" className="d-block w-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CrossFade;
