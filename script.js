(function() {

var imageArray = ["", "https://tse4.mm.bing.net/th?id=OIP.5q_5XlzwuR44_zTXXXQT-gHaHa&pid=15.1&P=0&w=300&h=300", "https://tse1.mm.bing.net/th?id=OIP.dpNtH0wxGYA27uHKzdFgxQHaHn&pid=15.1&P=0&w=300&h=300"];

let index = 0;
const box1 = document.querySelector(".box1");
const player = document.querySelector(".player");
player.src = imageArray[index];

function yourMove() {
	if (imageArray.length - 1 === index) {
		index = 0;
	} else {
		index++;
	}
	player.src = imageArray[index];
}

box1.onclick = yourMove();

})();
