import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import PropsProfileCardSlide from "../../../profileCard/profileCardSlide";
import * as S from "./multislide.styles";

interface IMultiSlide2 {
  slideToShow: number;
}

export default function MultiSlide2(props: IMultiSlide2) {
  const { data } = useFetchUsers();

  const settings = {
    speed: 500,
    slidesToShow: props.slideToShow,
    slidesToScroll: props.slideToShow,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <S.MultiSlideBox>
        <Slider {...settings}>
          {data?.fetchUsers.map((el) => {
            return (
              <S.MultiSlideWrapper key={uuidv4()} style={{ width: 200 }}>
                <S.MultiSlideItem>
                  <PropsProfileCardSlide
                    img={el.imgUrl}
                    name={el.name}
                    position={el.position?.name}
                    tendency={el.tendencys}
                    fontSize={0.571}
                  />
                </S.MultiSlideItem>
              </S.MultiSlideWrapper>
            );
          })}
        </Slider>
      </S.MultiSlideBox>
    </>
  );
}
