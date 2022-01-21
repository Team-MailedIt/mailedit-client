import styled from "styled-components";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import COLORS from "../../constants/colors";
import BaseAccordion from "./BaseAccordion";

const BaseTemplateModal = ({ isModalOpen, setIsModalOpen, selectedBaseId }) => {
  const base = [
    {
      templateId: "a52ab642-195e-4ec5-b288-f7a1b07846ba",
      title: "base 1",
      subtitle: "",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "6d946272-f323-4091-b81a-aaaef2a25c81",
      title: "base 2",
      subtitle: "sub 2",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "4c3cfbc6-d039-4138-be99-8bc4d748b352",
      title: "base 3",
      subtitle: "sample subtitle",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "18afdf0d-28ea-42f1-90ce-c201d1861271",
      title: "base 4",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxp3p3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "5c3c72ff-e857-4f22-b58b-4213e271fcf8",
      title: "base 5",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj134srd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "e3b07084-542e-4678-b1c9-a910fe079ee8",
      title: "com 1",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dg3rd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "49934eea-94d4-4480-b8a2-09aba0bfab43",
      title: "com 2",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxtrp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "88ec3443-8d1c-4205-a10a-b33886fcd23b",
      title: "com 3",
      subtitle: "222",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dg3rd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "c4d1c670-7e29-4822-8541-bafdc041b0df",
      title: "sch 1",
      subtitle: "",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgwrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "fe353a6b-0cb8-42e8-9756-6f740c5c26a8",
      title: "sch 2",
      subtitle: "222",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqajkdgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "fb0a8804-9cea-4c8e-9485-f9f28f33fba4",
      title: "sch 3",
      subtitle: "111",
      category: "학교",
      content: [
        {
          id: "kxnrp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "efbf40da-d5fa-45c9-9f5e-b13ca06d7d78",
      title: "sch 4",
      subtitle: "222",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xiuaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
  ];

  const baseSchool = [
    {
      templateId: "6d946272-f323-4091-b81a-aaaef2a25c81",
      title: "base 2",
      subtitle: "sub 2",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "4c3cfbc6-d039-4138-be99-8bc4d748b352",
      title: "base 3",
      subtitle: "sample subtitle",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "c4d1c670-7e29-4822-8541-bafdc041b0df",
      title: "sch 1",
      subtitle: "",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqaj1dgwrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "fe353a6b-0cb8-42e8-9756-6f740c5c26a8",
      title: "sch 2",
      subtitle: "222",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xfqajkdgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "fb0a8804-9cea-4c8e-9485-f9f28f33fba4",
      title: "sch 3",
      subtitle: "111",
      category: "학교",
      content: [
        {
          id: "kxnrp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "efbf40da-d5fa-45c9-9f5e-b13ca06d7d78",
      title: "sch 4",
      subtitle: "222",
      category: "학교",
      content: [
        {
          id: "kxprp3s9xiuaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
  ];

  // 기본 템플릿 - 회사
  const baseCompany = [
    {
      templateId: "a52ab642-195e-4ec5-b288-f7a1b07846ba",
      title: "base 1",
      subtitle: "",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "18afdf0d-28ea-42f1-90ce-c201d1861271",
      title: "base 4",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxp3p3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "5c3c72ff-e857-4f22-b58b-4213e271fcf8",
      title: "base 5",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj134srd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "e3b07084-542e-4678-b1c9-a910fe079ee8",
      title: "com 1",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dg3rd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "49934eea-94d4-4480-b8a2-09aba0bfab43",
      title: "com 2",
      subtitle: "111",
      category: "회사",
      content: [
        {
          id: "kxtrp3s9xfqaj1dgsrd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
    {
      templateId: "88ec3443-8d1c-4205-a10a-b33886fcd23b",
      title: "com 3",
      subtitle: "222",
      category: "회사",
      content: [
        {
          id: "kxprp3s9xfqaj1dg3rd",
          tag: "p",
          flag: 1,
          html: "000님 안녕하세요, 저는 00팀 000입니다.",
        },
        {
          id: "kxprufeacvsuthhot4",
          tag: "p",
          flag: 1,
          html: "00 프로젝트와 관련해서 00팀이 주최하는 회의를 진행하고자 합니다.<div>이번 회의일정은 다음과 같습니다.</div>",
        },
        {
          id: "kxprp3s9xfqaj1dgard",
          tag: "p",
          flag: 1,
          html: "1. 일시: 0000년 00월 00일 오전/오후 00시 ~  00시 <div>2. 장소: (장소)</div><div>3. 안건: (안건)</div>4. 참석 대상: (참석 대상)<div>5. 사전 준비사항: (사전 준비사항)</div>",
        },
        {
          id: "kxydhiwx4nuqllb33iw",
          tag: "p",
          flag: 1,
          html: "부득이하게 본 회의에 참석이 어려우신 경우, 원활한 회의 진행을 위해 00월 00일 오전/오후 00시까지 회신 부탁드립니다.",
        },
        {
          id: "kxydi9ryaymjilivbli",
          tag: "p",
          flag: 1,
          html: "감사합니다.<div>000 드림.</div>",
        },
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState(selectedBaseId);

  useEffect(() => setSelectedId(selectedBaseId), [selectedBaseId]);

  const handleSelectTemplate = (e) => {
    setSelectedId(e.target.id);
  };

  const selectedTemplate =
    selectedId && base.filter((t) => t.templateId === selectedId);

  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.65)",
      zIndex: 10,
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
      style={modalStyle}
    >
      <Main>
        <MainWrapper>
          {selectedId && (
            <>
              <Title>{selectedTemplate[0].title}</Title>
              <Subtitle>{selectedTemplate[0].subtitle}</Subtitle>
              <Border />
              <Content>
                {selectedTemplate[0].content.map((t, i) => (
                  <BlockWrapper key={"ttt" + i}>
                    {t.html.replaceAll("<div>", "\n").replaceAll("</div>", "")}
                  </BlockWrapper>
                ))}
              </Content>
            </>
          )}
          <Description>
            회의 일정은 회사 내에서 회의 내용에 대한 공지를 드릴 때에
            사용됩니다.
          </Description>
        </MainWrapper>
      </Main>
      <Sidebar>
        <ScrollArea>
          <BaseAccordion
            title="회사"
            list={baseCompany}
            handleSelectTemplate={handleSelectTemplate}
          />
          <BaseAccordion
            title="학교"
            list={baseSchool}
            handleSelectTemplate={handleSelectTemplate}
          />
        </ScrollArea>
        <UseBtn>템플릿 사용하기</UseBtn>
      </Sidebar>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  width: 1040px;
  height: 600px;

  background: ${COLORS.UIWhite};

  box-shadow: 0px 3.34333px 10.03px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  display: grid;
  grid-template-columns: 0.75fr 0.25fr;
  display: flex;
  flex-direction: row;

  &:focus {
    outline: none;
  }
`;

const Main = styled.main`
  width: 780px;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = styled.aside`
  width: 260px;
  height: 600px;

  background: ${COLORS.primary};
  color: ${COLORS.UIWhite};
`;

const MainWrapper = styled.div`
  width: 680px;
  height: 521px;
`;

const Title = styled.div`
  width: 680px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;

  font-family: "Pretendard-SemiBold";

  color: ${COLORS.UIBlack};
`;

const Subtitle = styled.div`
  width: 680px;
  hegith: 19px;

  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;

  margin-top: 24px;

  font-family: "Pretendard-Medium";

  color: ${COLORS.UIBlack};
`;

const Border = styled.div`
  width: 680px;
  height: 1px;

  margin-top: 20px;

  background: ${COLORS.gray4};
`;

const Content = styled.div`
  width: 680px;
  height: 368px;

  margin-top: 16px;

  overflow: auto;
  overflow-x: hidden;
`;

const Description = styled.div`
  width: 676px;
  height: 21px;

  font-size: 14px;
  line-height: 17px;

  margin-top: 28px;

  color: ${COLORS.primary};
`;

const ScrollArea = styled.div`
  width: 226px;
  height: 466px;

  margin-top: 40px;
  margin-left: 28px;

  overflow: auto;
`;

const UseBtn = styled.button`
  width: 200px;
  height: 32px;

  margin-top: 20px;
  margin-left: 32px;

  background: ${COLORS.gray1};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  color: ${COLORS.primary};
  border: none;

  font-size: 14px;
  line-height: 17px;
  font-family: "Pretendard-SemiBold";
`;

const BlockWrapper = styled.div`
  width: 680px;
  white-space: pre-wrap;

  font-size: 14px;
  line-height: 24px;

  color: ${COLORS.UIBlack};

  & + & {
    margin-top: 28px; //32
  }
`;
export default BaseTemplateModal;
