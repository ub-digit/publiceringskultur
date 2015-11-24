import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('faculty-selector-item', 'Integration | Component | faculty selector item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{faculty-selector-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#faculty-selector-item}}
      template block text
    {{/faculty-selector-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
