import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import ForthSlide from "./ForthSlide";
import { Button, Confirm } from "./Components";
import COLORS from "../../constants/colors";
import Dots from "./Dots";
import { RowContainer } from "../bubble/Components";

const CarouselTooltip = ({ handleConfirm }) => {
  const TOTAL_SLIDES = 3;
  const arr = [0, 1, 2, 3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef} $mode={currentSlide}>
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <ForthSlide />
      </SliderContainer>
      {currentSlide === TOTAL_SLIDES ? (
        <Confirm
          style={{ marginTop: "20px", alignSelf: "flex-end" }}
          onClick={handleConfirm}
        >
          완료
        </Confirm>
      ) : (
        <Button
          style={{ marginTop: "20px", alignSelf: "flex-end" }}
          onClick={nextSlide}
        >
          다음
        </Button>
      )}

      <RowContainer
        style={{
          alignSelf: "center",
          width: "48px",
          height: "8px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {arr.map((e, i) => {
          return (
            <Dots
              key={i}
              color={currentSlide === i ? COLORS.indigo4 : COLORS.UIBlack}
            />
          );
        })}
      </RowContainer>
    </Container>
  );
};
export default CarouselTooltip;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 272px;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* ${(props) => {
    switch (props.$mode) {
      case 0:
        return css`
          background-color: black;
        `;
      case 1:
        return css`
          background-color: red;
        `;
      case 2:
        return css`
          background-color: red;
        `;
      case 3:
        return css`
          background-color: red;
        `;
      default:
        return;
    }
  }} */
`;
