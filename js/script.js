$(document).ready(function () {

  let swAbout2 = new Swiper('.sw-pf', {
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.sw-pf-pg',
      clickable: true
    },
  });

  swAbout2.on('slideChange', function () {
    aboutMenu.removeClass('pf-listbox-focus');
    aboutMenu.eq(swAbout2.realIndex).addClass('pf-listbox-focus');

  });

  let aboutMenu = $('.pf-list > li > a');
  aboutMenu.eq(0).addClass('pf-listbox-focus');

  $.each(aboutMenu, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      aboutMenu.removeClass('pf-listbox-focus');
      aboutMenu.eq(index).addClass('pf-listbox-focus');
      swAbout2.slideTo(index + 1);

    });
  });


  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
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
  function makeCircle(_id, _str, _startColor, _endColor) {
    let bar = new ProgressBar.Circle(_id, {
      color: '#777',
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeOut',
      duration: 1400,

      text: {
        autoStyleContainer: false
      },
      from: {
        color: _startColor,
        width: 1
      },
      to: {
        color: _endColor,
        width: 4,
      },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        let value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(_str + '<br>' + value);
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    return bar;

  }

  let bar_html = makeCircle(html, 'HTML', '#aaa', '#333');
  let bar_java = makeCircle(java, 'JAVA', '#aaa', '#333');
  let bar_css = makeCircle(css, 'CSS', '#aaa', '#333');
  let bar_jquery = makeCircle(jquery, 'JQuery', '#aaa', '#333');
  let bar_scss = makeCircle(scss, 'SCSS', '#aaa', '#333');
  let bar_vue = makeCircle(vue, 'Vue.js', '#aaa', '#333');
  let bar_figma = makeCircle(figma, 'Figma', '#aaa', '#333');
  let bar_github = makeCircle(github, 'Github', '#aaa', '#333');
  let bar_photoshop = makeCircle(photoshop, 'Phtoshop', '#aaa', '#333');
  let bar_illustrator = makeCircle(illustrator, 'Illustrator', '#aaa', '#333');
  let bar_afec = makeCircle(afec, 'After Effect', '#aaa', '#333');
  let bar_premiere = makeCircle(premiere, 'Premiere', '#aaa', '#333');



  AOS.init();

  let barAni = () => {
    bar_html.animate(0.95);
    bar_java.animate(0.7)
    bar_css.animate(0.9);
    bar_jquery.animate(0.8);
    bar_scss.animate(0.8); 
    bar_vue.animate(0.7);
    bar_figma.animate(0.9);
    bar_github.animate(0.9);
    bar_photoshop.animate(0.9);
    bar_illustrator.animate(0.95);
    bar_afec.animate(0.8);
    bar_premiere.animate(0.75);
  }

  let barAniRe = () => {
    bar_html.animate(0);
    bar_java.animate(0)
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
  }

  new Waypoint({
    element: $('.mySwiper .swiper-wrapper > div'),
    handler: function (direction) {
      if (direction == 'down') {
        barAni();
      } else if (direction == 'up') {
        barAni();
      }
    },
    offset: '80%'
  });
  new Waypoint({
    element: $('.life'),
    handler: function (direction) {
      if (direction == 'down') {
        barAniRe();
      } else if (direction == 'up') {
        barAni();
      }
    },
    offset: '0%'
  });
}