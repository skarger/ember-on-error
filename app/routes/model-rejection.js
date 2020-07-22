import Route from '@ember/routing/route';

export default class ModelRejectionRoute extends Route {
  model() {
    Promise.reject('promise rejection in route model')
  }
}
