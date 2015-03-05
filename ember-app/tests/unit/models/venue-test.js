import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('venue', {
  // Specify the other units that are required for this test.
  needs: ['model:event', 'model:show', 'model:performer']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
