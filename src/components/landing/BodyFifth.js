import styled from 'styled-components';
import {
  BodyContainer,
  TitleSpan,
  TitleSpanBold,
  BodySpan,
} from './Components';

const BodyFifth = () => {
  return (
    <BodyContainer>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginTop: '100px' }}
      >
        <div></div>
        <div>
          <TitleSpan>빠르게 꺼내 쓰는</TitleSpan>
          <TitleSpanBold>마이템플릿</TitleSpanBold>
          <BodySpan style={{ marginTop: '24px' }}>
            효율적인 그룹 기능과 정렬 방식으로
            <br />
            저장된 템플릿을 빠르게 사용해 보세요
          </BodySpan>
        </div>
      </div>
    </BodyContainer>
  );
};
export default BodyFifth;
