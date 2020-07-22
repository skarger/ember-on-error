# ember-on-error

This Ember **3.19.0** app shows the behavior of `Ember.onerror` for different situations,
and contrasts it with `window.onerror` and `window.addEventListener('unhandledrejection', ...)`.

Application initializers configure all three of these handlers.

Notably, `Ember.onerror` only applies to exceptions thrown in a route's `model` hook
and to exceptions thrown in component properties.

Most surprisingly, it does *not* apply to exceptions thrown from a component `action`.

Furthermore, `Ember.onerror` does not apply to promise rejections that occur in a route's `model` hook,
a component property, nor a component `action`. This feels more intuitive to me, since promise rejections are
not exactly "errors" in the same sense that exceptions are. Though in practice unhandled promise rejections
often represent a problem in the app, so I had somewhat expected `Ember.onerror` to cover them.

The native browser features `window.onerror` and `window.addEventListener('unhandledrejection', ...)`
*do* cover these other examples. They will also apply to the examples covered by `Ember.onerror`
if I remove the initializer setup of `Ember.onerror`. This suggests that a pragmatic approach would
be to avoid `Ember.onerror` altogether in favor of the `window` handlers. If that is the best path
forward though, then the [debugging documentation](https://guides.emberjs.com/release/configuring-ember/debugging/)
is misleading.

![screenshot](/public/screenshot.png?raw=true "screenshot")

## Installation

* `git clone git@github.com:skarger/ember-on-error.git`
* `cd ember-on-error`
* `yarn install`

## Running / Development

* `ember serve`
* Visit [http://localhost:4200](http://localhost:4200).
* Open Developer console to see log messages as you click around that app.
