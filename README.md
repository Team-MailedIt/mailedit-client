# MailedIt!

메일 작성을 완벽하게 해내다, [**_MailedIt!_**](https://mailedit.me/)

[![logo](public/img/footerImg.png)](https://mailedit.me/)

<p align="center">
	<a href="https://github.com/Team-MailedIt/mailedit-client/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Team-MailedIt/mailedit-client?color=success"></a>
	<a href="https://github.com/Team-MailedIt/mailedit-client/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Team-MailedIt/mailedit-client"></a>
	<a href="https://github.com/Team-MailedIt/mailedit-client/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Team-MailedIt/mailedit-client"></a>
	<a href="https://github.com/Team-MailedIt/mailedit-client/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Team-MailedIt/mailedit-client"></a>
</p>

---

**_MailedIt_** 은 자체 제작 기본 템플릿과 자신만의 메일 템플릿 만들기로 보다 쉽게 실무 이메일을 작성할 수 있도록 돕는 서비스입니다.

## 주요 기능 소개

### 1. 비로그인 유저

- 기본으로 제공되는 기본템플릿을 자유롭게 사용할 수 있습니다.
- 여러 템플릿을 불러와서 사용할 수 있으며, 기본적인 에디터 기능을 사용할 수 있습니다.
- 복사하기 기능을 통해 클립보드에 작성한 내용을 복사할 수 있습니다.

<img src = "public/img/help_img.png"/>

### 2. 로그인 유저

- 추가로 자유롭게 템플릿을 작성하여 저장할 수 있습니다.
- 그룹을 추가하고, 해당 그룹에 템플릿을 저장할 수 있습니다.
- 저장되는 템플릿은 블럭으로 적용된 블럭만 저장됩니다.

## 페이지 구성

### /home

#### [사이드바]

- **검색창** : 검색옵션을 통해 본인이 작성한 템플릿을 검색할 수 있다.
- **필터옵션** : 필터옵션을 통해 본인이 작성한 그룹별로 템플릿을 볼 수 있고, 추가로 즐겨찾기된 템플릿을 볼 수 있다.

![사이드바](gif/sidebar.gif)

#### [메인 페이지]

템플릿별로 **수정시간**, **즐겨찾기 버튼**, **삭제버튼**을 구현하여 직관적이고 빠른 수정과 접근이 가능하게 하였다.

![메인 페이지](gif/mainpage.gif)

#### [기본 템플릿 모달]

- **드롭다운 메뉴** : 드롭다운 형식으로 회사 / 학교를 나누어 접근이 가능하게 하였고, 해당 컴포넌트 클릭 시 모달이 열리게 하였다.
- **기본 템플릿 모달** : **회사**, **학교** 탭에서 각각의 템플릿으로 접근할 수 있으며, 템플릿 사용하기 버튼 클릭 시 바로 에디터 페이지로 넘어가도록 구현하였다.

![메인 페이지 모달](gif/mainmodal.gif)

### /workspace

#### [사이드바]

- **검색창** : 모든 템플릿을 검색하여 바로 꺼내올 수 있다.
- **필터옵션** : 필터옵션을 통해 본인이 작성한 그룹별로 템플릿을 볼 수 있고, 해당 템플릿에 접근할 수 있다.

![사이드바](gif/ws_sidebar.gif)

#### [에디터]

- shift + enter 시 블럭 내에서 줄바꿈, enter시 새로운 블럭을 생성한다.
- 삭제는 기본적으로 backspace를 사용한다.
- 원하는 영역만큼 드래그하여 블럭화를 할 수 있으며, 해당 블럭만 저장된다.
- 블럭끼리 드래그&드랍으로 순서를 변경할 수 있다.
- 복사하기를 통해 작성한 내용을 클립보드에 복사할 수 있다.

![에디터](gif/editor.gif)

#### [그룹]

정리하고 싶은 카테고리별로 그룹 이름과 색상을 지정할 수 있으며, 색과 그룹명은 1대1로 대응된다.

![그룹](gif/group.gif)

#### [도움말]

- **기본 사용법 도움말** : 최초 진입자/템플릿 개수가 3개 이하인 사람들에게 default로 popup되며, 기본적인 사용법에 대해 알 수 있다.
- **에디터 사용법 도움말** : 캐러셀 형태의 모달로 구현하였으며, 기본적인 에디터 사용법을 알 수 있다.

![도움말](gif/help.gif)

## 기술 스택 (Technique Used)

<table>
  <tbody>
    <tr>
      <td width="60">
        <div align="center"><a href="https://ko.reactjs.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"  /></a><br>ReactJs</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="40" height="40" /></a><br>Javascript</br></div>
      </td>      
    </tr>
  </tbody>
</table>

---

## 사용한 패키지 (Library Used)

- react-beautiful-dnd
- react-contenteditable
- react-copy-to-clipboard
- react-dom
- react-google-login
- react-modal
- react-router-dom
- styled-components

---

## 관련 문서 (Development Documents)

## 팀 정보 (Team Information)

- [김현재](https://github.com/itsnowkim) E-mail : [peterhyunjae@naver.com](mailto:peterhyunjae@naver.com)

  - 에디터 기능 구현
  - 템플릿 불러오기, 저장하기 기능 구현
  - 복사하기 기능 구현
  - 그룹 추가하기 기능 구현
  - 랜딩 페이지 개발

- [김현재](https://github.com/itsnowkim) E-mail : [peterhyunjae@naver.com](mailto:peterhyunjae@naver.com)

  - 에디터 기능 구현
  - 템플릿 불러오기, 저장하기 기능 구현
  - 에디터 복사하기 기능 구현
  - 그룹 추가하기 기능 구현
  - 랜딩 페이지 개발
