module.exports = [
  'strapi::cors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "wareact-cms.onrender.com"],
          "media-src": ["'self'", "data:", "blob:", "wareact-cms.onrender.com"],
          "connect-src": ["'self'", "https://www.wareact.com"],
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::errors',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
