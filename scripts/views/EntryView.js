candyTransfer.Views.EntryView = Backbone.View.extend({

  entryTemplate: _.template($('#single-entry').html()),
  template: '',
  
  events: {
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer_onClick',
    'blur input' : 'setModel_onBlur',
    'change select' : 'setModel_onBlur'
  },

  initialize: function() {
    this.template = this.entryTemplate;
    this.collection.on('remove', this.onRemoveEntry, this);
  },

  remove: function() {
    this.collection.off('remove', this.onRemoveEntry);
  },

  render: function () { 
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onRemoveEntry: function (model) {
    if (model === this.model) {
      this.model.destroy();
    }
  },

  removeTransfer_onClick: function(e) {
    if (e) {  e.preventDefault(); } 
    this.collection.remove(this.model);
  },
  
  setModel_onBlur : function (e) { 
    var input = e.target,
      obj = {}; 

    obj[input.name] = $(input).val();
    this.model.set(obj);
  }

});
 



