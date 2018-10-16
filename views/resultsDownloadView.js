'use strict';
var app = app || {};

(function (module) {
  const resultsDownloadView = {};

  resultsDownloadView.initResultPage = function () {
    $('.tab-content').hide();
    $('.results-upload').show();
    let template = Handlebars.compile($('#results-upload-template').text());
    $('.results-upload').append(template(this));
  };

  module.resultsUploadView = resultsUploadView;
})(app);