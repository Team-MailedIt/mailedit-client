import { useState } from 'react';
import styled from 'styled-components';
import MContents from '../../components/mobile/userHome/MContents';
import MFooter from '../../components/mobile/userHome/MFooter';
import MHeader from '../../components/mobile/userHome/MHeader';
import MModal from '../../components/mobile/userHome/MModal';

export default function MUserHome() {
  const arr1 = [
    '회의일정 공지',
    '회의일정 조율',
    '추가자료 요청',
    '요청자료 전달',
    '문서 제출',
    '문서검토 요청',
    '업무보고',
    '업무지연 메일',
    '단순문의/질문 메일',
    '수정 메일',
  ];

  const arr2 = [
    '성적이의제기',
    '출석정정메일',
    '출결 정정메일',
    '질문 / 문의 메일',
    '과제 제출 메일',
    '질문 / 문의 메일',
  ];

  return (
    <Wrapper>
      <MHeader />
      <MContents
        arr={arr1}
        title=" 회사에서 일잘러가 되려면?"
        subtitle="MailedIt이 엄선한, 회사에서 가장 자주 사용되는 템플릿"
        imgSrc="/images/mhome_company.svg"
      />
      <MContents
        arr={arr2}
        title="학교에서 조교님, 교수님께 어떻게 보내나요?"
        subtitle="MailedIt이 엄선한, 학교에서 가장 자주 사용되는 템플릿"
        imgSrc="/images/mhome_school.svg"
      />
      <MFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
