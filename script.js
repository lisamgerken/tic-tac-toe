(function() {

	const imageArray = ["http://frs102.net/wp-content/uploads/2013/06/FRS-102-WHITE-SQUARE.jpg", "https://tse4.mm.bing.net/th?id=OIP.5q_5XlzwuR44_zTXXXQT-gHaHa&pid=15.1&P=0&w=300&h=300", "http://yourjokeman.com/wp-content/gallery/xrodimusprime/Animal%20Smile/10.jpg"];

	let index = 0;
	const box1 = document.getElementById("box1");
	const box2 = document.getElementById("box2");
	const box3 = document.getElementById("box3");
	const box4 = document.getElementById("box4");
	const box5 = document.getElementById("box5");
	const box6 = document.getElementById("box6");
	const box7 = document.getElementById("box7");
	const box8 = document.getElementById("box8");
	const box9 = document.getElementById("box9");

function handlebox1Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture1.src = imageArray[index];	
	}
	box1.onclick = handlebox1Click;

function handlebox2Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture2.src = imageArray[index];	
	}
	box2.onclick = handlebox2Click;

function handlebox3Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture3.src = imageArray[index];	
	}
	box3.onclick = handlebox3Click;

function handlebox4Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture4.src = imageArray[index];	
	}
	box4.onclick = handlebox4Click;

function handlebox5Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture5.src = imageArray[index];	
	}
	box5.onclick = handlebox5Click;

function handlebox6Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture6.src = imageArray[index];	
	}
	box6.onclick = handlebox6Click;

function handlebox7Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture7.src = imageArray[index];	
	}
	box7.onclick = handlebox7Click;

function handlebox8Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture8.src = imageArray[index];	
	}
	box8.onclick = handlebox8Click;

function handlebox9Click() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		picture9.src = imageArray[index];	
	}
	box9.onclick = handlebox9Click;

})();



