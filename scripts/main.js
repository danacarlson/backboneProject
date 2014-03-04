window.candyTransfer = {
  app: _.extend({}, Backbone.Events),

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    new candyTransfer.Views.ApplicationView();
  }
};


$(document).ready(function(){
  candyTransfer.init();
});
