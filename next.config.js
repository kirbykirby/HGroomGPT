/** @type {import('next').NextConfig} */

// const { i18n } = require('next-i18next/serverSideTranslations')


// const localeSubpaths = {
//   en: 'en',
//   zh: 'zh'
// }

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
  // i18n,
  // defaultLanguage: 'en',
  // locales: ['en', 'zh'],
  // localePath: typeof window === 'undefined' ? 'i18n/locales' : 'locales'
};
