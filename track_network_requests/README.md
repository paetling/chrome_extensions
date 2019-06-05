## Track Network Requests Chrome Extension

This chrome extension allows you to track all network requests on multiple tabs all in one javascript object. This is really useful if you would like to inspect all request headers and cookies as well as all response headers, cookies, and the actual response body for many requests all at once.


To use this extension you need to do the following:
1. Follow these [instructions to install this extension](../README.md)
2. In chrome, go to `chrome://extensions/` and click on `background page (Inactive)` link. This will bring up a debugger console for this chrome extension.
3. In whatever tab you would like to track network requests, you must do two things:
    1. open the debugger console
    2. click the Track Network Requests icon (two small white arrows). This should change the icon so the arrows are now red and green. This means that the extension is enabled in this tab
    3. All network requests will now be stored in the debugger console for your chrome extension
4. Go to the debugger console and inspect the `requestData` object. This will hold a by dictionary from tabId to a list of request objects.
5. I have found the best way to inspect all of the data at once is to do the following.
    1. run `JSON.stringify(requestData)`
    2. store the output of that in a file
    3. Use your favorite searching method to search through that file for values you care about
