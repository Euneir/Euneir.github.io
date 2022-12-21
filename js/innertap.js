let tt = document.querySelectorAll(".tc")[2];
for(var i = 0; i < t.length; i++){
	tabss(tt[i]);
}



function tabss(tab){
	//var tab = document.getElementsByClassName("tab")[0];
	var innertab = document.querySelector(".innertab");
	var tt = innertab.getElementsByClassName("innertt")[0];
	/*var tt = tab.querySelector(".tt");*/
	var span = tt.getElementsByTagName("h2");
	
	var compelete = innertab.getElementsByClassName("compelete")[0];
	var tc = innertab.getElementsByClassName("innertc");
	console.log(tab,tt,span,tc);
	
	for(let i = 0; i < span.length; i++){
		span[i].index = i;
		span[i].onclick = function(){
			for(let j = 0; j < span.length; j++){
				span[j].classList.remove("innercur");
				tc[j].style.display = "none";
			}
			this.classList.add("innercur");
			//this表示正在操作的
			//另一种写法 let遍历： span[i].classList.add("")
			//tc[i].style.display = "block";
			tc[this.index].style.display = "block";
			if(this.index == 1){
				compelete.style.display="none";
			}else{
				compelete.style.display="block";
			}		
		}
	}
}
