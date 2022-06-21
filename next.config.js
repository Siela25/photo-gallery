/** @type {import('next').NextConfig} */
const withYaml = require('next-yaml')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = withYaml(module.exports)
