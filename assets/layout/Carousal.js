import React from "react";
import {
  CCarousel,
  CImage,
  CCarouselCaption,
  CCarouselItem,
} from "@coreui/react";
import Weather from "../components/Weather";

function Carousal() {
  return (
    <section>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/images/img1.jpg"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Explore the Beautiful Destinations...</h5>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/images/img2.jpg"
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
          <h5>Explore the Beautiful Destinations...</h5>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/images/img3.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
          <h5>Explore the Beautiful Destinations...</h5>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
      <Weather/>
    </section>

  );
}
export default Carousal;
