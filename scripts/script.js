function ShowModal(nameModal) {
	var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
		keyboard: false
	  })

	  myModal.show();
}

var myskills = [
	"Я тупой",
	"Бэкэндер",
	"Фронтэндер",
	"Просто приятный парень."];

window.onload = function () {
	var workPositionElement = document.getElementById('work-position-rotate');

	var index = 0;

	function ChangingMyWorkPostion() {
		var opacity = workPositionElement.style.opacity - .1;

		if (opacity < .1) {
			opacity = 1;
			index++;
			if(myskills.length == index)
				index = 0;
		}

		workPositionElement.style.opacity = opacity;
		workPositionElement.innerHTML = myskills[index];
	}

	setInterval(() => ChangingMyWorkPostion(), 100);
};