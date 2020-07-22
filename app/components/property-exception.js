import Component from '@glimmer/component';

export default class PropertyExceptionComponent extends Component {
  get property() {
    // handled by Ember.onerror
    throw new Error('exception in component property');
  }
}
