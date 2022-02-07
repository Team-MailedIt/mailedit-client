# MailedIt!

메일 작성을 완벽하게 해내다, [**_MailedIt!_**](https://mailedit.me/)

[![logo](public/img/footerImg.png)](https://mailedit.me/)

<p align="center">
	<a href="https://github.com/Team-MailedIt/mailedit-client/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Team-MailedIt/mailedit-client?color=success"></a>
	<a href="https://github.com/Team-MailedIt/mailedit-client/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Team-MailedIt/mailedit-client"></a>
	<a href="https://github.com/Team-MailedIt/mailedit-client/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Team-MailedIt/mailedit-client"></a>
</p>

---

**_MailedIt_** 은 자체 제작 기본 템플릿과 자신만의 메일 템플릿 만들기로 실무 이메일을 보다 쉽게 작성할 수 있도록 돕는 서비스입니다.

## 주요 기능 소개

### 1. 비로그인 유저

- 기본으로 제공하는 기본템플릿을 자유롭게 사용할 수 있습니다.
- 여러 템플릿을 불러와서 사용할 수 있으며, 기본적인 에디터 기능을 사용할 수 있습니다.
- 복사하기 기능을 통해 작성한 내용을 클립보드에 복사할 수 있습니다.

<img src = "public/img/help_img.png"/>

### 2. 로그인 유저

- 자유롭게 템플릿을 작성하고 저장할 수 있습니다.
- 그룹을 추가하고 해당 그룹에 템플릿을 저장할 수 있습니다.
- 템플릿은 블럭으로 지정된 부분만 저장됩니다.

## 페이지 구성

### /home

#### [사이드바]

- **검색 기능** : 제목으로 전체 템플릿을 검색할 수 있습니다.
- **그룹 필터링 기능** : 그룹별로 템플릿을 모아볼 수 있습니다.

![사이드바](gif/sidebar.gif)

#### [메인 페이지]

템플릿별로 **수정 시간**, **즐겨찾기 버튼**, **삭제 버튼**을 썸네일 형태로 구현하여 직관적이고, 수정과 접근이 용이합니다.

![메인 페이지](gif/mainpage.gif)

#### [기본 템플릿 모달]

- **드롭다운 메뉴** : 드롭다운 형식으로 회사/학교 옵션을 선택할 수 있고, 해당 템플릿의 제목을 클릭하면 기본템플릿 모달이 열립니다.
- **기본 템플릿 모달** : 회사/학교 탭에서 각각의 템플릿을 확인할 수 있으며, 템플릿 사용하기 버튼을 클릭하면 에디터 페이지로 이동합니다.

![메인 페이지 모달](gif/mainmodal.gif)

### /workspace

#### [사이드바]

- **검색 기능** : 제목으로 전체 템플릿을 검색할 수 있습니다.
- **그룹 기능** : 그룹별로 템플릿을 모아볼 수 있고, 각각의 템플릿을 불러올 수 있습니다.

![사이드바](gif/ws_sidebar.gif)

#### [에디터]

- **shift + enter** 시 블럭 내에서 줄바꿈, **enter** 시 새로운 블럭을 생성합니다.
- 삭제는 기본적으로 **backspace**를 사용합니다.
- 원하는 영역만큼 드래그하여 블럭화할 수 있으며, 해당 블럭만 저장됩니다.
- 블럭 간 드래그&드랍으로 순서를 변경할 수 있습니다.
- 복사하기를 통해 작성한 내용을 클립보드에 복사할 수 있습니다.

![에디터](gif/editor.gif)

#### [그룹]

카테고리별로 그룹 이름과 색상을 지정할 수 있으며, 색과 그룹명은 1대1로 대응됩니다.

![그룹](gif/group.gif)

#### [도움말]

- **템플릿 만들기 도움말** : 메인 페이지에서 '템플릿 만들기' 버튼 위에 마우스를 hover하면 에디터 페이지로 이동한다는 안내 메세지를 띄웁니다.
- **기본 사용법 도움말** : 로그인하지 않은 사용자 또는 템플릿 개수가 3개 이하인 사용자에게 default로 popup되며, 기본적인 사용법에 대해 알 수 있습니다.
- **에디터 사용법 도움말** : 캐러셀 형태의 모달로 구현하였으며, 기본적인 에디터 사용법을 알 수 있습니다.

![도움말](gif/help.gif)

## 기술 스택 (Technique Used)

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/Google OAuth-4285F4?style=flat-square&logo=Google&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-E01B22?style=flat-square"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>

## 사용한 패키지 (Library Used)

- react-dom
- react-modal
- react-router-dom
- react-google-login
- styled-components
- react-beautiful-dnd
- react-contenteditable
- react-copy-to-clipboard

## 팀 정보 (Team Information)

- [김현재](https://github.com/itsnowkim) E-mail : [peterhyunjae@naver.com](mailto:peterhyunjae@naver.com)

  - 에디터 기능 구현
  - 템플릿 불러오기, 저장하기 기능 구현
  - 복사하기 기능 구현
  - 그룹 추가하기 기능 구현
  - 랜딩 페이지 개발

- [김주현](https://github.com/corinthionia) E-mail : [corinthionia@gmail.com](mailto:corinthionia@gmail.com)

  - Google OAuth
  - 로그인 유저 정보 및 토큰 관리
  - base UI 컴포넌트 제작
  - 메인 페이지 개발
  - 그룹 필터링 기능 구현
  - 템플릿 검색 기능 구현
  - 템플릿 즐겨찾기, 삭제하기 기능 구현
  - 블럭 드래그앤드랍 기능 구현
