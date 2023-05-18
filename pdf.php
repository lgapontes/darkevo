<?php

require __DIR__.'/vendor/autoload.php';

use Spipu\Html2Pdf\Html2Pdf;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Exception\ExceptionFormatter;

try {
    ob_start();
    require __DIR__.'/res/form.php';
    $content = ob_get_clean();

    $width = 1240;
    $height = 1755;
    $width_in_mm = ($width/96) * 25.4;
    $height_in_mm = ($height/96) * 25.4;

    /*
    $width_in_mm = 317.5;
    $height_in_mm = 245.79791667;
    */

    $html2pdf = new HTML2PDF('P', array($width_in_mm,$height_in_mm), 'en', true, 'UTF-8', array(0, 0, 0, 0));

    //$html2pdf->setDefaultFont("Georgia");

    $html2pdf->pdf->SetDisplayMode('fullpage');
    $html2pdf->writeHTML($content);

    $nome_arquivo = 'Dark Evo ' . substr(md5(date("D M j G:i:s T Y") . strval(rand(0,100))),0,6) . '.pdf';

    $html2pdf->output($nome_arquivo);
} catch (Html2PdfException $e) {
    $html2pdf->clean();

    $formatter = new ExceptionFormatter($e);
    echo $formatter->getHtmlMessage();
}
