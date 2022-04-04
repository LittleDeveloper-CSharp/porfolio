//Если ты тут, то скажу, мне было не охото засорять html и решил написать то, что снизу.

const ROOT_IMAGES_PATH = "resources/";
const MY_SKILLS = [
	"Бэкэндер",
	"Фронтэндер",
	"И просто приятный парень."];


window.onload = function () {
	var workPositionElement = document.getElementById('work-position-rotate');

	var index = 0;

	function ChangingMyWorkPostion() {
		var opacity = workPositionElement.style.opacity - .075;

		if (opacity < .1) {
			opacity = 1;
			index++;
			if (MY_SKILLS.length == index)
				index = 0;
		}

		workPositionElement.style.opacity = opacity;
		workPositionElement.innerHTML = MY_SKILLS[index];
	}

	setInterval(() => ChangingMyWorkPostion(), 100);
};

function ShowModal(nameModal) {
	var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
		keyboard: false
	});

	var modalClass = undefined;

	switch (nameModal) {
		case "Хочу стул":
			modalClass = new HochuStulModal();
			break;
		case "Портфолио":
			modalClass = new PortfolioModal();
			break;
		case "Харизма":
			modalClass = new HarizmaModal();
			break;
		case "FASTCODE":
			modalClass = new FastCodeModal();
			break;
		case "Учет студентов":
			modalClass = new UAKModal();
			break;
	}

	if (modalClass === undefined) {
		alert("Ты зачем сломал?");
		return;
	}

	CreateModal(modalClass);

	myModal.show();
}

function CreateModal(modalInfo) {
	document.getElementById('modal-title').innerHTML = modalInfo.Title;
	document.getElementById('description-project').innerHTML = modalInfo.Description;

	var stackTechBlock = document.getElementById('stack-technology');
	stackTechBlock.innerHTML = "";

	var carouselImagesConatainer = document.getElementById('carousel-container');
	carouselImagesConatainer.innerHTML = "";

	var carouselIndicators = document.getElementById('carousel-indicators');
	carouselIndicators.innerHTML = "";

	modalInfo.StackTechnology.forEach(function (stack) {
		stackTechBlock.innerHTML += `<span>${stack}</span>`
	});

	var isFirst = true;
	var index = 0;

	modalInfo.Images.forEach(function (imagePath) {
		carouselImagesConatainer.innerHTML +=
			`<div class="carousel-item ${isFirst ? "active" : ""}">
				<img src="${modalInfo.RootImagesPath + imagePath}" class="d-block w-100">
	  		</div>`

		carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${isFirst ? "active" : ""}" aria-current="true" aria-label="Slide ${index}"></button>`

		isFirst = false;
		index++;
	});
}

function HarizmaModal() {
	this.Title = "Харизма";
	this.Description = "Данный проект был разработан по заказу. Он представляет собой обычный интернет магазин, где существует 2 пользователя - гость и администратор.";
	this.StackTechnology = ["Bootstrap 5", "HTML5", "CSS3", "SCSS", "JS", "JQuery"];
	this.RootImagesPath = `${ROOT_IMAGES_PATH}harizma/`;
	this.Images = ["test.png", "test.png", "test.png"];
}

function UAKModal() {
	this.Title = "УАВИАК-МЦК | Учет выпускников";
	this.Description = "Данный проект был разработан по заказу колледжа. Я выступал в роли человека уникома - фронт, бэк и деплой был полностью на мне.";
	this.StackTechnology = ["Bootstrap 5", "HTML5", "CSS3", "SCSS", "JS", "JQuery", "ASP.NET Core", "EF Core", "AutoMapper", "Docker"];
	this.RootImagesPath = `${ROOT_IMAGES_PATH}uak/`;
	this.Images = ["test.png", "test.png", "test.png", "test.png", "test.png", "test.png"];
}

function HochuStulModal() {
	this.Title = "Хочу стул";
	this.Description = "Интернет-магазин, а также первый проект выполненный по заказу.";
	this.StackTechnology = ["Bootstrap 5", "HTML5", "CSS3", "SCSS", "JS"];
	this.RootImagesPath = `${ROOT_IMAGES_PATH}hochustul/`;
	this.Images = ["test.png", "test.png"];
}

function FastCodeModal() {
	this.Title = "FAST[CODE]";
	this.Description = "Данный проект, он же один из последних, был разработан по просьбе моего товарища, простой лендинг.";
	this.StackTechnology = ["Bootstrap 5", "HTML5", "CSS3", "SCSS", "JS", "JQuery"];
	this.RootImagesPath = `${ROOT_IMAGES_PATH}fastcode/`;
	this.Images = ["test.png", "test.png", "test.png", "test.png"];
}

function PortfolioModal() {
	this.Title = "Портфолио";
	this.Description = "Ну а это просто мой сайт, на котором вы сейчас находитесь :)";
	this.StackTechnology = ["Bootstrap 5", "HTML5", "CSS3", "SCSS", "JS"];
	this.RootImagesPath = `${ROOT_IMAGES_PATH}portfolio/`;
	this.Images = ["test.png"];
}
