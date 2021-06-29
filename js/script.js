$(document).ready(function () {

    let carte_nouveau_site;
    let carte_refonte;
    let carte_langues;


    // LISTE CHOIX CAT 1
    // $("#liste_choix_nouveau_site").children();


    // GESTION DES ICONES EN HAUT DE LA BARRE DE PROGRESSION


    // CHOIX CAT 1
    $("#carte_nouveau_site").click(function () {


        $("#liste_choix_nouveau_site").toggle(1000);
        $("#liste_choix_nouveau_site").css("display", "flex", "!important");
        $("#liste_choix_nouveau_site").css("justify-content", "center", "!important");
        $("#carte_refonte").toggle(1000);




    })

    $("#carte_refonte").click(function () {


        $("#liste_choix_refonte").show();
        $("#liste_choix_refonte").css("display", "flex", "!important");
        $("#liste_choix_refonte").css("justify-content", "center", "!important");
        $("#carte_nouveau_site").hide();

    })

    // LIST CHOIX CAT 1

    $(".choixx").click(function (e) {
        console.log(this)
        $("#" + this.id + " .far").toggleClass("fa-circle");
        $("#" + this.id + " .far").toggleClass("fa-check-circle");
        $("#" + this.id + " .card").toggleClass("border-3 border-primary");
    })



    // AJAX

    $("#submit").click(function () {
        if (carte_nouveau_site == true) {
            string_data = "carte web=" + carte_nouveau_site + "&";
        }

        if (carte_refonte == true) {
            string_data += "refonte=" + carte_refonte + "&";
        }

        // $.ajax({
        //     url: "action.php",
        //     method: "post",
        //     // data: "carte web=" + carte_nouveau_site + "&refonte=" + carte_refonte,
        //     data: string_data,
        //     // 
        //     success: function (response) {
        //         $("#result").show();
        //         $("#result").html(response);
        //     }
        // });
    })






})