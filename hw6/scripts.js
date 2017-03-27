$(document).ready(function() {

    $(".square-black").click(function() {
        var posi = $(".square-green").css("left");
        if ( posi < 0) {
            window.alert(posi.left);
            $(".square-red").animate({left: '-=180px'}, "slow");
            $(".square-orange").animate({left: '-=180px'}, "slow");
            $(".square-yellow").animate({left: '-=180px'}, "slow");
            $(".square-green").animate({left: '-=180px'}, "slow");
            $(".square-blue").animate({left: '-=180px'}, "slow");
            $(".square-indigo").animate({left: '-=180px'}, "slow");
            $(".square-violet").animate({left: '-=180px'}, "slow");
        }
        else {
            $(".square-red").animate({left: '+=180px'}, "slow");
            $(".square-orange").animate({left: '+=180px'}, "slow");
            $(".square-yellow").animate({left: '+=180px'}, "slow");
            $(".square-green").animate({left: '+=180px'}, "slow");
            $(".square-blue").animate({left: "+=180px"}, "slow");
            $(".square-indigo").animate({left: '+=180px'}, "slow");
            $(".square-violet").animate({left: '+=180px'}, "slow");
        }
    });
});
