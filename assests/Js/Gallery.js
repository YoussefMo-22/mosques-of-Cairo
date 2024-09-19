var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

var slideCount = sliderImages.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById("slide-number");

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

nextButton.onclick = nextSlide;
previousButton.onclick = previousSlide;

var paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (var i = 1; i <= slideCount; i++) {
  var paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");

var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}

theChecker();

function nextSlide() {
  if (nextButton.classList.contains("diabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function previousSlide() {
  if (previousButton.classList.contains("diabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent = "Slide #" + currentSlide + "of" + slideCount;

  removeAllActive();

  sliderImages[currentSlide - 1].classList.add("active");

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    previousButton.classList.add("disabled");
  } else {
    previousButton.classList.remove("disabled");
  }

  if (currentSlide == slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
function toggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "gallery-nav") {
    x.className += " responsive";
  } else {
    x.className = "gallery-nav";
  }
}
