<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire à plusieurs étapes en utilisant Bootstrap 4, jQuery, Ajax et PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/065a94aab4.js" crossorigin="anonymous"></script>
</head>

<body class="bg-light">


    <!-- PREMIERE CATEGORIE -->
    <div class="container">

        <div class="row">


            <div class="col-md-10">

                <!-- Barre des icônes au dessus de la barre de progression -->
                <!-- TEST ULPOAD 2 -->
                <div id="barre_icon">
                    <div id="icon_nouveau_site">
                        <div class="progress_card card mt-5 ms-5 container-fluid">
                            <img src="icon/globe.svg" class="card-img-top align-self-center mt-3" style="width: 100%;"
                                alt="...">
                        </div>
                    </div>
                </div>


                <div class="progress m-5" style="height: 10px;">
                    <div class="progress-bar" role="progressbar" id="progressBar">
                    </div>
                </div>

                <!-- CHOIX CAT 1 -->
                <div id="choix_projet">
                    <div id="carte_nouveau_site">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/globe.svg" class="card-img-top align-self-center mt-3" style="width: 40%;"
                                alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Nouveau site</a></p>
                            </div>
                        </div>
                    </div>
                    <div id="carte_refonte">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/rouleau-de-peinture.svg" class="card-img-top align-self-center mt-3"
                                style="width: 40%;" alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Refonte de site</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- CHOIX CAT 2 -->
                <div id="choix_objectif">
                    <div id="objectif">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/" class="card-img-top align-self-center mt-3" style="width: 40%;" alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Objectif du site</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <button type="submit" id="submit">envoyer</button>


                            <div id="result"></div> -->



                <!-- LISTE CHOIX NOUVEAU SITE -->
                <div id="liste_choix_nouveau_site">
                    <div class="choixx" id="carte_langues" value="25">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <span><i class="validation_card far fa-circle"></i></span>
                            <img src="icon/globe.svg" class="card-img-top align-self-center mt-3" style="width: 40%;"
                                alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">En plusieurs langues?</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="choixx" id="carte_domaine">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <span><i class="validation_card far fa-circle"></i></span>
                            <img src="icon/globe.svg" class="card-img-top align-self-center mt-3" style="width: 40%;"
                                alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Déjà un domaine?</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LISTE CHOIX REFONTE -->
                <div id="liste_choix_refonte">
                    <div class="choixx" id="carte_techno_obsolète">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/rouleau-de-peinture.svg" class="card-img-top align-self-center mt-3"
                                style="width: 40%;" alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Refonte de site</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="choixx" id="carte_graphismes_depassés">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/rouleau-de-peinture.svg" class="card-img-top align-self-center mt-3"
                                style="width: 40%;" alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Refonte de site</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="choixx" id="carte_repositionnement">
                        <div class="choix_card card mt-5 ms-5 container-fluid">
                            <img src="icon/rouleau-de-peinture.svg" class="card-img-top align-self-center mt-3"
                                style="width: 40%;" alt="...">
                            <div class="card-body">
                                <p class="card-text" style="font-size: 16px; text-align: center;"><a
                                        class="stretched-link" href="#">Refonte de site</a></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>



    </div>




    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
    <script src="js/script.js"></script>
</body>

</html>