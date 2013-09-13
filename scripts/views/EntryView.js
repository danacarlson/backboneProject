candyTransfer.Views.EntryView = Backbone.View.extend({

  entryTemplate: _.template($('#single-entry').html()),
  template: '',
  

  events: {
    'click [data-trigger="remove"]' : 'removeLink_onClick',
    'click [data-trigger="edit"]' : 'editLink_onClick',
    'click [data-trigger="cancelEdit"]' : 'cancelEdit_onClick',
    'click [data-trigger="saveChanges"]' : 'saveChanges_onClick'
  },

  initialize: function() {
    this.template = this.entryTemplate;
  },


  render: function (sugarModel) {
    console.log(this.model);
    this.$el.html(this.template(sugarModel.toJSON()));
    
    return this;
  },

  /*'removeLink_onClick' : function() {
    this.model.destroy();
  },

  'editLink_onClick' : function () {
    this.template = this.editTemplate;
    this.render();
  },

  'setReadView' : function() {
    this.template = this.readTemplate;
    this.render();
  },

  'cancelEdit_onClick' : function () {
    this.setReadView();
  },

  'saveChanges_onClick' : function () {
    var $inputs = this.$el.find('input');
    this.model.set({
      name: $inputs.eq(0).val(),
      age:  $inputs.eq(1).val(),
      sex: $inputs.eq(2).val(),
      bringing : $inputs.eq(3).val()
    });

    if (this.model.isValid()) {
      this.setReadView();
    }

    else {
      alert(this.model.validationError);
    }
  }*/

});
 



