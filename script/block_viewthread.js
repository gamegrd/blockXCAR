 chrome.runtime.sendMessage({cmd:"getIDs"},function(response){
    try {
        getBlockIDS(response.ids);
        block_viewthread();
    } 
    catch (e) {
    }
    $("body").show();
    });
//$(document).ready(function(){});
