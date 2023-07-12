
const User = require("./user.js");
const Achievement = require("./achievement.js")
const Language = require("./language.js");
const Lesson = require("./lesson.js");
const Quiz = require("./quiz.js");
const Test = require("./test.js");
const Role = require("./role.js");
const Friendship = require("./Friendship.js");
const TestQuestion = require("./testQuestion.js");
const QuizQuestion = require("./quizQuestion.js");

// Our Associations: one-to-many
User.belongsToMany(Achievement, {through: Achievement, as: 'achievements', foreignKey:'userId'});
User.belongsToMany(Language, {through: Language, as: 'languages', foreignKey:'userId'});
User.belongsToMany(Lesson, {through: Lesson, as: 'lessons', foreignKey:'userId'}); 
User.belongsToMany(Quiz, {through: Quiz, as: 'quizzes', foreignKey:'userId'}); 
User.belongsToMany(Test, {through: Test, as: 'tests', foreignKey:'userId'}); 
User.hasOne(Role, { foreignKey: "roleID"}); 
User.belongsToMany(TestQuestion, {through: TestQuestion, as: 'testsQuestions', foreignKey:'userId'}); 
User.belongsToMany(QuizQuestion, {through: QuizQuestion, as: 'quizQuestions', foreignKey:'userId'}); 
User.belongsToMany(User, {through: Friendship, as: 'friends', foreignKey:'userId'});
Test.hasMany(TestQuestion, {foreignKey: "testID"});
Quiz.hasMany(QuizQuestion, {foreignKey: "quizID"});
QuizQuestion.belongsTo(Quiz, {foreignKey: "quizID"});
TestQuestion.belongsTo(Test, {foreignKey: "testID"});
Language.hasMany(Lesson, {foreignKey: "languageID"});
Lesson.belongsTo(Language, {foreignKey: "languageID"});

module.exports = {
  User,
  Achievement,
  Friendship,
  Language,
  Lesson,
  Quiz,
  Test,
  Role,
  TestQuestion,
  QuizQuestion,
};