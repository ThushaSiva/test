<?php
function csvToTable($csv_content){
  $table = "<table>";
  $rows = str_getcsv($csv_content, "\n");
  foreach($rows as &$row){
    $table .= "<tr>";
    $cells = str_getcsv($row);
    foreach($cells as &$cell){
      $table .= "<td>$cell</td>";
    }
    $table .= "</tr>";
  }
  $table .= "</table>";
  return $table;
}
