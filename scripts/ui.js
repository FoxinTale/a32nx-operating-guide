function doaccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " fbw-dark";
    } else {
        x.className = x.className.replace("show", "");
        x.previousElementSibling.className =
                x.previousElementSibling.className.replace("fbw-dark", "");
    }
}