import { useState } from "react";
import { Badge } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DesignerText } from "../../../../Constants";
import { CarouselTimelineData } from "../../../../Data/BonusUi/Timeline";
import { dynamicImage, Image } from "../../../../Utils";

const CarouselTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-success">
        <i className="icon-image" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="info">{DesignerText}</Badge>
        </div>
        <h5 className="m-0">{"Research about most recent design trends."}</h5>
        <p className="mb-0">{"Spend some time looking up current design trend."}</p>
        <div className="carousel slide">
          <Swiper navigation modules={[Navigation, Pagination]} pagination={{ clickable: true }} slidesPerView={1} onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)} className="carousel-inner">
            {CarouselTimelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <Image src={dynamicImage(`banner/${item.image}`)} alt="drawing-room" className="d-block w-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <span className="cd-date">April 23 2024</span>
      </div>
    </div>
  );
};
export default CarouselTimeline;
