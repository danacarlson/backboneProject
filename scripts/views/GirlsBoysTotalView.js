backboneDemo.Views.GirlsBoysTotalView = Backbone.View.extend({

  el : '.count-boxes',
  template: _.template($('#sexes').html()),
  //model: '',  

  initialize: function () {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('change:sex', this.render, this);
  },

  render: function () {
    var partial = this.template(this.countSexes());
    this.$el.html(partial);
    return this;
  },

  countSexes: function () {
    var sexes = this.collection.pluck('sex');
      count = {
         'boyscount' : 0,
         'girlscount' : 0
      } 
      
    _.each(sexes, function(element) {
        if (element === "M") {
          count.boyscount++;
        }
        
        else if (element === "F") {
          count.girlscount++;
        }
    });
    
    return count;
  }

     
      //OR
    //var sxs = this.collection.map(function(model){
      //return model.get('sex');
    //});
    
    
    //var view = new backboneDemo.Views.GuestItemView({model: guest});
    //view.render();
    //this.$el.append(view.el);
  //}
  
});
