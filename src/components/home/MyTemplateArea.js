import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import API from '../../utils/API';
import Thumbnail from './Thumbnail';
import COLORS, { colors } from '../../constants/colors';
import noTemplateIllu from '../../constants/icons/noTemplateIllu.svg';

import { AuthContext } from '../../contexts/AuthContext';
import { ContentContext } from '../../contexts/ContentContext';
import { FilterLikeContext } from '../../contexts/FilterLikeContext';
import { SelectGroupContext } from '../../contexts/SelectGroupContext';
import { SelectTemplateContext } from '../../contexts/SelectTemplateContext';

const MyTemplateArea = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const [myTemplates, setMyTemplates] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { isLogin } = useContext(AuthContext);
  const { likes } = useContext(FilterLikeContext);
  const { setContentHandler } = useContext(ContentContext);
  const { selectedGroupId } = useContext(SelectGroupContext);
  const { setSelectIdHandler } = useContext(SelectTemplateContext);

  useEffect(() => {
    const getMy = async () => {
      const { data } = await API.get('/templates/my');
      setMyTemplates(data);
      setFiltered(data);
    };

    isLogin && getMy();
  }, [isLogin]);

  // filtering my templates
  useEffect(() => {
    setFiltered(myTemplates.filter((t) => selectedGroupId.includes(t.groupId)));

    likes && setFiltered(myTemplates.filter((t) => t.isStar === true));
  }, [selectedGroupId, myTemplates, likes]);

  // delete template
  const handleBinIconClick = (e) => {
    const deleteTemplate = async () => {
      await API.delete(`/templates/${e.target.id}`);
      const { data } = await API.get('/templates/my');
      setMyTemplates(data);
    };

    deleteTemplate();
  };

  const handleThumbnailClick = (e) => {
    setSelectIdHandler(e.target.id);

    const setContent = async () => {
      const { data } = await API.get(`/templates/${e.target.id}`);
      setContentHandler(data);
    };

    setContent();

    navigate('/workspace');
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title> {isLogin ? `${userName}님의 마이템플릿` : '마이템플릿'}</Title>
        <SavedNumWrapper>
          저장된 템플릿 <SavedNum>{`${myTemplates.length}개`}</SavedNum>
        </SavedNumWrapper>
      </TitleWrapper>
      <Border />

      {myTemplates.length === 0 ? (
        <NoTemplateWrapper>
          <NoTemplateIllust src={noTemplateIllu} />
          <NoTemplateText>
            앗 아직 나의 템플릿이 없어요!
            <br />
            <b>첫 템플릿</b>을 만들어 보세요
          </NoTemplateText>
        </NoTemplateWrapper>
      ) : (
        <>
          {filtered.length !== 0 ? (
            <>
              <MyTemplateGrid>
                {filtered.map((t) => (
                  <Thumbnail
                    key={t.createdAt}
                    id={t.templateId}
                    title={t.title}
                    subtitle={t.subtitle}
                    isStar={t.isStar}
                    groupId={t.groupId}
                    groupColor={t.group.color}
                    updatedAt={t.updatedAt.replace('T', ' ').substring(0, 19)}
                    handleBinIconClick={handleBinIconClick}
                    handleThumbnailClick={handleThumbnailClick}
                    setMyTemplates={setMyTemplates}
                  />
                ))}
              </MyTemplateGrid>
            </>
          ) : (
            <NoTemplateWrapper>
              <NoTemplateIllust src={noTemplateIllu} />
              <NoTemplateText>
                왼쪽 사이드바에서
                <br />
                템플릿을 꺼내 보세요!
              </NoTemplateText>
            </NoTemplateWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 432px;
  margin-top: 2.8%;

  background: ${colors.bg.bg};
  border-radius: 4px;

  @media screen and (min-width: 1500px) {
    margin-top: 7vh;
  }
`;

const TitleWrapper = styled.div`
  width: 95.8%;
  height: 26px;
  margin-top: 24px;
  margin-left: 2.4%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
  color: ${colors.gray.gray8};
`;

const SavedNumWrapper = styled.div`
  width: 120px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: 300;
  font-size: 12px;
`;

const SavedNum = styled.span`
  color: ${colors.main.main};

  margin-left: 4px;
  border-bottom: 1px solid ${colors.main.main};
`;

const Border = styled.div`
  width: 97%;
  height: 1px;

  margin: 16px 0 22px 1.4%;

  background: ${colors.gray.gray4};
`;

const MyTemplateGrid = styled.div`
  width: 96%;
  height: 328px;
  padding-bottom: 8px;
  margin: 0 2%;

  grid-row-gap: 18px;

  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.primary};
    background-clip: padding-box;

    border-radius: 20px;
    border: 4px solid transparent;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const NoTemplateWrapper = styled.div`
  width: 269px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 34px;
  margin-left: 36%;
`;

const NoTemplateIllust = styled.img`
  width: 269px;
  height: 231px;
`;

const NoTemplateText = styled.div`
  width: 175px;
  height: 21px;

  margin-top: 20px;
  margin-left: 48px;

  text-align: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  margin-top: 20px;
  margin-left: 69px;
`;

export default MyTemplateArea;
