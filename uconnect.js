(function($) {
		
	$(document).ready(function(){
	        $("sup").tooltip(
        	{
	                position: {
                        	my: "left-20 top-70",
                	}
        	}
	        );
			 
 
 $('.faq-box-1,.faq-box-2,.faq-box-3').on("click",function(){
      $(window).scrollTop(220);
 });
 
 $('.faq-box-4,.faq-box-5,.faq-box-6').on("click",function(){
      $(window).scrollTop(630);
 });
 
 $('.faq-box-7').on("click",function(){
      $(window).scrollTop(830);
 });
 
 function doToggle(num) {
      var target = $('div.target' + num);
      target.toggle();
      $('.target').not(target).hide();
      $('#text').css('display', $('div.target:visible').length ? 'none' : '')
  }
  $('#clicks.click').click(function () {
      var num = $(this).data('target');
      doToggle(num);
  });
  function handleHash() {
      doToggle("." + location.hash.substring(1));
  }
  window.onhashchange = handleHash;
  // $(handleHash);
  
  var baseUrl = document.location.origin;
  var lang = $('html').attr('lang');
  var pathtoqt = baseUrl + "/" + lang + "/support/quicktips"; 
  
  $(".quick-advice-faq").click(function() {
	window.open(pathtoqt,'_blank');

  });
  
  var spans = $('.faq-icon-pic');
  spans.text('');
  
  $('#edit-vin-submit').attr('disabled',true);
  $('#edit-vin-submit').css('opacity', '0.5');
    
    $('#edit-captcha-response, #edit-vin-value').keyup(function(){
        if(($('#edit-captcha-response').val().length !=0) && ($('#edit-vin-value').val().length !=0)){
            $('#edit-vin-submit').attr('disabled', false);
			$('#edit-vin-submit').css('opacity', '1');
        }
        else
        {
            $('#edit-vin-submit').attr('disabled', true);
			$('#edit-vin-submit').css('opacity', '0.5');
        }
    });
	
	/*$('#edit-vin-value').keyup(function(){
        if($(this).val().length !=0){
            $('#edit-vin-submit').attr('disabled', false);
			$('#edit-vin-submit').css('opacity', '1');
        }
        else
        {
            $('#edit-vin-submit').attr('disabled', true);
			$('#edit-vin-submit').css('opacity', '0.5');
        }
    });*/
  


                /*
                 *  START SYSTEM VEHICLE
                 */


		jQuery(".systemVehicle").bind("click", function() {
			jQuery(".systemVehicle").removeClass("current");
			jQuery(this).addClass("current");
		});
                /*
                 *  END SYSTEM VEHICLE
                 */


                /*
                 *  START CAROUSEL
                 */

        jQuery(".jcarousel-prev").css("display", "none");
        jQuery(".jcarousel-next").css("display", "none");
        var numbli = jQuery(".jcarousel> ul >li").size();
        var count = 0;
        var overflow = numbli - 4;

        jQuery("#vehicleContainer").css("left", "0");
		
        if (numbli > 4) {
            jQuery(".jcarousel-next").css("display", "block");
            jQuery('.jcarousel').jcarousel();
            jQuery(".jcarousel-next").click(function () {
                jQuery('.jcarousel').jcarousel('scroll', '+=1', true);
				count++;
                control();
            });

            jQuery(".jcarousel-prev").click(function () {
                jQuery('.jcarousel').jcarousel('scroll', '-=1');
				count--;
                jQuery(".jcarousel-prev").css("display", "block");
                control();
            });
        }

        function control() {
            if (count > 0 && count < overflow) {
                jQuery(".jcarousel-next").css("display", "block");
                jQuery(".jcarousel-prev").css("display", "block");
				jQuery('.jcarousel-prev').hide();
				jQuery('.jcarousel-next').hide();
				setTimeout("jQuery('.jcarousel-prev').show();", 500);
				setTimeout("jQuery('.jcarousel-next').show();", 500);
            }
            if (count == 0) {
                jQuery(".jcarousel-next").css("display", "block");
                jQuery(".jcarousel-prev").css("display", "none");
				jQuery('.jcarousel-next').hide();
				setTimeout("jQuery('.jcarousel-next').show();", 500);
            }
            if (count == overflow) {
                jQuery(".jcarousel-next").css("display", "none");
                jQuery(".jcarousel-prev").css("display", "block");
				jQuery('.jcarousel-prev').hide();
				setTimeout("jQuery('.jcarousel-prev').show();", 500);
            }

        }

                /*
                 *  END CAROUSEL
                 */
        
        $('#language-nav li').hover(
                function () {
                    //mostra sottomenu
                    $('ul', this).stop(true, true).delay(50).slideDown(100);
         
                }, 
                function () {
                    //nascondi sottomenu
                    $('ul', this).stop(true, true).slideUp(200);        
                }
            );

	var $_GET = {};

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
	    function decode(s) {
        	return decodeURIComponent(s.split("+").join(" "));
	    }

	    $_GET[decode(arguments[1])] = decode(arguments[2]);
	});

	if($_GET["popup"] == 'reg'){
		$('#new_account a').click();
	}

	if($_GET["popup"] == 'resetPwd'){
		$('#forgot_pass a').click();
	}

	if($_GET["popup"] == 'doubleoptin'){
        	$('#doubleoptin a').click();
	}

        if($_GET["popup"] == 'regFriend'){
                $('#regFriend a').click();
        }

	if($_GET["popup"] == 'updateFriend'){
                $('#updateFriend a').click();
        }

        if($_GET["popup"] == 'forgot'){
                $('#forgot_pass a').click();
        }

	if($_GET["popup"] == 'profiledisabled'){
                $('#profiledisabled a').click();
        }
	if($_GET["popup"] == 'LocalToSocial'){
                $('#LocalToSocialMsg a').click();
        }

	if($_GET["popup"] == 'ProfileManagement'){
                $('#profile_management_div a').click();
        }
		
	if($_GET["popup"] == 'Goto_myFiat'){
                $('#goto_myfiat_div a').click();
        }

  	if(typeof $_GET["error"]!="undefined" && $_GET["error"]!='AUTHENTICATION_FAILED'){
                $('#error_modal a').click();
        }
	var enabled= false;

	function enable_slide_down(){
		enabled=true;
		$("header .menu__link").bind('mouseenter', function (){
				$("#headerGlow").hide(0);
				$(".popup_items").hide(0);
				$(".bloccoHeader").hide(0);
				$(".blocco"+this.id).fadeIn("500", "swing");
				$(".blocco"+this.id).find(".popup_items").slideDown("300", "swing");
				$(".menu__link.hover").removeClass('hover');
				$("#"+this.id).addClass('hover');
		});

		$("#logo").bind('mouseenter', function ()  {
				$(".bloccoHeader").fadeOut("100", "swing");
				$(".bloccoHeader").find(".popup_items").slideUp("400", "swing");
				$("#headerGlow").fadeIn(1300);
				$(".menu__link.hover").removeClass('hover');
		});

		$("header .bloccoHeader").bind('mouseleave', function ()  {
				$(".bloccoHeader").fadeOut("100", "swing");
				$(".bloccoHeader").find(".popup_items").slideUp("400", "swing");
				$("#headerGlow").fadeIn(1300);
				$(".menu__link.hover").removeClass('hover');
		});
		
		$("#language-nav").bind('mouseenter', function ()  {
				$("#language-nav .menu__link").addClass('hover');
		});	
		$("#language-nav").bind('mouseleave', function ()  {
				$("#language-nav .menu__link.hover").removeClass('hover');
		});	
		
	}
	/* for login */

	if($_GET["popup"] == 'Login'){
                        $("#headerGlow").hide();
                        $(".popup_items").hide();
                        $(".bloccoHeader").hide();
                        $(".bloccologinsaml").fadeIn("500", "swing");
                        $(".bloccologinsaml").find(".popup_items").slideDown("300", "swing");
        		$('#login_saml_block_anonymous_login .box_right').append('<a onclick="close_login()" class="close_login"><img title="Close window" src="/sites/all/modules/login_saml/img/btn_close_black.png" typeof="foaf:Image"></a>');
			$("header .close_login").bind('click', function ()  {
				$(".bloccoHeader").fadeOut("100", "swing");
        	                $(".bloccoHeader").find(".popup_items").slideUp("400", "swing");
	                        $("#headerGlow").fadeIn(1300);
				if(!enabled) enable_slide_down();
			});
	}else{
        	enable_slide_down();
	}
	
	if(!!window.performance && window.performance.navigation.type == 2)
	{
      window.location.reload();
	}

// dcr_32 contact us
	
	$(document).on("click",".brand-links li",function(e){
    if (!$(this).hasClass("current")) {
	  $("li.current").removeClass("current");
      $(this).addClass("current");
	}
	else{
	   e.preventDefault();	
	}
	});
	
	$('.sw-link').on("click",function(e){
	  e.preventDefault();
      $('.click-sw-link').show();
    });
	
	
	$('#fiat-italy-third-form, #fiat-italy-third-uclive, #fiat-germany-third-div, #fiat-germany-third-uclive, #fiat-spain-third, #fiat-spain-third-uclive, #fiat-united-kingdom-third, #fiat-united-kingdom-third-uclive, #fiat-france-third, #fiat-france-third-uclive, #fiat-austria-third, #fiat-austria-third-uclive, #fiat-switzerland-third, #fiat-switzerland-third-uclive, #fiat-belgium-third, #fiat-belgium-third-uclive, #fiat-netherlands-third, #fiat-netherlands-third-uclive, #fiat-luxembourg-third, #fiat-luxembourg-third-uclive, #fiat-portugal-third, #fiat-portugal-third-uclive, #fiat-poland-third, #fiat-poland-third-uclive, #fiat-denmark-third, #fiat-denmark-third-uclive, #fiat-sweden-third, #fiat-sweden-third-uclive, #fiat-hungary-third, #fiat-hungary-uclive, #fiat-czech-republic-third, #fiat-czech-republic-uclive, #fiat-slovak-republic-third, #fiat-slovak-republic-uclive, #fiat-finland-third, #fiat-finland-uclive, #fiat-greece-third, #fiat-greece-uclive, #fiat-ireland-third, #fiat-ireland-uclive, #fiat-bulgaria-third, #fiat-bulgaria-uclive, #fiat-cyprus-third, #fiat-cyprus-uclive, #fiat-estonia-third, #fiat-estonia-uclive, #fiat-latvia-third, #fiat-latvia-uclive, #fiat-lithuania-third, #fiat-lithuania-uclive, #fiat-malta-third, #fiat-malta-uclive, #fiat-romania-third, #fiat-romania-uclive, #fiat-slovenia-third, #fiat-slovenia-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#alfa-romeo-italy-third, #alfa-romeo-italy-uclive, #alfa-romeo-germany-third, #alfa-romeo-germany-uclive, #alfa-romeo-spain-third, #alfa-romeo-spain-uclive, #alfa-romeo-united-kingdom-third, #alfa-romeo-united-kingdom-uclive, #alfa-romeo-france-third, #alfa-romeo-france-uclive, #alfa-romeo-austria-third, #alfa-romeo-austria-uclive, #alfa-romeo-switzerland-third, #alfa-romeo-switzerland-uclive, #alfa-romeo-belgium-third, #alfa-romeo-belgium-uclive, #alfa-romeo-netherlands-third, #alfa-romeo-netherlands-uclive, #alfa-romeo-luxembourg-third, #alfa-romeo-luxembourg-uclive, #alfa-romeo-portugal-third, #alfa-romeo-portugal-uclive, #alfa-romeo-poland-third, #alfa-romeo-poland-uclive, #alfa-romeo-denmark-third, #alfa-romeo-denmark-uclive, #alfa-romeo-sweden-third, #alfa-romeo-sweden-uclive, #alfa-romeo-hungary-third, #alfa-romeo-hungary-uclive, #alfa-romeo-czech-republic-third, #alfa-romeo-czech-republic-uclive, #alfa-romeo-slovak-republic-third, #alfa-romeo-slovak-republic-uclive, #alfa-romeo-finland-third, #alfa-romeo-finland-uclive, #alfa-romeo-greece-third, #alfa-romeo-greece-uclive, #alfa-romeo-ireland-third, #alfa-romeo-ireland-uclive, #alfa-romeo-bulgaria-third, #alfa-romeo-bulgaria-uclive, #alfa-romeo-cyprus-third, #alfa-romeo-cyprus-uclive, #alfa-romeo-estonia-third, #alfa-romeo-estonia-uclive, #alfa-romeo-latvia-third, #alfa-romeo-latvia-uclive, #alfa-romeo-lithuania-third, #alfa-romeo-lithuania-uclive, #alfa-romeo-malta-third, #alfa-romeo-malta-uclive, #alfa-romeo-romania-third, #alfa-romeo-romania-uclive, #alfa-romeo-slovenia-third, #alfa-romeo-slovenia-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#lancia-italy-third, #lancia-italy-uclive, #lancia-germany-third, #lancia-germany-uclive, #lancia-spain-third, #lancia-spain-uclive, #lancia-united-kingdom-third, #lancia-united-kingdom-uclive, #lancia-france-third, #lancia-france-uclive, #lancia-austria-third, #lancia-austria-uclive, #lancia-switzerland-third, #lancia-switzerland-uclive, #lancia-belgium-third, #lancia-belgium-uclive, #lancia-netherlands-third, #lancia-netherlands-uclive, #lancia-luxembourg-third, #lancia-luxembourg-uclive, #lancia-portugal-third, #lancia-portugal-uclive, #lancia-poland-third, #lancia-poland-uclive, #lancia-denmark-third, #lancia-denmark-uclive, #lancia-sweden-third, #lancia-sweden-uclive, #lancia-hungary-third, #lancia-hungary-uclive, #lancia-czech-republic-third, #lancia-czech-republic-uclive, #lancia-slovak-republic-third, #lancia-slovak-republic-uclive, #lancia-finland-third, #lancia-finland-uclive, #lancia-greece-third, #lancia-greece-uclive, #lancia-ireland-third, #lancia-ireland-uclive, #lancia-bulgaria-third, #lancia-bulgaria-uclive, #lancia-cyprus-third, #lancia-cyprus-uclive, #lancia-estonia-third, #lancia-estonia-uclive, #lancia-latvia-third, #lancia-latvia-uclive, #lancia-lithuania-third, #lancia-lithuania-uclive, #lancia-malta-third, #lancia-malta-uclive, #lancia-romania-third, #lancia-romania-uclive, #lancia-slovenia-third, #lancia-slovenia-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#fiat-pro-italy-third, #fiat-pro-italy-uclive, #fiat-pro-germany-third, #fiat-pro-germany-uclive, #fiat-pro-spain-third, #fiat-pro-spain-uclive, #fiat-pro-united-kingdom-third, #fiat-pro-united-kingdom-uclive, #fiat-pro-france-third, #fiat-pro-france-uclive, #fiat-pro-austria-third, #fiat-pro-austria-uclive, #fiat-pro-switzerland-third, #fiat-pro-switzerland-uclive, #fiat-pro-belgium-third, #fiat-pro-belgium-uclive, #fiat-pro-netherlands-third, #fiat-pro-netherlands-uclive, #fiat-pro-luxembourg-third, #fiat-pro-luxembourg-uclive, #fiat-pro-portugal-third, #fiat-pro-portugal-uclive, #fiat-pro-poland-third, #fiat-pro-poland-uclive, #fiat-pro-denmark-third, #fiat-pro-denmark-uclive, #fiat-pro-sweden-third, #fiat-pro-sweden-uclive, #fiat-pro-hungary-third, #fiat-pro-hungary-uclive, #fiat-pro-czech-republic-third, #fiat-pro-czech-republic-uclive, #fiat-pro-slovak-republic-third, #fiat-pro-slovak-republic-uclive, #fiat-pro-finland-third, #fiat-pro-finland-uclive, #fiat-pro-greece-third, #fiat-pro-greece-uclive, #fiat-pro-ireland-third, #fiat-pro-ireland-uclive, #fiat-pro-bulgaria-third, #fiat-pro-bulgaria-uclive, #fiat-pro-cyprus-third, #fiat-pro-cyprus-uclive, #fiat-pro-estonia-third, #fiat-pro-estonia-uclive, #fiat-pro-latvia-third, #fiat-pro-latvia-uclive, #fiat-pro-lithuania-third, #fiat-pro-lithuania-uclive, #fiat-pro-malta-third, #fiat-pro-malta-uclive, #fiat-pro-romania-third, #fiat-pro-romania-uclive, #fiat-pro-slovenia-third, #fiat-pro-slovenia-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#jeep-market-italy-third, #jeep-market-italy-uclive, #jeep-market-germany-third, #jeep-market-germany-uclive, #jeep-market-spain-third, #jeep-market-spain-uclive, #jeep-market-united-kingdom-third, #jeep-market-united-kingdom-uclive, #jeep-market-france-third, #jeep-market-france-uclive, #jeep-market-austria-third, #jeep-market-austria-uclive, #jeep-market-switzerland-third, #jeep-market-switzerland-uclive, #jeep-market-belgium-third, #jeep-market-belgium-uclive, #jeep-market-netherlands-third, #jeep-market-netherlands-uclive, #jeep-market-luxembourg-third, #jeep-market-luxembourg-uclive, #jeep-market-luxembourg-uclive, #jeep-market-portugal-third, #jeep-market-portugal-uclive, #jeep-market-poland-third, #jeep-market-poland-uclive, #jeep-market-denmark-third, #jeep-market-denmark-uclive, #jeep-market-sweden-third, #jeep-market-sweden-uclive, #jeep-market-hungary-third, #jeep-market-hungary-uclive, #jeep-market-czech-republic-third, #jeep-market-czech-republic-uclive, #jeep-market-slovak-republic-third, #jeep-market-slovak-republic-uclive, #jeep-market-finland-third, #jeep-market-finland-uclive, #jeep-market-greece-third, #jeep-market-greece-uclive, #jeep-market-ireland-third, #jeep-market-ireland-uclive, #jeep-market-bulgaria-third, #jeep-market-bulgaria-uclive, #jeep-market-cyprus-third, #jeep-market-cyprus-uclive, #jeep-market-estonia-third, #jeep-market-estonia-uclive, #jeep-market-latvia-third, #jeep-market-latvia-uclive, #jeep-market-lithuania-third, #jeep-market-lithuania-uclive, #jeep-market-malta-third, #jeep-market-malta-uclive, #jeep-market-romania-third, #jeep-market-romania-uclive, #jeep-market-slovenia-third, #jeep-market-slovenia-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#fiat-italy-second-profiled, #fiat-italy-second-profiled-uclive, #fiat-germany-second-profiled, #fiat-germany-second-profiled-uclive, #fiat-spain-second-profiled, #fiat-spain-second-profiled-uclive, #fiat-united-kingdom-second-profiled, #fiat-united-kingdom-second-profiled-uclive, #fiat-france-second-profiled, #fiat-france-second-profiled-uclive, #fiat-austria-second-profiled, #fiat-austria-second-profiled-uclive, #fiat-switzerland-second-profiled, #fiat-switzerland-second-profiled-uclive, #fiat-belgium-second-profiled, #fiat-belgium-second-profiled-uclive, #fiat-netherlands-second-profiled, #fiat-netherlands-second-profiled-uclive, #fiat-luxembourg-second-profiled, #fiat-luxembourg-second-profiled-uclive, #fiat-portugal-second_profiled, #fiat-portugal-second-profiled-uclive, #fiat-poland-second-profiled, #fiat-poland-second-profiled-uclive, #fiat-denmark-second-profiled, #fiat-denmark-second-profiled-uclive, #fiat-sweden-second-profiled, #fiat-sweden-second-profiled-uclive, #fiat-hungary-second-profiled, #fiat-hungary-second-profiled-uclive, #fiat-czech-republic-second-profiled, #fiat-czech-republic-second-profiled-uclive, #fiat-slovak-republic-second-profiled, #fiat-slovak-republic-second-profiled-uclive, #fiat-finland-second-profiled, #fiat-finland-second-profiled-uclive, #fiat-greece-second-profiled, #fiat-greece-second-profiled-uclive, #fiat-ireland-second-profiled, #fiat-ireland-second-profiled-uclive, #fiat-bulgaria-second-profiled, #fiat-bulgaria-second-profiled-uclive, #fiat-cyprus-second-profiled, #fiat-cyprus-second-profiled-uclive, #fiat-estonia-second-profiled, #fiat-estonia-second-profiled-uclive, #fiat-latvia-second-profiled, #fiat-latvia-second-profiled-uclive, #fiat-lithuania-second-rofiled, #fiat-lithuania-second-profiled-uclive, #fiat-malta-second-profiled, #fiat-malta-second-profiled-uclive, #fiat-romania-second-profiled, #fiat-romania-second-profiled-uclive, #fiat-slovenia-second-profiled, #fiat-slovenia-second-profiled-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#alfa-italy-second-profiled, #alfa-italy-second-profiled-uclive, #alfa_germany_second_profiled, #alfa-germany-second-profiled-uclive, #alfa-spain-second-profiled, #alfa-spain-second-profiled-uclive, #alfa-united-kingdom-second-profiled, #alfa-united-kingdom-second-profiled-uclive, #alfa-france-second-profiled, #alfa-france-second-profiled-uclive, #alfa-austria-second-profiled, #alfa-austria-second-profiled-uclive, #alfa-switzerland-second-profiled, #alfa-switzerland-second-profiled-uclive, #alfa-belgium-second-profiled, #alfa-belgium-second-profiled-uclive, #alfa-netherlands-second-profiled, #alfa-netherlands-second-profiled-uclive, #alfa-luxembourg-second-profiled, #alfa-luxembourg-second-profiled-uclive, #alfa-portugal-second-profiled, #alfa-portugal-second-profiled-uclive, #alfa-poland-second-profiled, #alfa-poland-second-profiled-uclive, #alfa-denmark-second-profiled, #alfa-denmark-second-profiled-uclive, #alfa-sweden-second-profiled, #alfa-sweden-second-profiled-uclive, #alfa-hungary-second-profiled, #alfa-hungary-second-profiled-uclive, #alfa-czech-republic-second-profiled, #alfa-czech-republic-second-profiled-uclive, #alfa-slovak-republic-second-profiled, #alfa-slovak-republic-second-profiled-uclive, #alfa-finland-second-profiled, #alfa-finland-second-profiled-uclive, #alfa-greece-second-profiled, #alfa-greece-second-profiled-uclive, #alfa-ireland-second-profiled, #alfa-ireland-second-profiled-uclive, #alfa-bulgaria-second-profiled, #alfa-bulgaria-second-profiled-uclive, #alfa-cyprus-second-profiled, #alfa-cyprus-second-profiled-uclive, #alfa-estonia-second-profiled, #alfa-estonia-second-profiled-uclive, #alfa-latvia-second-profiled, #alfa-latvia-second-profiled-uclive, #alfa-lithuania-second-profiled, #alfa-lithuania-second-profiled-uclive, #alfa-malta-second-profiled, #alfa-malta-second-profiled-uclive, #alfa-romania-second-profiled, #alfa-romania-second-profiled-uclive, #alfa-slovenia-second-profiled, #alfa-slovenia-second-profiled-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#jeep-italy-second-profiled, #jeep-italy-second-profiled-uclive, #jeep-germany-second-profiled, #jeep-germany-second-profiled-uclive, #jeep-spain-second-profiled, #jeep-spain-second-profiled-uclive, #jeep-united-kingdom-second-profiled, #jeep-united-kingdom-second-profiled-uclive, #jeep-france-second-profiled, #jeep-france-second-profiled-uclive, #jeep-austria-second-profiled, #jeep-austria-second-profiled-uclive, #jeep-switzerland-second-profiled, #jeep-switzerland-second-profiled-uclive, #jeep-belgium-second-profiled, #jeep-belgium-second-profiled-uclive, #jeep-netherlands-second-profiled, #jeep-netherlands-second-profiled-uclive, #jeep-luxembourg-second-profiled, #jeep-luxembourg-second-profiled-uclive, #jeep-portugal-second-profiled, #jeep-portugal-second-profiled-uclive, #jeep-poland-second-profiled, #jeep-poland-second-profiled-uclive, #jeep-denmark-second-profiled, #jeep-denmark-second-profiled-uclive, #jeep-sweden-second-profiled, #jeep-sweden-second-profiled-uclive, #jeep-hungary-second-profiled, #jeep-hungary-second-profiled-uclive, #jeep-czech-republic-second-profiled, #jeep-czech-republic-second-profiled-uclive, #jeep-slovak-republic-second-profiled, #jeep-slovak-republic-second-profiled-uclive, #jeep-finland-second-profiled, #jeep-finland-second-profiled-uclive, #jeep-greece-second-profiled, #jeep-greece-second-profiled-uclive, #jeep-ireland-second-profiled, #jeep-ireland-second-profiled-uclive, #jeep-bulgaria-second-profiled, #jeep-bulgaria-second-profiled-uclive, #jeep-cyprus-second-profiled, #jeep-cyprus-second-profiled-uclive, #jeep-estonia-second-profiled, #jeep-estonia-second-profiled-uclive, #jeep-latvia-second-profiled, #jeep-latvia-second-profiled-uclive, #jeep-lithuania-second-profiled, #jeep-lithuania-second-profiled-uclive, #jeep-malta-second-profiled, #jeep-malta-second-profiled-uclive, #jeep-romania-second-profiled, #jeep-romania-second-profiled-uclive, #jeep-slovenia-second-profiled, #jeep-slovenia-second-profiled-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#lancia-italy-second-profiled, #lancia-italy-second-profiled-uclive, #lancia-germany-second-profiled, #lancia-germany-second-profiled-uclive, #lancia-spain-second-profiled, #lancia-spain-second-profiled-uclive, #lancia-united-kingdom-second-profiled, #lancia-united-kingdom-second-profiled-uclive, #lancia-france-second-profiled, #lancia-france-second-profiled-uclive, #lancia-austria-second-profiled, #lancia-austria-second-profiled-uclive, #lancia-switzerland-second-profiled, #lancia-switzerland-second-profiled-uclive, #lancia-belgium-second-profiled, #lancia-belgium-second-profiled-uclive, #lancia-netherlands-second-profiled, #lancia-netherlands-second-profiled-uclive, #lancia-luxembourg-second-profiled, #lancia-luxembourg-second-profiled-uclive, #lancia-portugal-second-profiled, #lancia-portugal-second-profiled-uclive, #lancia-poland-second-profiled, #lancia-poland-second-profiled-uclive, #lancia-denmark-second-profiled, #lancia-denmark-second-profiled-uclive, #lancia-sweden-second-profiled, #lancia-sweden-second-profiled-uclive, #lancia-hungary-second-profiled, #lancia-hungary-second-profiled-uclive, #lancia-czech-republic-second-profiled, #lancia-czech-republic-second-profiled-uclive, #lancia-slovak-republic-second-profiled, #lancia-slovak-republic-second-profiled-uclive, #lancia-finland-second-profiled, #lancia-finland-second-profiled-uclive, #lancia-greece-second-profiled, #lancia-greece-second-profiled-uclive, #lancia-ireland-second-profiled, #lancia-ireland-second-profiled-uclive, #lancia-bulgaria-second-profiled, #lancia-bulgaria-second-profiled-uclive, #lancia-cyprus-second-profiled, #lancia-cyprus-second-profiled-uclive, #lancia-estonia-second-profiled, #lancia-estonia-second-profiled-uclive, #lancia-latvia-second-profiled, #lancia-latvia-second-profiled-uclive, #lancia-lithuania-second-profiled, #lancia-lithuania-second-profiled-uclive, #lancia-malta-second-profiled, #lancia-malta-second-profiled-uclive, #lancia-romania-second-profiled, #lancia-romania-second-profiled-uclive, #lancia-slovenia-second-profiled, #lancia-slovenia-second-profiled-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });
	
	$('#fiat-pro-italy-second-profiled, #fiat-pro-italy-second-profiled-uclive, #fiat-pro-germany-second-profiled, #fiat-pro-germany-second-profiled-uclive, #fiat-pro-spain-second-profiled, #fiat-pro-spain-second-profiled-uclive, #fiat-pro-united-kingdom-second-profiled, #fiat-pro-united-kingdom-second-profiled-uclive, #fiat-pro-france-second-profiled, #fiat-pro-france-second-profiled-uclive, #fiat-pro-austria-second-profiled, #fiat-pro-austria-second-profiled-uclive, #fiat-pro-switzerland-second-profiled, #fiat-pro-switzerland-second-profiled-uclive, #fiat-pro-belgium-second-profiled, #fiat-pro-belgium-second-profiled-uclive, #fiat-pro-netherlands-second-profiled, #fiat-pro-netherlands-second-profiled-uclive, #fiat-pro-luxembourg-second-profiled, #fiat-pro-luxembourg-second-profiled-uclive, #fiat-pro-portugal-second-profiled, #fiat-pro-portugal-second-profiled-uclive, #fiat-pro-poland-second-profiled, #fiat-pro-poland-second-profiled-uclive, #fiat-pro-denmark-second-profiled, #fiat-pro-denmark-second-profiled-uclive, #fiat-pro-sweden-second-profiled, #fiat-pro-sweden-second-profiled-uclive, #fiat-pro-hungary-second-profiled, #fiat-pro-hungary-second-profiled-uclive, #fiat-pro-czech-republic-second-profiled, #fiat-pro-czech-republic-second-profiled-uclive, #fiat-pro-slovak-republic-second-profiled, #fiat-pro-slovak-republic-second-profiled-uclive, #fiat-pro-finland-second-profiled, #fiat-pro-finland-second-profiled-uclive, #fiat-pro-greece-second-profiled, #fiat-pro-greece-second-profiled-uclive, #fiat-pro-ireland-second-profiled, #fiat-pro-ireland-second-profiled-uclive, #fiat-pro-bulgaria-second-profiled, #fiat-pro-bulgaria-second-profiled-uclive, #fiat-pro-cyprus-second-profiled, #fiat-pro-cyprus-second-profiled-uclive, #fiat-pro-estonia-second-profiled, #fiat-pro-estonia-second-profiled-uclive, #fiat-pro-latvia-second-profiled, #fiat-pro-latvia-second-profiled-uclive, #fiat-pro-lithuania-second-profiled, #fiat-pro-lithuania-second-profiled-uclive, #fiat-pro-malta-second-profiled, #fiat-pro-malta-second-profiled-uclive, #fiat-pro-romania-second-profiled, #fiat-pro-romania-second-profiled-uclive, #fiat-pro-slovenia-second-profiled, #fiat-pro-slovenia-second-profiled-uclive').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
	  $(".load-third-page-div").show();
	  $(window).scrollTop(80);

      return true;
    });

  $('.httpsrdrct').click(function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    window.location = 'http:' + href;
  });

  var pfCookieName = "opncl_performance";
  var pfCookieValue = getCookie(pfCookieName);
  if (pfCookieValue != "" && pfCookieValue == "false") {
    var domainUrl = document.domain.replace(/(https?:\/\/)?(www.)?/i, '');
    domainUrl = domainUrl.split('.');
    domainUrl = domainUrl.slice(domainUrl.length - 2).join('.');

    ["_ga", "_gid", "_gat"].forEach(function(gaCookie) {  
      gaCookieVal = getCookie(gaCookie);
      if(gaCookieVal != false) {
        document.cookie = gaCookie+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+domainUrl+";path=/";
      }
    });
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') 
        c = c.substring(1);
      if (c.indexOf(name) != -1) 
        return c.substring(name.length,c.length);
    }
    return false;
  }

  // $('#block-menu-menu-footer-links .menu li:nth-child(3)').append( "<span> - 3rd!</span>" );
  $('#block-menu-menu-footer-links .menu').append('<li class="menu__item is-leaf leaf"><a href="javascript:getCookieOpenModal()" class="menu__link cl-policy-link">Cookie Policy</a></li>');

  });
})(jQuery);

