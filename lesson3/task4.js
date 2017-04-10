//----------------定义一个全局变量来判断当前状态---------

/*这里有一点疑惑，为什么全局变量会是字符串形式，对全局变量用
parseInt函数也没有用，还是会自己变回去，只能在具体函数中用
变量i捕捉它转变为数值型进行运算*/

var status = 0;
//----------------------获取相应元素---------------------
var block = document.getElementById('block'); 
var left = document.getElementById("left");
var right = document.getElementById("right");
var back = document.getElementById("back");
var go = document.getElementById("go");
//----------------------实现方块的旋转--------------------

var revolve = function(i){
	if(i%4===0||(-i)%4===0){
		block.style.transform = "rotate(0deg)";
		return false;
     }
     if(i%4===1||(-i)%4===1){
		block.style.transform = "rotate(90deg)";
		return false;
     }
     if(i%4===2||(-i)%4===2){
		block.style.transform = "rotate(180deg)";
		return false;
     }
     if(i%4===3||(-i)%4===3){
		block.style.transform = "rotate(270deg)";
		return false;
	}
}
  

var turnLeft_90 = function(){
	var i = parseInt(status);
	i--;
	revolve(i);
	status = i;
	
}

var turnRight_90 = function(){
	var i = parseInt(status);
	i++;
	revolve(i);
	status = i;
	
}

var turnBack = function(){
	var i = parseInt(status);
	i+=2;
	revolve(i);
	status = i;
}
//----------------------实现方块的移动--------------------
		

var moveBlock = function(){
	var x = parseInt(block.style.left);
	var y = parseInt(block.style.top);
	var i = parseInt(status);
	
	if(i%4===0||(-i)%4===0){
		if(y<=0){
			alert("碰到边边了！");
			return false;
		}
		block.style.top = (y-30)+"px";
		return false;
    }
    
    if(i%4===2||(-i)%4===2){
    	if(y>=270){
			alert("碰到边边了！");
			return false;
		}
		block.style.top = (y+30)+"px";
		return false;
	}

	if(i%4===1||(-i)%4===1){
		if(x>=270){
			alert("碰到边边了！");
			return false;
		}
     	block.style.left = (x+30)+"px";
		return false;
     }
     
     if(i%4===3||(-i)%4===3){
     	if(x<=0){
			alert("碰到边边了！");
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