import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// import { setupQunit as setupPolly } from '@pollyjs/core';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);
  /* setupPolly(hooks, {
    logging: true,
    matchRequestsBy: {
      headers: false,
      url: {
        pathname: false,
        query: false,
        hash: false
      }
    }
  }); */

  test('visiting /application', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
