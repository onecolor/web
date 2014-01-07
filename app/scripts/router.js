Web.Router.map(function () {
  this.resource('colors', { path: '/colors' }, function() {
    this.resource('colors.color', { path: ':hex' });
  });
});
