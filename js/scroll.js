$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".container-about").offset().top},
        'slow')
});


$("#services").click(function() {
    $('html,body').animate({
        scrollTop: $(".services-container").offset().top},
        'slow')
});


$("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $(".project-title").offset().top},
        'slow')
});


$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-box").offset().top},
        'slow')
});



const btnmobile = document.getElementById('btn-contact-mobile')

if (window.screen.width <= 768) { 
    window.onload=()=>{
        btnmobile.href = "mailto:murilode.o.souza@gmail.com?subject=subject text"
    }
}
if (window.screen.width > 768){
    $(".btn-contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".contact-box").offset().top},
            'slow')
    });
}