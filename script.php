<?php

require_once 'dompdf/vendor/autoload.php';
use Dompdf\Dompdf;

$json = file_get_contents("data.json");
$src = json_decode($json, true);
$base  = $src["base"];
$total = $src["total"];
$data = array();
$data['site']= strtoupper($_POST['site']);
$data['type']= $_POST['type'];
$data['nom']= strtoupper($_POST['nom']);
$data['prenom']= ucfirst($_POST['prenom']);
$data['email']= $_POST['email'];
$data['telephone']= $_POST['telephone'];
$data['email']= $_POST['email'];
$project = $_POST['project'];

$cumul = 0;
if (isset($_POST['project'])) {
    foreach($src as $key => $value) {
        if ($key == "project") {
            $data[$key] = $value[$_POST[$key]];
            $cumul += $value[$_POST[$key]][0];
        }
        if (is_array($value)) {
            foreach ($value as $key2 => $value2) {
                if (isset($_POST[$key2])) {
                    $data[$key][$key2]= $value2;
                    $cumul += $value2[0];
                }
            } 
        }
    }
    $cost = intval($cumul*$base/$total);

    $dompdf = new Dompdf();
    ob_start();
    include(dirname('__FILE__')."/template.php");
    $html = ob_get_clean();
    $num = sprintf('%04d', (rand(1, 999)));
    $dompdf = new Dompdf();
    $dompdf->load_html($html);

    // (Optional) Setup the paper size and orientation
    $dompdf->setPaper('A4');

    // Render the HTML as PDF
    $dompdf->render();

    // stock the generated PDF to filename
    $file = $dompdf->output();
    $filename = 'tmp/' . $num . '.pdf';
    file_put_contents($filename, $file);
    //var_dump($data['project'][1]);
    //var_dump($data);
    //var_dump($_POST);
    echo $cost;
}
else {
    echo 0;
} 
