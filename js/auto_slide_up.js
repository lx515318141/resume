!function(){
  let specialTags = document.querySelectorAll("[data-x]");
  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("offset");
  }
  findClosestAndRemoveOffset();
  // 先运行一遍这个函数，为了让UserCard先向上弹一次
  window.addEventListener("scroll", function(x) {
    findClosestAndRemoveOffset();
    // 寻找离窗口顶部最近的元素,并移除offset
  });

  // helper
  function findClosestAndRemoveOffset() {
    // 寻找距离窗口顶部最近元素的函数
    let specialTags = document.querySelectorAll("[data-x]");
    // 找到所有有data-x的元素
    let minIndex = 0;
    for (var i = 1; i < specialTags.length; i++) {
      // 遍历这些元素
      if (
        Math.abs(specialTags[i].offsetTop - window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
      ) {
        minIndex = i;
        // 类似寻找最小值，先把第一个设为最小，再和第二个比较，如果第二个小，就把第二个变为最小值，如果第一个小，就继续比较
      }
    }
    specialTags[minIndex].classList.remove("offset");
    // 给距离窗口顶部最近的元素移出offset状态
    let id = specialTags[minIndex].id;
    // 获取最近元素的id
    let a = document.querySelector('a[href="#' + id + '"]');
    // 通过和这个ID同名的href，找到a标签，这里ID是一个变量
    let li = a.parentNode;
    // 找到a标签的父级元素
    let brotherAndChild = li.parentNode.children;
    // 找到li下所有子元素，包括a标签自己
    for (var i = 0; i < brotherAndChild.length; i++) {
      // 遍历a标签自己及其全部兄弟元素，将他们都移除highlight状态
      brotherAndChild[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
    // 再把最近的元素加上highlight状态
  }
  let liTags = document.querySelectorAll("nav.menu > ul > li");
  //给一个选择器，找到选择器中所有匹配的li
  for (let i = 0; i < liTags.length; i++) {
    //遍历这个liTags
    liTags[i].onmouseenter = function(x) {
      // 监听这个hash里的元素，当鼠标放在它上面的时候，给这个元素加上active状态
      x.currentTarget.classList.add("active");
    };
    liTags[i].onmouseleave = function(x) {
      // 监听这个hash里的元素，当鼠标离开它的时候，移除active状态
      x.currentTarget.classList.remove("active");
    };
  }
}.call();
