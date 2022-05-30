module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { webpack }) => {
    // Ignores plugin template
    // config.plugins.push(new webpack.IgnorePlugin({
    //   resourceRegExp: /^electron$/
    // }));

    return config
  }
}
