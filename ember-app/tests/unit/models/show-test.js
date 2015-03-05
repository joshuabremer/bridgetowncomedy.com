import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('show', {
  // Specify the other units that are required for this test.
  needs: ['model:event', 'model:venue', 'model:performer']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
