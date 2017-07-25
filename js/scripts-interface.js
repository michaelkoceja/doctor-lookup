var User = require('./../js/scripts.js').userModule;

var showDoctors = function(array) {
  array.forEach(function(data) {
    $("#doctor-list").append('<p><h2>' + 'Dr. ' + data.firstName + ' ' + data.lastName + ' ' + '</h2><br>' + data.bio + '</p>');
  });
};



$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var currentUser = new User();
    var symptom = $('#symptom').val();

    currentUser.getDoctors(symptom, showDoctors);

  });
});
