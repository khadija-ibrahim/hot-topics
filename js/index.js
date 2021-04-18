const container = document.querySelector('.container');
let btn = document.querySelectorAll('.nav');
let url = './partials/partial-1.html';

function changePage(e){
    e.preventDefault();
    let clickBtn = e.target;
    url = clickBtn.href;
    loadData();
}

for(let btnItem of btn ){
    btnItem.addEventListener("click", changePage);
}

function loadData() {
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
};

loadData();