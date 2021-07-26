<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Template</title>
    <style type="text/css">
        * {
            margin: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
        }
        
        .container {
            padding: 10px
        }
        
        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
        }
        
        .logo {
            width: 150px;
            height: auto;
        }
        
        .title {
            margin-right: 25px;
            font-size: 24px;
            color: #4764af;
        }
        
        hr:not([size]) {
            height: 1px;
        }
        
        hr {
            margin: 1rem 0;
            color: inherit;
            background-color: currentColor;
            border: 0;
            opacity: .25;
        }
        
        .client {
            text-align: left;
            border: 1px soli gray;
            border-radius: 3px;
            padding: 5px;
            background-color: gainsboro;
        }
        
        .table {
            width: 100%;
            margin-bottom: 1em;
        }
        
        td {
            padding: 5px;
        }
        
        .conditions {
            font-size: 0.7em;
            color: #666;
        }
    </style>
</head>

<body>
    <div class="container">
        <table width="100%">
            <tr>
                <td>
                    <a href="www.exher.fr" target="_blank">
                        <img src="logo.png" class="logo">
                    </a>
                </td>
                <td align="right">
                    <h4 class="title">Devis</h4><br>
                    <p><strong>N° DEV01-<?php echo date('d-m-Y'); ?></strong></p>
                    <p>Date de creation :<?php echo date('d/m/Y', ) ?>; <br>
                     Valable jusqu'au : <?php echo date('d/m/Y', strtotime("+1 month")) ?></p>
                </td>
            </tr>
            <tr>
                <td width="60%">
                    <p>
                        <strong>Société Exher</strong><br>1 rue de terre neuve, Bât C <br> ZA Courtaboeuf, 91940 les Ulis <br> Tel: 01 00 00 00 00<br> Mail : contact@exher.fr
                    </p>

                </td>
                <td align="right">
                    <p class="client">
                        <strong>Energies54</strong><br> Réf. Client <em>C00022</em><br> 12 Rue de Verdun<br> 54250 JARNY
                    </p>
                </td>
            </tr>
        </table>
        <br><br>
        <h3 style="text-align: center;"><strong>Récapitulatif de projet</strong></h3>
        <br>

        <table class="table">
            <thead style="background-color: #4764af; color:white ">
                <tr>
                    <th>Etape</th>
                    <th>Nature de projet</th>
                    <th class="text-end ">Prix HT</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #d2defd ">
                    <td><b>1</b></td>
                    <td><b>Creation de site</b></td>
                    <td class="text-end "></td>
                </tr>

                <tr>
                    <td class="text-center ">1.1</td>
                    <td class="text-center ">plusieur langues</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr style="background-color: #d2defd ">
                    <td><b>2</b></td>
                    <td><b>Objectif de site</b></td>
                    <td class="text-end "></td>
                </tr>

                <tr>
                    <td class="text-center ">2.1</td>
                    <td class="text-center ">Vendre</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr style="background-color: #d2defd ">
                    <td><b>3</b></td>
                    <td><b>Options</b></td>
                    <td class="text-end "></td>
                </tr>

                <tr>
                    <td class="text-center ">3.1</td>
                    <td class="text-center ">Assistance technique</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr>
                    <td class="text-center ">3.2</td>
                    <td class="text-center ">Redaction</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr>
                    <td class="text-center ">3.2</td>
                    <td class="text-center ">SEO naturel</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr style="background-color: #d2defd ">
                    <td><b>4</b></td>
                    <td><b>Cible</b></td>
                    <td class="text-end "></td>
                </tr>

                <tr>
                    <td class="text-center ">4.1</td>
                    <td class="text-center ">Particulier</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr style="background-color: #d2defd ">
                    <td><b>5</b></td>
                    <td><b>Contenu</b></td>
                    <td class="text-end "></td>
                </tr>

                <tr>
                    <td class="text-center ">5.1</td>
                    <td class="text-center ">Nombre de page : 5</td>
                    <td class="text-end ">150,00€</td>
                </tr>

                <tr>
                    <td class="text-center ">5.2</td>
                    <td class="text-center ">Article</td>
                    <td class="text-end ">150,00€</td>
                </tr>

            </tbody>
        </table>
        <table class="table table-sm text-end ">
            <tr>
                <td width="60%"></td>
                <td><strong>Total HT</strong></td>
                <td class="text-end ">3 700,00€</td>
            </tr>
            <tr>
                <td width="60%"></td>
                <td>TVA 20%</td>
                <td class="text-end ">740,00€</td>
            </tr>
            <tr>
                <td width="60%"></td>
                <td style="background-color:#ff7f00 ; color:#fff"><strong>Total TTC</strong></td>
                <td class="text-end " style="background-color:#ff7f00; color:#fff ">4 440,00€</td>
            </tr>
        </table>

        <p class="conditions ">
            Et avec nos remerciements pour votre estimation.
        </p>

        <hr>

    </div>
</body>

</html>