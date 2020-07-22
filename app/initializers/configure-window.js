export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  window.onerror = function(error) {
    console.log(`window.onerror called with error: ${error}`);
  }

  window.addEventListener('unhandledrejection',function(event) {
    console.log(`window unhandledrejection event with reason: ${event.reason}`);
  });
}

export default {
  initialize
};
