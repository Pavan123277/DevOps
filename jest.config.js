module.exports = {
  setupFilesAfterEnv: ['./jest.framework-setup.js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
};

/* Her også er det en endring som skal inn i babel branch! */