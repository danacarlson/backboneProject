backboneDemo.Models.Guest = Backbone.Model.extend({

  defaults : {
    name : 'John Doe',
    sex : 'M',
    age : '25',
    bringing : 'pizza'
  },

  validate : function (attrs, options) {
    if (attrs.name === '') {
      return "Name is required.";
    }
    if ("MF".indexOf(attrs.sex) == -1) {
      return "Sex is required.";
    }
  }

});
