const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
});
