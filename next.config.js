module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Replace with your image domain
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Match all paths
      },
    ],
  },
};
