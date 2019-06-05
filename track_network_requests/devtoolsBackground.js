chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
        var chromeRuntime = chrome.runtime;
        request.getContent(function(content) {
            chromeRuntime.sendMessage({
                tabId: chrome.devtools.inspectedWindow.tabId,
                request: request,
                content: content,
            });
        })
    }
);
