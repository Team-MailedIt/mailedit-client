import styled from 'styled-components';
import COLORS from '../../constants/colors';

import Search from '../commons/Search';
import Accordion from '../commons/Accordion';

import star from '../../constants/icons/star.svg';
import logo from '../../constants/icons/logo.svg';

const WorkSpaceSidebar = () => {
  // 전체 템플릿 조회 api
  const all = [];

  // 그룹 리스트 조회 api
  const groups = [];

  // 마이 템플릿
  const myTemplates = [];

  // 기본 템플릿 - 학교
  const baseSchool = [];

  // 기본 템플릿 - 회사
  const baseCompany = [];

  // 즐겨찾기 한 템플릿
  const favTemplates = [];

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search all={all} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        <Accordion
          title="즐겨찾기"
          icon={<StarIcon src={star} />}
          list={favTemplates}
        />
        <Border />
        {myTemplates.length !== 0 ? (
          groups.map((group, i) => (
            <Accordion
              key={'m' + i}
              title={group.name}
              icon={<Index color={group.color} />}
              list={all.filter((t) => group.id === t.groupId)}
            />
          ))
        ) : (
          <NoTemplates>
            마이템플릿이 아직 없네요!
            <br />첫 템플릿을 만들어 보는 것은 어떨까요?
          </NoTemplates>
        )}

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
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const VariableSection = styled.div`
  width: 100%;
  height: 872px;
  overflow: scroll;

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
  margin: 0px 192px 24px 40px;

  font-weight: 600;
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

const NoTemplates = styled.div`
  width: 249px;
  height: 44px;

  margin: 15px 39px 0px 40px;

  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

const BaseTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 52px 192px 8px 40px;

  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

export default WorkSpaceSidebar;
