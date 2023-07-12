const db = require("./db");
const { Achievement, Friendship, Language, Lesson, Quiz, QuizQuestion, Role, Test, TestQuestion, User } = require("./db/models");


const seedUsers = [
    {
        username: "user1",
        password: "password1",
        points: 0
    },
    {
        username: "user2",
        password: "password2",
        points: 0
    }
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
const seedFriends = [
    {
        userId: 3,
        friendId: 5,
    }, {
        userId: 5,
        friendId: 3,
    }, {
        userId: 1,
        friendId: 5,
    }, {
        userId: 5,
        friendId: 1,
    }
];

const seedLanguages = [
    {
        //   languageID: 1,
        languageName: "English",
        difficulty: "Beginner",
        description: "A widely spoken language used for international communication",
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
        description: "A Semitic language spoken in the Middle East and North Africa",
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
        //   lessonID: 1,
        lessonName: "Introduction to English",
        description: "Learn the basics of the English language",
        content: "Lesson content for Introduction to English",
        languageID: 1, // English language ID
    },
    {
        //   lessonID: 2,
        lessonName: "Introduction to Spanish",
        description: "Learn the basics of the Spanish language",
        content: "Lesson content for Introduction to Spanish",
        languageID: 2, // Spanish language ID
    },
    {
        //   lessonID: 3,
        lessonName: "Introduction to Arabic",
        description: "Learn the basics of the Arabic language",
        content: "Lesson content for Introduction to Arabic",
        languageID: 3, // Arabic language ID
    },
    {
        //   lessonID: 4,
        lessonName: "Introduction to Mandarin",
        description: "Learn the basics of the Mandarin language",
        content: "Lesson content for Introduction to Mandarin",
        languageID: 4, // Mandarin language ID
    },
    {
        //   lessonID: 5,
        lessonName: "Introduction to French",
        description: "Learn the basics of the French language",
        content: "Lesson content for Introduction to French",
        languageID: 5, // French language ID
    },
    {
        //   lessonID: 6,
        lessonName: "Introduction to Soninke",
        description: "Learn the basics of the Soninke language",
        content: "Lesson content for Introduction to Soninke",
        languageID: 6, // Soninke language ID
    }
];

const seedQuizzes = [
    {
        //   quizID: 1,
        languageID: 1, // English language ID
        quizName: "English Quiz",
        difficulty: "Beginner",
    },
    {
        //   quizID: 2,
        languageID: 2, // Spanish language ID
        quizName: "Spanish Quiz",
        difficulty: "Intermediate",
    },
    {
        //   quizID: 3,
        languageID: 3, // Arabic language ID
        quizName: "Arabic Quiz",
        difficulty: "Intermediate",
    },
    {
        //   quizID: 4,
        languageID: 4, // Mandarin language ID
        quizName: "Mandarin Quiz",
        difficulty: "Advanced",
    },
    {
        //   quizID: 5,
        languageID: 5, // French language ID
        quizName: "French Quiz",
        difficulty: "Intermediate",
    },
    {
        //   quizID: 6,
        languageID: 6, // Soninke language ID
        quizName: "Soninke Quiz",
        difficulty: "Beginner",
    }
];

const seedQuizQuestions = [
    {
        //   ID: 1,
        quizID: 1, // Quiz ID for English Quiz
        question: "What is the capital of England?",
        quizChoice: "A) London\nB) Paris\nC) Madrid\nD) Rome",
        correctChoice: "A",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 2,
        quizID: 2, // Quiz ID for Spanish Quiz
        question: "How do you say 'hello' in Spanish?",
        quizChoice: "A) Hola\nB) Bonjour\nC) Salut\nD) Konnichiwa",
        correctChoice: "A",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 3,
        quizID: 3, // Quiz ID for Arabic Quiz
        question: "What is the writing direction of Arabic?",
        quizChoice: "A) Left to right\nB) Right to left\nC) Top to bottom",
        correctChoice: "B",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 4,
        quizID: 4, // Quiz ID for Mandarin Quiz
        question: "How many tones does Mandarin Chinese have?",
        quizChoice: "A) 2\nB) 4\nC) 6\nD) 8",
        correctChoice: "B",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 5,
        quizID: 5, // Quiz ID for French Quiz
        question: "What is the French word for 'goodbye'?",
        quizChoice: "A) Bonjour\nB) Au revoir\nC) Merci\nD) Oui",
        correctChoice: "B",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 6,
        quizID: 6, // Quiz ID for Soninke Quiz
        question: "What country is Soninke primarily spoken in?",
        quizChoice: "A) Senegal\nB) Mali\nC) Guinea\nD) Gambia",
        correctChoice: "A",
        userScore: 0,
        pointWorth: 10,
    }
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
    }
];
const seedTests = [
    {
        //   testID: 1,
        languageID: 1, // Language ID for English
        testName: "English Test",
        difficulty: "Intermediate",
    },
    {
        //   testID: 2,
        languageID: 2, // Language ID for Spanish
        testName: "Spanish Test",
        difficulty: "Beginner",
    },
    {
        //   testID: 3,
        languageID: 3, // Language ID for Arabic
        testName: "Arabic Test",
        difficulty: "Advanced",
    }
];

const seedTestQuestions = [
    {
        //   ID: 1,
        testID: 1, // Test ID for English Test
        question: "What is the plural form of 'book'?",
        testChoice: "A) books\nB) bookes\nC) book's\nD) bookes'",
        correctChoice: "A",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 2,
        testID: 2, // Test ID for Spanish Test
        question: "Which verb means 'to eat' in Spanish?",
        testChoice: "A) beber\nB) escribir\nC) comer\nD) hablar",
        correctChoice: "C",
        userScore: 0,
        pointWorth: 10,
    },
    {
        //   ID: 3,
        testID: 3, // Test ID for Arabic Test
        question: "How do you write 'hello' in Arabic?",
        testChoice: "A) مرحبا\nB) صباح الخير\nC) شكرا\nD) مع السلامة",
        correctChoice: "A",
        userScore: 0,
        pointWorth: 10,
    }
];

const seed = async () => {
    await User.bulkCreate(seedUsers);
    await Achievement.bulkCreate(seedAchievements);
    // await Friendship.bulkCreate(seedFriends);
    //   await Language.bulkCreate(seedLanguages);
    //   await Lesson.bulkCreate(seedLessons);
    //   await Quiz.bulkCreate(seedQuizzes);
    //   await QuizQuestion.bulkCreate(seedQuizQuestions);
    //   await Role.bulkCreate(seedRoles);
    //   await Test.bulkCreate(seedTests);
    //   await TestQuestion.bulkCreate(seedTestQuestions);

};

seed().then(() => process.exit());