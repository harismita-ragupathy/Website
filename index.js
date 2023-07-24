function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  var audio = new Audio("kick-bass.mp3");
  audio.play();
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");


  }, 10000);
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function buttonSound(currentkey) {
  var audio = new Audio("kick-bass.mp3");
  audio.play();
}
