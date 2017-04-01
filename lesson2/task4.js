    var body = document.getElementById("body");
	var split = document.getElementById("split");
	function invalidValue(text){
	    if (isNaN(text))
		    {
		    	alert("请输入数字");
		    	return true
	        };
	        return false;
    }

	
	function left_in(){
			var text = parseInt(document.getElementById("input").value);
			var lastchild=(function(){
				if (body.lastChild.nodeType===3){return body.lastChild.previousElementSibling}
					else {return body.lastChild}
				}());
				
			if(!invalidValue(text)){
				div = document.createElement("div");
				div.innerText=text;
				div.style.backgroundColor = "#aa96da";
				div.style.borderStyle="none";
				div.style.color="purple";
				div.style.margin="2px";
				div.style.display="inline";
				div.style.fontSize="20px";
			if(lastchild.id==="split"){
				body.appendChild(div);
			}
			else
			{
				body.insertBefore(div,split.nextSibling);

			}

		}
		document.getElementById("input").value=null;
		document.getElementById("input").focus();
	}


	function left_out(){
		var lastchild=(function(){
				if (body.lastChild.nodeType===3){return body.lastChild.previousElementSibling}
					else {return body.lastChild}
				}());
		if(lastchild.id==="split"||split.nextSibling===null)
		{
			alert("没有数字啦~");
			return false;
		}
		var remain = split.nextSibling.nextSibling;
        body.removeChild(split.nextSibling);
		
	}


	function right_in(){
		var text = parseInt(document.getElementById("input").value);
		if(!invalidValue(text)){
		var	div = document.createElement("div");
		body.appendChild(div);
		div.innerText=text;
		div.style.backgroundColor = "#aa96da";
		div.style.borderStyle="none";
		div.style.color="purple";
		div.style.margin="2px";
		div.style.display="inline";
		div.style.fontSize="20px";

		}
    	document.getElementById("input").value=null;
    	document.getElementById("input").focus();
	}

	function right_out(){
		var lastchild=(function(){
				if (body.lastChild.nodeType===3){return body.lastChild.previousElementSibling}
					else {return body.lastChild}
				}());
		if(lastchild.id==="split")
		{
			alert("没有数字啦~");
			return false;
		}
		body.removeChild(lastchild);
	}

	var leIn = document.getElementById("left_btin");
	var riIn = document.getElementById("right_btin");
	var leOut = document.getElementById("left_btout");
	var riOut = document.getElementById("right_btout");
	leIn.onclick=left_in;
	leOut.onclick=left_out;
	riIn.onclick=right_in;
	riOut.onclick=right_out;
