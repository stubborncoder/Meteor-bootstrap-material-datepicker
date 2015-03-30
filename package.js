Package.describe({
  name: 'stubborncoder:bootstrap-material-datepicker',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Package wrapper for T00rk/bootstrap-material-datepicker',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use('underscore');
  api.use('momentjs:moment');
  api.use('jquery');
  api.use('fezvrasta:bootstrap-material-design');

  api.addFiles('lib/bootstrap-material-datepicker.css', 'client');
  api.addFiles('lib/bootstrap-material-datepicker.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stubborncoder:bootstrap-material-datepicker');
  api.addFiles('lib/bootstrap-material-datepicker.css', 'client');
  api.addFiles('test/bootstrap-material-datepicker-tests.js', 'client');
});
