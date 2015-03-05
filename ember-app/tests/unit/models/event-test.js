import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('event', {
  // Specify the other units that are required for this test.
  needs: ['model:performer', 'model:venue', 'model:show']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
