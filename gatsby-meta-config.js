module.exports = {
  title: `TaeYunAhn.github.io`,
  description: `tahn의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://TaeYunAhn.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `https://github.com/TaeYunAhn/TaeYunAhn.github.io`, 
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안태윤`,
    bio: {
      role: `공부하는`,
      description: ['성취보다 성장을 위해', '능동적으로 일하기 위해', '이로운 것을 만들기 위해'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/TaeYunAhn`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `42.4.tahn@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.5 ~',
        activity: '서울42 본과정 시작',
        links: {
          post: '',
          github: 'https://github.com/TaeYunAhn/TaeYunAhn.github.io',
          demo: 'https://42seoul.kr/seoul42/contents/view?contentsNo=13&level=2&menuNo=28&gclid=CjwKCAiAiKuOBhBQEiwAId_sK7Mg_3--lkF-pJncp70eDdfNHpJgoeR3YzuyR8WjF3oYBdB0uWx-NxoCqPAQAvD_BwE',
        },
      },
      {
        date: '2021.12 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '',
          github: 'https://github.com/TaeYunAhn/TaeYunAhn.github.io',
          demo: 'https://taeyunahn.github.io',
        },
      },
      {
        date: '2021.12 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/TaeYunAhn/TaeYunAhn.github.io',
          demo: 'https://taeyunahn.github.io',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '기술 블로그 운영',
        description:
          '그동안 많은 삽질을 통해 얻은 잡기술을 남들과 공유하기 위해 만든 블로그 입니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '',
          github: 'https://github.com/TaeYunAhn/TaeYunAhn.github.io',
          demo: 'https://taeyunahn.github.io',
        },
      },
    ],
  },
};
