import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MThumbnail() {
  return (
    <Wrapper>
      <Title>회의 일정 공지</Title>
      <Subtitle>[00팀] 00/00 00프로젝트 회의 일정 공유</Subtitle>
      <Border />
      <Content>
        안녕하세요, 0000년 상반기/하반기 00사에 인턴 지원을 하게 된 000입니 다.
        감사합니다. 블라블라브라라
      </Content>
      <Bottom>
        회의일정은 회사 내에서 회의 내용에 대한 공지 시에 사용됩니다.
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 360px;
  height: 162px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  & + & {
    margin-top: 12px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 16px;
`;

const Subtitle = styled.div`
  margin-top: 8px;
  margin-left: 20px;

  font-weight: 400;
  font-size: 12px;
`;

const Border = styled.div`
  width: 320px;
  height: 1px;
  margin-top: 13px;
  margin-left: 20px;

  background: ${colors.gray.gray4};
`;

const Content = styled.div`
  width: 316px;
  height: 30px;
  margin-top: 13px;
  margin-left: 20px;

  font-weight: 300;
  font-size: 11px;
  line-height: 140%;
`;

const Bottom = styled.div`
  width: 100%;
  height: 30px;
  padding-left: 20px;
  margin-top: 16px;

  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 11px;
  color: ${colors.main.main};
  background: ${colors.main.indigo0};
`;
