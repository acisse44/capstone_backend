const User = require("./user.js");
const Achievement = require("./achievement.js");
const Friendship = require("./Friendship.js");
const Language = require("./language.js");
const Lesson = require("./lesson.js");
const Quiz = require("./quiz.js");
const Test = require("./test.js");
const Role = require("./role.js");
const TestQuestion = require("./testQuestion.js");
const QuizQuestion = require("./quizQuestion.js");
const Avatar = require("./avatar.js");
//const UserAchievement = require("./UserAchievement.js");

// Our Associations: many-to-many
Achievement.belongsToMany(User, { through: "userAchievement" }); //M:M
User.belongsToMany(Achievement, { through: "userAchievement" });
// through table cannot be the same as our associated tables
//User.hasMany(Achievement, { foreignKey: "UserId" }); // Correct the foreign key name here
//Achievement.belongsTo(User);

User.belongsToMany(Language, { through: "UserLanguage" });
Language.belongsToMany(User, { through: "UserLanguage" });

User.belongsToMany(Lesson, { through: "UserLesson" });
Lesson.belongsToMany(User, { through: "UserLesson" });

User.belongsToMany(Quiz, { through: "UserQuiz" });
Quiz.belongsToMany(User, { through: "UserQuiz" });

User.belongsToMany(Test, { through: "UserTest" });
Test.belongsToMany(User, { through: "UserTest" });

Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role);
//User.belongsToMany(TestQuestion, {through: TestQuestion, as: 'testsQuestions', foreignKey:'userId'});
// User.belongsToMany(QuizQuestion, {through: QuizQuestion, as: 'quizQuestions', foreignKey:'userId'});

Avatar.hasMany(User, { foreignKey: "avatarId" });
User.belongsTo(Avatar);

// User.belongsToMany(User, { through: "Friendship", as: "friends" });

Test.hasMany(TestQuestion, { foreignKey: "testId" });
TestQuestion.belongsTo(Test);

Quiz.hasMany(QuizQuestion, { foreignKey: "quizId" });
QuizQuestion.belongsTo(Quiz);

Language.hasMany(Lesson, { foreignKey: "languageId" });
Lesson.belongsTo(Language);

Language.hasMany(Quiz, { foreignKey: "languageId" });
Quiz.belongsTo(Language);

Language.hasMany(Test, { foreignKey: "languageId" });
Test.belongsTo(Language);


User.belongsToMany(User, {through: Friendship, foreignKey: 'userId1', as: 'Friends'})
User.belongsToMany(User, {through: Friendship, foreignKey: 'userId2', as: 'Users'})
User.hasMany(Friendship, {foreignKey: 'userId1', as: 'friendId1'} )
User.hasMany(Friendship, {foreignKey: 'userId2', as: 'friendId2'})
Friendship.belongsTo(User, {foreignKey: 'userId1', as: 'Friend'})
Friendship.hasMany(User,  {foreignKey: 'userId2', as: 'User'})


module.exports = {
  User,
  Achievement,
  Language,
  Lesson,
  Quiz,
  Test,
  Role,
  TestQuestion,
  QuizQuestion,
  Avatar,
  Friendship,
  //UserAchievement,
};
