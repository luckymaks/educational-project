<?php 
	$recepient = "maksimenko.maksim.2310@gmail.com";
	$sitename = "karcher";

	$name = trim($_POST["full_name"]);
	$email = trim($_POST["email"]);
	$phone = trim($_POST["phone"]);
	$adres = trim($_POST["adres"]);
	$index = trim($_POST["index"]);
	$message = "Имя: $name \nEmail: $email \nТелефон: $phone \nАдрес: $adres \nИндекс: $index";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>