// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "wareact-cms.onrender.com"],
          "media-src": ["'self'", "data:", "blob:", "wareact-cms.onrender.com"],
          // frontend’in Strapi’ya bağlanmasına izin
          "connect-src": ["'self'", "https://www.wareact.com"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',      // 👈 ZORUNLU OLAN BU!
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
