import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ActionExceptionComponent extends Component {
  @action
  throw() {
    // NOT handled by Ember.onerror
    throw new Error('exception thrown from a component action.');
  }
}
