var front = document.querySelector(".face-front");
var back = document.querySelector(".face-back");
var flip = document.querySelector(".book-content");
var uno = document.querySelectorAll(".book");
var portada = document.querySelectorAll("#portada");

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
  uno[i].style.zIndex = customZindex;
  customZindex--;

  uno[i].addEventListener("click", function (e) {
    var tgt = e.target;
    var unoThis = this;

    unoThis.style.zIndex = contZindex;
    contZindex++;

    // Aquí detecta si se hace clic en cualquier parte de la cara (incluida la imagen)
    if (tgt.closest(".face-front")) {
      unoThis.style.zIndex = contZindex;
      contZindex += 20;
      setTimeout(function () {
        unoThis.style.transform = "rotateY(-180deg)";
      }, 300);
    }
    if (tgt.closest(".face-back")) {
      unoThis.style.zIndex = contZindex;
      contZindex += 20;
      setTimeout(function () {
        unoThis.style.transform = "rotateY(0deg)";
      }, 300);
    }

    if (tgt.getAttribute("id") == "portada") {
      flip.classList.remove("trnsf-reset");
      flip.classList.add("trnsf");
    }
    if (tgt.getAttribute("id") == "trsf") {
      flip.classList.remove("trnsf");
      flip.classList.add("trnsf-reset");
    }
  });
}
