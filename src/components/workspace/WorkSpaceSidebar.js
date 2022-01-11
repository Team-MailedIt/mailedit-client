import styled from "styled-components";
import COLORS from "../../constants/colors";
import Accordion from "../commons/Accordion";
import star from "../../constants/icons/star.svg";
import SidebarPresenter from "../commons/SidebarPresenter";
const WorkSpaceSidebar = () => {
  // 그룹 상세 조회 api
  const myTemplates = [
    {
      userId: 3,
      id: 4,
      name: "회사",
      color: "#38D9A9",
      group_templates: [
        {
          userId: 3,
          templateId: "52396ab8-0188-4000-b30d-0f448926c80f",
          title: "Changed title",
          subtitle: "sample subtitle2",
          isStar: true,
          groupId: 4,
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
          createdAt: "2022-01-10T14:23:04.395897Z",
          updatedAt: "2022-01-10T14:41:09.901046Z",
        },
      ],
    },
    {
      userId: 3,
      id: 4,
      name: "학교",
      color: "#FFEC99",
      group_templates: [
        {
          userId: 3,
          templateId: "52396ab8-0188-4000-b30d-0f448926c82f",
          title: "Changed title23",
          subtitle: "sample subtitle23",
          isStar: false,
          groupId: 4,
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
          createdAt: "2022-01-10T14:23:04.395897Z",
          updatedAt: "2022-01-10T14:41:09.901046Z",
        },
      ],
    },
  ];

  const baseSchool = [
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
  ];

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
  ];

  const favTemplates = [
    {
      userId: 3,
      templateId: "52396ab8-0188-4000-b30d-0f448926c80f",
      title: "sample title2",
      subtitle: "sample subtitle2",
      isStar: true,
      groupId: 3,
      group: {
        userId: 3,
        id: 3,
        name: "회사",
        color: "38D9A9",
      },
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
      createdAt: "2022-01-10T14:23:04.395897Z",
      updatedAt: "2022-01-10T14:23:04.406444Z",
    },
    {
      userId: 3,
      templateId: "52ed5266-2441-4391-b561-0a938b008e81",
      title: "sample title3",
      subtitle: "sample subtitle3",
      isStar: false,
      groupId: null,
      group: null,
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
      createdAt: "2022-01-10T14:23:42.298787Z",
      updatedAt: "2022-01-10T14:23:42.305750Z",
    },
    {
      userId: 3,
      templateId: "89f0f821-6e83-4958-b500-ef936ba179b5",
      title: "sample title3",
      subtitle: "sample subtitle3",
      isStar: false,
      groupId: 3,
      group: {
        userId: 3,
        id: 3,
        name: "회사",
        color: "38D9A9",
      },
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
      createdAt: "2022-01-10T14:23:33.425678Z",
      updatedAt: "2022-01-10T14:23:33.434754Z",
    },
  ];
  const favList = favTemplates.filter((template) => template.isStar === true);

  return (
    <SidebarPresenter
      myTemplateList={
        <>
          <Accordion
            title={"즐겨찾기"}
            icon={<StarIcon src={star} />}
            list={favList}
          />
          <Border />
          {myTemplates ? (
            myTemplates.map((template, i) => (
              <Accordion
                key={"m" + i}
                title={template.name}
                icon={<Index color={template.color} />}
                list={template.group_templates}
              />
            ))
          ) : (
            <NoTemplates>
              마이템플릿이 아직 없네요!
              <br />첫 템플릿을 만들어 보는 것은 어떨까요?
            </NoTemplates>
          )}
        </>
      }
      baseTemplateList={
        <>
          <BaseTemplate>기본템플릿</BaseTemplate>
          <Accordion
            title={"회사"}
            icon={<Index color={COLORS.indigo2} />}
            list={baseCompany}
          />
          <Accordion
            title={"학교"}
            icon={<Index color={COLORS.indigo2} />}
            list={baseSchool}
          />
        </>
      }
    />
  );
};

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

const BaseTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 42px 192px 8px 40px;

  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
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

  margin: 24px 39px 0px 40px;

  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

export default WorkSpaceSidebar;
