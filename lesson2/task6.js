//找出放置字符块的区域
var container = document.getElementById("container");

//-----------------获取批量输入的字符，并进行拆分整理--------------
function getText(){
    //得到textarea的输入*为字符串*
	var text = document.getElementById("message").value;
	if(text.length===1){
		return [text];
	}
	//匹配分隔符的正则表达式，分隔符可以是以下任意一种
	var re = /[\s+\,+\，+\.+\。+\-+\、+]+/;
	//利用匹配的分隔符来切分用户输入的字符串，返回一个由子串组成的数组;
	var split_text = text.split(re);
	if(split_text[split_text.length-1]==="")
		split_text=split_text.slice(0,split_text.length-1);
	return split_text;

}


//-----------------实现不同放置方式对dom的操作----------------------
 function left_in(){
	var text = getText();
	if(text.length===0){
		alert("还没有输入呐~");
		return false;
	}
	
	for (item of text){
		var div = document.createElement("div");
	    div.id = "text";
		var lastchild=container.lastChild;
		div.innerText=item;
    	if(lastchild===null)
			container.appendChild(div);
		else
			container.insertBefore(div,container.firstChild);
	};
    document.getElementById("message").value=null;
	document.getElementById("message").focus();
}


function left_out(){
	var lastchild=container.lastChild;
	var firstchild =container.firstChild;
	if(lastchild===null)
	{
		alert("没有内容啦~");
		return false;
	}
    container.removeChild(firstchild);
		
}


function right_in(){
	var text = getText();
	if(text.length===0){
		alert("还没有输入呐~");
		return false;
	}
	for (item of text){
		var div = document.createElement("div");
		div.id="text";
		div.innerText=item;
		container.appendChild(div);
	}
	document.getElementById("message").value=null;
	document.getElementById("message").focus();
}


function right_out(){
	var lastchild=container.lastChild;
	if(lastchild===null)
	{
		alert("没有内容啦~");
		return false;
	}
	container.removeChild(lastchild);
}


//---------------------实现模糊匹配-------------------------
function matchText(){
	var sourceText = document.getElementById("search").value;
	if(sourceText===""){
		alert("还没有输入呐");
		return false;
	}
	var textDivGroup = container.childNodes;
	for(item of textDivGroup){
		if(item.innerText.indexOf(sourceText)!==-1)
			item.id="matchText";
		else
			item.id="text";
    document.getElementById("search").value=null;
	document.getElementById("search").focus();
	}
}


//--------------------给所有按钮绑定相应的事件---------------
var leIn = document.getElementById("left_btin");
var riIn = document.getElementById("right_btin");
var leOut = document.getElementById("left_btout");
var riOut = document.getElementById("right_btout");
var search = document.getElementById("searchbt");
leIn.onclick=left_in;
leOut.onclick=left_out;
riIn.onclick=right_in;
riOut.onclick=right_out;
search.onclick=matchText;
	