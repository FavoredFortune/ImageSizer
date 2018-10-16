'use strict';

var app = app || {};

(module => {
  // default constructor of requestView
  const requestView = {};

  requestView.initRequestPage = () => {
    $('.tab-content').fadeIn(100);
  };

  module.requestView = requestView;
})(app);

