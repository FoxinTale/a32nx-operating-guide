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

function opentab(evt, pagename) {
    var i, x, tablinks;
    x = document.getElementsByClassName("infotab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" fbw-dark", "");
    }
    document.getElementById(pagename).style.display = "block";
    evt.currentTarget.className += " fbw-dark";
}
