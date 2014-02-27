candyTransfer.Collections.Transfers = Backbone.Collection.extend({
  model: candyTransfer.Models.SugarInjection,
  //localStorage: new Backbone.LocalStorage('candyTransfer'),
  maxNumberTransfers : 5,

  addBlankTransfer: function() {
    var currentNum = this.length;

    if (currentNum < this.maxNumberTransfers) {
      this.add({
        'transferNumber' : currentNum+1
      });
    }
  }
});