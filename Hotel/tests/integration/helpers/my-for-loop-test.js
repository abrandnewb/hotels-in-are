import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-for-loop', 'helper:my-for-loop', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{my-for-loop inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
