window.Controller = function(options) {
  var init = options.init;

  let object = {
    view: null,
    init: function(view) {
      this.view = view;
      init.call(this,view);
    }
  };
  for (let key in options) {
    if (key !== "init") {
      object[key] = options[key];
    }
  }
  return object;
};
