<?php
	if(!empty($_POST['data'])) {
		$data = $_POST['data'];
		$fname = mktime() . ".txt";
		
		$file = fopen("./data/" .$fname, 'w');
		fwrite($file, $data);
		fclose($file);
	}
?>