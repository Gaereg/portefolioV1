<?php 
	$txt = $_GET['txt'];

	$towns = unserialize(file_get_contents('towns.txt'));
	$townsNb = count($towns);
	$reponse = array();
	sort($towns);

	for ($i = 0; $i<$townsNb && count($reponse)<10; $i++) {
		if(stripos($towns[$i], $txt) === 0) {
			array_push($reponse, $towns[$i]);
		}
	}

	echo implode('|', $reponse);
?>