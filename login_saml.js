(function($){

  $(document).ready(function(){

    function login_errors_show( event ) {
      var lang = $('html').attr('lang');

      if($('#username').val()==""){
        $('#username').css('border','1px solid red');
        if(lang=='it')
          $('#login_error_msg_user').html('Per favore, inserisci la tua email');
        else if(lang=='es')
          $('#login_error_msg_user').html('Por favor, introduce tu email');
        else if(lang=='fr')
          $('#login_error_msg_user').html("Veuillez s' il vous pla\u00EEt entrer votre adresse e-mail");
        else if(lang=='de')
          $('#login_error_msg_user').html("Bitte gib Deine E-Mail-Adresse an");
        else if(lang=='nl')
          $('#login_error_msg_user').html("Vul uw e-mail");
        else if(lang=='el')
          $('#login_error_msg_user').html("\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2");
        else if(lang=='fi')
          $('#login_error_msg_user').html("Ole hyv\u00E4 ja anna s\u00E4hk\u00F6postiosoitteesi");
        else if(lang=='pl')
          $('#login_error_msg_user').html("Prosze wpisz sw\u00F3j email");
        else if(lang=='hu')
          $('#login_error_msg_user').html("K\u00E9rj\u00FCk adja meg email c\u00EDm\u00E9t");
        else if(lang=='sv')
          $('#login_error_msg_user').html("Ange din e-postadress");
        else if(lang=='cs')
          $('#login_error_msg_user').html("Pros\u00EDm, zadejte svuj email");
        else if(lang=='sk')
          $('#login_error_msg_user').html("Vlo\u017Ete v\u00E1\u0161 email, pros\u00EDm");
        else if(lang=='da')
          $('#login_error_msg_user').html("Indtast venligst din email");
        else if(lang=='pt')
          $('#login_error_msg_user').html("Por favor, insira seu email");
        else
          $('#login_error_msg_user').html('Please enter your email');
        event.preventDefault();
      }else{
        $('#username').css('border','none');
        $('#login_error_msg_user').html('');
      }

      if($('#pass').val()==""){
        $('#pass').css('border','1px solid red');
        if(lang=='it')
          $('#login_error_msg_pass').html('Per favore, inserisci la tua password');
        else if(lang=='es')
          $('#login_error_msg_pass').html('Por favor, introduce tu contrase\u00F1a');
        else if(lang=='fr')
          $('#login_error_msg_pass').html("Veuillez s' il vous pla\u00EEt entrer votre mot de passe");
        else if(lang=='de')
          $('#login_error_msg_pass').html("Bitte gib Dein Passwort ein");
        else if(lang=='nl')
          $('#login_error_msg_pass').html("Vul je wachtwoord in");
        else if(lang=='el')
          $('#login_error_msg_pass').html("\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE, \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2");
        else if(lang=='fi')
          $('#login_error_msg_pass').html("Ole hyv\u00E4 ja anna salasanasi");
        else if(lang=='pl')
          $('#login_error_msg_pass').html("Prosze podaj swoje haslo");
        else if(lang=='hu')
          $('#login_error_msg_pass').html("K\u00E9rj\u00FCk adja meg jelszav\u00E1t");
        else if(lang=='sv')
          $('#login_error_msg_pass').html("V\u00E4nligen ange ditt l\u00F6senord");
        else if(lang=='cs')
          $('#login_error_msg_pass').html("Pros\u00EDm, zadejte sv\u00E9 heslo");
        else if(lang=='sk')
          $('#login_error_msg_pass').html("Vlo\u017Ete va\u0161e heslo, pros\u00EDm");
        else if(lang=='da')
          $('#login_error_msg_pass').html("Indtast venligst dit password");
        else if(lang=='pt')
          $('#login_error_msg_pass').html("Por favor, insira sua senha");
        else
          $('#login_error_msg_pass').html('Please enter your password');
        event.preventDefault();
      }else{
        $('#pass').css('border','none');
        $('#login_error_msg_pass').html('');
      }
    }

    $('#login-saml-login-form').submit(login_errors_show);
    
    var country = $('.form-item-country');
    
    if (!country) {
      $('.form-item-country').css('background-color','gray');
    }
  
    $(document).on('click','.link_jq',function( event ){
      event.preventDefault();
      var url = $(this).attr("href")+'#'+ $(this).attr("fragment");
      window.open(url,'_blank','width=1000, height=500, scrollbars=1',''); 
    });

    $(document).on('click','.pulsanti',function( event ){
      $('html,body').animate({ scrollTop: 0 }, 700);
    });
    // Reset page
    $('.pulsanti .cancel_btn').click(function() {
      location.href="/"+jQuery('html').attr('lang');
    });     
    $(document).on('mouseover','.consensi',function( event ){
      $('.tooltip').tooltip({position: { my: "right-150 top-50",}});      
    });
    
    $('#login-saml-vehicle-check-vin-form').submit(function() {
      var pass = true;
  
      if(pass == false){
      return false;
      }
      
      $(".load-third-page-div").show();
      $(window).scrollTop(80);

      return true;
    });

    $(document).on('click','.form-item-accept-profiling-3rdparty > label > div', function() {
      $("div[id^='edit-partners-list-container']").show();
      $("input[id^='edit-accept-profiling-3rdparty-f']").prop("checked", false)
    });

    $(document).on('click',"input[id^='edit-accept-profiling-3rdparty-f']", function() {
      $("div[id^='edit-partners-list-container']").hide();
    });

  });
})(jQuery);
