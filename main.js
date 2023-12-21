$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Programmer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Programmer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//Contact Form
$(document).ready(function () {
  var form = $("#form"),
    name = $("#name"),
    email = $("#email"),
    subject = $("#subject"),
    message = $("#message"),
    info = $("#info"),
    loader = $("#loader"),
    submit = $("#submit");

  form.on("input", "#name", "#email, #subject, #message", function () {
    $(this).css("border-color", "");
    info.html("").slideUp();
  });

  submit.on("click", function (e) {
    info.html("Loading...").css("color", "red").slideDown();
    e.preventDefault();
    if (validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json",
      }).done(function (data) {
        if (data.success) {
          email.val("");
          subject.val("");
          message.val("");
          info.html("Message sent!").css("color", "green").slideDown();
        } else {
          info
            .html("Could not send mail! Sorry!")
            .css("color", "red")
            .slideDown();
        }
      });
    }
  });

  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(name.val())) {
      email.css("border-color", "red");
      valid = false;
    }
    if (!regex.test(email.val())) {
      email.css("border-color", "red");
      valid = false;
    }
    if ($.trim(subject.val()) === "") {
      subject.css("border-color", "red");
      valid = false;
    }
    if ($.trim(message.val()) === "") {
      message.css("border-color", "red");
      valid = false;
    }

    return valid;
  }
});
