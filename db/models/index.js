
const User = require("./user.js");
const Achievement = require("./achievement.js")
const Friend = require("./friend.js");
const Language = require("./language.js");
const Lesson = require("./lesson.js");
const Quiz = require("./quiz.js");
const Test = require("./test.js");
const Role = require("./role.js");
const TestQuestion = require("./testQuestion.js");
const QuizQuestion = require("./quizQuestion.js");

// Our Associations: one-to-many
User.hasMany(Achievement, { foreignKey: "achievementID"}); 
User.hasMany(Friend, { foreignKey: "friendID"}); 
User.hasMany(Language, { foreignKey: "languageId"}); 
User.hasMany(Lesson, { foreignKey: "lessonID"}); 
User.hasMany(Quiz, { foreignKey: "quizID"}); 
User.hasMany(Test, { foreignKey: "testID"}); 
User.hasOne(Role, { foreignKey: "roleID"}); 
User.hasMany(TestQuestion, { foreignKey: "testID"}); 
User.hasMany(QuizQuestion, { foreignKey: "quizID"}); 


module.exports = {
  User,
  Achievement,
  Friend,
  Language,
  Lesson,
  Quiz,
  Test,
  Role,
  TestQuestion,
  QuizQuestion,
};