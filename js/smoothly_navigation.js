!function() {
  var view = document.querySelector("nav.menu");
  var controller = {
    view: null,
    aTags: null,
    init: function(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function() {
      function animate(time) {
        // 使用tween需要这段代码，让电脑根据实际情况分批时间
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    bindEvents: function() {
      let aTags = this.view.querySelectorAll("nav.menu > ul > li > a");
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = x => {
          x.preventDefault();
          // 阻止a标签的默认动作，即不会转跳
          let a = x.currentTarget;
          //获取到我们监听的元素，即a标签
          let href = a.getAttribute("href");
          //获取a标签的href，如果直接用a.href,获得的是经过浏览器解析后的href的内容，所以要用a.getAttribute('href')
          let element = document.querySelector(href);
          //通过选择器获取匹配这个href的元素，即与id与该a标签的href一致的元素
          this.scrollToElement(element);
        };
      }
    },
    scrollToElement: function(element) {
      let top = element.offsetTop;
      //得到该元素顶端距离页面顶端的距离top，注意是距离页面顶端，不是距离窗口顶端，这个top值是固定值
      // let top = document.querySelector(x.currentTarget.getAttribute("href")).offsetTop;     这句等于上面四句
      // 让window滑动到X方向不变，Y方向top减80
      let currentTop = window.scrollY;
      // 页面划过的距离，即窗口顶部到页面顶部的距离
      let targetTop = top - 80;
      // 元素顶部到页面顶部的距离
      let s = targetTop - currentTop;
      var coords = { y: currentTop };
      var t = Math.abs((s / 100) * 300);
      // 距离除以时间后加绝对值，因为距离可能出现负数，但是时间不可以，所以要加绝对值
      if (t > 500) {
        t = 500;
      };
      // 当时间大于0.5s时就让时间等于0.5s
      var tween = new TWEEN.Tween(coords)
        // tween的终点位置为coords
        .to({ y: targetTop }, t)
        // 起点位置和时间
        .easing(TWEEN.Easing.Quadratic.InOut)
        // 使用慢入慢出模式
        .onUpdate(function() {
          // 每当点击时就会运行下面的函数，窗口就会缓动到终点位置，速度时间根据tween自行计算分配
          window.scrollTo(0, coords.y);
        })
        .start();
      // 开始运行tween
    }
  };
  controller.init(view);
}.call();
