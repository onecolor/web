Web.RandomRoute = Em.Route.extend({
  beforeModel: function(transition) {
    // transition.send('viewColor', A);
    this.transitionTo('colors.color', Web.Color.random());

  }
});
