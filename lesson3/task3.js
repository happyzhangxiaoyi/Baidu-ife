//------------------取出需要的元素----------------------
var radioList = document.getElementsByTagName('input');
var wrap = document.getElementById('wrap');
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var school = document.getElementById("school");
var society = document.getElementById("society");
var cityList = document.getElementById("cityList");
//----------------实现单选按钮样式的变化---------------
var radioSelected = function () {
	for(radio of radioList){
		if(radio.checked){radio.nextElementSibling.className="checked";}
		else{radio.nextElementSibling.className="";}
	}
}
//-------------实现下拉菜单和单选按钮的绑定-------------
var schoolChecked = function(){
	radioSelected();
	society.style.display = "none";
	school.style.display = "block";
}

var societyChecked = function(){
	radioSelected();
	school.style.display = "none";
	society.style.display = "block";
}
//------------------实现下拉菜单的联动------------------
var schoolArray = [
["北京大学","清华大学","中国人民大学","北京航空航天大学"],
["复旦大学","上海交通大学","同济大学","上海财经大学"],
["暨南大学","华南理工大学","广州大学","华南师范大学"],
["天津大学","南开大学","天津工商大学"]
];
var schoolMatch = function(){
	var schoolList = document.getElementById("schoolList");
	var cities = document.getElementById("cityList").getElementsByTagName("option");
    schoolList.length=1;
    if(cityList.selectedIndex){
		var matchArray = schoolArray[cityList.selectedIndex-1];
		for(var i=0;i<matchArray.length;i++){
			var option = document.createElement("option");
			option.innerText = matchArray[i];
			schoolList.appendChild(option);
		}
	}
}

yes.onclick = schoolChecked;
no.onclick = societyChecked;
cityList.onchange = schoolMatch;