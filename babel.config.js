module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@services': './src/services',
        '@config': './src/config',
        '@dtos': './src/dtos',
        '@interfaces': './src/interfaces'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};
