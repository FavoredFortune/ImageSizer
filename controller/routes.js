'use strict';
//mainpage routing
page('/', app.requestView.initRequestView);

//TODO - test these two upload & download page results routing
page('/resultsDownloadView/photo/{filePath}' ctx => app.resultsDownloadView.initResultsDownloadPage);
page('/resultsUploadView' ctx => app.resultsUploadView.initResultsUploadPage);

//error page routing
page('*', ctx => app.errorView.initErrorPage);

page();