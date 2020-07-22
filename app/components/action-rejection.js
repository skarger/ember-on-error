import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ActionRejectionComponent extends Component {
  @action
  reject() {
    // NOT handled by Ember.onerror
    Promise.reject('promise rejection in a component action.');
  }
}
