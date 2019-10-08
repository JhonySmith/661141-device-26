var writeUs = document.getElementById("write-us");
var closePopup = document.getElementById("close");
var fullMap = document.getElementById("full-map");
var closeMap = document.getElementById("close-map");
var search = document.getElementById("site-search");
var searchButton = document.getElementById("search-button");

var slideOne = document.querySelector(".product-1");
var slideTwo = document.querySelector(".product-2");
var slideThree = document.querySelector(".product-3");

var slideOneChecked = document.querySelector("#bigest-monopod");
var slideTwoChecked = document.querySelector("#fitness-bracelet");
var slideThreeChecked = document.querySelector("#quadrocopter");

if (slideOneChecked) {
  slideOneChecked.addEventListener("change", function() {
    slideOne.classList.remove("hidden");
    slideTwo.classList.add("hidden");
    slideThree.classList.add("hidden");
  });
}

if (slideTwoChecked) {
  slideTwoChecked.addEventListener("change", function() {
    slideOne.classList.add("hidden");
    slideTwo.classList.remove("hidden");
    slideThree.classList.add("hidden");
  });
}

if (slideThreeChecked) {
  slideThreeChecked.addEventListener("change", function() {
    slideOne.classList.add("hidden");
    slideTwo.classList.add("hidden");
    slideThree.classList.remove("hidden");
  });
}

var dropMenu = document.querySelector(".drop-head");
var dropMenuList = document.querySelector(".drop-menu-list");

dropMenu.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (dropMenuList.classList.contains("hidden")) {
    dropMenuList.classList.remove("hidden");
  } else {
    dropMenuList.classList.add("hidden");
  }
});

var deliveryRadio = document.querySelector("#delivery");
var warrantyRadio = document.querySelector("#warranty");
var creditRadio = document.querySelector("#credit");

var delivery = document.querySelector(".delivery");
var warranty = document.querySelector(".warranty");
var credit = document.querySelector(".credit");

if (deliveryRadio) {
  deliveryRadio.addEventListener("change", function() {
    delivery.classList.remove("hidden");
    warranty.classList.add("hidden");
    credit.classList.add("hidden");
  });
}

if (warrantyRadio) {
  warrantyRadio.addEventListener("change", function() {
    delivery.classList.add("hidden");
    warranty.classList.remove("hidden");
    credit.classList.add("hidden");
  });
}

if (creditRadio) {
  creditRadio.addEventListener("change", function() {
    delivery.classList.add("hidden");
    warranty.classList.add("hidden");
    credit.classList.remove("hidden");
  });
}

if (writeUs) {
  writeUs.onclick = function() {
    document.getElementById("popup-write-us").style.display = "flex";
    return false;
  };
}

if (closePopup) {
  closePopup.onclick = function() {
    document.getElementById("popup-write-us").style.display = "none";
  };
}

if (fullMap) {
  fullMap.onclick = function() {
    document.getElementById("popup-full-map").style.display = "block";
    return false;
  };
}

if (closeMap) {
  closeMap.onclick = function() {
    document.getElementById("popup-full-map").style.display = "none";
  };
}

search.onfocus = function() {
  document.getElementById("search-form").style.borderBottom = "2px solid black";
  document.getElementById("search-button").style.display = "block";
};

search.onblur = function() {
  document.getElementById("search-form").style.borderBottom =
    "2px solid transparent";
  document.getElementById("search-button").style.display = "none";
};
