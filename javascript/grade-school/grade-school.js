var School = function () {
  this.students = {};
};

School.prototype.roster = function () {
  var roster = this.students;
  return roster;
}

School.prototype.add = function (name, grade) {
  if (!this.students[grade]) { this.students[grade] = []; } 
  this.students[grade].push(name);
  this.students[grade].sort();
}

School.prototype.grade = function (grade) {
  return this.students[grade] ? this.students[grade] : [];
}

module.exports = School;