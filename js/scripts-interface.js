var User = require('./../js/scripts.js').userModule;

var displayDoctors = function(array) {
  array.forEach(function(data) {
    $("#doctors").append('<p><h2>' + 'Dr. ' + data.firstName + ' ' + data.lastName + ' ' + '</h2><br>' + data.bio + '</p>');
  });
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var currentUser = new User();
    var symptom = $('#symptom').val();

    currentUser.getDoctors(symptom, displayDoctors);

  });
});
