var app = angular.module('Blog', [])
app.controller('MainCtrl', function () {
  var post = this
  post.title = 'adsfasdfasdfasdfasdf';
  post.link = '';
  post.image = '';

  post.addPost = function() {
    console.log('Post Hit');
  }
});
