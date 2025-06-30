import Slider from "react-slick";
import { ProductSliderOne, ProductSliderTwo, Settings } from "../../../../../../Data/Applications/ECommerce";
import CommonProductSlide from "./Common/CommonProductSlide";

const PriceRange = () => {
  return (
    <div className="product-filter pb-0 new-products">
      <div className="owl-carousel owl-theme" id="testimonial">
        <Slider {...Settings}>
          <div className="item">
            {ProductSliderOne.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
          <div className="item">
            {ProductSliderTwo.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default PriceRange