

function doFirst() {

    pic1Hero = document.getElementById('player1pic');
    pic1Hero.addEventListener("dragstart", startDrag, false);
    mainPlayerBox = document.getElementById('mainPlayerBox');
    mainPlayerBox.addEventListener("dragenter", function(e) {e.preventDefault}, false);
    mainPlayerBox.addEventListener("dragover", function(e) {e.preventDefault}, false);
    mainPlayerBox.addEventListener("drop", dropped, false);


}
console.log(doFirst);

function startDrag(e) {
    var code = '<img id="player1pic" src="C:\Users\jmills\Desktop\code\unit-4-game\assets\images\125x125_Placeholder.png">';
    e.dataTransfer.setData('Text', code);

}

function dropped(e) {
    e.preventDefault();
    mainPlayerBox.innerHTML = e.dataTransfer.setData('Text');
}

window.addEventListener("load", doFirst, false);

function doFirst() {

    


}
