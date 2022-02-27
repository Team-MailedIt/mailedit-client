import styled from 'styled-components';
import COLORS from '../../constants/colors';

import Search from '../commons/Search';
import Accordion from '../commons/Accordion';

import API from '../../utils/API';
import { useContext, useEffect, useState } from 'react';
import { GroupContext } from '../../contexts/GroupContexts';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const WorkSpaceSidebar = () => {
  const { isLogin } = useContext(AuthContext);

  // 그룹 리스트
  const { groupListContext, setGroupList } = useContext(GroupContext);

  // isStar template
  const [favTemplates, setFavTemplates] = useState([]);

  // template lists
  const [myTemplates, setMyTemplates] = useState([]);
  const [baseSchool, setBaseSchool] = useState([]);
  const [baseCompany, setBaseCompany] = useState([]);

  // fetch group
  useEffect(() => {
    if (isLogin) {
      const fetchGroupList = async () => {
        const { data } = await API.get(`/groups/`);
        setGroupList(data);
      };
      fetchGroupList();
    }
    // }, [groupListContext.length, setGroupList]);
  }, [isLogin, setGroupList]);

  // fetch templates
  useEffect(() => {
    const fetchAllTemplates = async () => {
      const { data } = await API.get(`/templates/all`);
      data.forEach(({ templateId, category, groupId, title, isStar }) => {
        if (category) {
          const newElement = { templateId: templateId, title: title };
          // this will be base template
          if (category === '회사') {
            setBaseCompany((el) => [...el, newElement]);
          } else if (category === '학교') {
            setBaseSchool((el) => [...el, newElement]);
          }
        } else {
          // this will be myTemplate
          const newElement = {
            templateId: templateId,
            groupId: groupId,
            title: title,
          };
          setMyTemplates((el) => [...el, newElement]);
          if (isStar) {
            setFavTemplates((el) => [...el, newElement]);
          }
        }
      });
    };
    fetchAllTemplates();
  }, []);

  // navigate to main page
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <FixedSection>
        <Logo
          src={`${process.env.PUBLIC_URL}/img/logo.svg`}
          onClick={goToMain}
        />
        <Search all={[...myTemplates, ...baseSchool, ...baseCompany]} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        <Accordion
          title="즐겨찾기"
          icon={<StarIcon src={`${process.env.PUBLIC_URL}/img/star.svg`} />}
          list={favTemplates}
        />
        <Border />
        {groupListContext.length !== 0 &&
          groupListContext.map(({ name, color, id }) => (
            <Accordion
              key={id}
              title={name}
              icon={<Index color={color} />}
              list={myTemplates.filter((t) => id === t.groupId)}
            />
          ))}
        <BaseTemplate>기본템플릿</BaseTemplate>
        <Accordion
          title="회사"
          icon={<Index color={COLORS.indigo2} />}
          list={baseCompany}
        />
        <Accordion
          title="학교"
          icon={<Index color={COLORS.indigo2} />}
          list={baseSchool}
        />
      </VariableSection>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 328px;
  background: ${COLORS.primary};
`;

const FixedSection = styled.section`
  width: 100%;
  height: 208px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const VariableSection = styled.section`
  width: 100%;
  height: 820px;
  overflow: auto;
  padding-bottom: 52px;

  &::-webkit-scrollbar {
    height: 100%;
    width: 29px;
  }

  &:hover {
    &::-webkit-scrollbar {
      height: 100%;
      width: 29px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${COLORS.indigo1};
      background-clip: padding-box;
      border-radius: 20px;
      border: 13px solid transparent;
    }
  }
`;

const MyTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 0px 192px 12px 40px;

  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 3px 0px 3px 4px;
`;

const Border = styled.hr`
  width: 246px;
  height: 0.5px;
  margin: 16px 46px 16px 36px;

  border: none;
  background-color: rgba(255, 255, 255, 0.25);
`;

const Index = styled.div`
  width: 4px;
  height: 16px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

const BaseTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 52px 192px 8px 40px;

  font-weight: 500;
  font-size: 22px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

export default WorkSpaceSidebar;
