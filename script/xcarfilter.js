const  admin  =  8888;


try {
    if (window.console && window.console.log) {
        //console.log("爱卡喷子屏蔽插件")
    }
} 
catch (e) {
}

var g_BlockIDs={};
//更新黑名单
function getBlockIDS (datastr) {
    var str=datastr.split("\n"); 
    var accounts=[];
    for (var i=0;i<str.length ;i++ )   
    {   
        var account=str[i];
        g_BlockIDs[account]=1;
    } 

    g_BlockIDs["xxx"]=admin;
}


function getIDgroup(user)
{
   if ( user in g_BlockIDs)
   {
        return g_BlockIDs[user]
   }
   return  0;
}

function block(tabs,posts,callback){
    var blockList = new Array();　
    var groupList = new Array();　
    var blockCount=0;
    var group=0;
    for (var i = tabs.length - 1; i >= 0; i--) {
        var ids=tabs[i];
        group=getIDgroup(ids.text)
        if (0!=group)
        {
            blockCount=blockCount+1;
            blockList.push(i);
            groupList.push(group);
            chrome.runtime.sendMessage({cmd: "setBlockNum", num: blockCount});  
        }
    };

    for (var i = blockList.length - 1; i >= 0; i--) {
        var post = posts[blockList[i]];
        //console.log(post.text);
        callback(post,groupList[i])
    };
}


function block_viewthread()
{
    var tabs=$("div.F_box_2>table>tbody>tr>td>a.bold");
    var posts=$('div.F_box_2 > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td');
    block(tabs,posts,function(node,group){
        switch (group){
            case admin:
                
                break;
            default:
                node.outerHTML='<td valign="top" class="line" height="100%" style="padding-top: 10px;"> <div class="t_msgfont1">本楼已被blockXCAR插件屏蔽!!!</div></td>';
                break;
        }
    });
}

function block_forumdisplay()
{
    var tabs=$("#F_box_1 > table > tbody > tr > td:nth-child(3) > a.link_bg");
    var posts=$('#F_box_1 > table > tbody > tr > td:nth-child(2) > a.open_view');
    block(tabs,posts,function(node,group){
        switch (group){
            case admin:
                node.outerHTML=node.outerHTML.replace('target="_blank"','style="font-weight: bold;color: red" target="_blank"')
                break;
            default:
                node.text='此贴子已被blockXCAR插件屏蔽!!!'
                break;
        }
    });
}


