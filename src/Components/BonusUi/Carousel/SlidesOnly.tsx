import { Card, CardBody, Col } from "reactstrap";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { SlidesOnlyTitle } from "../../../Constants";
import { SlidesOnlyData, SlidesOnlyDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={SlidesOnlyTitle} span={SlidesOnlyData} />
        <CardBody>
          <Swiper centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}>
            {SlidesOnlyDataList.map((item, index) => (
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

export default SlidesOnly;
