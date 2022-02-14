
document.addEventListener("DOMContentLoaded", function() {

document.querySelector(".header__btn-open").addEventListener("click", function() {
    document.querySelector(".header__nav_burger").classList.add("active");
  })
  document.querySelector(".nav__close").addEventListener("click", function() {
    document.querySelector(".header__nav_burger").classList.remove("active");
   })
 
   Array.prototype.forEach.call(
    document.querySelectorAll('.myElements'),
    el => new SimpleBar()
  );


    document.querySelectorAll(".dropdown__header_btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container--dropdown_activ");

      
      document.querySelectorAll(".dropdown__header_btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });
      
      document.querySelectorAll(".container--dropdown_activ").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-header__item_botton");
        }
      })

      dropdown.classList.toggle("active-header__item_botton");
      btn.classList.toggle("active--btn")
    })
  });


  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__list_botton")) {
      document.querySelectorAll(".container--dropdown").forEach(el => {
          el.classList.remove("active-header__item_botton");
      })
       document.querySelectorAll(".dropdown__header_btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  });

  document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".search-form").classList.add("search-form__active");
    this.classList.add("active");
  });
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".search-form");
    if (!target.closest(".form-container")) {
    form.classList.remove("search-form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
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



 new Swiper('.gallery__swiper_1920', {
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 2000,
  
  navigation: {
    nextEl: '.gallery__btn--next',
    prevEl: '.gallery__btn--prev',
  },

  
  pagination: {
    el: '.slider-nav__fraction',
    type: 'fraction',
  },

})


new Swiper('.gallery__swiper_tablet_1024', {
  slidesPerView: 1,
  spaceBetween: 34,
  speed: 2000,
  
  navigation: {
    nextEl: '.gallery__btn--next',
    prevEl: '.gallery__btn--prev',
  },

  
  pagination: {
    el: '.slider-nav__fraction',
    type: 'fraction',
  },

  breakpoints: {
    800: {
      spaceBetween: 38,
    }
  },

})

new Swiper('.gallery__swiper_320', {
  slidesPerView: 1,
  spaceBetween: 12,
  speed: 2000,
  
  navigation: {
    nextEl: '.gallery__btn--next',
    prevEl: '.gallery__btn--prev',
  },

  
  pagination: {
    el: '.slider-nav__fraction',
    type: 'fraction',
  },

})


new Swiper('.events__swiper', {
  
  speed: 2000, 
  navigation: {
    nextEl: '.events__btn--next',
    prevEl: '.events__btn--prev',
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
      spaceBetween: 15,
    },
  },

})

new Swiper('.projects__swiper', {
  
  speed: 2000, 
  navigation: {
    nextEl: '.projects__btn--next',
    prevEl: '.projects__btn--prev',
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

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2
    },
    phone: {
      required: true,
      function: (name, value) => {
        const num = selector.inputmask.unmaskedvalue()
        return Number(num) && num.length === 10
      }
    },
  },
  messages: {
    name: "Недопустимый формат",
    phone: "Недопустимый формат",
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




 