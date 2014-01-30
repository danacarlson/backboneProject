candyTransfer.Views.EntryView = Backbone.View.extend({
    
  entryTemplate: _.template($('#single-entry').html()),
  readonlyTemplate: _.template($('#readonly-entry').html()),
  template: '',
  
  events: {
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer_onClick',
    'change input, select' : 'input_onChange',
    'click [data-trigger="edit-single"]' : 'editTransfer_onClick'
  },

  initialize: function() {
    this.setElement(this.el); 
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
    this.template = this.readonlyTemplate;
    this.$el.html(this.template(this.model.toJSON()));
    this.setRatioOutput(this.model);
    return this;
  },
  
  setRatioOutput : function (model) { 
    var ratio, 
      $ratioNumbers = this.$el.find('.ratio p');
    ratio = model.get('sourRatio') - 0; 
      
    $ratioNumbers.eq(0).html(10-ratio);
    $ratioNumbers.eq(1).html(ratio); 
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
  },
  
  editTransfer_onClick : function(e) { 
    if (e) { e.preventDefault(); } 
    this.template = this.entryTemplate;
    this.$el.html(this.template(this.model.toJSON()));
    this.setSelects(this.model);
    return this;
  }

});
 



