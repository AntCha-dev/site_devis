$(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length; //=4

    setProgressBar(current);

    $(".next").click(function() {
        current_fs = $(this).parent();
        next_fs = current_fs.next();
        $(".previous").css({'display': 'block'});

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
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
        setProgressBar(++current);
        $(".steps").text("Étape "+current+ " sur "+steps);
    });

    $(".previous").click(function() {
        current_fs = $( "fieldset:nth-child("+current+")" )
        previous_fs = current_fs.prev();

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
                console.log(opacity);

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
        setProgressBar(--current);
        $(".steps").text("Étape "+current+ " sur "+steps);
        if (current==1) $(".previous").css({'display': 'none'});
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function() {
        return false;
    })


    let carte_nouveau_site;
    let carte_refonte;
    let carte_langues;


    // LISTE CHOIX CAT 1
    // $("#new_site_choice").children();


    // GESTION DES ICONES EN HAUT DE LA BARRE DE PROGRESSION

    $("#new_site").click(function () {


        $("#new_site_choice").toggle(1000);
        $("#new_site_choice").css("display", "flex", "!important");
        $("#new_site_choice").css("justify-content", "center", "!important");
        $("#design_site").toggle(1000);

    })

    $("#design_site").click(function () {


        $("#design_site_choice").toggle(1000);
        $("#design_site_choice").css("display", "flex", "!important");
        $("#design_site_choice").css("justify-content", "center", "!important");
        $("#new_site").toggle(1000);

    })

    // LIST CHOIX CAT 1

    $(".choixx").click(function (e) {
        console.log(this)
        $("#" + this.id + " .far").toggleClass("fa-circle");
        $("#" + this.id + " .far").toggleClass("fa-check-circle");
        $("#" + this.id + " .card").toggleClass("border-3 border-primary");
    })


});
