Web.Color = Em.Object.extend({
  spectra: function() {
    return Spectra(this.get('hex'));
  }.property('hex'),
  complement: function() {
    return this.get('spectra').complement().hex()
  }.property('spectra'),
  triad: function() {
    return this.get('spectra').harmony('triad');
  }.property('spectra'),
  analogous: function() {
    return this.get('spectra').harmony('analogous');
  }.property('spectra'),
  rectangle: function() {
    return this.get('spectra').harmony('rectangle');
  }.property('spectra')
}).reopenClass({
  fromHex: function(hex) {
    return Web.Color.create({ hex: hex });
  },
  random: function() {
    return Spectra.random().hex();
  }
});
