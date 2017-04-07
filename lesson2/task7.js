//----------------首先找出需要的元素-----------------
var preBt = document.getElementById("pre");
var middleBt = document.getElementById("middle");
var lastBt = document.getElementById("last");


//----------------实现遍历可视化--------------------

function wrapDraw(remainChange,shifted){
	function draw(){
		var currentNode = shifted.shift();
		currentNode.className="currentItem";
		for(item of remainChange) {if (item!==currentNode) item.className="otherItem"}
		if(shifted.length===0) {clearInterval(interval);}
    }
    var iterval = setInterval(draw,300);
}

function drawPreOrder(){
	wrapDraw(preOrder(),preOrder().slice(0));
}

function drawMiddleOrder(){
	wrapDraw(middleOrder(),middleOrder().slice(0));
}

function drawLastOrder(){
	wrapDraw(lastOrder(),lastOrder().slice(0));
}


//---------------------先序遍历-----------------------

function preorder(node,remainChange){
	
		if (node!==null){
			var currentNode = node;
			remainChange.push(currentNode);
			preorder(node.firstElementChild,remainChange);
			preorder(node.lastElementChild,remainChange);
        }
}

function preOrder(){
	var node = document.getElementById("parent");
	var remainChange = [];
	preorder(node,remainChange);
	return remainChange;
}


//---------------------中序遍历-----------------------
function middleorder(node,remainChange){
	if(node!==null){
		middleorder(node.firstElementChild,remainChange);
		var currentNode = node;
		remainChange.push(currentNode);
		middleorder(node.lastElementChild,remainChange);
	}
}

function middleOrder(){
	var node = document.getElementById("parent");
	var remainChange = [];
	middleorder(node,remainChange);
	return remainChange;
}


//---------------------后序遍历-----------------------

function lastorder(node,remainChange){
	if(node!==null){
		lastorder(node.firstElementChild,remainChange);
		lastorder(node.lastElementChild,remainChange);
		var currentNode = node;
		remainChange.push(currentNode);
	}
}

function lastOrder(){
	var node = document.getElementById("parent");
	var remainChange = [];
	lastorder(node,remainChange);
	return remainChange;

}


//------------------为按钮绑定事件--------------------
preBt.onclick = drawPreOrder;
middleBt.onclick = drawMiddleOrder;
lastBt.onclick = drawLastOrder;
