$('a[href*="#"]')
  .on('click', function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2500,
         function() {
          var $target = $(target);
          $target.trigger('focus-visible');
          if ($target.is(":focus-visible")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.trigger('focus-visible'); 
          };
        });
      }
    }
  });

document.addEventListener("DOMContentLoaded", function() {

  document.querySelector(".header__btn-open").addEventListener("click", function() {
      document.querySelector(".header__nav_burger").classList.add("active");
    })
    document.querySelector(".nav-close").addEventListener("click", function() {
      document.querySelector(".header__nav_burger").classList.remove("active");
     });
    
    document.querySelector(".header__link").addEventListener("click", function() {
      document.querySelector(".header__nav_burger").classList.remove("active");
     });
   
     Array.prototype.forEach.call(
      document.querySelectorAll('.myElements'),
      el => new SimpleBar()
    );
  
  
      document.querySelectorAll(".header__dropdown-btn").forEach(item => {
      item.addEventListener("click", function() {
        let btn = this;
        let dropdown = this.parentElement.querySelector(".container-dropdown_activ");
  
        
        document.querySelectorAll(".header__dropdown-btn").forEach(el => {
          if (el != btn) {
            el.classList.remove("active--btn");
          }
        });
        
        document.querySelectorAll(".container-dropdown_activ").forEach(el => {
          if (el != dropdown) {
            el.classList.remove("active-header__item_bottom");
          }
        })
  
        dropdown.classList.toggle("active-header__item_bottom");
        btn.classList.toggle("active--btn")
      })
    });
  
  
    
    document.addEventListener("click", function(e) {
      let target = e.target;
      if (!target.closest(".header__list-bottom")) {
        document.querySelectorAll(".container-dropdown").forEach(el => {
            el.classList.remove("active-header__item_bottom");
        })
         document.querySelectorAll(".header__dropdown-btn").forEach(el => {
            el.classList.remove("active--btn");
        });
      }
    });
  
    document.querySelector(".form-btn-open").addEventListener("click", function() {
      document.querySelector(".search-form").classList.add("search-form__active");
      this.classList.add("active");
    });
    
    document.addEventListener("click", function(e) {
      let target = e.target;
      let form = document.querySelector(".search-form");
      if (!target.closest(".form-container")) {
      form.classList.remove("search-form__active");
        form.querySelector("input").value = "";
        document.querySelector(".form-btn-open").classList.remove("active")
      }
    });
  
  
  const container = document.querySelector(".hero__slide")
  const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
  });
  
  
  const element = document.querySelector('select');
  const choices = new Choices(element, {
      searchEnabled: false,
      duplicateItemsAllowed: false,
      sorter: () => {2,3},
      noChoicesText: 'Нет вариантов выбора',
      itemSelectText: ''
  });

  let gallerySlider = new Swiper(".gallery__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 2000,
      keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
        
    },
  
    spaceBetween: 50,
    pagination: {
      el: ".gallery__fraction",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      800: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 34
      },
  
      1800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
  
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }

  });  
  

  
  new Swiper('.events__swiper', {
    
    speed: 2000, 
    navigation: {
      nextEl: '.events__btn-next',
      prevEl: '.events__btn-prev',
    },
  
    pagination: {
      el: '.events__bullet',
      clickable: true,
    },
  
    breakpoints: {
      1300: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
  
      970: {
        spaceBetween: 27,
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
  
      620: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
  
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
  
  })
  
  new Swiper('.projects__swiper', {
    
    speed: 2000, 
    navigation: {
      nextEl: '.projects__btn-next',
      prevEl: '.projects__btn-prev',
    },
  
    breakpoints: {
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
  
      970: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
  
      620: {
        slidesPerView: 2,
        spaceBetween: 33.97,
      },
  
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  
  })


tippy('.tooltip-marker-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
  placement: 'top',
  animation: 'scale',
  duration: 300,
  delay: 0,
  inertia: true,
  maxWidth: 264,
});

tippy('.tooltip-marker-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
  placement: 'top',
  animation: 'scale',
  duration: 300,
  delay: 0,
  inertia: true,
  maxWidth: 264,
});

tippy('.tooltip-marker-3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
  placement: 'top',
  animation: 'scale',
  duration: 300,
  delay: 0,
  inertia: true,
  maxWidth: 232,
});
 
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 11
      },
    },
    messages: {
      name: "Недопустимый формат",
      tel: "Недопустимый формат",
    }
  })
  
  $("#accordion").accordion({
    icons: false,
    active: 0,
    collapsible: true,
    heightStyle: 'content',
    header: '.catalog__btn',
    animate: 200
  
  });
  
    /** Tabs **/
    document.querySelectorAll('.catalog__tab').forEach(function (tabLink) {
      tabLink.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.catalog__sub-item').forEach(function (tabContent) {
          tabContent.classList.remove('catalog__sub-item_active');
        });
        document.querySelectorAll('.catalog__tab').forEach(function (tabContent) {
          tabContent.classList.remove('catalog__tab_active');
        });
        event.currentTarget.classList.add('catalog__tab_active')
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__sub-item_active');
      });
    });

    document.querySelectorAll('.catalog__content-link').forEach(function (btn) { 
      btn.addEventListener("click", function() {
      this.classList.add("catalog__content-link-active");
  
        document.querySelectorAll(".catalog__content-link").forEach(el => {
          if (el != btn) {
            el.classList.remove("catalog__content-link-active");
          }
        });
          
        dropdown.classList.toggle("active-header__item_bottom");
        btn.classList.toggle("active--btn")
      })
    });


  ymaps.ready(init);
  function init() {
      var myMap = new ymaps.Map("YMapsID", {
        center: [55.758468, 37.601088],
        zoom: 14.5,
        controls: []
      });
  
              // Создадим пользовательский макет ползунка масштаба.
              ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='icon-btn'>" +
              "<div id='zoom-in' class='btn'><i class='icon-plus'></i></div><br>" +
              "<div id='zoom-out' class='btn'><i class='icon-minus'></i></div>" +
              "</div>", {
  
              // Переопределяем методы макета, чтобы выполнять дополнительные действия
              // при построении и очистке макета.
              build: function () {
                  // Вызываем родительский метод build.
                  ZoomLayout.superclass.build.call(this);
  
                  // Привязываем функции-обработчики к контексту и сохраняем ссылки
                  // на них, чтобы потом отписаться от событий.
                  this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                  this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
  
                  // Начинаем слушать клики на кнопках макета.
                  $('#zoom-in').bind('click', this.zoomInCallback);
                  $('#zoom-out').bind('click', this.zoomOutCallback);
              },
  
              clear: function () {
                  // Снимаем обработчики кликов.
                  $('#zoom-in').unbind('click', this.zoomInCallback);
                  $('#zoom-out').unbind('click', this.zoomOutCallback);
  
                  // Вызываем родительский метод clear.
                  ZoomLayout.superclass.clear.call(this);
              },
  
              zoomIn: function () {
                  var map = this.getData().control.getMap();
                  map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },
  
              zoomOut: function () {
                  var map = this.getData().control.getMap();
                  map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
              }
          }),
          zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});
  
      myMap.controls.add('zoomControl', {
        float: "none",
        position: {
          top: '300px',
          right: '10px'
      }
      });
  
      myMap.controls.add('geolocationControl', {
        float: "none",
        position: {
          top: '380px',
          right: '10px'
      }
      });
  
      myMap.controls.get('zoomControl').options.set('size', 'small');
  
      var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/mars_icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42]
      });
  
      myMap.geoObjects.add(myPlacemark);
  
      ymaps.ready(function () {
        var myMap_2 = new ymaps.Map("YMapsID_2", {
          center: [55.758468, 37.601088],
          zoom: 13,
          controls: []
        });
  
        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/mars_icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42]
      });
    
      myMap_2.geoObjects.add(myPlacemark);
      });
  };
  
  });
  
  
  
  
   
  
  
  
  
   