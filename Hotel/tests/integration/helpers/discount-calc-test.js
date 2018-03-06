import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('discount-calc', 'helper:discount-calc', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{discount-calc inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
