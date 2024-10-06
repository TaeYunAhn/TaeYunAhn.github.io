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
          filename: background.webp
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093663!2d126.570667!3d33.450701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2z44OT44Or44O844K344O844OG44Kk44Oz44Kw44O844Kk!5e0!3m2!1sen!2skr!4v1632846387291!5m2!1sen!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


  - block: markdown
    content:
      title: '🏆 수상 내역'
      subtitle: ''
      text: |
        - **2023 호남지역 오아시스 해커톤** (2등)
        - **2023 sw사업단 오픈소스 해커톤** (3등)
        - **2024 SW 생성형 ai 해커톤** (3등)
        
        <div class="slider">
          <div><img src="/images/IMG_3714.JPG" alt="Hackathon 1"></div>
          <div><img src="/images/TalkMedia_3327380170193477633_6.jpeg" alt="Hackathon 2"></div>
          <div><img src="/images/IMG_2539.HEIC" alt="Hackathon 3"></div>
        </div>

        <style>
          .slider {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
          }
          .slider div {
            display: inline-block;
          }
          .slider img {
            width: 100%;
            height: auto;
            max-height: 500px; /* 이미지 높이를 제한하여 한 화면에 맞게 */
            object-fit: contain; /* 이미지가 프레임 안에서 비율을 유지하며 맞춰지도록 */
          }
        </style>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>

        <script>
          $(document).ready(function(){
            $('.slider').slick({
              autoplay: true,
              autoplaySpeed: 3000,
              dots: true,
              arrows: true,
            });
          });
        </script>

  - block: markdown
    content:
      title: '🎤 강연 및 멘토링'
      subtitle: ''
      text: |
        - **광주대학교**: 4차 산업 혁명 컴퓨팅 능력 향상 강의 (2022)
        - **목포 하당중학교**: 진로 진학 강의 (2022)
        - **전주시**: 청년 재능 공유 학교 (2023)
        - **전북대학교**: C 언어 멘토링 (2023)
---
