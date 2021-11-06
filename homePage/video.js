// Ta modal
let modal = document.getElementById("myModal");

// Ta button där det öppnas modal
let btn = document.getElementById("myBtn");

// Ta <span> element där det strängs av modal
let span = document.getElementsByClassName("close")[0];

// När användaren trycker på knappen, så öppnar the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// När användaren trycker på <span> (x), strängs den av the modal
span.onclick = function () {
    modal.style.display = "none";
}

// När användaren trycker någonstans utanför the modal, så strängs det
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}