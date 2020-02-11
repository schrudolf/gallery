var valami = document.getElementsByClassName("valamikep");
function change(value) {
    if (value === "1") {
        for (var i = 0; i < valami.length; i++) {
        valami[i].classList.toggle("col-lg-12");
        valami[i].classList.toggle("col-md-12");
        }
    }  else {
        console.log("Error")
    }
};