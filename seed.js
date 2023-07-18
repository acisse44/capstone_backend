const db = require("./db");
const {
  Achievement,
  Language,
  Lesson,
  Quiz,
  QuizQuestion,
  Role,
  Test,
  TestQuestion,
  User,
} = require("./db/models");

const seedUsers = [
  {
    email: "user1@gmail.com",
    username: "user1",
    password: "password1",
    points: 0,
  },
  {
    email: "user2@gmail.com",
    username: "user2",
    password: "password2",
    points: 0,
  },
];

const seedAchievements = [
  {
    achievementName: "First Achievement",
    criteria: "Criteria for the first achievement",
    imageURL: "https://example.com/image1.jpg",
  },
  {
    achievementName: "Second Achievement",
    criteria: "Criteria for the second achievement",
    imageURL: "https://example.com/image2.jpg",
  },
];

// const seedFriends = [
//     {
//         userId: 3,
//         friendId: 5,
//     }, {
//         userId: 5,
//         friendId: 3,
//     }, {
//         userId: 1,
//         friendId: 5,
//     }, {
//         userId: 5,
//         friendId: 1,
//     }
// ];

const seedLanguages = [
  {
    //   languageID: 1,
    languageName: "English",
    difficulty: "Beginner",
    description:
      "A widely spoken language used for international communication",
    category: "Human Language",
  },
  {
    //   languageID: 2,
    languageName: "Spanish",
    difficulty: "Intermediate",
    description: "A Romance language spoken in many countries",
    category: "Human Language",
  },
  {
    //   languageID: 3,
    languageName: "Arabic",
    difficulty: "Advanced",
    description:
      "A Semitic language spoken in the Middle East and North Africa",
    category: "Human Language",
  },
  {
    languageName: "Mandarin",
    difficulty: "Advanced",
    description: "The most widely spoken language in the world",
    category: "Human Language",
  },
  {
    languageName: "French",
    difficulty: "Intermediate",
    description: "A Romance language known for its elegance",
    category: "Human Language",
  },
  {
    languageName: "Soninke",
    difficulty: "Beginner",
    description: "A language spoken primarily in West Africa",
    category: "Human Language",
  },
];

