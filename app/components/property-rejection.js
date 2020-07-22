import Component from '@glimmer/component';

export default class PropertyRejectionComponent extends Component {
  get property() {
    // NOT handled by Ember.onerror
    Promise.reject('promise rejection in component property');
    return 'property value';
  }
}
