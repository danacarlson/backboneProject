candyTransfer.Views.EntryView = Backbone.View.extend({
    
  entryTemplate: _.template($('#single-entry').html()),
  readonlyTemplate: _.template($('#readonly-entry').html()),
  template: '',
  
  events: {
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer_onClick',
    'change input, select' : 'input_onChange'
  },

  initialize: function() { 
    this.template = this.entryTemplate; 
    this.listenTo(this.collection, 'remove', this.onRemoveEntry);
  }, 

  remove: function() {
    this.collection.off('remove', this.onRemoveEntry);
  },

  render: function () { 
    this.$el.html(this.template(this.model.toJSON()));
    this.setSelects(this.model);
    return this;
  },
  
  rerender: function () {    
    $('#entry-container').append(this.readonlyTemplate(this.model.toJSON()));
    return this;
  },
  
  setSelects : function (model) {
    var $selects = this.$el.find('select'),
      prop;
      
    $selects.each(function(){
      prop =  model.get($(this).prop('name'));
      $(this).val(prop);
    });
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
  
  input_onChange : function (e) {
    var input = e.target,
      obj = {}; 

    obj[input.name] = $(input).val();
    this.model.set(obj);
  }

});
 



