import Route from '@ember/routing/route';

export default class ModelRejectionRoute extends Route {
  model() {
    // NOT handled by Ember.onerror
    Promise.reject('promise rejection in route model');
  }
}
