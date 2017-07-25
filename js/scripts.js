var apiKey = require('./../.env').apiKey;

function Doctor(firstName, lastName, bio) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bio = bio;
}

function User() {
}

var doctorArray = [];

User.prototype.getDoctors = function(medicalIssue, showDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {

     result.data.forEach(function(element) {
       var newDoctor = new Doctor(element.profile.first_name, element.profile.last_name, element.profile.bio);

       doctorArray.push(newDoctor);
     });


      // console.log(result);
      // console.log(doctorArray);
      showDoctors(doctorArray);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.userModule = User;
