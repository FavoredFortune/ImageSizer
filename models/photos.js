'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  Photo.all = [];

  //create Photo constructor with all pontential properties needed
  function Photo (photo) {
    this.location = photo.location;
    this.date = photo.date;
    this.fileName = photo.fileName;
    this.filePath = photo.filePath;
    this.height = photo.height;
    this.width = photo.width;
  }

  //method to resize photo
  Photo.resize = function(photoFile, height, width){
    photoFile = new Photo;
    photoFile.height = height;
    photoFile.width = width;
  };

  //event listenter on form to get photo from storage/db
  $('#dowloadPhoto').on('submit', function(event){
    event.preventDefault();
    //TODO: check syntax of this get.
    // firebase.storage.get(filePath);
    Photo.checkPhoto();
  });

  //event listenter on form to upload photo to storage/db
  $('#uploadPhoto').on('submit', function(event){
    event.preventDefault();
    //TODO: check syntax of this post.
    // firebase.storage.post(file);
    Photo.checkPhoto();
  });

  //TODO - add if/else for requests for files other than JPG, PNG and GIF
  //for photodownload request by others
  Photo.checkPhoto = function(filePath) {
    const photoCheck= Photo.all.filter(photoObj => photoObj.filePath === filePath);
    if(photoCheck.length === 1) {
      app.resultsDownloadView.initPhotos(filePath.height);
    }else{
      app.requestView.initErrorView(filePath);
    }
  };

  //for uploading a new photo by a photojournalist
  Photo.create = (newPhoto) =>
    $.post(`${API_URL}/api/v1/newPhoto`, newPhoto)
      .then(console.log('post'))
      .catch(console.error);

  //TODO check syntax /need for this post to FirebaseDB/Storage
  Photo.loadAll = rows => Photo.all = rows.map(photo => new Photo(photo));

  //TODO build front end request form for this
  //in case a requestor wants to see all the photos in the database
  // Photo.getAll = () => {
  //   $.get(`${API_URL}/api/v1/photos/`)
  //     .then((results) => {
  //       Photo.loadAll(results);
  //     })
  //     .catch(console.error);
  // };

  //TODO double check this
  //get single photo and resize
  Photo.get = (callback, filePath, height, width) =>{
    $.get(`${API_URL}/api/v1/photo/${filePath}`)
      .then((results)=>{
        Photo.resize(results, height, width);
      })
      .catch(console.error);
  };

  //if I have time for fully RESTFUL API
  //TODO Delete photo

  //if I have time for fully RESTFUL API
  //TODO Update photo properties

  module.Photo = Photo;

})(app);