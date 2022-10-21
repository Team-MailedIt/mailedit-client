import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';

import API from '../../utils/API';
import { colors } from '../../constants/colors';
import BaseTemplateModal from './BaseTemplateModal';

import dots from '../../constants/icons/dots.svg';
import mainSchIllu from '../../constants/icons/mainSchIllu.svg';
import mainComIllu from '../../constants/icons/mainComIllu.svg';

import Select from '../commons/Select';
import { SelectTemplateContext } from '../../contexts/SelectTemplateContext';

const BaseTemplateArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baseSchool, setBaseSchool] = useState([]);
  const [baseCompany, setBaseCompany] = useState([]);

  const [option, setOption] = useState('school');

  const { selectedId, setSelectIdHandler } = useContext(SelectTemplateContext);

  // get base templates
  useEffect(() => {
    const getBaseSchool = async () => {
      const { data } = await API.get('/templates/base?category=학교');
      setBaseSchool(data);
    };

    const getBaseCompany = async () => {
      const { data } = await API.get('/templates/base?category=회사');
      setBaseCompany(data);
    };

    getBaseSchool();
    getBaseCompany();
  }, []);

  // when clicking base template menu
  const handleBaseClick = (e) => {
    setSelectIdHandler(e.target.id);
    setIsModalOpen(!isModalOpen);
  };

  // when clicking etc button
  const handleDotBtnClick = () => {
    setSelectIdHandler(baseCompany[0].templateId);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Top>
          <Title>
            {option === 'company'
              ? '회사에서 일잘러가 되려면?'
              : '학교에서 교수님, 조교님께 어떻게 보내나요?'}
          </Title>
          <Select option={option} setOption={setOption} />
        </Top>
        <Subtitle>
          MailedIt에서 제공하는 기본 템플릿을 사용해 이메일 작성 효율을 좀 더
          높여 보세요.
        </Subtitle>
        <Table>
          {/* <Cell>회의 일정 공지 회의 일정 공지</Cell>
          <Cell>회의 일정 공지</Cell>
          <Cell>회의 일정 공지</Cell>
          <Cell>회의 일정 공지</Cell>
          <Cell>회의 일정 공지</Cell> */}
          {option === 'company'
            ? baseCompany.slice(0, 5).map((t, i) => (
                <Cell id={t.templateId} key={'b' + i} onClick={handleBaseClick}>
                  {t.title}
                </Cell>
              ))
            : baseSchool.slice(0, 5).map((t, i) => (
                <Cell id={t.templateId} key={'b' + i} onClick={handleBaseClick}>
                  {t.title}
                </Cell>
              ))}
          <Cell onClick={handleDotBtnClick}>
            <Dots src={dots} />
          </Cell>
        </Table>
        {selectedId.length !== 0 && (
          <BaseTemplateModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            baseTemplates={[...baseCompany, ...baseSchool]}
            baseCompany={baseCompany}
            baseSchool={baseSchool}
          />
        )}
      </MenuWrapper>
      <ImageArea>
        {option === 'company' ? (
          <Image src={mainComIllu} alt="base template illustration 1" />
        ) : (
          <Image src={mainSchIllu} alt="base template illustration 2" />
        )}
      </ImageArea>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 20%;
  /* margin-top: 2.8%; */
  margin-top: 5.3vh;

  display: grid;
  grid-template-areas: 'menu image';
  grid-template-columns: 4fr 1fr;

  @media screen and (min-width: 1500px) {
    /* margin-top: 7vh; */
    margin-top: 2.8%;
  }
`;

const ImageArea = styled.div`
  grid-area: image;

  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 270px;
  height: 180px;
`;

const MenuWrapper = styled.section`
  grid-area: menu;

  width: 100%;
  height: 180px;
  padding-right: 1.6%;
`;

const Top = styled.div`
  width: 100%;
  height: 31px;
  margin-top: 2.8%;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 21px;
`;

const Subtitle = styled.span`
  font-weight: 300;
  font-size: 12px;
`;

const Table = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 28px;

  border: 1px solid ${colors.main.indigo2};
  border-radius: 3px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 13.5px;

  padding: 12px 18px;
  text-align: center;

  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  & + & {
    border-left: 1px solid ${colors.main.indigo2};
  }
`;

const Dots = styled.img`
  width: 23px;
`;

export default BaseTemplateArea;
