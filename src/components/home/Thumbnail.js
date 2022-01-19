import styled from "styled-components";
import COLORS from "../../constants/colors";
import liked from "../../constants/icons/liked.svg";
import notLiked from "../../constants/icons/notLiked.svg";
import bin from "../../constants/icons/bin.svg";
import { useState } from "react";
import API from "../../utils/API";

const Thumbnail = ({
  id,
  title,
  subtitle,
  isStar,
  groupId,
  groupColor,
  updatedAt,
  handleBinIconClick,
}) => {
  const [isLiked, setIsLiked] = useState(isStar);

  const handleStarClick = () => {
    setIsLiked(!isLiked);

    API.patch(
      `/templates/${id}`,
      JSON.stringify({ isStar: !isLiked, groupId: groupId })
    ).then((res) => console.log(res.data));
  };

  return (
    <Wrapper>
      <IndexArea>
        <Index color={groupColor} />
      </IndexArea>
      <Title>{title}</Title>
      <BodyWrapper>
        <Subtitle>{subtitle}</Subtitle>
        {isLiked ? (
          <Liked src={liked} value={isLiked} onClick={handleStarClick} />
        ) : (
          <Liked src={notLiked} value={isLiked} onClick={handleStarClick} />
        )}
      </BodyWrapper>
      <Bottom>
        <Time>{updatedAt}에 수정됨</Time>
        <Border />
        <Bin src={bin} id={id} onClick={handleBinIconClick} />
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 340px;
  height: 196px;
  border-radius: 8px;

  margin-top: 22px;

  background: ${COLORS.UIWhite};

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;

const IndexArea = styled.div`
  width: 100%;
  height: 8px;

  display: flex;
  justify-content: flex-end;
`;

const Index = styled.div`
  width: 142px;
  height: 8px;

  border-radius: 0px 4px 0px 0px;

  border-top: 8px solid ${(props) => props.color};
  border-left: 12px solid transparent;
`;

const Title = styled.div`
  width: 300px;
  height: 28px;

  display: flex;
  align-items: center;

  margin: 24px 20px 0px 20px;

  font-family: Pretendard-SemiBold;
  font-size: 22px;

  color: ${COLORS.gray8};
`;

const BodyWrapper = styled.div`
  width: 308px;
  height: 46px;

  margin: 32px 0px 18px 20px;

  display: flex;
  flex-direction: row;
`;

const Subtitle = styled.div`
  width: 264px;
  height: 42px;

  display: flex;
  justify-content: space-between;

  font-size: 16px;
  line-height: 22px;

  color: ${COLORS.gray8};
`;

const Liked = styled.img`
  width: 28px;
  height: 28px;

  margin-top: 18px;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  border-radius: 0px 0px 8px 8px;
  background: ${COLORS.bgThumbnail};
`;

const Time = styled.div`
  width: 260px;
  height: 20px;

  margin-left: 24px;

  display: flex;
  align-items: center;

  font-size: 14px;
  color: ${COLORS.gray6};
`;

const Border = styled.div`
  width: 1px;
  height: 24px;

  margin-left: 15px;

  background: ${COLORS.gray4};
`;

const Bin = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 11px;

  &:hover {
    cursor: pointer;
  }
`;

export default Thumbnail;
