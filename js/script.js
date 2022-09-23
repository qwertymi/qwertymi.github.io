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

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grid: {
      rows: 2,
    },
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

window.onload = function () {
  new Waypoint({
    element: $(".polygon-color"),
    handler: function (direction) {
      if (direction == "down") {
        $(".polygon-color").addClass("polygon-color-draw");
      } else if (direction == "up") {
        $(".polygon-color").addClass("polygon-color-draw");
      }
    },
    offset: "70%",
  });

  AOS.init();

  function makeCircle(_id, _str, _startColor, _endColor) {
    let bar = new ProgressBar.Circle(_id, {
      color: "#777",
      strokeWidth: 50,
      trailWidth: 50,
      easing: "easeOut",
      duration: 1400,

      text: {
        autoStyleContainer: false,
      },
      from: {
        color: _startColor,
        width: 50,
      },
      to: {
        color: _endColor,
        width: 50,
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
    bar.text.style.fontSize = "24px";
    bar.text.style.color = "#333";
    return bar;
  }

  let bar_html = makeCircle(html, "HTML", "#e73c7e", "#C9D1FF");
  let bar_js = makeCircle(js, "JS", "#e73c7e", "#C9D1FF");
  let bar_css = makeCircle(css, "CSS", "#e73c7e", "#C9D1FF");
  let bar_jquery = makeCircle(jquery, "JQuery", "#e73c7e", "#C9D1FF");
  let bar_scss = makeCircle(scss, "SCSS", "#e73c7e", "#C9D1FF");
  let bar_vue = makeCircle(vue, "Vue.js", "#e73c7e", "#C9D1FF");
  let bar_figma = makeCircle(figma, "Figma", "#e73c7e", "#C9D1FF");
  let bar_github = makeCircle(github, "Github", "#e73c7e", "#C9D1FF");
  let bar_photoshop = makeCircle(photoshop, "Phtoshop", "#e73c7e", "#C9D1FF");
  let bar_illustrator = makeCircle(
    illustrator,
    "Illustrator",
    "#e73c7e",
    "#C9D1FF"
  );
  let bar_afec = makeCircle(afec, "After Effect", "#e73c7e", "#C9D1FF");
  let bar_premiere = makeCircle(premiere, "Premiere", "#e73c7e", "#C9D1FF");

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
    offset: "0%",
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
};
