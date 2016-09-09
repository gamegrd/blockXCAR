

//更新黑名单
function updateIDs (str) {
    var datastr=$("#blockIDs")[0].value;
    var str=datastr.split("\n"); 
    var sOut="";
    //localStorage.ids='';
    for (var i=0;i<str.length ;i++ )   
    {   
        if (i>0)
            sOut=sOut+"\n"+Trim(str[i]);
        else
            sOut=Trim(str[i]);
    }
    return sOut;
}

function Trim(str)
{ 
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function setBlock()
{
    var datastr=updateIDs($("#blockIDs")[0].value);
    //console.log(datastr);
    chrome.runtime.sendMessage({cmd: "setIDs", ids: datastr});  
}

function setInit(){
    chrome.runtime.sendMessage({cmd:"getIDs"},function(response){  
        //console.log(response);
        $("#blockIDs").text(response.ids);  
    });
}

$(window).load(function() {
    setInit();
});



$(window).unload(function(){
        setBlock();
 });

