function toggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navlist") {
    x.className += " responsive";
  } else {
    x.className = "navlist";
  }
}

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("myBtn");
  var footer = document.getElementById("contact");

  if (window.pageYOffset > footer.offsetTop - window.innerHeight) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

document.getElementById("myBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// document.addEventListener('click',function(){
//   let element = event.target;
//   if(element !== document.getElementById("scont") && element !== document.getElementById("sBtn")){
//     document.getElementById("scont").style.display="none";
//   }
// });

document.getElementById("sBtn").addEventListener("click", function () {
  if (document.getElementById("scont").style.display == "none") {
    document.getElementById("scont").style.display = "block";
  } else {
    document.getElementById("scont").style.display = "none";
  }
});

document.addEventListener("click", function () {
  let element = event.target;
  if (
    element !== document.querySelectorAll(".dropdowncontent")[0] &&
    element !== document.querySelectorAll(".dropbtn")[0]
  ) {
    document.querySelectorAll(".dropdowncontent")[0].style.display = "none";
  }
});

document.addEventListener("click", function () {
  let element = event.target;
  if (
    element !== document.querySelectorAll(".dropdowncontent")[1] &&
    element !== document.querySelectorAll(".dropbtn")[1]
  ) {
    document.querySelectorAll(".dropdowncontent")[1].style.display = "none";
  }
});
document.querySelectorAll(".dropbtn")[0].addEventListener("click", function () {
  if (
    document.querySelectorAll(".dropdowncontent")[0].style.display == "none"
  ) {
    document.querySelectorAll(".dropdowncontent")[0].style.display = "block";
  } else {
    document.querySelectorAll(".dropdowncontent")[0].style.display = "none";
  }
});

document.querySelectorAll(".dropbtn")[1].addEventListener("click", function () {
  if (
    document.querySelectorAll(".dropdowncontent")[1].style.display == "none"
  ) {
    document.querySelectorAll(".dropdowncontent")[1].style.display = "block";
  } else {
    document.querySelectorAll(".dropdowncontent")[1].style.display = "none";
  }
});

// document.querySelectorAll(".dropbtn")[1].addEventListener('click',function(){

//   var element = event.target;

//   if(document.querySelectorAll(".dropdowncontent")[1].style.display=="none"){
//     document.querySelectorAll(".dropdowncontent")[1].style.display="block";
//   }
//   else if (element !== document.querySelectorAll(".dropdowncontent")[1]) {
//     document.querySelector(".search-bar").style.display = "none";
//   }
//   else{
//     document.querySelectorAll(".dropdowncontent")[1].style.display="none";
//   }
// });
