//animação das setas
$(function() {
    setTimeout('downArrow()');
});

function downArrow() {
    $('.downArrow').animate({
        marginBottom: '-=10px'
    }, 400).animate({
        marginBottom: '+=10px'
    }, 400);
    setTimeout('downArrow()', 700);
}

//include HTML files in html
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

//animação das barras da foto
window.sr = ScrollReveal({ reset: true });
sr.reveal('.box1', { duration: 500 });
sr.reveal('.box2', { duration: 600 });
sr.reveal('.box3', { duration: 700 });
sr.reveal('.box4', { duration: 800 });
sr.reveal('.box5', { duration: 600 });

function sendEmail()
{
    window.location = "josemagro1989@icloud.com";
}

