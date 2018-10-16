'use strict';
var app = app || {};

(function (module) {
  const resultView = {};

  resultView.initResultPage = function () {
    $('.tab-content').hide();
    $('.result-view').show();
    $('.result-view').empty();
    let template = Handlebars.compile($('#result-template').text());
    $('.result-view').append(template(this));
  };

  module.resultView = resultView;
})(app);