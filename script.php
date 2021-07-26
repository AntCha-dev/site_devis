<?php

require_once 'dompdf/vendor/autoload.php';
use Dompdf\Dompdf;

$json = file_get_contents("data.json");
$src = json_decode($json, true);
$base  = $src["base"];
$total = $src["total"];
$data = array();
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
    //var_dump($data);
    echo intval($cumul*$base/$total);
}
else {
    echo 0;
} 