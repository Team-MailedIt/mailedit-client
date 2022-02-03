import styled from "styled-components";
import COLORS from "../../constants/colors";

const HomeTooltip = ({ visibility }) => {
  return (
    <Wrapper visibility={visibility}>
      <TooltipContainer>
        <Text>
          템플릿을 꺼내 쓰고, 만들어서 저장할 수 있는
          <br />
          페이지로 이동합니다.
        </Text>
      </TooltipContainer>
      <Triangle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 268px;
  height: 78px;

  display: flex;
  flex-direction: row;
  align-items: center;

  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

const TooltipContainer = styled.div`
  width: 252px;
  height: 78px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${COLORS.gray7};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;

  border-left: 16px solid ${COLORS.gray7};
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
`;

const Text = styled.div`
  width: 212px;
  height: 38px;

  font-size: 12px;
  line-height: 160%;
  color: ${COLORS.UIWhite};
`;

export default HomeTooltip;
