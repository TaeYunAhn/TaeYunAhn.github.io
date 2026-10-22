import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import CvSections from '../components/cv-sections';
import { profile } from '../data/cv';
import { aboutSeo } from '../../gatsby-meta-config';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { language } = metaData;
  return (
    <Layout>
      <Seo {...aboutSeo} />
      <Bio author={profile} language={language} />
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
      }
    }
  }
`;