const seedLessons = [
  {
    lessonName: "Introduction to English",
    description: "Learn the basics of the English language",
    content: '[{"question": "What is your name?", "answer": "My name is Sarah."}, {"question": "How old are you?", "answer": "I am 25 years old."}, {"question": "Where do you live?", "answer": "I live in London."}, {"question": "What is your favorite color?", "answer": "My favorite color is blue."}, {"question": "What do you like to do in your free time?", "answer": "I enjoy reading and playing sports."}]',
    languageId: 1, // English language ID
  },
  {
    lessonName: "Introduction to Spanish",
    description: "Learn the basics of the Spanish language",
    content: '[{"question": "¿Cuál es tu nombre?", "answer": "Mi nombre es Juan."}, {"question": "¿Cuántos años tienes?", "answer": "Tengo 30 años."}, {"question": "¿Dónde vives?", "answer": "Vivo en Madrid."}, {"question": "¿Cuál es tu color favorito?", "answer": "Mi color favorito es verde."}, {"question": "¿Qué te gusta hacer en tu tiempo libre?", "answer": "Me gusta leer y ver películas."}]',
    languageId: 2, // Spanish language ID
  },
  {
    lessonName: "Introduction to Arabic",
    description: "Learn the basics of the Arabic language",
    content: '[{"question": "ما اسمك؟", "answer": "اسمي سارة."}, {"question": "كم عمرك؟", "answer": "عمري 25 سنة."}, {"question": "أين تعيش؟", "answer": "أنا أعيش في لندن."}, {"question": "ما هو لونك المفضل؟", "answer": "لوني المفضل هو الأزرق."}, {"question": "ما الذي تحب فعله في وقت فراغك؟", "answer": "أنا أستمتع بالقراءة وممارسة الرياضة."}]',
    languageId: 3, // Arabic language ID
  },
  {
    lessonName: "Introduction to Mandarin",
    description: "Learn the basics of the Mandarin language",
    content: '[{"question": "你叫什么名字？", "answer": "我叫李华。"}, {"question": "你多大了？", "answer": "我25岁。"}, {"question": "你住在哪里？", "answer": "我住在北京。"}, {"question": "你最喜欢什么颜色？", "answer": "我最喜欢蓝色。"}, {"question": "你在空闲时间喜欢做什么？", "answer": "我喜欢看书和打篮球。"}]',
    languageId: 4, // Mandarin language ID
  },
  {
    lessonName: "Introduction to French",
    description: "Learn the basics of the French language",
    content: '[{"question": "Comment t\u2019appelles tu?", "answer": "Je m\u2019appelle Marie."}, {"question": "Quel âge as-tu ?", "answer": "J\u2019ai 28 ans."}, {"question": "Où est-ce que tu habites ?", "answer": "J\u2019habite à Paris."}, {"question": "Quelle est ta couleur préférée ?", "answer": "Je préférée rouge."}, {"question": "Qu\u2019aimes-tu faire pendant ton temps libre?", "answer": "J\u2019aime lire et cuisiner."}]',
    languageId: 5, // French language ID
  },
  {
    lessonName: "Introduction to Soninke",
    description: "Learn the basics of the Soninke language",
    content: '[{"question": "Kanan kono?", "answer": "Na faga Sarah."}, {"question": "Keewi duma na?", "answer": "Na faga 25 aneesi."}, {"question": "Fu yey akala?", "answer": "Na ngon Londre."}, {"question": "Kanaani boorɗe dun?", "answer": "Na boorɗe buɗɗi luundi."}, {"question": "Kewi ni nta dɔɔnin kɔnɔ?", "answer": "Na uddani kunnge ko uddu, uddu kɛ doo taliing. "}]',
    languageId: 6, // Soninke language ID
  },
];


const seedQuizzes = [
  {
    //   quizID: 1,
    languageId: 1, // English language ID
    quizName: "English Quiz",
    difficulty: "Beginner",
  },
  {
    //   quizID: 2,
    languageId: 2, // Spanish language ID
    quizName: "Spanish Quiz",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 3,
    languageId: 3, // Arabic language ID
    quizName: "Arabic Quiz",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 4,
    languageId: 4, // Mandarin language ID
    quizName: "Mandarin Quiz",
    difficulty: "Advanced",
  },
  {
    //   quizID: 5,
    languageId: 5, // French language ID
    quizName: "French Quiz",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 6,
    languageId: 6, // Soninke language ID
    quizName: "Soninke Quiz",
    difficulty: "Beginner",
  },
];

