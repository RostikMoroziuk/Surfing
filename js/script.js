onload = resizeControll;
$(window).resize(resizeControll);

function resizeControll() {
    var nav = document.getElementsByClassName("navbar")[0];

    if ($(window).width() < 767)
    {       
        nav.className = "navbar navbar-default";
    }
    else {
        nav.className = "navbar";
    }
}