var Web = window.Web = Ember.Application.create({
  api_root: 'http://api.onecolor.dev:9091'
});

require('scripts/controllers/**/*');
require('scripts/store');
require('scripts/models/**/*');
require('scripts/routes/**/*');
require('scripts/views/**/*');
require('scripts/components/**/*');
require('scripts/router');
