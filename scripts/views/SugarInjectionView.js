candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer',
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer'
  },

  initialize: function () { 
    this.addBlankTransfer();
  },

 // render: function () {
 // },

  addBlankTransfer: function(e) {
    var view,
      newModel = new candyTransfer.Models.SugarInjection();
     
    if (e) {  e.preventDefault(); }
    currentNum = this.collection.length;
    
    if (currentNum < 5) {
      view = new candyTransfer.Views.EntryView();
      newModel.set('transferNumber', currentNum+1);
      view.render(newModel);
      this.$el.find('#entry-container').append(view.el);
      this.collection.add(newModel);
    }
  },
  
  removeTransfer : function(e) {
    if (e) {  e.preventDefault(); } 
  }


});
