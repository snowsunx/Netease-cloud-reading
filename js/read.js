var List = document.getElementById("pic").getElementsByTagName("li")
var Btn = document.getElementById("btn").getElementsByTagName("a")
var Left = document.getElementById("left")
var Right = document.getElementById("right")
var banner = document.getElementById("banner")
var i = 0,
	f = 0
List[i].className = "bl"
Btn[f].className = "#f7311f"
while(f < Btn.length) {
	Btn[f].index = f
	Btn[f].onclick = function() {
		i = this.index //点击的时候修改i，并且传到下面的方法
		var f = 0
		while(f < Btn.length) {
			Btn[f].className = ""
			List[f].className = ""
			f++
		}
		this.className = "red"
		List[this.index].className = "bl"
	}
	f++
}

function play() {
	var e = i
	i < List.length - 1 ? i++ : i = 0
	List[e].className = ""
	List[i].className = "bl"
	Btn[e].className = ""
	Btn[i].className = "red"
}

Right.onclick = play
Left.onclick = function() {
	var e = i
	i > 0 ? i-- : i = List.length - 1
	List[e].className = ""
	List[i].className = "bl"
	Btn[e].className = ""
	Btn[i].className = "red"
}

var time = setInterval(play, 1200)
banner.onmousemove = function() {
	clearInterval(time)
}
banner.onmouseout = function() {
	time = setInterval(play, 1200)
}

/**顶部导航栏悬浮**/
var oTopHeader = document.getElementById("top_header");

window.onscroll = function(){
	oTop = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(oTop)
	
	if(oTop>190){
	oTopHeader.style.display = "block";
	}else{
		oTopHeader.style.display = "none";
	}
}

/**焦点事件**/
var oTxt = document.getElementById("txt");
var oTxt1 = document.getElementById("txt1");

oTxt.onfocus = function(){
	if(this.value == "搜索60万精品好书"){
		this.value = ""
	}
}
oTxt.onblur = function(){
	if(this.value == ""){
		this.value = "搜索60万精品好书"
	}
}

oTxt1.onfocus = function(){
	if(this.value == "谁的青春不迷茫"){
		this.value = ""
	}
}
oTxt1.onblur = function(){
	if(this.value == ""){
		this.value = "谁的青春不迷茫"
	}
}
