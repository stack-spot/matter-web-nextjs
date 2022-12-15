
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en'
  // }
}

/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
}

const withNextra = require('nextra')(nextraConfig)

module.exports = withNextra(nextConfig)

