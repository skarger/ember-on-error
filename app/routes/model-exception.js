import Route from '@ember/routing/route';

export default class ModelExceptionRoute extends Route {
  model() {
    throw new Error('route exception'); // handled by Ember.onerror
  }
}
