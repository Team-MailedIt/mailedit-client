import { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../../utils/API';
import COLORS, { colors } from '../../constants/colors';

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
  setMyTemplates,
}) => {
  const [isLiked, setIsLiked] = useState(isStar);
  const [memo, setMemo] = useState('');

  const handleStarClick = () => {
    setIsLiked(!isLiked);

    const setStar = async () => {
      await API.patch(
        `/templates/${id}`,
        JSON.stringify({ isStar: !isLiked, groupId: groupId })
      );

      const { data } = await API.get('/templates/my');
      setMyTemplates(data);
    };

    setStar();
  };

  useEffect(() => {
    const parsed = subtitle
      .replace(/<div>/gi, '\n')
      .replace(/<\/div>/gi, '')
      .replace(/<br>/gi, '\n')
      .slice(0, 45);
    setMemo(parsed);
  }, [subtitle]);

  return (
    <Wrapper>
      <IndexArea>
        <Index color={groupColor} />
      </IndexArea>
      <Title id={id} onClick={handleThumbnailClick}>
        {title}
      </Title>
      <Middle>
        <SubtitleWrapper id={id}>
          <Subtitle id={id} onClick={handleThumbnailClick}>
            <SubTitleText id={id}>{memo}</SubTitleText>
          </Subtitle>
        </SubtitleWrapper>
        {isLiked ? (
          <Liked src={liked} value={isLiked} onClick={handleStarClick} />
        ) : (
          <Liked src={notLiked} value={isLiked} onClick={handleStarClick} />
        )}
      </Middle>
      <Bottom>
        <Time>{updatedAt}에 수정됨</Time>
        <Border />
        <Bin src={bin} id={id} onClick={handleBinIconClick} />
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 255px;
  height: 147px;
  border-radius: 6px;
  /* margin-top: 18px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${colors.default.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

const IndexArea = styled.div`
  width: 100%;
  height: 6px;

  display: flex;
  justify-content: flex-end;
`;

const Index = styled.div`
  width: 106px;

  border-radius: 0px 4px 0px 0px;
  border-top: 8px solid ${(props) => props.color};
  border-left: 12px solid transparent;
`;

const Title = styled.div`
  width: 225px;
  height: 21px;
  margin-top: 18px;

  font-weight: 500;
  font-size: 16.5px;
  color: ${colors.gray.gray8};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Middle = styled.div`
  width: 231px;
  height: 34px;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
`;

const SubtitleWrapper = styled.div`
  width: 198px;
  height: 31px;

  display: table;
`;

const Subtitle = styled.div`
  width: 198px;
  height: 31px;

  font-size: 12px;
  line-height: 17px;
  color: ${colors.gray.gray8};

  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitleText = styled.span`
  font-size: 12px;
  line-height: 17px;
  display: table-cell;
  vertical-align: bottom;
`;

const Liked = styled.img`
  width: 21px;
  height: 21px;
  margin-top: 12px;

  cursor: pointer;
`;

const Bottom = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 14px;

  display: flex;
  align-items: center;

  border-radius: 0px 0px 6px 6px;
  background: ${COLORS.bgThumbnail};
`;

const Time = styled.div`
  width: 195px;
  height: 15px;
  margin-left: 18px;

  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 11px;
  color: ${COLORS.gray6};
`;

const Border = styled.div`
  width: 1px;
  height: 18px;

  margin-left: 12px;

  background: ${COLORS.gray4};
`;

const Bin = styled.img`
  width: 14px;
  height: 14px;

  margin-left: 8px;
`;

export default Thumbnail;
