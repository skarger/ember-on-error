import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ActionExceptionComponent extends Component {
  @action
  boom() {
    // NOT handled by Ember.onerror
    throw new Error('An exception thrown from a component action.');
  }
}
