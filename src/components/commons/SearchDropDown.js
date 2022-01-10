import styled from "styled-components";
import COLORS from "../../constants/colors";

const SearchDropDown = () => {
  return (
    <Wrapper>
      <TitleWrapper>하이하이</TitleWrapper>
      <TitleWrapper>하이하이</TitleWrapper>
      <TitleWrapper>하이하이</TitleWrapper>
      <TitleWrapper>하이하이</TitleWrapper>
      <TitleWrapper>하이하이</TitleWrapper>
      <TitleWrapper>하이하이</TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 252px;
  margin-left: 40px;
  background: ${COLORS.indigo4};

  position: relative;
  z-index: 2;

  padding-bottom: 9px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${COLORS.UIWhite};

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 228px;
  height: 25px;

  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 14px;
  margin-top: 7px;
  margin-left: 8px;

  &:hover {
    background: ${COLORS.indigo1};
    cursor: pointer;
  }
`;

export default SearchDropDown;
