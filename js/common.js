$(document).ready(function(){
	
	$("#form").submit(function(){
		$.ajax({
			type: "POST",
			url: "../function/mail.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо за заявку!");
		});
		return false;
	});
});