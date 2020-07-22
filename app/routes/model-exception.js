import Route from '@ember/routing/route';

export default class ModelExceptionRoute extends Route {
  model() {
    // handled by Ember.onerror
    throw new Error('route exception');
  }
}
