const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const aboutCompanyLink = document.querySelector(".company-button-about");
const aboutPopup = document.querySelector(".modal-email");
const aboutClose = aboutPopup.querySelector(".modal-close");
const aboutForm = aboutPopup.querySelector(".contact-form");
const aboutUsername = aboutPopup.querySelector("#username");
const aboutEmail = aboutPopup.querySelector("#email");
const aboutEmailText = aboutPopup.querySelector("#email_text");

const buyLink = document.querySelectorAll(".buy");
const bookmarksLink = document.querySelectorAll(".to-bookmarks");
const basketHeader =  document.querySelector(".header-basket");
const bookmarksHeader =  document.querySelector(".header-bookmarks");



function openService(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("services-button");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});


aboutCompanyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  aboutPopup.classList.add("modal-show");
});

aboutClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  aboutPopup.classList.remove("modal-show");
  aboutPopup.classList.remove("modal-error");
});

aboutForm.addEventListener("submit", function (evt) {
  if (!aboutUsername.value || !aboutEmail.value || !aboutEmail.value) {
    evt.preventDefault();
    aboutPopup.classList.remove("modal-error");
    aboutPopup.offsetWidth = aboutPopup.offsetWidth;
    aboutPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (aboutPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      aboutPopup.classList.remove("modal-show");
      aboutPopup.classList.remove("modal-error");
    }
  }
});

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('buy');
  basketHeader.classList.add("header-basket-added");
});

bookmarksLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('book');
  bookmarksHeader.classList.add("header-bookmarks-added");
});
