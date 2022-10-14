$(document).ready(function () {
  let swAbout2 = new Swiper(".sw-pf", {
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pf-pg",
      clickable: true,
    },
  });

  swAbout2.on("slideChange", function () {
    aboutMenu.removeClass("pf-listbox-focus");
    aboutMenu.eq(swAbout2.realIndex).addClass("pf-listbox-focus");
  });

  let aboutMenu = $(".pf-list > li > a");
  aboutMenu.eq(0).addClass("pf-listbox-focus");

  $.each(aboutMenu, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      aboutMenu.removeClass("pf-listbox-focus");
      aboutMenu.eq(index).addClass("pf-listbox-focus");
      swAbout2.slideTo(index + 1);
    });
  });
});

window.onload = function () {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

    breakpoints: {
      1050: {
        slidesPerView: 5,
        grid: {
          rows: 2,
        },
        spaceBetween: 40,
      },

      800: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
        spaceBetween: 0,
      },

      651: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
        spaceBetween: 20,
      },

      460: {
        slidesPerView: 4,
        grid: {
          rows: 1,
        },
        spaceBetween: 0,
      },
    },
  });

  new Waypoint({
    element: $(".profile"),
    handler: function (direction) {
      if (direction == "down") {
        $(".vs-img-2").css("opacity", "1");
        $(".vs-img-2").css("z-index", "2");
        $(".vs-img-3").css("opacity", "0");
      } else if (direction == "up") {
        $(".vs-img").css("opacity", "1");
        $(".vs-img-2").css("opacity", "0");
        $(".vs-img-3").css("opacity", "0");
      }
    },
    offset: "135%",
  });
  new Waypoint({
    element: $(".profile"),
    handler: function (direction) {
      if (direction == "down") {
        $(".vs-img").css("opacity", "0");
        $(".vs-img-2").css("opacity", "1");
        $(".vs-img-3").css("opacity", "1");
        $(".vs-img-3").css("z-index", "3");
      } else if (direction == "up") {
        $(".vs-img-3").css("opacity", "0");
        $(".vs-img-2").css("opacity", "1");
        $(".vs-img").css("opacity", "1");
      }
    },
    offset: "100%",
  });

  new Waypoint({
    element: $(".polygon-color"),
    handler: function (direction) {
      if (direction == "down") {
        $(".polygon-color").addClass("polygon-color-draw");
        $(".polygon-color").removeClass("polygon-color-remove");
      } else if (direction == "up") {
        $(".polygon-color").removeClass("polygon-color-draw");
        $(".polygon-color").addClass("polygon-color-remove");
      }
    },
    offset: "70%",
  });

  AOS.init();

  function makeCircle(_id, _str, _startColor, _endColor) {
    let bar = new ProgressBar.Circle(_id, {
      color: "#777",
      strokeWidth: 5,
      trailWidth: 0,
      easing: "easeOut",
      duration: 1300,

      text: {
        autoStyleContainer: false,
      },
      from: {
        color: _startColor,
        width: 5,
      },
      to: {
        color: _endColor,
        width: 5,
      },
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        let value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(_str + "<br>" + value);
        }
      },
    });
    bar.text.style.fontFamily = "LeferiBase";
    bar.text.style.fontSize = "15px";
    bar.text.style.color = "#333";
    return bar;
  }

  let bar_html = makeCircle(html, "HTML", "#ffffff", "#f9a35b");
  let bar_js = makeCircle(js, "JS", "#ffffff", "#fce55b");
  let bar_css = makeCircle(css, "CSS", "#ffffff", "#84bcf9");
  let bar_jquery = makeCircle(jquery, "JQuery", "#ffffff", "#c8c8c8");
  let bar_scss = makeCircle(scss, "SCSS", "#ffffff", "#f999cd");
  let bar_vue = makeCircle(vue, "Vue.js", "#ffffff", "#8de9b1");
  let bar_figma = makeCircle(figma, "Figma", "#ffffff", "#a9f6ff");
  let bar_github = makeCircle(github, "Github", "#ffffff", "#707070");
  let bar_photoshop = makeCircle(photoshop, "Phtoshop", "#ffffff", "#8cc8ff");
  let bar_illustrator = makeCircle(
    illustrator,
    "Illustrator",
    "#ffffff",
    "#fabd5b"
  );
  let bar_afec = makeCircle(afec, "AfterEffect", "#ffffff", "#cca6f8");
  let bar_premiere = makeCircle(premiere, "Premiere", "#ffffff", "#ea9bff");

  let barAni = () => {
    bar_html.animate(0.95);
    bar_js.animate(0.72);
    bar_css.animate(0.91);
    bar_jquery.animate(0.78);
    bar_scss.animate(0.8);
    bar_vue.animate(0.7);
    bar_figma.animate(0.9);
    bar_github.animate(0.9);
    bar_photoshop.animate(0.9);
    bar_illustrator.animate(0.93);
    bar_afec.animate(0.8);
    bar_premiere.animate(0.75);
  };

  let barAniRe = () => {
    bar_html.animate(0);
    bar_js.animate(0);
    bar_css.animate(0);
    bar_jquery.animate(0);
    bar_scss.animate(0);
    bar_vue.animate(0);
    bar_figma.animate(0);
    bar_github.animate(0);
    bar_photoshop.animate(0);
    bar_illustrator.animate(0);
    bar_afec.animate(0);
    bar_premiere.animate(0);
  };

  new Waypoint({
    element: $(".mySwiper .swiper-wrapper > div"),
    handler: function (direction) {
      if (direction == "down") {
        barAni();
      } else if (direction == "up") {
        barAniRe();
      }
    },
    offset: "90%",
  });

  let focusRemove = () => {
    $(".gnb li a").removeClass("menu-focus");
  };
  new Waypoint({
    element: $(".profile"),
    handler: function (direction) {
      focusRemove();
      if (direction == "down") {
        $(".profile-menu").addClass("menu-focus");
      } else if (direction == "up") {
        $(".profile-menu").addClass("menu-focus");
      }
    },
    offset: "20%",
  });
  new Waypoint({
    element: $(".portfolio"),
    handler: function (direction) {
      focusRemove();
      if (direction == "down") {
        $(".portfolio-menu").addClass("menu-focus");
      } else if (direction == "up") {
        $(".profile-menu").addClass("menu-focus");
      }
    },
    offset: "60%",
  });
  new Waypoint({
    element: $(".life"),
    handler: function (direction) {
      focusRemove();
      if (direction == "down") {
        $(".life-menu").addClass("menu-focus");
      } else if (direction == "up") {
        $(".portfolio-menu").addClass("menu-focus");
      }
    },
    offset: "60%",
  });
  new Waypoint({
    element: $(".vision"),
    handler: function (direction) {
      focusRemove();
      if (direction == "down") {
        $(".vision-menu").addClass("menu-focus");
      } else if (direction == "up") {
        $(".life-menu").addClass("menu-focus");
      }
    },
    offset: "50%",
  });

  new Waypoint({
    element: $(".vision"),
    handler: function (direction) {
      if (direction == "down") {
        $(".line").addClass("line-draw");
      } else if (direction == "up") {
        $(".line").addClass("line-draw");
      }
    },
    offset: "50%",
  });

  new Waypoint({
    element: $(".vision"),
    handler: function (direction) {
      if (direction == "down") {
        $(".later-1").css("opacity", 1);
        $(".delay-0").addClass("bigEntrance");
        setTimeout(() => {
          $(".later-3").css("opacity", 1);
          $(".delay-1").addClass("bigEntrance");
          setTimeout(() => {
            $(".later-5").css("opacity", 1);
            $(".delay-2").addClass("bigEntrance");
          }, 350);
        }, 350);
      } else if (direction == "up") {
        $(".later-1").css("opacity", 1);
        $(".delay-0").addClass("bigEntrance");
        setTimeout(() => {
          $(".later-3").css("opacity", 1);
          $(".delay-1").addClass("bigEntrance");
          setTimeout(() => {
            $(".later-5").css("opacity", 1);
            $(".delay-2").addClass("bigEntrance");
          }, 350);
        }, 350);
      }
    },
    offset: "50%",
  });

  let wW = window.innerWidth;
  let pfListbox = $(".pf-listbox");
  let vision_title = $(".vision .title");

  if (wW <= 760) {
    vision_title.attr("data-aos", "none");
  } else {
    vision_title.attr("data-aos", "flip-left");
  }
  if (wW <= 650) {
    pfListbox.attr("data-aos-offset", 0);
  } else {
    pfListbox.attr("data-aos-offset", 350);
  }

  $(window).resize(function () {
    wW = window.innerWidth;
    if (wW <= 650) {
      pfListbox.attr("data-aos-offset", 0);
      vision_title.attr("data-aos", "none");
    } else {
      pfListbox.attr("data-aos-offset", 350);
      vision_title.attr("data-aos", "flip-left");
    }
    if (wW <= 760) {
      vision_title.attr("data-aos", "none");
    } else {
      vision_title.attr("data-aos", "flip-left");
    }
  });
};
