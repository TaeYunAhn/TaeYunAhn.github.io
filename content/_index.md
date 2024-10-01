---
# Leave the homepage title empty to use the site title
title: "TaeYun Ahn's Resume"
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
        I am a Software Engineer experienced in Vision/DL-related software development using C++, Python, and JAVA. I also have expertise in web development using HTML, CSS, JavaScript, React, Java/Spring, and MySQL. My passion lies in leveraging technology to create meaningful and impactful solutions.
      button:
        text: Download CV
        url: uploads/resume.pdf
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
      title: '📚 My Skills'
      subtitle: ''
      text: |
        - **Software Engineering**: Vision/DL-related development using C++, Python, JAVA
        - **Web Engineering**: HTML, CSS, JavaScript, React, Java/Spring, MySQL, SQLite, MongoDB

  - block: markdown
    content:
      title: '💼 Professional Experience'
      subtitle: ''
      text: |
        - **KISTI Internship** (2020.9-2021.2): Text Data Construction
        - **42Seoul** (2021.03-2022.04): Web platform, API, and mobile web development (front-end & back-end using JAVA, Spring)
        - **Yonsei Fin Tech Center** (2021.11-2021.12): Data visualization, web pages, ARM risk analysis, FRM cost analytics
        - **UpCyplus** (2022.07-2023.02): Event web page development and management using JavaScript, HTML, CSS
        - **Yonsei Fin Tech Center** (2023.02-2023.08): MATLAB-to-Python recoding with CPU/GPU parallelization

  - block: markdown
    content:
      title: '🎓 Education'
      subtitle: ''
      text: |
        - **Jeonbuk National University** (2022.03 - Present): Computer Science

  - block: markdown
    content:
      title: '🏆 Awards'
      subtitle: ''
      text: |
        - **2023 Oasis Hackathon** (2nd place)
        - **2023 OpenSource Hackathon** (3rd place)
        - **2024 SW Generative AI Hackathon** (3rd place)

  - block: markdown
    content:
      title: '🎤 Lectures & Mentoring'
      subtitle: ''
      text: |
        - Gwangju University: 4th Industrial Revolution Computing Lecture (2022)
        - Mokpo Hahang Middle School: Career Guidance Lecture (2022)
        - Jeonju City Hall: Youth Talent Sharing School (2023)
        - Jeonbuk National University: C Language Mentoring (2023)
---
