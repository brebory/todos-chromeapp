(function() {
  chrome.app.runtime.onLaunched.addListener(function() {
    return chrome.app.window.create('app/index.html', {
      id: 'main',
      bounds: {
        width: 620,
        height: 500
      }
    });
  });

}).call(this);
