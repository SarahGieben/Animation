var buttonRaket = document.querySelector('section > div div:first-of-type button');
var buttonWasmachine = document.querySelector('section > div div:nth-of-type(2) button');
var buttonYeti = document.querySelector('section > div div:nth-of-type(3) button');
var video = document.querySelector('section > video');

allButtons = document.querySelectorAll("section button");
buttonRaket.addEventListener('click', spelenRuimte);
buttonWasmachine.addEventListener('click', speelWassen);
buttonYeti.addEventListener('click', speelVoorstellen);

function spelenRuimte() {
    video.muted = false;
    video.src = "videos/ruimte.mp4";
    hideBtns();
    setTimeout(function() {
        location.href = "animation.html";
    }, 12000);
}
function speelWassen() {
    video.muted = false;
    video.src = "videos/Wasmachine.mp4";
    hideBtns();
    setTimeout(function() {
        location.href = "animation.html";
    }, 8400);
}
function speelVoorstellen() {
    video.muted = false;
    video.src = "videos/Voorstellen.mp4";
    hideBtns();
    setTimeout(function() {
        location.href = "animation.html";
    }, 7000);
}
function hideBtns() {
    allButtons.forEach((button) => {
        button.classList.add("btnHidden");
    })
}
