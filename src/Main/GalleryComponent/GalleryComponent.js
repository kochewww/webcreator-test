import React from "react";
import Slider from "react-slick";
import { SliderWrapper } from "./SliderStyle";
import { ReactComponent as NextArrowIcon } from "../../svg/arrow-1.svg";
import { ReactComponent as HoveredArrow } from "../../svg/hovered-arrow.svg";

import { ReactComponent as PrevArrowIcon } from "../../svg/arrow.svg";
import { Title, Image, Wrapper, ReversedHoveredArrow } from "./styled";
import useHover from "./useHover";

export default function GalleryComponent(props) {
  function PrevArrow(props) {
    const [hoverRef, isHovered] = useHover();
    const { onClick } = props;
    return (
      <div className="arrow" ref={hoverRef}>
        {isHovered ? (
          <ReversedHoveredArrow onClick={onClick} />
        ) : (
          <PrevArrowIcon onClick={onClick} />
        )}
      </div>
    );
  }

  function NextArrow(props) {
    const [hoverRef, isHovered] = useHover();
    const { onClick } = props;
    return (
      <div className="next-arrow" ref={hoverRef}>
        {isHovered ? (
          <HoveredArrow onClick={onClick} />
        ) : (
          <NextArrowIcon onClick={onClick} />
        )}
      </div>
    );
  }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.block.slidesPerView,
    slidesToScroll: props.block.slidesPerView,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const pictures = props.block.images.map(image => (
    <Image src={image} key={image} alt="somepics" />
  ));
  return (
    <div>
      <Title>{props.block.title}</Title>
      <Wrapper>
        <SliderWrapper>
          <Slider {...settings}>{pictures}</Slider>
        </SliderWrapper>
      </Wrapper>
    </div>
  );
}
