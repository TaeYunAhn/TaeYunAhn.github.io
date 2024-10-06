---
title: '프로젝트'
date: 2024-10-01
type: landing

design:
  spacing: '5rem'

sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'YYYY-MM'
      # Education or Experience section first?
      is_education_first: false

  - block: resume-skills
    content:
      title: 기술 & 취미
      username: admin
    design:
      show_skill_percentage: true  # 기술 퍼센트 표시 (원하는 경우 false로 설정)

  - block: resume-awards
    content:
      title: 수상 내역
      username: admin

  - block: resume-languages
    content:
      title: 언어 능력
      username: admin
---
