$(document).ready(function(){
	/*owlCarouse*/
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    margin:20,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop:true,
    smartSpeed:1000,
	});
	/*end owlCarouse*/
	
	/*up button*/
	$('.btn-top').hide();
		var win_h = $(window).height();
		$(window).scroll(function(){
			if($(this).scrollTop() > win_h){
				$('.btn-top').fadeIn(500);
			}
			if($(this).scrollTop() <= win_h){
				$('.btn-top').fadeOut(500);
			}
		});
		$('.btn-top').click(function(){
			$('body, html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		/*end up button*/
		/*smooth scrolling*/
		$('#nav').on("click", "a", function(event){
		event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 1000);
	});
		/*end smooth scrolling*/

		/*down button*/
		$('#mouse').on("click", "a", function(e){
			e.preventDefault();
				var id = $(this).attr('href'),
						top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 1000);
		});
		$('.pay').on("click", "a", function(e1){
			e1.preventDefault();
				var id = $(this).attr('href'),
						top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 1000);
		});
		/*end down button*/

		/*hamburger*/
		$('#nav-hamburger').click(function(){
			$('#nav').toggleClass('show');
		});
		$('#nav-hamburger').click(function(){
		$(this).toggleClass('open');
	});
	/*end hamburger*/
	/*validation*/
  $('.check-box_name').hide();
  $('.check-box_name').hide();
  $('.error-box_phone').hide();
  $('.error-box_phone').hide();
	// Устанавливаем обработчик потери фокуса для всех полей ввода текста
   $('input#full_name, input#phone').unbind().blur( function(){

      // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
       var id = $(this).attr('id');
       var val = $(this).val();

     // Перебираем значения id, совпадающие с id данного поля
     switch(id){
      // Проверка поля "Имя"
      case 'full_name':
        var rv_full_name = /^[a-zA-Zа-яА-Я]+\s[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение
          if(val.length > 5 && val != '' && rv_full_name.test(val)){
          	$('.star-box_name').hide();
          	$('.check-box_name').show();
          	$('.error-box_name').hide();
          }
          else
          {
          	$('.star-box_name').hide();
            $('.check-box_name').hide();
            $('.error-box_name').show();
          }
      break;
    // Проверка телефона
    case 'phone':
      var rv_phone = /^[0-9]{9,12}/;
        if(val != '' && rv_phone.test(val)){
          $('.star-box_phone').hide();
          $('.check-box_phone').show();
          $('.error-box_phone').hide();
        }
        else
        {
        	$('.star-box_phone').hide();
         	$('.check-box_phone').hide();
          $('.error-box_phone').show();
        }
    	break;
   	}
  });
});