import Ember from 'ember';
import initializer from '../../../initializers/ember-cli-webfontloader';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | ember cli webfontloader', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initializer.initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
