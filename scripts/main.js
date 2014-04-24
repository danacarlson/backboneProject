window.candyTransfer = {
  app: _.extend({}, Backbone.Events),

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    new candyTransfer.Views.ApplicationView();
  },
  
  initRoutes: function () {
    candyTransfer.Routers = Backbone.Router.extend({
      routes: {
          '': 'index'
      },
      index: function(){
          $(document.body).append("Index route has been called.");
      }
    });
    new candyTransfer.Routers;
    Backbone.history.start();
  }
};


$(document).ready(function(){
  candyTransfer.init();
  candyTransfer.initRoutes();
});
