import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import './about-resume.scss';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{title}</h2>
      {children}
    </section>
  );
}

function LectureAwardSection({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="timestamp-section">
      <div className="body">
        {items.map((item, idx) => (
          <div className="timestamp" key={idx}>
            <div className="date">{item.date}</div>
            <div className="activity">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, lectures = [], awards = [] } = about;
  return (
    <Layout>
      <Seo title="About" />
      <h1 style={{ marginTop: 0, marginBottom: '1.5rem' }}>TaeYun Ahn | 안태윤</h1>
      <Bio author={author} language={language} />
      <Section title="주요 경력">
        <TimeStampSection timestamps={timestamps} />
      </Section>
      <Section title="주요 프로젝트">
        <ProjectSection projects={projects} />
      </Section>
      <Section title="강연 이력">
        <LectureAwardSection items={lectures} />
      </Section>
      <Section title="수상 이력">
        <LectureAwardSection items={awards} />
      </Section>
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }
        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
          lectures {
            date
            title
          }
          awards {
            date
            title
          }
        }
      }
    }
  }
`;
