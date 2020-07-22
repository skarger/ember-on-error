import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | property-rejection-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:property-rejection-route');
    assert.ok(route);
  });
});
