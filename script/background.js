


chrome.runtime.onMessage.addListener(  
            function (request, sender, sendResponse) {  
                //console.log(sender);
                var cmd = request.cmd;  
                if (cmd == "setIDs") {  
                    console.log(request.ids);
                    localStorage.ids = request.ids;  
                } else if (cmd == "getIDs") {  
                    sendResponse({"status":"myname",ids: localStorage.ids});  
                } else if (cmd == "setBlockNum"){
                    //console.log(request.num);
                    chrome.tabs.getSelected(null, function(tab) {
                        chrome.browserAction.setBadgeText({tabId: tab.id, text:request.num.toString()});
                    });
                }
            });  


// console.log(chrome.webRequest);
// chrome.webRequest.onCompleted.addListener(function(details) {
//     console.debug(details);
//     }, {
//     urls: ["<all_urls>"]
// });
