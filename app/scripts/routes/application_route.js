Web.ApplicationRoute = Em.Route.extend({
  actions: {
    viewColor: function(hex) {
      this.transitionTo('colors.color', Web.Color.fromHex(hex));
    }
  }
});
