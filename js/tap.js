let t = document.querySelectorAll("body");
for(var i = 0; i < t.length; i++){
	tabs(t[i]);
}



function tabs(tab){
	//var tab = document.getElementsByClassName("tab")[0];
	/*var tab = document.querySelector(".tab");*/
	var tt = tab.getElementsByClassName("tt")[0];
	/*var tt = tab.querySelector(".tt");*/
	var span = tt.getElementsByClassName("inbnav");
	
	var tc = tab.getElementsByClassName("tc");
	console.log(tab,tt,span,tc);
	
	for(let i = 0; i < span.length; i++){
		span[i].index = i;
		span[i].onclick = function(){
			for(let j = 0; j < span.length; j++){
				span[j].classList.remove("cur");
				tc[j].style.display = "none";
			}
			this.classList.add("cur");
			//this表示正在操作的
			//另一种写法 let遍历： span[i].classList.add("")
			//tc[i].style.display = "block";
			tc[this.index].style.display = "block";
		}
	}
}
