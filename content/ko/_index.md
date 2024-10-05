---
# Leave the homepage title empty to use the site title
title: "안태윤의 이력서"
date: 2024-10-01
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: |
        저는 C++, Python, JAVA를 사용한 Vision/DL 관련 소프트웨어 개발에 경험이 많은 소프트웨어 엔지니어입니다. 또한 HTML, CSS, JavaScript, React, Java/Spring, MySQL을 사용한 웹 개발에도 전문성을 가지고 있습니다. 기술을 활용해 의미 있고 영향력 있는 솔루션을 만드는 데 열정을 가지고 있습니다.
      button:
        text: 이력서 다운로드
        url: https://raw.githubusercontent.com/TaeYunAhn/TaeYunAhn.github.io/main/TaeYunAhn's%20cv%20(24.08).pdf
        
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: '📚 기술 스택'
      subtitle: ''
      text: |
        - **소프트웨어 엔지니어링**: Vision/DL 관련 개발 (C++, Python, JAVA)
        - **웹 엔지니어링**: HTML, CSS, JavaScript, React, Java/Spring, MySQL, SQLite, MongoDB

  - block: markdown
    content:
      title: '💼 경력'
      subtitle: ''
      text: |
        - **KISTI 인턴십** (2020.9-2021.2): 텍스트 데이터 구축
        - **42Seoul** (2021.03-2022.04): 웹 플랫폼, API, 모바일 웹 개발 (JAVA, Spring을 사용한 프론트엔드 및 백엔드 개발)
        - **연세대학교 금융공학 연구실** (2021.11-2021.12): 데이터 시각화, 웹 페이지 개발, ARM 위험 분석, FRM 비용 분석
        - **업사이플러스** (2022.07-2023.02): JavaScript, HTML, CSS를 사용한 이벤트 웹 페이지 개발 및 관리
        - **연세대학교 금융공학 연구실** (2023.02-2023.08): MATLAB에서 Python으로 코드 리코딩 및 CPU/GPU 병렬화
        - **Dpre** (2024.09 - 현재): Matlab 코드 최적화

  - block: markdown
    content:
      title: '🎓 학력'
      subtitle: ''
      text: |
        - **전북대학교** (2022.03 - 현재): 컴퓨터 공학 전공
        - **42Seoul** (2020.03 - 2022.04): 컴퓨터 공학 및 웹 프로그래밍

  - block: markdown
    content:
      title: '🏆 수상 내역'
      subtitle: ''
      text: |
        - **2023 호남지역 오아시스 해커톤** (2등)
        - **2023 sw사업단 오픈소스 해커톤** (3등)
        - **2024 SW 생성형 ai 해커톤** (3등)

  - block: markdown
    content:
      title: '🎤 강연 및 멘토링'
      subtitle: ''
      text: |
        - **광주대학교**: 4차 산업 혁명 컴퓨팅 능력 향상 강의 (2022)
        - **목포 하당중학교**: 진로 진학 강의 (2022)
        - **전주 시청**: 청년 재능 공유 학교 (2023)
        - **전북대학교**: C 언어 멘토링 (2023)
---
