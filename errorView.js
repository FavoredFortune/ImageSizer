'use strict';
var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = function () {
    $('.tab-content').hide();
    $('.error-view').show();
    $('.error-view').empty();
    let template = Handlebars.compile($('#error-template').text());
    $('.error-view').append(template(this));
  };

  module.errorView = errorView;
})(app);