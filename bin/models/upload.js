(function(){
  var mongoose;
  mongoose = require('mongoose');
  module.exports = mongoose.model('Upload', {
    id: String,
    schoolId: String,
    student: String,
    course: String,
    score: String,
    homework: String
  });
}).call(this);
