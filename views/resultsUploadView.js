'use strict';
var app = app || {};

(function (module) {
  const resultsUploadView = {};

  resultsUploadView.initResultPage = function () {
    $('.tab-content').hide();
    $('.results-upload').show();
    $('.results-upload').empty();
    let template = Handlebars.compile($('#results-upload-template').text());
    $('.results-upload').append(template(this));
  };

  module.resultsUploadView = resultsUploadView;
})(app);