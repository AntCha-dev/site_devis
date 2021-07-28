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

    $("#submit").on('click', function(e) {
        e.preventDefault();
        current_fs = $(this).parent();
        next_fs = current_fs.next();
        let form_valid = true;
        for (let input of $("#last_field input[name!='telephone'], #last_field select")) {
            let input_valid = validation(input);
            if (input_valid == false) {
                form_valid = false
            }
        }
        if (form_valid != false) {
            $.ajax({
                url: 'script.php',
                type: 'post',
                data: $("#msform").serialize(),
                beforeSend: function() {
                    $('.ajax-loader').css({ "visibility": "visible" });
                },
                success: function(result) {
                    console.log(result);
                    $('.ajax-loader').css({ "visibility": "hidden" });
                    $("#div1").html(result);

                    $(".form-header").css({ 'display': 'none' });
                    $("#icon-bar").css({ 'display': 'none' });
                    $(".progress").css({ 'display': 'none' });

                    next_fs.show();
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
                }
            });
        }

    });

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


    $("#last_field input, #last_field select, #last_field textarea").blur(function(e) {
        validation(e.target);
    });

    function validation(input) {
        let myError = $("#error_" + input.id);
        let resultat = true;

        if (input.checkValidity() == false) {
            resultat = false;
            myError.html(input.validationMessage);
            console.log(myError);
            console.log(input.validationMessage);
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            myError.html(input.validationMessage);
        }
        return resultat;
    }
});
// START - RANGE_SLIDER
var settings = {
    visible: 0, 
    theme: {
      backgroud: "rgba(0,0,0,.9)",
    },
    CSSVarTarget: document.querySelector('.range-slider'),
    knobs: [
      "Thumb",
      {
        cssVar: ['thumb-size', 'px'],
        label: 'thumb-size',
        type: 'range',
        min: 6, max: 33 //  value: 16,
      },
      "Value",
      {
        cssVar: ['value-active-color'], // alias for the CSS variable
        label: 'value active color',
        type: 'color',
        value: 'white'
      },
      {
        cssVar: ['value-background'], // alias for the CSS variable
        label: 'value-background',
        type: 'color',
      },
      {
        cssVar: ['value-background-hover'], // alias for the CSS variable
        label: 'value-background-hover',
        type: 'color',
      },
      {
        cssVar: ['primary-color'], // alias for the CSS variable
        label: 'primary-color',
        type: 'color',
      },
      {
        cssVar: ['value-offset-y', 'px'],
        label: 'value-offset-y',
        type: 'range', value: 5, min: -10, max: 20
      },
      "Track",
      {
        cssVar: ['track-height', 'px'],
        label: 'track-height',
        type: 'range', value: 8, min: 6, max: 33
      },
      {
        cssVar: ['progress-radius', 'px'],
        label: 'progress-radius',
        type: 'range', value: 20, min: 0, max: 33
      },
      {
        cssVar: ['progress-color'], // alias for the CSS variable
        label: 'progress-color',
        type: 'color',
        value: '#EEEEEE'
      },
      {
        cssVar: ['fill-color'], // alias for the CSS variable
        label: 'fill-color',
        type: 'color',
        value: '#0366D6'
      },
      "Ticks",
      {
        cssVar: ['show-min-max'],
        label: 'hide min/max',
        type: 'checkbox',
        value: 'none'
      },
      {
        cssVar: ['ticks-thickness', 'px'],
        label: 'ticks-thickness',
        type: 'range',
        value: 1, min: 0, max: 10
      },
      {
        cssVar: ['ticks-height', 'px'],
        label: 'ticks-height',
        type: 'range',
        value: 5, min: 0, max: 15
      },
      {
        cssVar: ['ticks-gap', 'px'],
        label: 'ticks-gap',
        type: 'range',
        value: 5, min: 0, max: 15
      },
      {
        cssVar: ['min-max-x-offset', '%'],
        label: 'min-max-x-offset',
        type: 'range',
        value: 10, step: 1, min: 0, max: 100
      },
      {
        cssVar: ['min-max-opacity'],
        label: 'min-max-opacity',
        type: 'range', value: .5, step: .1, min: 0, max: 1
      },
      {
        cssVar: ['ticks-color'], // alias for the CSS variable
        label: 'ticks-color',
        type: 'color',
        value: '#AAAAAA'
      },
    ]
  }
  
  new Knobs(settings)
  // END - RANGE_SLIDER
  