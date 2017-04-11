//----------------定义全局变量来判断当前状态-------------

/*这里有一点疑惑，为什么全局变量会是字符串形式，对全局变量用
parseInt函数也没有用，还是会自己变回去，只能在具体函数中用
变量i捕捉它转变为数值型进行运算*/

var status = 0;
//----------------------获取相应元素---------------------
var getEle = function(id){
	return document.getElementById(id);
}
var block = getEle("block"); 
var left = getEle("left");
var right = getEle("right");
var back = getEle("back");
var go = getEle("go");
var toleft = getEle("toleft");
var toright = getEle("toright");
var totop = getEle("totop");
var tobottom = getEle("tobottom");
var leftMove = getEle("leftMove");
var rightMove = getEle("rightMove");
var topMove = getEle("topMove");
var bottomMove = getEle("bottomMove");
//----------------------实现方块的旋转--------------------

var checkStatus = function(i){
	if(i===0){return 0}
	if(i>0) {return i%4;}
    if(i<0) {return (-i)%4;}
}

var turnLeft_90 = function(){
	var i = parseInt(status);
    var flag = checkStatus(i);
	if(flag==0){
		block.style.webkitAnimationName = "top__90";
		block.style.animationName = "top__90";
	}
	if(flag==1){
		block.style.webkitAnimationName = "right__90";
		block.style.animationName = "right__90";
	}
	if(flag==2){
		block.style.webkitAnimationName = "bottom__90";
		block.style.animationName = "bottom__90";
	}
	if(flag==3){
		block.style.webkitAnimationName = "left__90";
		block.style.animationName = "left__90";
	}
	i--;
	if(i<0){i=i+4;}
	status = i;
}

var turnRight_90 = function(){
	var i = parseInt(status);
    var flag = checkStatus(i);
	if(flag==0){
		block.style.webkitAnimationName = "top_90";
		block.style.animationName = "top_90";
	}
	if(flag==1){
		block.style.webkitAnimationName = "right_90";
		block.style.animationName = "right_90";
	}
	if(flag==2){
		block.style.webkitAnimationName = "bottom_90";
		block.style.animationName = "bottom_90";
	}
	if(flag==3){
		block.style.webkitAnimationName = "left_90";
		block.style.animationName = "left_90";
	}
	i++;
	if(i<0){i=i+4;}
	status = i;
	
}

var turnBack = function(){
	var i = parseInt(status);
    var flag = checkStatus(i);
	if(flag==0){
		block.style.webkitAnimationName = "top_180";
		block.style.animationName = "top_180";
	}
	if(flag==1){
		block.style.webkitAnimationName = "right_180";
		block.style.animationName = "right_180";
	}
	if(flag==2){
		block.style.webkitAnimationName = "bottom_180";
		block.style.animationName = "bottom_180";
	}
	if(flag==3){
		block.style.webkitAnimationName = "left_180";
		block.style.animationName = "left_180";
	}
	i+=2;
	if(i<0){i=i+4;}
	status = i;
}
//----------------------实现方块的移动--------------------
		

var moveBlock = function(){
	var x = parseInt(block.style.left);
	var y = parseInt(block.style.top);
	var i = parseInt(status);
	
	if(i%4===0||(-i)%4===0){
		if(y<=0){
			alert("不能再走啦！");
			return false;
		}
		block.style.top = (y-30)+"px";
		return false;
    }
    
    if(i%4===2||(-i)%4===2){
    	if(y>=270){
			alert("不能再走啦！");
			return false;
		}
		block.style.top = (y+30)+"px";
		return false;
	}

	if(i%4===1||(-i)%4===1){
		if(x>=270){
			alert("不能再走啦！");
			return false;
		}
     	block.style.left = (x+30)+"px";
		return false;
     }
     
     if(i%4===3||(-i)%4===3){
     	if(x<=0){
			alert("不能再走啦！");
			return false;
		}
		block.style.left = (x-30)+"px";
		return false;
	}
} 
left.onclick = turnLeft_90;
right.onclick = turnRight_90;
back.onclick = turnBack;
go.onclick = moveBlock;

//说明：没有用输入框的形式，而是使用了按钮，这样操作起来方便一些
//对margin/padding/border的理解不够透彻，各种不同的宽度计算方法，尤其是
//百分比计算时依据的基准不清楚。希望加强基础知识

//-------------------任务五新加的功能---------------------------


//-------------------实现小方块单纯的移动-----------------------
var toLeft = function(){
	var x = parseInt(block.style.left);
	if(x<=0){
		alert("不能再走啦");
		return false;
	}
	block.style.left = (x-30)+"px";
}

var toRight = function(){
	var x = parseInt(block.style.left);
	if(x>=270){
		alert("不能再走啦");
		return false;
	}
	block.style.left = (x+30)+"px";
}

var toTop = function(){
	var y = parseInt(block.style.top);
	if(y<=0){
		alert("不能再走啦");
		return false;
	}
	block.style.top = (y-30)+"px";
}

var toBottom = function(){
	var y = parseInt(block.style.top);
	if(y>=270){
		alert("不能再走啦");
		return false;
	}
	block.style.top = (y+30)+"px";
}

toleft.onclick = toLeft;
toright.onclick = toRight;
totop.onclick = toTop;
tobottom.onclick = toBottom;

//------------------实现边旋转边移动效果-------------------------
var leftmove = function(){
    	block.style.webkitAnimationName = "left";
		block.style.animationName = "left";
		status = 3;
		moveBlock();
}

var rightmove = function(){
    	block.style.webkitAnimationName = "right";
		block.style.animationName = "right";
		status = 1;
		moveBlock();
}

var topmove = function(){
    	block.style.webkitAnimationName = "top";
		block.style.animationName = "top";
		status = 0;
		moveBlock();
}

var bottommove = function(){
    	block.style.webkitAnimationName = "bottom";
		block.style.animationName = "bottom";
		status = 2;
		moveBlock();
}

leftMove.onclick=leftmove;
rightMove.onclick=rightmove;
topMove.onclick=topmove;
bottomMove.onclick=bottommove;
