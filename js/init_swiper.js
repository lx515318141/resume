!function(){
  var view = View("#mySlides");

  var controller = Controller({
    init: function(view) {
      this.initSwiper();
    },
    swiper: null,
    swiperOptions: {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    },
    initSwiper: function() {
      this.swiper = new Swiper(
        this.view.querySelector(".swiper-container"),
        this.swiperOptions
      );
    }
  });
  controller.init(view);
}.call();
