'use strict';
var app = app || {};

(function (module) {
  const resultView = {};

  resultView.initResultPage = function () {
    $('.tab-content').hide();
    $('.results').show();
    $('.results').empty();
    let template = Handlebars.compile($('#results-template').text());
    $('.results').append(template(this));
  };

  module.resultView = resultView;
})(app);