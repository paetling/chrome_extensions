requestData = {}
tabEnabled = {}


chrome.runtime.onInstalled.addListener(function() {
  console.log('hey');
});

function getFormattedRequestResponse(requestData, content) {
    var requestString = `${requestData.request.method}: ${requestData.request.url}`;
    var requestObject = {'request': requestString, 'headers': requestData.request.headers, 'cookies': requestData.request.cookies};
    var responseObject = {'status': requestData.response.status, 'headers': requestData.response.headers, 'cookies': requestData.response.cookies, 'content': content};


    return {'request': requestObject, 'response': responseObject};
}

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    tabId = message.tabId;
    if (tabEnabled[tabId]) {
        window.requestData[tabId].push(getFormattedRequestResponse(message.request, message.content))
    }
  }
);

chrome.tabs.onUpdated.addListener(function(tabId) {
   setIconForTabStatus(tabId);
})

function setIconForTabStatus(tabId) {
   if (tabEnabled[tabId]) {
     chrome.browserAction.setIcon({"path": "images/icon_active.png", tabId: tabId});
   } else {
     chrome.browserAction.setIcon({"path": "images/icon_inactive.png", tabId: tabId});
   }
}

chrome.browserAction.onClicked.addListener(function(tab) {
   tabEnabled[tab.id] = !tabEnabled[tab.id];
   window.requestData[tab.id] = [];
   setIconForTabStatus(tab.id);

});
