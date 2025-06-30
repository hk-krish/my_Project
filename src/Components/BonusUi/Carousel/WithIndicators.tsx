import { Card, CardBody, Col } from "reactstrap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { WithIndicatorData, WithIndicatorDataList } from "../../../Data/BonusUi/Carousel";
import { dynamicImage, Image } from "../../../Utils";
import { WithIndicatorsTitle } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithIndicatorsTitle} span={WithIndicatorData} headClass="pb-0" />
        <CardBody>
          <Swiper pagination={{ clickable: true }} navigation modules={[Pagination, Navigation]}>
            {WithIndicatorDataList.map((item, index) => (
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

export default WithIndicators;
