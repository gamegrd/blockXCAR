chrome.runtime.sendMessage({cmd:"getIDs"},function(response){
    try {
        
        getBlockIDS(response.ids);
        block_forumdisplay();
    } 
    catch (e) {
    }
    $("body").show();
});

//$(document).ready(function(){});


