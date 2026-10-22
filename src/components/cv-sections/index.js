import React from 'react';
import { Link } from 'gatsby';
import SectionHeader from '../section-header';
import { skills, experience, publication, projects, awards, credentials } from '../../data/cv';
import './style.scss';

function CvSection({ id, title, children }) {
  return (
    <section className="cv-section" id={id} aria-label={title}>
      <SectionHeader title={title} />
      {children}
    </section>
  );
}

function CvSections({ summary = false }) {
  return (
    <div className="cv-sections">
      <div className="cv-intro">
        <h1>{summary ? 'Software Engineer · 안태윤' : '안태윤 · Curriculum Vitae'}</h1>
        <p>
          머신러닝 모델, 로보틱스 프로젝트, 웹 서비스를 개발해 왔습니다.
          <br />
          데이터 수집과 분석부터 백엔드 구현, 병렬 연산 최적화까지 경험을 쌓고 있습니다.
        </p>
        <p className="cv-date">September 2026</p>
        {summary ? (
          <Link className="cv-link" to="/about/">
            경력·프로젝트 전체 보기 →
          </Link>
        ) : (
          <nav className="cv-nav" aria-label="이력서 목차">
            <a href="#skills">보유 기술</a>
            <a href="#experience">경력</a>
            <a href="#publication">논문</a>
            <a href="#education">학력</a>
            <a href="#projects">프로젝트</a>
            <a href="#awards">수상</a>
            <a href="#credentials">자격·어학</a>
          </nav>
        )}
      </div>
      <CvSection id="skills" title="Skills">
        <div className="cv-skills">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3>{skill.title}</h3>
              <ul className="cv-tags">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CvSection>
      {!summary && (
        <CvSection id="experience" title="Experience">
          {experience.map((item) => (
            <article className="cv-entry" key={`${item.title}-${item.date}`}>
              <p className="cv-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="cv-role">{item.role}</p>
              <ul className="cv-details">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </CvSection>
      )}
      <CvSection id="publication" title="Publication">
        <article className="cv-publication">
          <p className="cv-date">RoboticCC 2025</p>
          <h3>{publication.title}</h3>
          <p>{publication.authors}</p>
          <p>{publication.venue}</p>
          <a className="cv-link" href={`https://doi.org/${publication.doi}`}>
            DOI: {publication.doi} ↗
          </a>
        </article>
      </CvSection>
      {!summary && (
        <>
          <CvSection id="education" title="Education">
            <article className="cv-entry">
              <p className="cv-date">2022.03 – 2026.02</p>
              <h3>Jeonbuk National University</h3>
              <p>Computer Science · 전북대학교</p>
              <p>GPA 3.70 / 4.50</p>
              <p>지도교수: Prof. Ji Seung Kim</p>
            </article>
          </CvSection>
          <CvSection id="projects" title="Projects">
            {projects.map((item) => (
              <article className="cv-entry" key={item.title}>
                <p className="cv-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </CvSection>
          <CvSection id="awards" title="Awards">
            {awards.map((item) => (
              <article className="cv-entry" key={item.title}>
                {item.date && <p className="cv-date">{item.date}</p>}
                <h3>{item.title}</h3>
                <p>{item.result}</p>
              </article>
            ))}
          </CvSection>
          <CvSection id="credentials" title="Certifications & Language">
            {credentials.map((item) => (
              <article className="cv-entry" key={item.title}>
                <p className="cv-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </CvSection>
        </>
      )}
    </div>
  );
}

export default CvSections;
