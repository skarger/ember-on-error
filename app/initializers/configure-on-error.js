import Ember from 'ember';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.onerror = function(error) {
    console.log(`Ember.onerror: ${error}`);
  }
}

export default {
  initialize
};
