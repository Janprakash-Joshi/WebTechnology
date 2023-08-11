<?php

    $item_id = $_POST['item_id'];
    echo $item_id;
  
  // Create a new PDF instance
  $pdf = new TCPDF();
  $pdf->AddPage();
  
  // Set font
  $pdf->SetFont('times', '', 12);
  
  // Add content to the PDF
  $content = 'Your receipt content here...';
  $pdf->Write(0, $content);
  
  // Output the PDF as a download
  $pdf->Output('receipt.pdf', 'D');
  
?>  