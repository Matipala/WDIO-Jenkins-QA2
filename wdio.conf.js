export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.e2e.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': { args: ['--headless=new', '--disable-gpu', '--window-size=1280,800'] }
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://example.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],
  mochaOpts: { ui: 'bdd', timeout: 60000 }
};
