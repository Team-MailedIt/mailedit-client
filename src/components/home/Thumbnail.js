import { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../../utils/API';
import COLORS from '../../constants/colors';

import bin from '../../constants/icons/bin.svg';
import liked from '../../constants/icons/liked.svg';
import notLiked from '../../constants/icons/notLiked.svg';

const Thumbnail = ({
  id,
  title,
  subtitle,
  isStar,
  groupId,
  groupColor,
  updatedAt,
  handleBinIconClick,
  handleThumbnailClick,
}) => {
  const [isLiked, setIsLiked] = useState(isStar);
  const [memo, setMemo] = useState('');

  const handleStarClick = () => {
    setIsLiked(!isLiked);

    API.patch(
      `/templates/${id}`,
      JSON.stringify({ isStar: !isLiked, groupId: groupId })
    );
  };

  useEffect(() => {
    const parsed = subtitle
      .replace(/<div>/gi, '\n')
      .replace(/<\/div>/gi, '')
      .replace(/<br>/gi, '\n');
    setMemo(parsed);
  }, [subtitle]);

  return (
    <Wrapper>
      <IndexArea id={id} onClick={handleThumbnailClick}>
        <Index color={groupColor} />
      </IndexArea>
      <Title id={id} onClick={handleThumbnailClick}>
        {title}
      </Title>
      <BodyWrapper id={id}>
        <Subtitle id={id} onClick={handleThumbnailClick}>
          <SubTitleText id={id}>{memo}</SubTitleText>
        </Subtitle>
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

  margin-bottom: 22px;

  background: ${COLORS.UIWhite};

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
  }
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

  margin: 24px 20px 0px 20px;

  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

  display: table;

  font-size: 16px;
  line-height: 22px;
  vertical-align: bottom;

  color: ${COLORS.gray8};
`;

const SubTitleText = styled.span`
  width: 100%;
  height: 100%;

  display: table-cell;

  font-size: 16px;
  line-height: 22px;
  vertical-align: bottom;
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
