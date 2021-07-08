$(document).ready(function () {

    // FUNCTION QUI PERMET L'AFFICHAGE DES ICONES BAR APRES AVOIR CLIQUER SUR NEXT

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length; //=4
    
    
    setProgressBar(current);

    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = current_fs.next();
        $(".previous").css({
            'display': 'block'
        });

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        var n=current - 1;
        console.log(n);
        $("#icon-bar div:nth-child(" + current + ")").css({
            'display': 'block'});
        setProgressBar(++current);
        $(".steps").text("Étape " + current + " sur " + steps);
        //replace fa-circle by fa-check

    });

        //  FUNCTION QUI PERMET UN RETOUR EN ARRIERE DES ETAPES EN CLIQUANT SUR LES ICONES BAR

    $("#icon-bar .icon-item").click(function () {
        var n = $(this).index() + 1;
        
            current_fs = $("fieldset:nth-child(" + current + ")");
            step_fs = $("fieldset:nth-child(" + n + ")");

            //show the previous fieldset
            step_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    step_fs.css({
                        'opacity': opacity
                    });
                },
                duration: 500
            });
            current = n;
            //setProgressBar(n);
            $(".steps").text("Étape " + n + " sur " + steps);
            if (n == 1) $(".previous").css({
                'display': 'none'
            });
        
    });



    // FUNCTION QUI PERMET DE RETOURNER EN ARRIERE AVEC LE BOUTTON RETOUR (<)

    $(".previous").click(function () {
        current_fs = $("fieldset:nth-child(" + current + ")")
        previous_fs = current_fs.prev();

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current); // curent = current-1
        $(".steps").text("Étape " + current + " sur " + steps);
        if (current == 1) $(".previous").css({
            'display': 'none'
        });
    });


    // FUNCTION PROGRESS BAR


    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

    // TOGGLE ANIMATION WHEN CLICK ON SECTION

    $("#new_site").click(function () {
        $("#new_site_choice").toggle(1000);
        $("#new_site_choice").css("display", "flex", "!important");
        $("#new_site_choice").css("justify-content", "right", "!important");
        $("#design_site").toggle(1000);       
    })

    $("#design_site").click(function () {
        $("#design_site_choice").toggle(1000);
        $("#design_site_choice").css("display", "flex", "!important");
        $("#design_site_choice").css("justify-content", "right", "!important");
        $("#new_site").toggle(1000);
    })

    $("#goal_choice").click(function () {
        $("#list_goal_choice").toggle(1000);
        $("#list_goal_choice").css("display", "flex", "!important");
        $("#list_goal_choice").css("justify-content", "right", "!important");
        $("#list_goal_choice").css("flex-wrap", "wrap", "!important");
       
    })

    $("#cible_choice").click(function () {
        $("#list_cible_choice").toggle(1000);
        $("#list_cible_choice").css("display", "flex", "!important");
        $("#list_cible_choice").css("justify-content", "right", "!important");
        $("#list_cible_choice").css("flex-wrap", "wrap", "!important");
    })

    $("#help_choice").click(function () {
        $("#list_help_choice").toggle(1000);
        $("#list_help_choice").css("display", "flex", "!important");
        $("#list_help_choice").css("justify-content", "right", "!important");
        $("#list_help_choice").css("flex-wrap", "wrap", "!important");
    })

    $("#content_choice").click(function () {
        $("#list_content_choice").toggle(1000);
        $("#list_content_choice").css("display", "flex", "!important");
        $("#list_content_choice").css("justify-content", "right", "!important");
        $("#list_content_choice").css("flex-wrap", "wrap", "!important");
    })


    // CHANGE VALIDATION CIRCLE

    $(".choixx").click(function (e) {
        console.log(this)
        $("#" + this.id + " .far").toggleClass("fa-circle");
        $("#" + this.id + " .far").toggleClass("fa-check-circle");
        $("#" + this.id + " .card").toggleClass("border-3 border-primary");
    })


    // ALERT WHEN CLICK ON THE CROSS 

    $(".close").click(function() {

        $(".css_background_alert").show();
        $(".alert").show();
        
        
        
    });

    $(".btn-close").click(function() {

        $(".alert").hide();
        $(".css_background_alert").hide();

    });

    $(".continue_creating").click(function(){

        $(".alert").hide();
        $(".css_background_alert").hide();

    });


    // 
    
    

});


