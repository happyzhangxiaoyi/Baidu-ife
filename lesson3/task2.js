//-------------------取出需要的元素------------------
var input = document.getElementById('name');
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var email = document.getElementById("email");
var telephone = document.getElementById("phone");
var submit = document.getElementById("submit");
//-------------------判断输入名称合法-----------------
var checkName = function(){
	
	var text = input.value.split(/[\s*]+/).join("");
	input.value= text;
    var info = input.nextElementSibling;
    input.parentElement.append(info);
    if(!input.value){
        input.style.borderColor = "red";
        info.className="error";
        info.innerText = "姓名不能为空";
        
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
    	info.innerText = "姓名长度必须为4~16";
    	info.className="error";
    	input.value = "";
    	return false;
    }

    input.style.borderColor = "green";
    info.style.color = "green";
    info.innerText = "名称可用";
    info.className="right";
}

//----------------------判断密码合理--------------------------
var checkPassword = function(){
	var value = password.value;
	var info = password.nextElementSibling;
	if(value.length<6){
		password.style.borderColor = "red";
        info.innerText = "密码不能为空并且必须大于5个字符";
        info.className="error";
        password.value="";
        return false;
	}
	var re = /[0-9a-zA-Z\_]/
	for (char of value){
	    if(!re.test(char)){
			password.borderColor = "red";
        	info.innerText = "密码必须由字母、数字、下划线组成，请重新输入";
        	info.className="error";
        	password.value="";
        	return false;
		}
    }
	password.style.borderColor = "green";
    info.style.color = "green";
    info.innerText = "密码可用";
    info.className="right";

}

//------------------------判断再次输入密码合法----------------
var confirmPw = function(){
	var source = password.value;
	var value = confirmPassword.value;
	var info = confirmPassword.nextElementSibling;
	if(!source){
		confirmPassword.style.borderColor = "red";
		info.innerText = "请先输入密码";
        info.className="error";
        confirmPassword.value="";
        return false;

	}
	if(value!==source){
		confirmPassword.style.borderColor = "red";
        info.innerText = "与上一次输入的密码不一致，请重新输入";
        info.className="error";
        confirmPassword.value="";
        return false;
	}
	confirmPassword.style.borderColor = "green";
    info.innerText = "输入正确";
    info.className="right";

}

//-----------------------判断邮箱合法----------------------------
var checkEmail = function(){
	var value = email.value;
	var info = email.nextElementSibling;
	if(!value){
		email.style.borderColor = "red";
		info.innerText = "邮箱不能为空";
        info.className="error";
        email.value="";
        return false;

	}
	re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
	if(!re.test(value)){
		email.style.borderColor = "red";
		info.innerText = "请输入有效的邮箱地址";
		info.className="error";
		email.value = "";
		return false;
	}

	email.style.borderColor = "green";
    info.innerText = "邮箱可用";
    info.className="right";
}

//--------------------判断手机号码有效---------------------------
var checkTele = function(){
	var value = telephone.value;
	var info = telephone.nextElementSibling;
	if(!value){
		telephone.style.borderColor = "red";
		info.innerText = "手机号码不能为空";
        info.className="error";
        telephone.value="";
        return false;
	}

	re = /[0-9]{11}/;
	if(!re.test(value)){
		telephone.style.borderColor = "red";
		info.innerText = "请输入有效的手机号码";
		info.className="error";
		telephone.value = "";
		return false;
	}
	telephone.style.borderColor = "green";
    info.innerText = "手机号码可用";
    info.className="right";
}



input.onblur = checkName;
password.onblur = checkPassword;
confirmPassword.onblur = confirmPw;
email.onblur = checkEmail;
telephone.onblur = checkTele;



//----------------表单获得焦点时，下方显示表单填写规则----------------
input.onfocus = function () {
	var info = input.nextElementSibling;
	info.className = "tip";
	info.innerText = "必填，长度为4~16个字符";
}

password.onfocus = function(){
	var info = password.nextElementSibling;
	info.className = "tip";
	info.innerText = "必填，长度大于5，由字母、数字、下划线构成";
}

confirmPassword.onfocus = function(){
	var info = confirmPassword.nextElementSibling;
	info.className = "tip";
	info.innerText = "请再次输入密码";
}

email.onfocus = function(){
	var info = email.nextElementSibling;
	info.className = "tip";
	info.innerText = "请输入您常用的电子邮件地址";
}

telephone.onfocus = function(){
	var info = telephone.nextElementSibling;
	info.className = "tip";
	info.innerText = "请输入您的联系方式";
}

//------------------点击提交，进行全局验证--------------------
var finalCheck = function(){
	var list = document.getElementsByTagName("input");
	for(var item of list){
		if(item.nextElementSibling.className==="error"){
			alert("输入有误，请您再次核对");
		}
	}
}
submit.onclick=finalCheck;

