//@ts-nocheck
import { useEffect, useRef } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IndividualCarouselTitle } from "../../../Constants";
import { IndividualIntervalData, ItemIntervalData } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const IndividualInterval = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    const updateAutoplayDelay = () => {
      const currentSlideIndex = swiperInstance.realIndex;
      const currentInterval = IndividualIntervalData[currentSlideIndex].interval;
      swiperInstance.params.autoplay.delay = currentInterval;
      swiperInstance.autoplay.stop();
      swiperInstance.autoplay.start();
    };

    swiperInstance.on("slideChange", updateAutoplayDelay);

    return () => {
      swiperInstance.off("slideChange", updateAutoplayDelay);
    };
  }, []);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={IndividualCarouselTitle} span={ItemIntervalData} />
        <CardBody>
          <Swiper ref={swiperRef} modules={[Autoplay, Navigation]} navigation loop autoplay={{ delay: IndividualIntervalData[0].interval }} slidesPerView={1}>
            {IndividualIntervalData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
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

export default IndividualInterval;
