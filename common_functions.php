<?php
function detailed_filesize($size, $counter=0){
  if ($size && $size <= 1024 && $counter <= 3) {
    switch ($counter){
      case 0:
        return "$size bytes";
      break;
      case 1:
        return "$size KB";
      break;
      case 2:
        return "$size MB";
      break;
      case 3:
        return "$size GB";
      break;
    }
  } elseif (!$size) {
    return "filesize too large to display";
  } else {
    return detailed_filesize(round($size/1024,1), $counter + 1);
  }
}
?>
