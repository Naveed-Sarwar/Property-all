/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add a custom rule to handle video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    // For server-side rendering, you need to use the 'ignore-loader' for video files
    if (isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: 'ignore-loader',
      });
    }

    return config;
  },
};

module.exports = nextConfig;
