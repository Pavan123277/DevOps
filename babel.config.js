const path = require('path');
/* Her gjør vi en endring som skal dukke opp babelbranch! */
const alias = {
  shared: path.join(__dirname, 'shared')
};

module.exports = {
  presets: [
    ['next/babel', { 'preset-env': { modules: 'commonjs' } }],
    '@babel/preset-flow'
  ],
  plugins: [['module-resolver', { alias }]]
};
