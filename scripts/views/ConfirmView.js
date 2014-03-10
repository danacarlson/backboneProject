candyTransfer.Views.ConfirmView = Backbone.View.extend({
    
  template: _.template($('#confirm-entry').html()),

  events: {
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer_onClick'
  },

  initialize: function() {
    this.render();
  }, 

  render: function () { 
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
 
  setRatioOutput : function (model) { 
    var ratio, 
      $ratioNumbers = this.$el.find('.ratio p');
    ratio = model.get('sourRatio') - 0; 
      
    $ratioNumbers.eq(0).html(10-ratio);
    $ratioNumbers.eq(1).html(ratio); 
  },

  removeTransfer_onClick: function(e) {
    if (e) {  e.preventDefault(); }
    this.collection.remove(this.model);
  }

});
 



