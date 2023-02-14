/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/detail',
        destination: '/detail/general',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig