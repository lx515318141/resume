!function(){
  var view = View("#topNavBar");
  var controller = Controller({
    init: function(view){
      this.bindEvents()
    },
    bindEvents: function(){
      var view = this.view
      window.addEventListener("scroll", (x) => {
        // 监听屏幕滑动
        // 箭头函数没有this，所有箭头函数内外this不变
        if (window.scrollY > 0) {
          //window.scrollY：文档从顶部开始滚动过的像素值
          this.active()
          // 给topNavBar的class添加sticky
        } else {
          this.deactive()
        }
      });
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deactive: function(){
      this.view.classList.remove('sticky')
    }
  })
  controller.init(view);
}.call();
