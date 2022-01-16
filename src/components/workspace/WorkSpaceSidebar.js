import styled from "styled-components";
import COLORS from "../../constants/colors";
import Accordion from "../commons/Accordion";
import star from "../../constants/icons/star.svg";
import logo from "../../constants/icons/logo.svg";
import Search from "../commons/Search";

const WorkSpaceSidebar = () => {
  // 전체 템플릿 조회 api
  const all = [
    {
      templateId: "a52ab642-195e-4ec5-b288-f7a1b07846ba",
      title: "기본템플릿1",
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
      title: "기본템플릿2",
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
      title: "기본템플릿3",
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
      title: "기본템플릿4",
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
    {
      userId: 5,
      templateId: "54800d3a-61b6-4deb-bd50-a9165256bd64",
      title: "테스트1",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 7,
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
      createdAt: "2022-01-16T12:46:27.327185Z",
      updatedAt: "2022-01-16T12:46:42.948222Z",
    },
    {
      userId: 5,
      templateId: "9a72bd58-7aa0-4c3f-8885-55b3253f2a8a",
      title: "테스트2",
      subtitle: "언 제 끝 나",
      isStar: false,
      groupId: 7,
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
      createdAt: "2022-01-16T12:49:20.342309Z",
      updatedAt: "2022-01-16T12:49:20.350225Z",
    },
    {
      userId: 5,
      templateId: "a5f74d06-4a60-44a5-80fb-8d2f3b561e5a",
      title: "테스트5",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 8,
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
      createdAt: "2022-01-16T12:49:31.942539Z",
      updatedAt: "2022-01-16T12:50:33.964953Z",
    },
  ];

  // 그룹 리스트 조회 api
  const groups = [
    {
      userId: 5,
      id: 0,
      name: "일반",
      color: "#CED4DA",
    },
    {
      userId: 5,
      id: 8,
      name: "그룹1",
      color: "#FA5252",
    },
    {
      userId: 5,
      id: 9,
      name: "그룹2",
      color: "#FFEC99",
    },
    {
      userId: 5,
      id: 10,
      name: "그룹3",
      color: "#38D9A9",
    },
  ];

  // 마이 템플릿
  const myTemplates = [
    {
      userId: 5,
      templateId: "54800d3a-61b6-4deb-bd50-a9165256bd64",
      title: "테스트1",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 7,
      group: {
        userId: 5,
        id: 7,
        name: "회사",
        color: "#5274EF",
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
      createdAt: "2022-01-16T12:46:27.327185Z",
      updatedAt: "2022-01-16T12:46:42.948222Z",
    },
    {
      userId: 5,
      templateId: "9a72bd58-7aa0-4c3f-8885-55b3253f2a8a",
      title: "테스트2",
      subtitle: "언 제 끝 나",
      isStar: false,
      groupId: 7,
      group: {
        userId: 5,
        id: 7,
        name: "회사",
        color: "#5274EF",
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
      createdAt: "2022-01-16T12:49:20.342309Z",
      updatedAt: "2022-01-16T12:49:20.350225Z",
    },
    {
      userId: 5,
      templateId: "a5f74d06-4a60-44a5-80fb-8d2f3b561e5a",
      title: "테스트5",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 8,
      group: {
        userId: 5,
        id: 8,
        name: "그룹1",
        color: "#FA5252",
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
      createdAt: "2022-01-16T12:49:31.942539Z",
      updatedAt: "2022-01-16T12:50:33.964953Z",
    },
  ];

  // 기본 템플릿 - 학교
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

  // 즐겨찾기 한 템플릿
  const favTemplates = [
    {
      userId: 5,
      templateId: "54800d3a-61b6-4deb-bd50-a9165256bd64",
      title: "테스트1",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 7,
      group: {
        userId: 5,
        id: 7,
        name: "회사",
        color: "#5274EF",
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
      createdAt: "2022-01-16T12:46:27.327185Z",
      updatedAt: "2022-01-16T12:46:42.948222Z",
    },
    {
      userId: 5,
      templateId: "a5f74d06-4a60-44a5-80fb-8d2f3b561e5a",
      title: "테스트5",
      subtitle: "언 제 끝 나",
      isStar: true,
      groupId: 8,
      group: {
        userId: 5,
        id: 8,
        name: "그룹1",
        color: "#FA5252",
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
      createdAt: "2022-01-16T12:49:31.942539Z",
      updatedAt: "2022-01-16T12:50:33.964953Z",
    },
  ];

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search all={all} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        <Accordion
          title={"즐겨찾기"}
          icon={<StarIcon src={star} />}
          list={favTemplates}
        />
        <Border />
        {myTemplates.length != 0 ? (
          groups.map((group, i) => (
            <Accordion
              key={"m" + i}
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
          title={"회사"}
          icon={<Index color={COLORS.indigo2} />}
          list={baseCompany}
        />
        <Accordion
          title={"학교"}
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
  margin: 52px 192px 8px 40px;

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

  margin: 15px 39px 0px 40px;

  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

const FixedSection = styled.section`
  width: 100%;
  height: 208px;
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

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const SearchingField = styled.section`
  width: 252px;
  height: 38px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #748ffc;

  border-radius: 2px;
  margin: 48px 36px 0px 40px;
`;

const SearchResultWrapper = styled.div`
  width: 252px;
  background: ${COLORS.indigo4};

  position: relative;
  z-index: 2;

  margin-left: 40px;

  padding-bottom: 9px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${COLORS.UIWhite};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResultTitle = styled.div`
  width: 228px;
  height: 25px;

  display: flex;
  align-items: center;
  font-size: 14px;

  margin-top: 9px;
  padding-left: 8px;

  border-radius: 2px;

  &:hover {
    background: ${COLORS.indigo1};
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-left: 12px;

  background: none;
  border: none;
  color: white;

  &::placeholder {
    color: ${COLORS.indigo1};
    font-size: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const SearchIcon = styled.img`
  width: 18px;
  heigt: 18px;

  margin: 10px 0px 10px 12px;
`;

const RemoveIcon = styled.img`
  width: 12px;
  height: 12px;

  margin-left: 14px;

  &:hover {
    cursor: pointer;
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

export default WorkSpaceSidebar;
