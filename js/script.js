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

        var check = current_fs.find(":checkbox");

        if(check.filter(":checked").length == 0){
            $(".error_choice").show().fadeOut(3000);
            $(".error_choice").css("display", "table");
            $(".error_choice").css("margin", "0 auto");
        }else{
            console.log("C'est bon")

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
                
                if (current != 1) 
                    {$("#icon-bar div:nth-child(" + (current + 1) + ")").css({'display': 'block'});}

                setProgressBar(++current);
                $(".steps").text("Étape " + current + " sur " + steps);
                //replace fa-circle by fa-check

        };

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
        console.log(current_fs);
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
        if (current = 1) $(".previous").css({
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
        toggle_project_choice("new_site", "design_site");
    })

    $("#design_site").click(function () {
        toggle_project_choice("design_site", "new_site");

    });

    //function to toogle choice
    function toggle_project_choice(id1, id2) {
        $("#"+id1+"_choice").fadeToggle("slow");
        $("#"+id1+"_choice").css("display", "flex", "!important");
        $("#"+id1+"_choice").css("justify-content", "center", "!important");
        $("#"+id2).toggle(600);
        $(".next").fadeToggle("slow");
        $("#"+id2+"_choice").find(':input').each(function(index,element) {  //reset input
            element.checked = false;
        });

        $("#icon-bar #"+id1+"_icon").fadeToggle(300);
    
    };


    // ALERT WHEN CLICK ON THE CROSS 

    $(".close").click(function() {
        $(".css_background_alert").fadeIn("slow"); 
    });

    $(".btn-close").click(function() {
        $(".css_background_alert").fadeOut("slow");
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal-alert") ;
        if (event.target == modal) {
            $(".css_background_alert").fadeOut("slow");
        }
    }

    $(".continue_creating").click(function(){
        $(".css_background_alert").fadeOut("slow");
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal_alert");
        if (event.target == modal) {
            $(".css_background_alert").fadeOut("slow");
        }
      }

    // $(".css_background_alert").click(function(){
    //     $(".alert").hide();
    //     $(".css_background_alert").hide();
    // });
    

});


