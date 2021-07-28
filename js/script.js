

console.log(presentation);

$(document).ready(function() {

    // FUNCTION QUI PERMET L'AFFICHAGE DES ICONES BAR APRES AVOIR CLIQUER SUR NEXT

    var current_fs, next_fs, previous_fs, step_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length; //=4


    setProgressBar(current);

    $(".next").click(function() {
        current_fs = $(this).parent();
        next_fs = current_fs.next();
        $(".previous").css({
            'display': 'block'
        });

        var check = current_fs.find(":checkbox");

        if (check.filter(":checked").length == 0) {
            $(".error_choice").show();
            $(".error_choice").css("display", "block");
        } else {
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

            if (current != 1) {
                $("#icon-bar div:nth-child(" + (current + 1) + ")").addClass("show");
            }

            setProgressBar(++current);
            $(".steps").text("Étape " + current + " sur " + steps);
            //replace fa-circle by fa-check

        };

    });

    // FUNCTION QUI PERMET DE RETOURNER EN ARRIERE AVEC LE BOUTTON RETOUR (<)

    $(".previous").click(function() {
        current_fs = $("fieldset:nth-child(" + current + ")")
        previous_fs = current_fs.prev();

        if (current == 1) {
            if ($('input#project').val() == "new_site")
                toggle_project_choice("new_site", "design_site");
            if ($('input#project').val() == "design_site")
                toggle_project_choice("design_site", "new_site");
        } else if (current > 1) {
            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now) {
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
        }
    });

    //  FUNCTION QUI PERMET UN RETOUR EN ARRIERE DES ETAPES EN CLIQUANT SUR LES ICONES BAR

    $("#icon-bar .icon-item").click(function() {
        var n = $(this).index();
        if (n < 2) n++;

        current_fs = $("fieldset:nth-child(" + current + ")");
        step_fs = $("fieldset:nth-child(" + n + ")");

        if (current != n) {

            //show the n fieldset
            step_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now) {
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
            //set current to n step to handle next action
            current = n;
            $(".steps").text("Étape " + n + " sur " + steps);
        }

    });



    // FUNCTION PROGRESS BAR


    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    // $("#submit").on('click', function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         url: 'script.php',
    //         type: 'post',
    //         data: $("#msform").serialize(),
    //         beforeSend: function() {
    //             $('.ajax-loader').css({ "visibility": "visible" });
    //         },
    //         success: function(result) {
    //             $('.ajax-loader').css({ "visibility": "hidden" });
    //             console.log(result);
    //             $("#div1").html(result);
    //         }
    //     });

    // });

    // TOGGLE ANIMATION WHEN CLICK ON SECTION
    $("#new_site").click(function() {
        toggle_project_choice("new_site", "design_site");
        $('input#project').val("new_site");
    })

    $("#design_site").click(function() {
        toggle_project_choice("design_site", "new_site");
        $('input#project').val("design_site");

    });

    //function to toogle choice
    function toggle_project_choice(id1, id2) {
        $("#" + id1 + "_choice").fadeToggle("slow");
        $("#" + id1 + "_choice").css("display", "flex", "!important");
        $("#" + id1 + "_choice").css("justify-content", "center", "!important");
        $("#" + id2).toggle(600);
        $(".next").fadeToggle("slow");
        $("#" + id2 + "_choice").find(':input').each(function(index, element) { //reset input
            element.checked = false;
        });
        $("#icon-bar #" + id1 + "_icon").addClass("show");
        $(".previous").toggle();
    }


    // ALERT WHEN CLICK ON THE CROSS 

    $(".close").click(function() {
        $(".css_background_alert").fadeIn("slow");
    });

    $(".btn-close").click(function() {
        $(".css_background_alert").fadeOut("slow");
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal-alert");
        if (event.target == modal) {
            $(".css_background_alert").fadeOut("slow");
        }
    }

    $(".continue_creating").click(function() {
        $(".css_background_alert").fadeOut("slow");
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal_alert");
        if (event.target == modal) {
            $(".css_background_alert").fadeOut("slow");
        }
    }

    $(".checkbox").change(function() {
        $(".error_choice").hide();
    });



    // Validation form

let myForm = $("#msform");



myForm.submit(function(e){
    let form_valid = true;
    for(let input of $("#last_field input, #last_field select, #last_field textarea")){
        let input_valid = validation(input);
            if(input_valid == false){
                form_valid = false
            }
    }
    if(form_valid == false){
        e.preventDefault();
    }else{
        $.ajax({
            url: 'script.php',
            type: 'post',
            data: $("#msform").serialize(),
            beforeSend: function() {
                $('.ajax-loader').css({ "visibility": "visible" });
            },
            success: function(result) {
                $('.ajax-loader').css({ "visibility": "hidden" });
                console.log(result);
                $("#div1").html(result);
            }
        });
    } 
});

$("#last_field input, #last_field select, #last_field textarea").blur(function(e){
    validation(e.target);
});

function validation(input){
    let myError = $("#error_" + input.id);
    let resultat = true;

    if(input.checkValidity() == false){
        resultat = false;
        myError.html(input.validationMessage);
        console.log(myError);
        console.log(input.validationMessage);
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }else{
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        myError.html(input.validationMessage);
    }
    return resultat;
}
});



