<?php
$array1 = ['A','B','C'];
$array2 = array('A','B','C');
$array3[0] = 'A';
$array3[1] ='B';
$array[2] = 'C';

print_r($array1);
$assoc1 =['A'=>'Apple','B'=>'Bear','C'=>'Chair'];
$assoc2 = array('A'=>'Apple','B'=>'Bear','C'=>'Chair');
$assoc3[0]='A';
$assoc3[1] = 'B';
$assoc3[2] = 'C';
$output = print_r($assoc1,true);
echo"</br>";
echo "<pre> $output </pre> "; 
?>