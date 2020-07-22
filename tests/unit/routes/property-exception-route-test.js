import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | property-exception-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:property-exception-route');
    assert.ok(route);
  });
});
