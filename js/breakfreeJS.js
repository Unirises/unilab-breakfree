$("#arrow_c").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#bonus_1").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");
});
$("#sound_activate").on("click", function () {
  if ($("#vol").hasClass("d-none") && !$("#vol_mute").hasClass("d-none")) {
    $("#vol").removeClass("d-none");
    $("#vol_mute").addClass("d-none");

    $("#music_bg")[0].play();
    $("#music_bg")[0].volume = 0.5;
    $("#music_bg")[0].loop = true;
  } else {
    $("#vol").addClass("d-none");
    $("#vol_mute").removeClass("d-none");

    $("#music_bg")[0].pause();
  }
});

$(function () {
  $("#c3_ans").keyup(function (e) {
    if (e.which == 13) {
      $("#c3_check").trigger("click");
    }
  });
});
/* C1 Javascript */
$("#showHintBTN").on("click", function () {
  $("#HintModal").modal("show");
  $("#showHintBTN").css("opacity", "0");
});
$("#BACMBTN").on("click", function () {
  $("#HintModal").modal("hide");
  $("#showHintBTN").css("opacity", "1");
  $("#showHintBTN").attr("src", "img/c1_l_r1_c.png");
});
$("#todd, #john").on("click", function () {
  $("#t_j_b").addClass("d-none");
  $("#resultIcon").removeClass("d-none");
  $("#resultIcon").attr("src", "img/c1_wrong.png");
  $("#case_closed").removeClass("d-none");
  $("#case_closed").attr("src", "img/c1_unsolved.png");
  $(".menu_icon1").removeClass("d-none");
  $("#c1_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
  $("#sfx_case").attr("src", "music/wrong_answer.mp3");
  $("#sfx_case")[0].play();

  //c1 Timer Clear
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c1_timer").addClass("d-none");
});

$("#bill").on("click", function () {
  $("#t_j_b").addClass("d-none");
  $("#resultIcon").removeClass("d-none");
  $("#medal").removeClass("d-none");
  $("#case_closed").removeClass("d-none");
  $("#u_select").attr("src", "img/c1_bill_s.png");
  $(".menu_icon1").removeClass("d-none");
  $("#c1_result_logo").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();
  $("#suspect").text('BILL');

  //c1 Timer Clear
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c1_timer").addClass("d-none");
});

/* END C1 Javascript */





/* C2 Javascript */
$("#c2_s4").on("click", function () {
  $("#c2_m").addClass("d-none");
  $("#c2_s_c").removeClass("d-none");
  $("#c2_result_logo").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();
  //c1 Timer Clear
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c2_timer").addClass("d-none");
});
$("#c2_s1, #c2_s2, #c2_s3").on("click", function () {
  $("#c2_m").addClass("d-none");
  $("#c2_s_w").removeClass("d-none");
  $("#c2_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
  $("#sfx_case").attr("src", "music/wrong_answer.mp3");
  $("#sfx_case")[0].play();
  //c1 Timer Clear
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c2_timer").addClass("d-none");
});
//Exit Button
$("#c2_exit_c, #c2_exit_w").on("click", function () {
  // show C.A.R
  $("#choose_a_room").removeClass("d-none");

  // hide all case
  $("#crime_detective").addClass("d-none");

  $("#open_house").addClass("d-none");

  $("#driving_frenzy").addClass("d-none");

  $("#the_bartender").addClass("d-none");

  $("#class_dismissed").addClass("d-none");

  $("#animal_lover").addClass("d-none");

  $("#picture_perfect").addClass("d-none");

  $("#the_labyrinth").addClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg4");
  $("#bgBody").addClass("bg3");
});
// End c2 jS
// c3 js
$("#c3_check").on("click", function () {
  var getAnsC3 = $("#c3_ans").val();
  if (getAnsC3 != "") {
    if (getAnsC3 == "87") {
      $(".c3_result_anim").removeClass("d-none");
      $("#c3_m").addClass("d-none");
      $("#c3_r_c").removeClass("d-none");
      $(".menu_icon3").removeClass("d-none");
      $("#c3_result_logo").removeClass("d-none");
      $(".c3_timer").addClass("d-none");
      $("#sfx_case").attr("src", "music/right_answer.mp3");
      $("#sfx_case")[0].play();
      //c1 Timer Clear
      for (i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
      $(".c3_timer").addClass("d-none");
    } else {
      $(".c3_result_anim").removeClass("d-none");
      $("#c3_m").addClass("d-none");
      $("#c3_r_w").removeClass("d-none");
      $(".menu_icon3").removeClass("d-none");
      $("#c3_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
      $(".c3_timer").addClass("d-none");
      $("#sfx_case").attr("src", "music/wrong_answer.mp3");
      $("#sfx_case")[0].play();
      //c3 Timer Clear
      for (i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
      $(".c3_timer").addClass("d-none");
    }
  }
});
//c4 js
//Empty Bottle
var empty_bottle, bottle;

$("#c6_e_s1, #c6_e_s2, #c6_e_s3").on("change", function () {
  $("#c6_e_s1, #c6_e_s2, #c6_e_s3").not(this).prop("checked", false);
  empty_bottle = $('input[class="empty_bottle"]:checked').val();
  bottle = $('input[class="bottle"]:checked').val();
  console.log(empty_bottle + " " + bottle);
  if (!bottle || !empty_bottle) {
  } else {
    if (empty_bottle == bottle) {
      $("#glass_selected").removeClass("d-none");
      $("#c4_s2").addClass("d-none");
      setTimeout(function () {
        $("#glass_selected").addClass("d-none");
        $("#c4_e_s2").attr("src", "img/the_bartender/c4_glass.png");
        $("#c4_s2").attr("src", "img/the_bartender/c4_empty_glass.png");
        $("#c4_s2").removeClass("d-none");
        $("#sfx_case").attr("src", "music/right_answer.mp3");
        $("#sfx_case")[0].play();
        //c3 Timer Clear
      }, 500);
      setTimeout(function () {
        $("#c4_m").addClass("d-none");
        $("#c4_cheers").removeClass("d-none");
        $(".menu_icon4").removeClass("d-none");
        $("#c4_result_logo").removeClass("d-none");
        //c4 Timer Clear
        for (i = 0; i < 100; i++) {
          window.clearInterval(i);
        }
        $(".c4_timer").addClass("d-none");
      }, 1000);
    } else {
      $("#c4_m").addClass("d-none");
      $("#c4_wrong").removeClass("d-none");
      $(".menu_icon4").removeClass("d-none");
      $("#c4_bgChange")
        .removeClass("the_bartender_bg1")
        .addClass("the_bartender_bg2");
      $("#c4_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
      $("#sfx_case").attr("src", "music/wrong_answer.mp3");
      $("#sfx_case")[0].play();
      for (i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
      $("#c4_result_h1").html("Wrong!");
      $(".c4_timer").addClass("d-none");
    }
  }
});

$("#c6_s1, #c6_s2, #c6_s3").on("change", function () {
  $("#c6_s1, #c6_s2, #c6_s3").not(this).prop("checked", false);
  empty_bottle = $('input[class="empty_bottle"]:checked').val();
  bottle = $('input[class="bottle"]:checked').val();
  console.log(empty_bottle + " " + bottle);

  if (!bottle || !empty_bottle) {
  } else {
    if (empty_bottle == bottle) {
      $("#glass_selected").removeClass("d-none");
      $("#c4_s2").addClass("d-none");
      setTimeout(function () {
        $("#glass_selected").addClass("d-none");
        $("#c4_e_s2").attr("src", "img/the_bartender/c4_glass.png");
        $("#c4_s2").attr("src", "img/the_bartender/c4_empty_glass.png");
        $("#c4_s2").removeClass("d-none");
        $("#sfx_case").attr("src", "music/right_answer.mp3");
        $("#sfx_case")[0].play();
      }, 500);
      setTimeout(function () {
        $("#c4_m").addClass("d-none");
        $("#c4_cheers").removeClass("d-none");
        $(".menu_icon4").removeClass("d-none");
        $("#c4_result_logo").removeClass("d-none");
        //c4 Timer Clear
        for (i = 0; i < 100; i++) {
          window.clearInterval(i);
        }
        $(".c4_timer").addClass("d-none");
      }, 1000);
    } else {
      $("#c4_m").addClass("d-none");
      $("#c4_wrong").removeClass("d-none");
      $(".menu_icon4").removeClass("d-none");
      $("#sfx_case").attr("src", "music/wrong_answer.mp3");
      $("#sfx_case")[0].play();
      $("#c4_bg")
        .removeClass("the_bartender_bg1")
        .addClass("the_bartender_bg2");
      $("#c4_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
      for (i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
      $("#c4_result_h1").html("Wrong!");
      $(".c4_timer").addClass("d-none");
    }
  }
});

//Empty Bottle

//c5 js
$("#c4_card2").on("click", function () {
  $("#c5_m").addClass("d-none");
  $("#cd_bg")
    .removeClass("class_dismissed_bg")
    .addClass("class_dismissed_c_bg");
  $(".menu_icon5").removeClass("d-none");
  $("#c5_result_logo").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();

  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c5_timer").addClass("d-none");
});

$("#c4_card1, #c4_card3, #c4_card4").on("click", function () {
  $("#c5_m").addClass("d-none");
  $("#cd_bg")
    .removeClass("class_dismissed_bg")
    .addClass("class_dismissed_w_bg");
  $(".menu_icon5").removeClass("d-none");
  $("#c5_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
  $("#sfx_case").attr("src", "music/wrong_answer.mp3");
  $("#sfx_case")[0].play();

  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c5_timer").addClass("d-none");
});
//c6 js

$("#c6_yes").on("click", function () {
  setTimeout(function () {
    $(".c6_question").addClass("d-none");
    $(".c6_result").removeClass("d-none");
    $("#c6_result_img").attr("src", "img/animal_lover/c6_denied.png");
    $(".menu_icon6").removeClass("d-none");
    $("#c6_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    $("#sfx_case").attr("src", "music/wrong_answer.mp3");
    $("#c6_bg").removeClass("c6_main_bg").addClass("c6_w_bg");
    $("#sfx_case")[0].play();
    for (i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    $(".c6_timer").addClass("d-none");
  }, 400);
});
$("#c6_none").on("click", function () {
  setTimeout(function () {
    $(".c6_question").addClass("d-none");
    $(".c6_result").removeClass("d-none");
    $(".menu_icon6").removeClass("d-none");
    $("#c6_result_logo").removeClass("d-none");
    $("#c6_bg").removeClass("c6_main_bg").addClass("c6_s_bg");
    $("#sfx_case").attr("src", "music/right_answer.mp3");
    $("#sfx_case")[0].play();
    for (i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    $(".c6_timer").addClass("d-none");
  }, 400);
});

// c7 js

$("#c7_the").on("click", function () {
  $("#c7_m").addClass("d-none");
  $("#c7_r_c").removeClass("d-none");
  $(".menu_icon7").removeClass("d-none");
  $("#c7_result_logo").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c7_timer").addClass("d-none");
});

$("#c7_1, #c7_2, #c7_3, #c7_4, #c7_5, #c7_6, #c7_7, #c7_8, #c7_9, #c7_10").on(
  "click",
  function () {
    $("#c7_m").addClass("d-none");
    $("#c7_r_w").removeClass("d-none");
    $(".menu_icon7").removeClass("d-none");
    $("#c7_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    $("#sfx_case").attr("src", "music/wrong_answer.mp3");
    $("#sfx_case")[0].play();

    for (i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    $(".c7_timer").addClass("d-none");
  }
);

// c8 js
$("#c8_lion").on("click", function () {
  $("#c8_m").addClass("d-none");
  $("#c8_r_c").removeClass("d-none");
  $("#c8_bg").removeClass("the_labyrinth_bg").addClass("c8_c_bg");
  $(".menu_icon8").removeClass("d-none");
  $("#c8_result_logo").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c8_timer").addClass("d-none");
});
$("#c8_inferno, #c8_assassin").on("click", function () {
  $("#c8_m").addClass("d-none");
  $("#c8_r_w").removeClass("d-none");
  $("#c8_bg").removeClass("the_labyrinth_bg").addClass("c8_w_bg");
  $(".menu_icon8").removeClass("d-none");
  $("#c8_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
  $("#sfx_case").attr("src", "music/wrong_answer.mp3");
  $("#sfx_case")[0].play();
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
  $(".c8_timer").addClass("d-none");
});

// bonus1 js
$("#b1_s4").on("click", function () {
  if (window.matchMedia('(max-width: 1280px)').matches) {
    $("#b1_s4").css({
      "margin-top": "-200%",
      "margin-left": "-560%",
      "z-index": "1",
      transition: "3s",
    });
}else if (window.matchMedia('(max-width: 1440px)').matches) {
    $("#b1_s4").css({
      "margin-top": "-180%",
      "margin-left": "-620%",
      "z-index": "1",
      transition: "3s",
    });
}else {
    $("#b1_s4").css({
      "margin-top": "-260%",
      "margin-left": "-807%",
      "z-index": "1",
      transition: "3s",
    });
}
  setTimeout(function () {
    $("#b1_iS").attr("src", "img/bonus/s_bonus.png");
  $("#b1_r_ans").addClass("d-none");
  $("#b1_r_s").removeClass("d-none");
  $(".b1_bg_p").removeClass("d-none");
  $("#next_bonus").removeClass("d-none");
  $("#sfx_case").attr("src", "music/right_answer.mp3");
  $("#sfx_case")[0].play();
  $(".b-instruction").addClass("d-none");
  $("#b2_margin").removeClass("b_margin").css({"margin-top":"10%"})
  $("#b1_r_s").css({"margin-top":"10%"})
  }, 3000);
});

$("#b1_s1, #b1_s2, #b1_s3, #b1_s5, #b1_s6, #b1_s7, #b1_s8").on(
  "click",
  function () {
    $("#sfx_case").attr("src", "music/wrong_answer.mp3");
    $("#sfx_case")[0].play();

    $("#b1_r_ans").addClass("d-none");
    $("#b1_r_s").removeClass("d-none");
    $("#b2_margin").removeClass("b_margin").css({"margin-top":"10%"})
    $(".b-instruction").addClass("d-none");
    $("#next_bonus").removeClass("d-none");

    $("#b_wrong").removeClass("d-none");
  }
);

$("#next_bonus").on("click", function () {
  $("#bonus_1").addClass("d-none");
  $("#bonus_2").removeClass("d-none");
});

// bonus2 js
$('#next_ty').on('click',function(){
  $("#bonus_2").addClass("d-none");

  $("#thank_you_page").removeClass('d-none');
  $("#bgBody").removeClass("bg4");
  $("#bgBody").addClass("bg5");


});
$(".b2_five_key").on("click", function () {
  $(".b2_five_key").css({
    "margin-top": "-13%",
    "margin-left": "-27%",
    "z-index": "1",
    transform: "rotate(15deg)",
    transition: "3s",
  });
  setTimeout(function () {
    $("#b2_r_s, #b2_r_s_bg").removeClass("d-none");
    $(".keys").addClass("d-none");
    $("#sfx_case").attr("src", "music/right_answer.mp3");
    $("#sfx_case")[0].play();
    $('#next_ty').removeClass('d-none');
    $("#b2_ins").addClass('d-none');
    $("#b2_pl").addClass('d-none');
    $("#b2_gate").css({"opacity":"0"});
  }, 3000);
});
$(
  ".b2_one_key, .b2_two_key, .b2_three_key, .b2_four_key, .b2_six_key"
).on("click", function () {
  $("#sfx_case").attr("src", "music/wrong_answer.mp3");
  $("#sfx_case")[0].play();
});

// menu Icon
$(
  ".menu_icon1, .menu_icon2, .menu_icon3, .menu_icon4, .menu_icon5, .menu_icon6, .menu_icon7, .menu_icon8"
).on("click", function () {
  // show C.A.R
  $("#choose_a_room").removeClass("d-none");

  // hide all case
  $("#crime_detective").addClass("d-none");

  $("#open_house").addClass("d-none");

  $("#driving_frenzy").addClass("d-none");

  $("#the_bartender").addClass("d-none");

  $("#class_dismissed").addClass("d-none");

  $("#animal_lover").addClass("d-none");

  $("#picture_perfect").addClass("d-none");

  $("#the_labyrinth").addClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg4");
  $("#bgBody").addClass("bg3");
});

// case Select

$("#c1").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#crime_detective").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft = 25;
  //Timer Case
  var c1Timer = setInterval(function () {
    timeLeft--;
    document.getElementById("c1_timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(c1Timer);
      $(".c1_timer").addClass("d-none");
      $(".c1_t_up").removeClass("d-none");
      $("#t_j_b").addClass("d-none");
      $(".menu_icon1").removeClass("d-none");
      $("#c1_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c2").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#open_house").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft2 = 25;
  //Timer Case
  var c2Timer = setInterval(function () {
    timeLeft2--;
    document.getElementById("c2_timer").textContent = timeLeft2;
    if (timeLeft2 <= 0) {
      clearInterval(c2Timer);
      $(".c2_timer").addClass("d-none");
      $(".c2_t_up").removeClass("d-none");
      $("#c2_s_w").removeClass("d-none");
      $("#c2_label").addClass("d-none");
      $("#c2_m").addClass("d-none");
      $("#c2_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c3").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#driving_frenzy").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  //focus
  $(".df_input").focus();

  // run timer
  var timeLeft3 = 25;
  //Timer Case
  var c3Timer = setInterval(function () {
    timeLeft3--;
    document.getElementById("c3_timer").textContent = timeLeft3;
    if (timeLeft3 <= 0) {
      clearInterval(c3Timer);
      $(".c3_timer").addClass("d-none");
      $(".c3_result_anim").removeClass("d-none");
      $("#c3_m").addClass("d-none");
      $("#c3_r_t_up").removeClass("d-none");
      $(".menu_icon3").removeClass("d-none");
      $("#c3_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c4").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#the_bartender").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft4 = 25;
  //Timer Case
  var c4Timer = setInterval(function () {
    timeLeft4--;
    document.getElementById("c4_timer").textContent = timeLeft4;
    if (timeLeft4 <= 0) {
      clearInterval(c4Timer);
      $("#c4_m").addClass("d-none");
      $(".c4_timer").addClass("d-none");
      $("#c4_wrong").removeClass("d-none");
      $(".menu_icon4").removeClass("d-none");
      $("#c4_bgChange")
        .removeClass("the_bartender_bg1")
        .addClass("the_bartender_bg2");
      $("#c4_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c5").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#class_dismissed").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft5 = 25;
  //Timer Case
  var c5Timer = setInterval(function () {
    timeLeft5--;
    document.getElementById("c5_timer").textContent = timeLeft5;
    if (timeLeft5 <= 0) {
      clearInterval(c5Timer);

      $(".c5_timer").addClass("d-none");

      $("#c5_m").addClass("d-none");
      $("#cd_bg")
        .removeClass("class_dismissed_bg")
        .addClass("class_dismissed_w_bg");
      $(".menu_icon5").removeClass("d-none");
      $("#c5_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c6").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#animal_lover").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft6 = 25;
  //Timer Case
  var c6Timer = setInterval(function () {
    timeLeft6--;
    document.getElementById("c6_timer").textContent = timeLeft6;
    if (timeLeft6 <= 0) {
      clearInterval(c6Timer);

      $(".c6_timer").addClass("d-none");

      $(".c6_question").addClass("d-none");
      $(".c6_result").removeClass("d-none");
      $(".menu_icon6").removeClass("d-none");
      $("#c6_result_logo").removeClass("d-none");
      $(".c6_t_up").removeClass("d-none");
      $("#c6_result_img").addClass("d-none");
    }
  }, 1000);
});
$("#c7").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#picture_perfect").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft7 = 25;
  //Timer Case
  var c7Timer = setInterval(function () {
    timeLeft7--;
    document.getElementById("c7_timer").textContent = timeLeft7;
    if (timeLeft7 <= 0) {
      clearInterval(c7Timer);
      $(".c7_timer").addClass("d-none");
      $(".c7_w").text("TIME'S UP!");
      $("#c7_m").addClass("d-none");
      $("#c7_r_w").removeClass("d-none");
      $(".menu_icon7").removeClass("d-none");
      $("#c7_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});
$("#c8").on("click", function () {
  //hide C.A.R
  $("#choose_a_room").addClass("d-none");
  // Show Case
  $("#the_labyrinth").removeClass("d-none");

  //changing bg
  $("#bgBody").removeClass("bg3");
  $("#bgBody").addClass("bg4");

  // run timer
  var timeLeft8 = 25;
  //Timer Case
  var c8Timer = setInterval(function () {
    timeLeft8--;
    document.getElementById("c8_timer").textContent = timeLeft8;
    if (timeLeft8 <= 0) {
      clearInterval(c8Timer);
      $(".c8_timer").addClass("d-none");
      $("#c8_m").addClass("d-none");
      $("#c8_r_w").removeClass("d-none");
      $("#c8_bg").removeClass("the_labyrinth_bg").addClass("c8_w_bg");
      $(".menu_icon8").removeClass("d-none");
      $("#c8_result_logo").removeClass("d-none").attr("src", "img/trapped.png");
    }
  }, 1000);
});

//ENter Button
$("#enter_breakFree").on("click", function () {
  $("#bgBody").removeClass("bg1");
  $("#bgBody").addClass("bg_n");
  $(this).addClass("d-none");
  $("#play_btn_landing").removeClass("d-none");
  $("#sound_activate").addClass("d-none");
});
$("#breakFree_play_btn").on("click", function () {
  $("#play_btn_landing").addClass("d-none");
  $("#mechanics_game").removeClass("d-none");
  $("#bgBody").removeClass("bg_n");
  $("#bgBody").addClass("bg2");
});
$("#mechanics_play_btn").on("click", function () {
  $("#mechanics_game").addClass("d-none");
  $("#choose_a_room").removeClass("d-none");
  $("#bgBody").removeClass("bg2");
  $("#bgBody").addClass("bg3");
});

//set Time
