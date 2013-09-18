candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  model : new candyTransfer.Models.SugarInjection(),
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer'
    
  },

  initialize: function () {
    //this.collection.on('add', this.addGuest, this);
    //this.collection.on('remove', this.removeGuest, this);
    //this.collection.on('change', this.showcontents, this);
    //this.render(); 
    this.addBlankTransfer();
  },

  render: function () {
    //this.$el.append(view.el);
    //this.collection.each(function (guest) { this.addGuest(guest); }, this);
    //return this;
  },

  addBlankTransfer: function() {
    var view,
      currentNum;
      
    currentNum = this.model.get('transferNumber');
    
    if (currentNum < 6) {
      view = new candyTransfer.Views.EntryView();
      view.render(this.model);
      this.$el.find('#entry-container').append(view.el);
      this.model.set('transferNumber', currentNum+1);
    }
  }


});
