    
	//设置旗帜  （但是感觉并不能随便乱用全局变量）
    window.count = 0;
    //首先找出参照节点
    var container = document.getElementById("container");

	//判断输入的合法性
	function invalidValue(text){
	    if (isNaN(text))
		    {
		    	alert("请输入数字");
		    	return true;
		    }
		if(text>100||text<10)
		{
			alert("请输入10-100之间的数字");
			return true;
		}
		if(count>60)
		{
			alert("不能超过60个数！");
			return true;
		}
		return false;
    }

function left_in(){
			var text = parseInt(document.getElementById("input").value);
			var lastchild=container.lastChild;
			
			if(!invalidValue(text)){
				var height = text/100*300;
				div = document.createElement("div");
				div.style.backgroundColor = "#aa96da";
				div.style.margin="2px";
				div.style.display="inline-block";
				div.style.height=height+"px";
				div.style.marginTop=300-height+"px";
				div.style.width="15px";
			if(lastchild===null)
				container.appendChild(div);
			else
				container.insertBefore(div,container.firstChild);

		}
		document.getElementById("input").value=null;
		document.getElementById("input").focus();
		count++;
	}


	function left_out(){
		var lastchild=container.lastChild;
		var firstchild =container.firstChild;
		if(lastchild===null)
		{
			alert("没有数字啦~");
			return false;
		}
        container.removeChild(firstchild);
		
	}


	function right_in(){
		var text = parseInt(document.getElementById("input").value);
		var lastchild=container.lastChild;
		if(!invalidValue(text)){
			var height = text/100*300;
			div = document.createElement("div");
			div.style.backgroundColor = "#aa96da";
			div.style.margin="2px";
			div.style.display="inline-block";
			div.style.height=height+"px";
			div.style.width="15px";
			div.style.marginTop=300-height+"px";
			container.appendChild(div);
		}
		document.getElementById("input").value=null;
		document.getElementById("input").focus();
		count++;
	}

	function right_out(){
		var lastchild=container.lastChild;
		if(lastchild===null)
		{
			alert("没有数字啦~");
			return false;
		}
		container.removeChild(lastchild);
	}

//------------------------------------排序可视化动画的实现----------------------------------
//只实现了高度的变化，没有实现颜色变化
function drawWrap(remainChange,i,nodelist){
	
    function draw(){
    	var j;
		for(j=0;j<nodelist.length;j++){
			nodelist[j].style.height = remainChange[i][j]+"px";
		    nodelist[j].style.marginTop = 300-parseInt(nodelist[j].clientHeight)+"px";
		}
			i++;
			if(i>=remainChange.length) {clearInterval(interval);}
	}

    var interval = setInterval(draw,80);
    

}

//------------------------冒泡排序可视化------------------------
function bubbleSortDOM(){
    var i=0;
	var nodelist = container.childNodes;
	var array = new Array();
	for (item of nodelist) {array.push(item.clientHeight);}
	var remainChange = bubbleSort(array);
	drawWrap(remainChange,i,nodelist);
}
//-------------------------选择排序可视化-----------------------
function selectSortDOM(){
	var i=0;
	var nodelist = container.childNodes;
	var array = new Array();
	for (item of nodelist) {array.push(item.clientHeight);}
	var remainChange = selectSort(array);
    drawWrap(remainChange,i,nodelist);
}

//-------------------------插入排序可视化-----------------------
function insertSortDOM(){
	var i=0;
	var nodelist = container.childNodes;
	var array = new Array();
	for (item of nodelist) {array.push(item.clientHeight);}
	var remainChange = insertSort(array);
    drawWrap(remainChange,i,nodelist);
    
}

	
//-----------------------------以下是三种排序的实现-------------------------------------

//--------冒泡排序--------
	function swapDom(array,a,b){
	var temp;
	temp=array[a];
	array[a]=array[b];
	array[b]=temp;
	return array;
}

function bubbleSort(array){
		var i=0,j;
		var remainChange = new Array();
		remainChange.push(array.slice(0));
		for(i=0;i<array.length;i++){
			//var flag = true;
			for(j=0;j<array.length-i-1;j++){
				if(array[j]>array[j+1]){
					swapDom(array,j,j+1);
                    //flag = false;
					remainChange.push(array.slice(0));
				}
				//if(flag){break;}
			}
		}
		return remainChange;
	}


//--------------选择排序-----------------
	function selectSort(array){
		var min,i,j;
		var remainChange = new Array();
		for(i=0;i<array.length;i++){
			min = i;
			remainChange.push(array.slice(0));
			for(j=i+1;j<array.length;j++){
				if(array[j]<array[min]){
					min=j;
				}
			}
			if (1 !== min)
				{
					swapDom(array,min,i);
					remainChange.push(array.slice(0));
				}
		}
	return remainChange;
}
	

//---------------插入排序----------------
    function insertSort(array){
	var i,j,temp;
	var remainChange=new Array();
	for(i=0;i<array.length;i++)
	{
		for(j=i-1;j>=0&&array[j+1]<array[j];j--)
		{
			swapDom(array,j,j+1);
			remainChange.push(array.slice());
		}
	}
	return remainChange;
}


//-------------------------给按钮绑定相应的事件------------------------------------
//这里应该是可以利用高级特性批量处理的，这样写真是太繁琐了
	var leIn = document.getElementById("left_btin");
	var riIn = document.getElementById("right_btin");
	var leOut = document.getElementById("left_btout");
	var riOut = document.getElementById("right_btout");
	var bubble = document.getElementById("bubble_bsort");
	var select = document.getElementById("select_bsort");
	var insert = document.getElementById("insert_bsort");
	leIn.onclick=left_in;
	leOut.onclick=left_out;
	riIn.onclick=right_in;
	riOut.onclick=right_out;
	bubble.onclick=bubbleSortDOM;
	select.onclick=selectSortDOM;
	insert.onclick=insertSortDOM;