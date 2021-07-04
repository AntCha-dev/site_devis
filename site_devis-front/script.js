$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
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
        setProgressBar(++current);
    });

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
        setProgressBar(--current);
        if (current == 1) $(".previous").css({
            'display': 'none'
        });
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })



    // GESTION DES ICONES EN HAUT DE LA BARRE DE PROGRESSION


    // CHOIX CAT 1
    $("#carte_nouveau_site").click(function () {
        $("#liste_choix_nouveau_site").toggle(1000);
        $("#liste_choix_nouveau_site").css("display", "flex", "!important");
        $("#liste_choix_nouveau_site").css("justify-content", "center", "!important");
        $("#carte_refonte").toggle(1000);
    })

    $("#carte_refonte").click(function () {
        $("#liste_choix_refonte").toggle(1000);
        $("#liste_choix_refonte").css("display", "flex", "!important");
        $("#liste_choix_refonte").css("justify-content", "center", "!important");
        $("#carte_nouveau_site").toggle(1000);
    })


    $("#carte_objectifs").click(function () {
        $("#liste_choix_objectifs").toggle(1000);
        $("#liste_choix_objectifs").css("display", "flex", "!important");
        $("#liste_choix_objectifs").css("justify-content", "center", "!important");
    })

    $("#carte_suivi").click(function () {
        $("#liste_choix_suivi").toggle(1000);
        $("#liste_choix_suivi").css("display", "flex", "!important");
        $("#liste_choix_suivi").css("justify-content", "center", "!important");
    })

    $("#carte_cible").click(function () {
        $("#liste_choix_cible").toggle(1000);
        $("#liste_choix_cible").css("display", "flex", "!important");
        $("#liste_choix_cible").css("justify-content", "center", "!important");
    })

    $("#carte_contenu").click(function () {
        $("#liste_choix_contenance").toggle(1000);
        $("#liste_choix_contenance").css("display", "flex", "!important");
        $("#liste_choix_contenance").css("justify-content", "center", "!important");
    })

    // LIST CHOIX CAT 1

    $(".choixx").click(function (e) {
        console.log(this)
        $("#" + this.id + " .far").toggleClass("fa-circle");
        $("#" + this.id + " .far").toggleClass("fa-check-circle");
        $("#" + this.id + " .card").toggleClass("border-3 border-primary");
    })


});