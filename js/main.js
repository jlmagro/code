$(function() {

    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');

    setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 500);

    enterButton.on('click', function(e){
        e.preventDefault();
            welcomeSection.addClass('content-hidden').fadeOut(300);
            $('.animsition').removeClass('container-hidden').fadeIn(600);
    });


});

$(document).ready(function() {
    $('.animsition').animsition();
});

//animação das setas
$(function() {
    setTimeout('downArrow()');
});

//animação das setas
function downArrow() {
    $('.downArrow').animate({
        marginBottom: '-=10px'
    }, 400).animate({
        marginBottom: '+=10px'
    }, 400);
    setTimeout('downArrow()', 700);
}

//animação das barras da foto
window.sr = ScrollReveal({ reset: true });
sr.reveal('.box1', { duration: 500 });
sr.reveal('.box2', { duration: 600 });
sr.reveal('.box3', { duration: 700 });
sr.reveal('.box4', { duration: 800 });
sr.reveal('.box5', { duration: 600 });

//configuração do email
function sendEmail()
{
    window.location = "josemagro1989@icloud.com";
}

