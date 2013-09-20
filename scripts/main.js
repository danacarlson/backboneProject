window.candyTransfer = {
  app: _.extend({}, Backbone.Events),

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    new candyTransfer.Views.ApplicationView({el: '#main'});
  }
};


$(document).ready(function(){
  candyTransfer.init();
});
