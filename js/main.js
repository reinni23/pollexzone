//all menu tab button

function allmenuClick() {
  if ($(".allmenutab").css("display") == "none") {
    $(".allmenutab").show();
    $(".bartop").css({
      "background-color": "#fff",
      "transform": "rotate(45deg)",
    });
    $(".barmid").css(
      'display','none'
    );
    $(".barbot").css({
      "background-color": "#fff",
      "transform": "rotate(-45deg)",
    });
  } else {
    $(".allmenutab").hide();
  }
}

//image scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//swiper
var swiper = new Swiper(".scroll", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

//각지점 선택시
$(document).ready(function () {
  $("#mapo").hover(function () {
    $("#mapo_txt").css("display", "block");
    $("#gongduk_txt").css("display", "none");
    $("#seoul_txt").css("display", "none");
  });
  $("#gongduk").hover(function () {
    $("#gongduk_txt").css("display", "block");
    $("#mapo_txt").css("display", "none");
    $("#seoul_txt").css("display", "none");
  });
  $("#seoul").hover(function () {
    $("#seoul_txt").css("display", "block");
    $("#gongduk_txt").css("display", "none");
    $("#mapo_txt").css("display", "none");
  });
});

$("#mapo").mouseenter(function () {
  $(".ma_img").css({ opacity: "1" });
  $(".go_img").css({ opacity: "0" });
  $(".se_img").css({ opacity: "0" });
});
$("#gongduk").mouseenter(function () {
  $(".go_img").css({ opacity: "1" });
  $(".ma_img").css({ opacity: "0" });
  $(".se_img").css({ opacity: "0" });
});
$("#seoul").mouseenter(function () {
  $(".se_img").css({ opacity: "1" });
  $(".ma_img").css({ opacity: "0" });
  $(".go_img").css({ opacity: "0" });
});
