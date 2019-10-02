var writeUs = document.getElementById('write-us');
var closePopup = document.getElementById('close');

writeUs.onclick = function () {
    document.getElementById('popup-write-us').style.display = "flex";
    return false;
}

closePopup.onclick = function () {
    document.getElementById('popup-write-us').style.display = "none";
}