const seedQuizQuestions = [
  {
    quizId: 1, // Quiz ID for English Quiz
    question: "What is the capital of England?",
    quizChoice: "A) London\nB) Paris\nC) Madrid\nD) Rome",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 1, // Quiz ID for English Quiz
    question: "I ____ to the store to buy some groceries.",
    quizChoice: "A) go\nB) goes\nC) went\nD) gone",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 1, // Quiz ID for English Quiz
    question: "She is an ____ student and always gets top grades.",
    quizChoice:
      "A) intelligent\nB) intelligible\nC) intellectual\nD) intensive",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Spanish Quiz
    question: "How do you say 'hello' in Spanish?",
    quizChoice: "A) Hola\nB) Bonjour\nC) Salut\nD) Konnichiwa",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Spanish Quiz
    question: "What is the Spanish word for 'cat'?",
    quizChoice: "A) Perro\nB) Gato\nC) Vaca\nD) Pájaro",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Spanish Quiz
    question: "Which of the following means 'book' in Spanish?",
    quizChoice: "A) Coche\nB) Libro\nC) Silla\nD) Casa",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Arabic Quiz
    question: "What is the writing direction of Arabic?",
    quizChoice: "A) Left to right\nB) Right to left\nC) Top to bottom",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Arabic Quiz
    question: "What is the Arabic word for 'house'?",
    quizChoice: "A) مدرسة\nB) مطعم\nC) منزل\nD) حديقة",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Arabic Quiz
    question: "ما هو اللون _____؟ What is the color?",
    quizChoice: "A) Red\nB) Yellow\nC) Blue\nD) Green",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Mandarin Quiz
    question: "How many tones does Mandarin Chinese have?",
    quizChoice: "A) 2\nB) 4\nC) 6\nD) 8",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Mandarin Quiz
    question: "What is the Mandarin word for 'apple'?",
    quizChoice:
      "A) 香蕉 (xiāngjiāo)\nB) 西瓜 (xīguā)\nC) 苹果 (píngguǒ)\nD) 橘子 (júzi)",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Mandarin Quiz
    question: "What is the Mandarin word for 'goodbye'?",
    quizChoice:
      "A) 你好 (nǐ hǎo)\nB) 再见 (zàijiàn)\nC) 谢谢 (xièxiè)\nD) 对不起 (duìbùqǐ)",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for French Quiz
    question: "What is the French word for 'goodbye'?",
    quizChoice: "A) Bonjour\nB) Au revoir\nC) Merci\nD) Oui",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for French Quiz
    question: "What is the French word for 'yes'?",
    quizChoice: "A) Oui\nB) Non\nC) Peut-être\nD) Merci",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for French Quiz
    question: "What is the French word for 'water'?",
    quizChoice: "A) Pain\nB) Vin\nC) Lait\nD) Eau",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Soninke Quiz
    question: "What country is Soninke primarily spoken in?",
    quizChoice: "A) Senegal\nB) Mali\nC) Guinea\nD) Gambia",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Soninke Quiz
    question: "What is the Soninke word for 'sun'?",
    quizChoice: "A) Jaabi\nB) Siso\nC) Be\nD) Gara",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Soninke Quiz
    question: "What is the Soninke word for 'money'?",
    quizChoice: "A) Wolof\nB) Na\nC) Jiri\nD) Kopu",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
];


const seedRoles = [
  {
    //   roleID: 1,
    roleName: "Admin",
    description: "Admin role with full access and privileges",
  },
  {
    //   roleID: 2,
    roleName: "User",
    description: "User role with limited access and privileges",
  },
];
const seedTests = [
  {
    //   testID: 1,
    languageId: 1, // Language ID for English
    testName: "English Test",
    difficulty: "Intermediate",
  },
  {
    //   testID: 2,
    languageId: 2, // Language ID for Spanish
    testName: "Spanish Test",
    difficulty: "Beginner",
  },
  {
    //   testID: 3,
    languageId: 3, // Language ID for Arabic
    testName: "Arabic Test",
    difficulty: "Advanced",
  },
  {
    //   testID: 4,
    languageId: 4, // Language ID for Arabic
    testName: "Mandarin Test",
    difficulty: "Advanced",
  },
  {
    //   testID: 5,
    languageId: 5, // Language ID for Arabic
    testName: "French Test",
    difficulty: "Intermediate",
  },
  {
    //   testID: 6,
    languageId: 6, // Language ID for Arabic
    testName: "Soninke Test",
    difficulty: "Beginner",
  },
];

const seedTestQuestions = [
  {
    //   ID: 1,
    testId: 1, // Test ID for English Test
    question: "What is the plural form of 'book'?",
    testChoice: "A) books\nB) bookes\nC) book's\nD) bookes'",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 1,
    testId: 1, // Test ID for English Test
    question: "If you love cats, what will you call yourself in English?",
    testChoice: "A) Cat\nB) Cats\nC) Cat Person\nD) Cat People",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 1,
    testId: 1, // Test ID for English Test
    question: "Who wrote the play 'Romeo and Juliet'?",
    testChoice:
      "A) George Orwell\nB) Jane Austen\nC) Charles Dickens\nD) William Shakespeare",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 2,
    testId: 2, // Test ID for Spanish Test
    question: "Which verb means 'to eat' in Spanish?",
    testChoice: "A) beber\nB) escribir\nC) comer\nD) hablar",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 2,
    testId: 2, // Test ID for Spanish Test
    question: "Which verb means 'to drink' in Spanish?",
    testChoice: "A) comer\nB) beber\nC) dormir\nD) bailar",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 2,
    testId: 2, // Test ID for Spanish Test
    question: "Which verb means 'to write' in Spanish?",
    testChoice: "A) leer\nB) escribir\nC) escuchar\nD) bailar",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 3,
    testId: 3, // Test ID for Arabic Test
    question: "How do you write 'hello' in Arabic?",
    testChoice: "A) مرحبا\nB) صباح الخير\nC) شكرا\nD) مع السلامة",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 3,
    testId: 3, // Test ID for Arabic Test
    question: "Which verb means 'to eat' in Arabic?",
    testChoice: "A) شرب\nB) كتب\nC) قرأ\nD) أكل",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    //   ID: 3,
    testId: 3, // Test ID for Arabic Test
    question: "Which verb means 'to drink' in Arabic?",
    testChoice: "A) أكل\nB) شرب\nC) نام\nD) رقص",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Mandarin Test
    question: "How do you write 'hello' in Mandarin?",
    testChoice: "A) 你好\nB) 再见\nC) 谢谢\nD) 对不起",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Mandarin Test
    question:
      "Which dynasty is known as the 'First Emperor' in Chinese history?",
    testChoice:
      "A) 唐朝 (Táng Cháo)\nB) 秦朝 (Qín Cháo)\nC) 宋朝 (Sòng Cháo)\nD) 明朝 (Míng Cháo)",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Mandarin Test
    question: "Who was the founder of the Ming Dynasty in Chinese history?",
    testChoice:
      "A) 李白 (Lǐ Bái)\nB) 孔子 (Kǒng Zǐ)\nC) 朱元璋 (Zhū Yuánzhāng)\nD) 刘备 (Liú Bèi)",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for French Test
    question: "How do you express 'late for work' in French?",
    testChoice:
      "A) Bonjour\nB) En retard pour le travail\nC) Merci\nD) Excusez-moi",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for French Test
    question: "What is the French word for 'blue'?",
    testChoice: "A) rouge\nB) vert\nC) jaune\nD) bleu",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for French Test
    question: "Which verb means 'to eat' in French?",
    testChoice: "A) lire\nB) écrire\nC) boire\nD) manger",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Soninke Test
    question: "How do you write 'thank you' in Soninke?",
    testChoice: "A) Nagode\nB) Nanga def\nC) Djamano\nD) Ani sana",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Soninke Test
    question: "Kelenɛ ye di wankondiriniw kaasugolonnan dinga cisse?",
    testChoice:
      "A) Dinga Cisse\nB) Sundiata Keita\nC) Mansa Musa\nD) Sonni Ali",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Soninke Test
    question: "Kelenɛ ye di jula fe dalatɛnnan dinga Ghana?",
    testChoice:
      "A) Ghana Empire\nB) Mali Empire\nC) Songhai Empire\nD) Kanem-Bornu Empire",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
];

const seed = async () => {
  await Achievement.bulkCreate(seedAchievements);
  await User.bulkCreate(seedUsers);
  await Language.bulkCreate(seedLanguages);
  await Lesson.bulkCreate(seedLessons);
  await Quiz.bulkCreate(seedQuizzes);
  await QuizQuestion.bulkCreate(seedQuizQuestions);
  await Role.bulkCreate(seedRoles);
  await Test.bulkCreate(seedTests);
  await TestQuestion.bulkCreate(seedTestQuestions);

  const user = await User.findByPk(1); //manually populating the user achievement
  const achievement = await Achievement.findByPk(1);
  await user.addAchievement(achievement);
};

seed().then(() => process.exit());
