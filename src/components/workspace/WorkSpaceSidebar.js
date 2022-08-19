import styled from 'styled-components';
import COLORS, { colors } from '../../constants/colors';

import Search from '../commons/Search';
import Accordion from '../commons/Accordion';
import HelpModal from '../helpModal/HelpModal';

import star from '../../constants/icons/star.svg';
import logo from '../../constants/icons/logo.svg';

import API from '../../utils/API';
import { useContext, useEffect, useState } from 'react';
import { GroupContext } from '../../contexts/GroupContexts';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const WorkSpaceSidebar = () => {
  const { isLogin } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('tooltip') === 'false') {
      setIsModalOpen(false);
    }
  }, []);

  const openHelp = () => {
    setIsModalOpen(true);
  };

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
        <Logo src={logo} onClick={goToMain} />
        <Search all={[...myTemplates, ...baseSchool, ...baseCompany]} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        <Accordion
          title="즐겨찾기"
          icon={<StarIcon src={star} />}
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
        <Help
          src="/img/sidebar_help.png"
          alt="sidebar help"
          onClick={openHelp}
        />
      </VariableSection>
      <HelpModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-area: sidebar;

  width: 100%;
  min-width: 246px;
  max-width: 246px;

  background: ${colors.main.main};
`;

const FixedSection = styled.section`
  width: 100%;
  padding: 27px 27px 0px 30px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 165px;
  height: 33px;
`;

const VariableSection = styled.section`
  width: 100%;
  height: 76vh;
  margin-top: 32px;
  padding-left: 30px;
  padding-bottom: 52px;

  overflow: auto;

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

const MyTemplate = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.UIWhite};
`;

const StarIcon = styled.img`
  width: 14px;
  height: 14px;

  margin: 3px 8px 3px 1px;
`;

const Help = styled.img`
  width: 28px;
  height: 28px;

  position: fixed;
  bottom: 0;
  margin-left: 160px;
  margin-bottom: 20px;
  z-index: 12;

  cursor: pointer;
`;

const Border = styled.div`
  width: 186px;
  height: 0.5px;

  margin: 10px 0px 4px 4px;

  background: rgba(255, 255, 255, 0.25);
`;

const Index = styled.div`
  width: 3px;
  height: 12px;

  margin-right: 6px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

const BaseTemplate = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.UIWhite};
  margin-top: 40px;
  margin-bottom: 14px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

export default WorkSpaceSidebar;
