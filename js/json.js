var url1 = "http://rap2api.taobao.org/app/mock/308731/json1";
var xhr1 = new XMLHttpRequest();

xhr1.open("GET", url1, true);
xhr1.send();

xhr1.onreadystatechange = function() {
	if (xhr1.readyState === 4 && xhr1.status === 200) {
		var jarr1 = JSON.parse(xhr1.responseText);
		insert_one(jarr1);
	}
};

function insert_one(jarr1) {
	var main_ul = document.getElementsByClassName("main_ul")[0];
	jarr1.forEach((v, i) => {
		var nli = document.createElement("li");
		nli.innerHTML = `
						<div class="li_detial">
							<a href="${v.link}">
								<div class="text_detail">
									<h2>${v.title}</h2>
									
									<p class="letter">${v.teacher}</p>
									<p class="letter">${v.detail}</p>
								</div>
								<img src="${v.img}">
							</a>
						</div>
					`;
		main_ul.appendChild(nli);
	})
}

var url2 = "http://rap2api.taobao.org/app/mock/308731/json2";
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", url2, true);
xhr2.send();

xhr2.onreadystatechange = function() {
	if (xhr2.readyState === 4 && xhr2.status === 200) {
		var jarr2 = JSON.parse(xhr2.responseText);
		insert_two(jarr2);
	}
};

function insert_two(jarr2) {

	var list_li = document.getElementsByClassName("list_li")[0];
	jarr2.forEach((v, i) => {
		var nli = document.createElement("li");
		nli.innerHTML = `
						<div class="list_li_detail">
								<h2 class="list_li_detail_title">${v.title}</h2>
								<p class="list_li_detail_p_one">${v.time}</p>
								<p class="list_li_detail_p_two">${v.detail}</p>
							</div>
					`;
		list_li.appendChild(nli);
	})
}

var url3 = "http://rap2api.taobao.org/app/mock/308731/json3";
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);
xhr3.send();

xhr3.onreadystatechange = function() {
	if (xhr3.readyState === 4 && xhr3.status === 200) {
		var jarr3 = JSON.parse(xhr3.responseText);
		insert_three(jarr3);
	}
};

function insert_three(jarr3) {

	var inner_list = document.getElementsByClassName("inner_list")[0];
	jarr3.forEach((v, i) => {
		var nli = document.createElement("li");
		nli.innerHTML = `
						<div class="li_detial">
						<h3 class="date">${v.time}</h3>
						<a href="#">
						<div class="text_detail">
						<h2>${v.title}</h2>
						<p class="letter">${v.detail}</p>
						<div class="photo_teacher">
						<img class="smallPhoto" src="${v.img}">
						<p class="teacher">${v.teacher}</p>
						</div>
						
						</div>
						</a>
						</div>
					`;
		inner_list.appendChild(nli);
	})
}
