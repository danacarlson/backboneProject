candyTransfer.Views.EntryView = Backbone.View.extend({

  entryTemplate: _.template($('#single-entry').html()),
  template: '',
  
  events: {
    //'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer_onClick' 
  },

  initialize: function() {
    this.template = this.entryTemplate;
  },

  render: function (sugarModel) { 
    this.$el.html(this.template(sugarModel.toJSON()));
    return this;
  }

});
 



