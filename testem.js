/* eslint-env node */
module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  browser_start_timeout: 180,
  browser_disconnect_timeout: 90,
  launch_in_dev: ['Chrome'],
  launch_in_ci: ['Chrome'],
  browser_args: {
    Chrome: {
      ci: [
        '--headless',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ]
    }
  },
  proxies: {
    '/backstop': {
      target: 'http://localhost:3000',
      secure: false
    }
  }
};
