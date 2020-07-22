import Ember from 'ember';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.onerror = function(error) {
    console.log(`Ember.onerror called with error: ${error}`);
  }
}

export default {
  after: 'configure-window', // be deterministic, although before vs. after does not change test behavior
  initialize
};
