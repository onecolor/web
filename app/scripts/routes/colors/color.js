Web.ColorsColorRoute = Em.Route.extend({
  model: function(params) {
    //TODO: GJ: get the sponsor details

    return Web.Color.fromHex(params.hex);
  }
});
