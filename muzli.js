var partner = "None"

function downloadMuzli() {
    if (browserName == 'safari' && !isIos) { 
        document.location.href = "https://itunes.apple.com/us/app/muzli-for-safari/id1462415100?mt=12" } 
    else if (isIos) {
        document.location.href = 'https://apps.apple.com/us/app/muzli/id1547818167'
    } else { 
        document.location.href = "https://chrome.google.com/webstore/detail/muzli-the-ultimate-design/glcipcfhmopcgidicgdociohdoicpdfc";
    }
}

$(".video-button").on("click", function() {
    $("#overlay").addClass("open");
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
});

$("#overlay").on("click", function(e) {
    if (e.target.className != "chromestoreLink-design cta") {
        $("#overlay").removeClass("open");
        setTimeout(function() {
            $("#player").attr("src", "");
            $("#player").attr("src", "https://www.youtube.com/embed/dYSIZ13yS64?rel=0&amp;controls=0");
        }, 500)
    }
})

$('header .dropdown .icon-play').click(function(e) {
    $(this).next().toggleClass('active');
})

$.ajax({
    url: 'https://api.muz.li/v1/user',
    dataType: 'json',
    type: 'GET',
    xhrFields: {
       withCredentials: true
    },
})
.done(function(user) {
    if (user.id) {
        $('header .cta').hide();
        $('header .user-meta').show();
        $('header .avatar img') .attr('src', user.photo);
    }
})

// Contact form submission
function submitContactForm(e) {

    var formData = $('#contact-form').serialize();

    $.post("/vendor/phpmailer/contact-form.php", formData)
        .done(function(data) {
            if (data == 'OK') {
                $('#contact-form .message').removeClass('error').addClass('success').text("Thank you! We'll be in touch shortly.").show();
                $('#contact-form input[type="text"], #contact-form input[type="email"], #contact-form textarea').val('');
            } else {
                if (data == 'fail_email') {
                    $('#contact-form .message').removeClass('success').addClass('error').text("Please provide a valid email address").show();
                } else {
                    $('#contact-form .message').removeClass('success').addClass('error').text("Something went wrong. Please try again later.").show();
                }
            }
        });
}


// Muzli inline install
$(".chromestoreLink-design, .feedSlide, .cta").click(function(e, i) {

    e.preventDefault();

    if ($(this).hasClass('lite-install')) { //lite install
        partner = "Lite";
        createCookie("isLite", true, 5);
    }

    if (window.ga && ga.create) {
        //ga ok
        ga('send', 'event', 'Download', "Button click - " + $(this).attr('class'), "Funnel: " + partner, {
            hitCallback: function() {
                downloadMuzli();
            }
        });
    } else {
        //ga blocked
        downloadMuzli();
    }
});

// Lite muzl install
$('.lite-install').click(function(e) {

    e.preventDefault();

    partner = "Lite";
    createCookie("isLite", true, 5);

    ga('send', 'event', 'Download', "Button click", "Funnel: " + partner);

    downloadMuzli();
    
});


//safari install tracking
$('.safariInstallLink').on('click', function(e) {
    e.stopPropagation();
    ga('send', 'event', 'Safari download success', "Button click");
    setTimeout(function() {
        document.location = '/safari-install/';
    }, 1500);
});


//mobile nav trigger
$('hamburger .trigger').on('click', function() {
    $('hamburger').toggleClass('active');
});

$('hamburger .overlay').on('click', function() {
    $('hamburger').removeClass('active');
});


//cookie creation
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";

    document.cookie = name + "=" + value + expires + "; path=/; SameSite=None; Secure";
}

