Web.Router.map(function () {

  // this.resource('color', { path: '/colors/:hex' });

  this.resource('colors', { path: '/colors' }, function() {
    this.resource('colors.color', { path: ':hex' });
  });
});
