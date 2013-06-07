chrome.app.runtime.onLaunched.addListener ->
    chrome.app.window.create 'app/index.html', { id: 'main', bounds: { width: 620, height: 500 } }
