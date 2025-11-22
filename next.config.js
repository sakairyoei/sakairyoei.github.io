/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // リポジトリ名が username.github.io の場合は basePath を '' に設定
  // 別の名前の場合は '/repository-name' に設定
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
