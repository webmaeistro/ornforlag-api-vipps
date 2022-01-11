const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: '/utgivelser',
        destination: '/',
        permanent: false
      },
      {
        source: '/Utsira',
        destination: '/utgivelser/utstira',
        permanent: true,
      },
      {
        source: '/BirdwatchersGuidetoNorway',
        destination: '/utgivelser/a-birdwarchers-guide-to-norway',
        permanent: true,
      },
      {
        source: '/SyEnBunad',
        destination: '/utgivelser/sy-en-bunad',
        permanent: true,
      },
    ];
  }
};
