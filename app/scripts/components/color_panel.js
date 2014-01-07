Web.ColorPanelComponent = Em.Component.extend({
  text: '',

  setup: function() {
    if(this.get('hex') === undefined) {
      this.set('hex', Spectra.random().hex());
    }
  }.on('init'),

  panelStyle: function() {
    return 'background-color: ' + this.get('hex');
  }.property('hex'),

  click: function() {
    this.sendAction('action', this.get('hex'));
  }
});
