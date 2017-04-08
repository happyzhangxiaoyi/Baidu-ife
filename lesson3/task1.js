//-----------------验证输入的合法性-------------
var checkInput = function(){
	var input = document.getElementById("input");
	var text = input.value.split(/[\s*]+/).join("");
    var info = document.getElementById("info");
    input.value= text;
    if(!input.value){
        input.style.borderColor = "red";
        info.style.color = "red";
        info.innerText = "姓名不能为空";
        input.focus();
        return false;
    }
    var len = 0;
    for(var i=0;i< text.length;i++){
    	if(text[i].match(/[^\x00-\xff]/) != null)
    		len += 2; //汉字由2个字节表示
    	else
    		len +=1;
    }

    if(len<4||len>16){
    	input.style.borderColor = "red";
    	info.style.color = "red";
    	info.innerText = "长度必须为4~16个";
    	input.focus();
    	return false;
    }

    input.style.borderColor = "green";
    info.style.color = "green";
    info.innerText = "名称格式输入正确";
}

//----------------为按钮绑定事件----------------
var check = document.getElementById("check");
check.onclick=checkInput;