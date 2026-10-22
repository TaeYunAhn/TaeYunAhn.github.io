import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import CvSections from '../components/cv-sections';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, language } = metaData;
  return (
    <Layout>
      <Seo title="안태윤 | 경력·연구·프로젝트" />
      <Bio author={author} language={language} />
      <CvSections />
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
      }
    }
  }
`;
