import { useState } from "react";
import styled from "styled-components";
import Checkbox from "react-custom-checkbox";
import check from "../../constants/icons/check.svg";
import COLORS from "../../constants/colors";
import star from "../../constants/icons/star.svg";
import SidebarGroup from "../commons/SidebarGroup";
import Search from "../commons/Search";
import logo from "../../constants/icons/logo.svg";
import CheckBox from "./CheckBox";

const MainSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = (e) => {
    console.log("id: ", e.target.id);
    setIsChecked({ checked: e.target.checked });
  };

  // 그룹 조회
  const [groups, setGroups] = useState([
    {
      userId: 6,
      id: 1,
      name: "일반",
      color: COLORS.gray2,
    },
    {
      userId: 6,
      id: 2,
      name: "학교",
      color: "#38D9A9",
    },
    {
      userId: 6,
      id: 3,
      name: "회사",
      color: "#FFEC99",
    },
    {
      userId: 6,
      id: 4,
      name: "외주",
      color: "#FA5252",
    },
    {
      userId: 6,
      id: 5,
      name: "그룹1",
      color: "#BE4BDB",
    },
    {
      userId: 6,
      id: 6,
      name: "그룹2",
      color: "#66D9E8",
    },
    {
      userId: 6,
      id: 7,
      name: "그룹3",
      color: "#3138FF",
    },
  ]);

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

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search all={all} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        {groups ? (
          <>
            <SidebarGroup
              title="즐겨찾기"
              icon={<StarIcon src={star} />}
              item={<CheckBox id="like" />}
            />
            <Border />
            <SidebarGroup title="전체 선택" item={<CheckBox id="all" />} />
            {groups.map((group, i) => (
              <SidebarGroup
                key={"g" + i}
                title={group.name}
                icon={<Index color={group.color} />}
                item={<CheckBox id={group.id} />}
              />
            ))}
          </>
        ) : (
          <NoTemplates>
            마이템플릿이 아직 없네요!
            <br />첫 템플릿을 만들어 보는 것은 어떨까요?
          </NoTemplates>
        )}
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

const VariableSection = styled.section`
  width: 100%;
  height: 872px;

  margin-left: 40px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const MyTemplate = styled.span`
  width: 96px;
  height: 26px;

  margin-bottom: 8px;

  font-size: 22px;
  color: ${COLORS.UIWhite};
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;

  margin: 3px 8px 3px 4px;
`;

const Border = styled.div`
  width: 246px;
  height: 0.5px;

  margin: 18px 0px 4px 4px;

  background: rgba(255, 255, 255, 0.25);
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

const Index = styled.div`
  width: 4px;
  height: 16px;

  margin-right: 8px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
