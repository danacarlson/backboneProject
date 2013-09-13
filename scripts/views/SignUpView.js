backboneDemo.Views.SignUpView = Backbone.View.extend({

  el : "#signupform",

  events: {
    'click [data-trigger="signUpBtn"]' : 'signUpBtn_onClick',
    'click .submitBtn' : 'submitBtn_onClick'

  },

  //initialize: function (opts) {
    //this.collection.on('add', this.addGuest, this);
    
  //},

  render: function () {
    //this.collection.each(function (guest) { this.addGuest(guest); }, this);
    return this;
  },

  signUpBtn_onClick : function () {
    this.$el.find('form').toggleClass('hide');
  },

  submitBtn_onClick : function (e) {
    e.preventDefault();
    var $inputs = this.$el.find('form input[type="text"]'),
     blank = false;
      
      /*$inputs.each(function() { 
        if ($(this).val() === '') { 
          blank = true; 
          return false;
        }
      });
      
      if (blank) { return; }*/

      this.collection.create({
        name: $inputs.eq(0).val(),
        age:  $inputs.eq(1).val(),
        sex: $inputs.eq(2).val(),
        bringing : $inputs.eq(3).val()
      }); 
  }

  
});
