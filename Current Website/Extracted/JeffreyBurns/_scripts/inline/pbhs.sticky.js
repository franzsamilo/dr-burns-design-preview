(function( $, Theme ) {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("pageWrap");
    var sticky = 253;

    if ($(window).width() > 1200){
        sticky = 83;
    }


    function myFunction() {
        if (window.pageYOffset > sticky && $(window).width() > 768) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
})( jQuery, PbhsTheme );