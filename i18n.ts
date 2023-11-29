const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['es'],
    localePath: typeof window === 'undefined' ? 'i18n/locales' : 'locales',
})