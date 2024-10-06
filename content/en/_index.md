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
        - **Dpre** (2024.09 - Present): Optimization matlab code

  - block: markdown
    content:
      title: '🎓 Education'
      subtitle: ''
      text: |
        - **Jeonbuk National University** (2022.03 - Present): Computer Science
        - **42Seoul** (2020.03 - 2022.04): Computer Science and Web Programming
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093663!2d126.570667!3d33.450701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2z44OT44Or44O844K344O844OG44Kk44Oz44Kw44O844Kk!5e0!3m2!1sen!2skr!4v1632846387291!5m2!1sen!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


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
