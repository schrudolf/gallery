let img = document.getElementsByClassName("imgChange");
function change(value) {
    if (value === "1") {
        for (var i = 0; i < img.length; i++) {
        img[i].classList.toggle("col-lg-12");
        img[i].classList.toggle("col-md-12");
        }
    }  else {
        console.log("Error")
    }
};