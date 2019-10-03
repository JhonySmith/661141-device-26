var writeUs = document.getElementById("write-us");
var closePopup = document.getElementById("close");
var fullMap = document.getElementById("full-map");
var closeMap = document.getElementById("close-map");
var search = document.getElementById("site-search");
var searchButton = document.getElementById("search-button");

writeUs.onclick = function() {
  document.getElementById("popup-write-us").style.display = "flex";
  return false;
};

closePopup.onclick = function() {
  document.getElementById("popup-write-us").style.display = "none";
};

fullMap.onclick = function() {
  document.getElementById("popup-full-map").style.display = "block";
  return false;
};

closeMap.onclick = function() {
  document.getElementById("popup-full-map").style.display = "none";
};

search.onfocus = function() {
  document.getElementById("search-form").style.borderBottom = "2px solid black";
  document.getElementById("search-button").style.display = "block";
};

search.onblur = function() {
  document.getElementById("search-form").style.borderBottom =
    "2px solid transparent";
  document.getElementById("search-button").style.display = "none";
};
