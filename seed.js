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
  Avatar,

} = require("./db/models");

const seedUsers = [
  {
    email: "user1@gmail.com",
    username: "user1",
    password: "password1",
    points: 0,
    isAdmin: true
  },
  {
    email: "user2@gmail.com",
    username: "user2",
    password: "password2",
    points: 0,
    isAdmin: false
  },
 {

    email: "rana@aminata.com",
    username: "ranaminata",
    password: "54321",
    points: 0,
    isAdmin: false
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
    completed: false,
  },
  {
    lessonName: "Intermediate English",
    description: "Expand your English language skills",
    content: '[{"question": "What are some common phrasal verbs?", "answer": "Some common phrasal verbs include: go on, take off, put up with, and get over."}, {"question": "How can I improve my pronunciation?", "answer": "You can improve your pronunciation by practicing regularly and listening to native speakers."}, {"question": "What are the past tense forms of irregular verbs?", "answer": "Some examples of irregular verbs in the past tense are: go (went), eat (ate), and come (came)."}]',
    languageId: 1, // English language ID
    completed: false,
  },
  {
    lessonName: "Advanced English",
    description: "Master the complexities of the English language",
    content: '[{"question": "What are some advanced grammar topics?", "answer": "Some advanced grammar topics include: subjunctive mood, conditional sentences, and relative clauses."}, {"question": "How can I expand my vocabulary?", "answer": "You can expand your vocabulary by reading extensively, learning new words daily, and using a thesaurus."}, {"question": "What are some common idiomatic expressions?", "answer": "Some common idiomatic expressions are: break a leg, hit the nail on the head, and piece of cake."}]',
    languageId: 1, // English language ID
    completed: false,
  },
  {
    lessonName: "Introduction to Spanish",
    description: "Learn the basics of the Spanish language",
    content: '[{"question": "¿Cuál es tu nombre?", "answer": "Mi nombre es Juan."}, {"question": "¿Cuántos años tienes?", "answer": "Tengo 30 años."}, {"question": "¿Dónde vives?", "answer": "Vivo en Madrid."}, {"question": "¿Cuál es tu color favorito?", "answer": "Mi color favorito es verde."}, {"question": "¿Qué te gusta hacer en tu tiempo libre?", "answer": "Me gusta leer y ver películas."}]',
    languageId: 2, // Spanish language ID
    completed: false,
  },
  {
    lessonName: "Intermediate Spanish",
    description: "Expand your Spanish language skills",
    content: '[{"question": "¿Cómo se dice en español?", "answer": "Se dice \'gracias\'."}, {"question": "¿Cuáles son los tiempos verbales en español?", "answer": "Los tiempos verbales en español incluyen: presente, pasado, futuro, pretérito, imperativo, entre otros."}, {"question": "¿Dónde se habla español como lengua materna?", "answer": "El español es lengua materna en varios países de América Latina y España."}]',
    languageId: 2, // Spanish language ID
    completed: false,
  },
  {
    lessonName: "Advanced Spanish",
    description: "Master the complexities of the Spanish language",
    content: '[{"question": "¿Cuáles son las diferencias entre el español de España y el español de América Latina?", "answer": "Las diferencias incluyen el uso de algunas palabras, la pronunciación y algunos aspectos gramaticales."}, {"question": "¿Cuál es la historia del español?", "answer": "El español se originó en la península ibérica y se extendió a través de la colonización a América y otras partes del mundo."}, {"question": "¿Cómo se dice \'computadora\' en español?", "answer": "En español, se dice \'computadora\' en algunos países y \'ordenador\' en otros."}]',
    languageId: 2, // Spanish language ID
    completed: false,
  },
  {
    lessonName: "Introduction to Arabic",
    description: "Learn the basics of the Arabic language",
    content: '[{"question": "ما اسمك؟", "answer": "اسمي سارة."}, {"question": "كم عمرك؟", "answer": "عمري 25 سنة."}, {"question": "أين تعيش؟", "answer": "أنا أعيش في لندن."}, {"question": "ما هو لونك المفضل؟", "answer": "لوني المفضل هو الأزرق."}, {"question": "ما الذي تحب فعله في وقت فراغك؟", "answer": "أنا أستمتع بالقراءة وممارسة الرياضة."}]',
    languageId: 3, // Arabic language ID
    completed: false,
  },
  {
    lessonName: "Intermediate Arabic",
    description: "Expand your Arabic language skills",
    content: '[{"question": "ما هي بعض الصيغ النحوية في اللغة العربية؟", "answer": "بعض الصيغ النحوية في اللغة العربية تشمل: الفعل المضارع، الفعل الماضي، المبالغة والتفضيل، وصيغة الأمر."}, {"question": "ما هي القراءة الصحيحة للحروف العربية؟", "answer": "يمكنك تحسين قراءتك الصحيحة للحروف العربية من خلال التمارين المنتظمة والتطبيق العملي."}, {"question": "ما هي بعض الكلمات العربية المستعارة في اللغات الأخرى؟", "answer": "بعض الكلمات العربية المستعارة تشمل: قطن، سكندر، جزر، صفر، وغيرها."}]',
    languageId: 3, // Arabic language ID
    completed: false,
  },
  {
    lessonName: "Advanced Arabic",
    description: "Master the complexities of the Arabic language",
    content: '[{"question": "ما هي الأدبيات العربية المشهورة؟", "answer": "الأدب العربي له تاريخ طويل ومتنوع ويشمل العديد من الأعمال الكلاسيكية والمعاصرة."}, {"question": "ما هي اللهجات العربية المختلفة؟", "answer": "يوجد العديد من اللهجات العربية التي تختلف من بلد لآخر وتشمل لهجات مصر، السعودية، العراق، اللبنانية، وغيرها."}, {"question": "كيف يمكنني تعلم الخط العربي؟", "answer": "يمكنك تعلم الخط العربي عن طريق ممارسة الكتابة واستخدام الأدوات الصحيحة."}]',
    languageId: 3, // Arabic language ID
    completed: false,
  },
  {
    lessonName: "Introduction to Mandarin",
    description: "Learn the basics of the Mandarin language",
    content: '[{"question": "你叫什么名字？", "answer": "我叫李华。"}, {"question": "你多大了？", "answer": "我25岁。"}, {"question": "你住在哪里？", "answer": "我住在北京。"}, {"question": "你最喜欢什么颜色？", "answer": "我最喜欢蓝色。"}, {"question": "你在空闲时间喜欢做什么？", "answer": "我喜欢看书和打篮球。"}]',
    languageId: 4, // Mandarin language ID
    completed: false,
  },
  {
    lessonName: "Intermediate Mandarin",
    description: "Expand your Mandarin language skills",
    content: '[{"question": "怎样正确发音汉语音节？", "answer": "正确发音汉语音节需要多练习，特别是声母和韵母的组合。"}, {"question": "汉语有多少种方言？", "answer": "汉语有很多种方言，因为中国地域广阔，各地的语言有些许差异。"}, {"question": "怎样在汉语中正确使用量词？", "answer": "在汉语中，数量词要与量词一起使用，要根据物品的性质选择合适的量词。"}]',
    languageId: 4, // Mandarin language ID
    completed: false,
  },
  {
    lessonName: "Advanced Mandarin",
    description: "Master the complexities of the Mandarin language",
    content: '[{"question": "怎样用汉语进行交流？", "answer": "用汉语进行交流要注意礼貌和文化习惯，了解不同场合使用不同的礼节。"}, {"question": "如何提高听力和口语水平？", "answer": "提高听力和口语水平要多听多说，可以参与语言交换或找外教进行口语练习。"}, {"question": "怎样写汉字？", "answer": "写汉字需要掌握笔画和笔顺，多写多练习，可以使用汉字练习纸。"}]',
    languageId: 4, // Mandarin language ID
    completed: false,
  },
  {
    lessonName: "Introduction to French",
    description: "Learn the basics of the French language",
    content: '[{"question": "Comment t\u2019appelles-tu ?", "answer": "Je m\u2019appelle Marie."}, {"question": "Quel âge as-tu ?", "answer": "J\u2019ai 28 ans."}, {"question": "Où est-ce que tu habites ?", "answer": "J\u2019habite à Paris."}, {"question": "Quelle est ta couleur préférée ?", "answer": "Je préfère le rouge."}, {"question": "Qu\u2019aimes-tu faire pendant ton temps libre?", "answer": "J\u2019aime lire et cuisiner."}]',
    languageId: 5, // French language ID
    completed: false,
  },
  {
    lessonName: "Intermediate French",
    description: "Expand your French language skills",
    content: '[{"question": "Comment exprimer une opinion en français ?", "answer": "Pour exprimer une opinion en français, on peut utiliser des expressions comme « Je pense que », « À mon avis », ou « Selon moi »."}, {"question": "Quels sont les temps verbaux en français ?", "answer": "Les temps verbaux en français incluent : le présent, l\u2019imparfait, le futur, le passé composé, et bien d\u2019autres."}, {"question": "Où est-ce que le français est parlé comme langue officielle ?", "answer": "Le français est la langue officielle de nombreux pays francophones en Afrique, en Amérique, et en Europe."}]',
    languageId: 5, // French language ID
    completed: false,
  },
  {
    lessonName: "Advanced French",
    description: "Master the complexities of the French language",
    content: '[{"question": "Quels sont les auteurs français célèbres ?", "answer": "La littérature française compte de nombreux auteurs célèbres tels que Victor Hugo, Marcel Proust, et Albert Camus."}, {"question": "Quels sont les accents régionaux en français ?", "answer": "Il existe de nombreux accents régionaux en français, tels que l\u2019accent du sud de la France, l\u2019accent québécois, et bien d\u2019autres."}, {"question": "Comment forme-t-on le subjonctif en français ?", "answer": "Le subjonctif en français se forme à partir de la troisième personne du pluriel du présent de l\u2019indicatif."}]',
    languageId: 5, // French language ID
    completed: false,
  },
  {
    lessonName: "Introduction to Soninke",
    description: "Learn the basics of the Soninke language",
    content: '[{"question": "Kanan kono?", "answer": "Na faga Sarah."}, {"question": "Keewi duma na?", "answer": "Na faga 25 aneesi."}, {"question": "Fu yey akala?", "answer": "Na ngon Londre."}, {"question": "Kanaani boorɗe dun?", "answer": "Na boorɗe buɗɗi luundi."}, {"question": "Kewi ni nta dɔɔnin kɔnɔ?", "answer": "Na uddani kunnge ko uddu, uddu kɛ doo taliing. "}]',
    languageId: 6, // Soninke language ID
    completed: false,
  },
  {
    lessonName: "Intermediate Soninke",
    description: "Expand your Soninke language skills",
    content: '[{"question": "Men koɗo ni jiɗin-fon?", "answer": "Men ɗumɗo koɗon kadi maa koɗon puɗɗi ko ɗuum faggudu."}, {"question": "Ko men mbiyee ka dumɗo?", "answer": "Men mbiyi, dumɗo e puɗɗi ko ɗuum koɗon haa ɗum kadi puɗɗi ka ɗuum. "}, {"question": "Ko men kadii kanndi, baɗɗo e boofa ɗum?", "answer": "ɗuum men kadii kanndi, baɗɗo e ɗuum waawi kanndo-ɗaa kadi men ɗumɗo maa."}]',
    languageId: 6, // Soninke language ID
    completed: false,
  },
  {
    lessonName: "Advanced Soninke",
    description: "Master the complexities of the Soninke language",
    content: '[{"question": "Maa ngoniyaaje puɗɗi?", "answer": "Puɗɗi maɓɓe maa ngoniyaaje yimɓe e yimɓe ngoniyaaje weltaare maɓɓe."}, {"question": "Men kaɗɗiti ka dumɗo?", "answer": "Men dumɗo ɗum maa kaɗɗiti, ngam men ko mum kaɗɗiti dumɗo maa."}, {"question": "Ko men kadii waɗi kaɗɗiti dumɗo?", "answer": "Men kadii waɗi kaɗɗiti dumɗo e puɗɗi koɗon haa dumɗo."}]',
    languageId: 6, // Soninke language ID
    completed: false,
  },
];


const seedQuizzes = [
  {
    //   quizID: 1,
    languageId: 1, // English language ID
    quizName: "English Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 1,
    languageId: 1, // English language ID
    quizName: "English Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 1,
    languageId: 1, // English language ID
    quizName: "English Quiz III",
    difficulty: "Advanced",
  },
  {
    //   quizID: 2,
    languageId: 2, // Spanish language ID
    quizName: "Spanish Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 2,
    languageId: 2, // Spanish language ID
    quizName: "Spanish Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 2,
    languageId: 2, // Spanish language ID
    quizName: "Spanish Quiz III",
    difficulty: "Advanced",
  },
  {
    //   quizID: 3,
    languageId: 3, // Arabic language ID
    quizName: "Arabic Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 3,
    languageId: 3, // Arabic language ID
    quizName: "Arabic Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 3,
    languageId: 3, // Arabic language ID
    quizName: "Arabic Quiz III",
    difficulty: "Advanced",
  },
  {
    //   quizID: 4,
    languageId: 4, // Mandarin language ID
    quizName: "Mandarin Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 4,
    languageId: 4, // Mandarin language ID
    quizName: "Mandarin Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 4,
    languageId: 4, // Mandarin language ID
    quizName: "Mandarin Quiz III",
    difficulty: "Advanced",
  },
  {
    //   quizID: 5,
    languageId: 5, // French language ID
    quizName: "French Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 5,
    languageId: 5, // French language ID
    quizName: "French Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 5,
    languageId: 5, // French language ID
    quizName: "French Quiz III",
    difficulty: "Advanced",
  },
  {
    //   quizID: 6,
    languageId: 6, // Soninke language ID
    quizName: "Soninke Quiz I",
    difficulty: "Beginner",
  },
  {
    //   quizID: 6,
    languageId: 6, // Soninke language ID
    quizName: "Soninke Quiz II",
    difficulty: "Intermediate",
  },
  {
    //   quizID: 6,
    languageId: 6, // Soninke language ID
    quizName: "Soninke Quiz III",
    difficulty: "Advanced",
  },
];

const seedQuizQuestions = [
  {
    quizId: 1, // Quiz ID for Beginner English Quiz
    question: "What is the capital of England?",
    quizChoice: "A) London\nB) Paris\nC) Madrid\nD) Rome",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 1, // Quiz ID for Beginner English Quiz
    question: "I ____ to the store to buy some groceries.",
    quizChoice: "A) go\nB) goes\nC) went\nD) gone",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 1, // Quiz ID for Beginner English Quiz
    question: "She is an ____ student and always gets top grades.",
    quizChoice:
      "A) intelligent\nB) intelligible\nC) intellectual\nD) intensive",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Intermediate English Quiz
    question: "What is the past tense of the verb 'to eat'?",
    quizChoice: "A) eating\nB) eats\nC) ate\nD) eaten",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Intermediate English Quiz
    question:
      "Choose the correct word to complete the sentence: She ____ the book last night.",
    quizChoice: "A) reads\nB) read\nC) reading\nD) have read",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 2, // Quiz ID for Intermediate English Quiz
    question: "Select the antonym of the word 'happy'.",
    quizChoice: "A) sad\nB) angry\nC) excited\nD) joyful",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Advanced English Quiz
    question:
      "Which literary device is used in the phrase: 'The world is my oyster.'?",
    quizChoice: "A) Simile\nB) Metaphor\nC) Personification\nD) Alliteration",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Advanced English Quiz
    question: "What is the meaning of the idiom: 'Break a leg'?",
    quizChoice:
      "A) Good luck\nB) Get well soon\nC) Congratulations\nD) Stay strong",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 3, // Quiz ID for Advanced English Quiz
    question:
      "Identify the figure of speech used in the sentence: 'His words cut like a knife.'",
    quizChoice: "A) Simile\nB) Metaphor\nC) Hyperbole\nD) Oxymoron",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Beginner Spanish Quiz
    question: "How do you say 'hello' in Spanish?",
    quizChoice: "A) Hola\nB) Bonjour\nC) Salut\nD) Konnichiwa",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Beginner Spanish Quiz
    question: "What is the Spanish word for 'cat'?",
    quizChoice: "A) Perro\nB) Gato\nC) Vaca\nD) Pájaro",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 4, // Quiz ID for Beginner Spanish Quiz
    question: "Which of the following means 'book' in Spanish?",
    quizChoice: "A) Coche\nB) Libro\nC) Silla\nD) Casa",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for Intermediate Spanish Quiz
    question: "What is the Spanish word for 'good morning'?",
    quizChoice:
      "A) Buenas noches\nB) Buenas tardes\nC) Buenos días\nD) Buenas tardes",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for Intermediate Spanish Quiz
    question: "Choose the correct translation: 'I want to eat'?",
    quizChoice:
      "A) Quiero beber\nB) Quiero dormir\nC) Quiero comer\nD) Quiero bailar",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 5, // Quiz ID for Intermediate Spanish Quiz
    question: "What is the Spanish word for 'beach'?",
    quizChoice: "A) Río\nB) Montaña\nC) Lago\nD) Playa",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Advanced Spanish Quiz
    question: "What does the idiom 'ponerse las pilas' mean in Spanish?",
    quizChoice:
      "A) To jump the gun\nB) To hit the nail on the head\nC) To pull one's socks up\nD) To get one's act together",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Advanced Spanish Quiz
    question:
      "Identify the correct conjugation: 'Yo _____ (hablar) con él ayer.'",
    quizChoice: "A) hablé\nB) hablo\nC) hablaré\nD) habló",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 6, // Quiz ID for Advanced Spanish Quiz
    question: "What is the equivalent of 'to become' in Spanish?",
    quizChoice: "A) ser\nB) estar\nC) hacer\nD) volverse",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 7, // Quiz ID for Beginner Arabic Quiz
    question: "What is the writing direction of Arabic?",
    quizChoice: "A) Left to right\nB) Right to left\nC) Top to bottom",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 7, // Quiz ID for Beginner Arabic Quiz
    question: "What is the Arabic word for 'house'?",
    quizChoice: "A) مدرسة\nB) مطعم\nC) منزل\nD) حديقة",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 7, // Quiz ID for Beginner Arabic Quiz
    question: "ما هو اللون _____؟ What is the color?",
    quizChoice: "A) Red\nB) Yellow\nC) Blue\nD) Green",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 8, // Quiz ID for Intermediate Arabic Quiz
    question: "What is the Arabic word for 'good morning'?",
    quizChoice: "A) صباح الخير\nB) مساء الخير\nC) ليلة سعيدة\nD) مرحبا",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 8, // Quiz ID for Intermediate Arabic Quiz
    question: "Choose the correct translation: 'I want to eat'?",
    quizChoice: "A) أريد الشرب\nB) أريد النوم\nC) أريد الأكل\nD) أريد الرقص",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 8, // Quiz ID for Intermediate Arabic Quiz
    question: "What is the Arabic word for 'beach'?",
    quizChoice: "A) نهر\nB) جبل\nC) بحيرة\nD) شاطئ",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 9, // Quiz ID for Advanced Arabic Quiz
    question: "What does the idiom 'كما تدين تُدان' mean in Arabic?",
    quizChoice:
      "A) Do unto others as you would have them do unto you\nB) Actions speak louder than words\nC) The apple doesn't fall far from the tree\nD) Better late than never",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 9, // Quiz ID for Advanced Arabic Quiz
    question:
      "Identify the correct conjugation: 'أنا _____ (أكتب) الرسالة الآن.'",
    quizChoice: "A) كتبت\nB) كتب\nC) سأكتب\nD) أكتب",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 9, // Quiz ID for Advanced Arabic Quiz
    question: "What is the equivalent of 'to become' in Arabic?",
    quizChoice: "A) يكون\nB) يكون\nC) يفعل\nD) يصبح",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 10, // Quiz ID for Beginner Mandarin Quiz
    question: "How many tones does Mandarin Chinese have?",
    quizChoice: "A) 2\nB) 4\nC) 6\nD) 8",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 10, // Quiz ID for Beginner Mandarin Quiz
    question: "What is the Mandarin word for 'apple'?",
    quizChoice: "A) 香蕉 \nB) 西瓜 \nC) 苹果 \nD) 橘子 ",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 10, // Quiz ID for Beginner Mandarin Quiz
    question: "What is the Mandarin word for 'goodbye'?",
    quizChoice: "A) 你好 \nB) 再见 \nC) 谢谢 \nD) 对不起 ",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 11, // Quiz ID for Intermediate Mandarin Quiz
    question: "What does '好久不见' mean in Mandarin?",
    quizChoice:
      "A) Long time no see\nB) How are you?\nC) What is your name?\nD) Thank you",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 11, // Quiz ID for Intermediate Mandarin Quiz
    question: "Identify the correct translation: 'I am going to the store.'",
    quizChoice: "A) 我在商店。\nB) 我要去商店。\nC) 我在学校。\nD) 我在家。",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 11, // Quiz ID for Intermediate Mandarin Quiz
    question: "What is the Mandarin word for 'school'?",
    quizChoice: "A) 学生 \nB) 饭店 \nC) 学校 \nD) 超市 ",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 12, // Quiz ID for Advanced Mandarin Quiz
    question:
      "What does the idiom '一见钟情' mean in Mandarin?",
    quizChoice:
      "A) Love at first sight\nB) Actions speak louder than words\nC) The early bird catches the worm\nD) Beggars can't be choosers",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 12, // Quiz ID for Advanced Mandarin Quiz
    question: "Identify the correct conjugation: '我昨天 _____ (吃) 汉堡包.'",
    quizChoice: "A) 吃\nB) 吃了\nC) 吃过\nD) 吃着",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 12, // Quiz ID for Advanced Mandarin Quiz
    question: "What is the equivalent of 'to become' in Mandarin?",
    quizChoice: "A) 是\nB) 在\nC) 做\nD) 成为",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 13, // Quiz ID for Beginner French Quiz
    question: "What is the French word for 'goodbye'?",
    quizChoice: "A) Bonjour\nB) Au revoir\nC) Merci\nD) Oui",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 13, // Quiz ID for Beginner French Quiz
    question: "What is the French word for 'yes'?",
    quizChoice: "A) Oui\nB) Non\nC) Peut-être\nD) Merci",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 13, // Quiz ID for Beginner French Quiz
    question: "What is the French word for 'water'?",
    quizChoice: "A) Pain\nB) Vin\nC) Lait\nD) Eau",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 14, // Quiz ID for Intermediate French Quiz
    question: "What does 'Je vais bien' mean in French?",
    quizChoice: "A) I am hungry\nB) I am tired\nC) I am fine\nD) I am lost",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 14, // Quiz ID for Intermediate French Quiz
    question: "Identify the correct translation: 'Il fait chaud aujourd'hui.'",
    quizChoice:
      "A) It is cold today.\nB) It is raining today.\nC) It is sunny today.\nD) It is windy today.",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 14, // Quiz ID for Intermediate French Quiz
    question: "What is the French word for 'breakfast'?",
    quizChoice: "A) Déjeuner\nB) Dîner\nC) Souper\nD) Petit déjeuner",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 15, // Quiz ID for Advanced French Quiz
    question:
      "What does the idiom 'C'est la goutte d'eau qui fait déborder le vase' mean in French?",
    quizChoice:
      "A) Actions speak louder than words\nB) Beggars can't be choosers\nC) It's the last straw that breaks the camel's back\nD) Love at first sight",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 15, // Quiz ID for Advanced French Quiz
    question:
      "Identify the correct conjugation: 'Nous _____ (aller) au cinéma.'",
    quizChoice: "A) aller\nB) allons\nC) allé\nD) allait",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 15, // Quiz ID for Advanced French Quiz
    question: "What is the equivalent of 'to become' in French?",
    quizChoice: "A) être\nB) avoir\nC) devenir\nD) faire",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 16, // Quiz ID for Beginner Soninke Quiz
    question: "What country is Soninke primarily spoken in?",
    quizChoice: "A) Senegal\nB) Mali\nC) Guinea\nD) Gambia",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 16, // Quiz ID for Beginner Soninke Quiz
    question: "What is the Soninke word for 'sun'?",
    quizChoice: "A) Neh Zi\nB) Kiyeh\nC) Biteh\nD) Kanmeh",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 16, // Quiz ID for Beginner Soninke Quiz
    question: "What is the Soninke word for 'money'?",
    quizChoice: "A) Wolof\nB) Nabureh\nC) Khaleesi\nD) Kopu",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 17, // Quiz ID for Intermediate Soninke Quiz
    question: "What is the Soninke word for 'water'?",
    quizChoice: "A) Maro\nB) Jii\nC) Khachi\nD) Boisson",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 17, // Quiz ID for Intermediate Soninke Quiz
    question:
      "Identify the correct translation: 'Lemounou m'paye sangana selana'",
    quizChoice:
      "A) The cat is sleeping on the roof.\nB) The sun is shining brightly.\nC) The children are playing outside.\nD) The dog is barking loudly.",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 17, // Quiz ID for Intermediate Soninke Quiz
    question: "What does 'an khubareh' mean in Soninke?",
    quizChoice: "A) Good morning\nB) Thank you\nC) How are you?\nD) Excuse me",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 18, // Quiz ID for Advanced Soninke Quiz
    question: "What does the idiom 'Sabirinde m'paso nabureh' mean in Soninke?",
    quizChoice:
      "A) A friend in need is a friend indeed.\nB) Actions speak louder than words.\nC) Birds of a feather flock together.\nD) It's better to be patient than to be rich.",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 18, // Quiz ID for Advanced Soninke Quiz
    question: "Identify the correct translation: 'Hanken m'paye etenu ku kata.'",
    quizChoice:
      "A) The trees are swaying in the wind.\nB) The river is flowing rapidly.\nC) The birds are singing in the sky.\nD) The fish are swimming in the lake.",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    quizId: 18, // Quiz ID for Advanced Soninke Quiz
    question: "What is the equivalent of 'to dream' in Soninke?",
    quizChoice: "A) Saghu\nB) Yaala\nC) Kuyi\nD) Dembe",
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
    // testID: 1,
    languageId: 1, // English language ID
    testName: "English Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 1,
    languageId: 1, // English language ID
    testName: "English Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 1,
    languageId: 1, // English language ID
    testName: "English Test III",
    difficulty: "Advanced",
  },
  {
    // testID: 2,
    languageId: 2, // Spanish language ID
    testName: "Spanish Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 2,
    languageId: 2, // Spanish language ID
    testName: "Spanish Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 2,
    languageId: 2, // Spanish language ID
    testName: "Spanish Test III",
    difficulty: "Advanced",
  },
  {
    // testID: 3,
    languageId: 3, // Arabic language ID
    testName: "Arabic Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 3,
    languageId: 3, // Arabic language ID
    testName: "Arabic Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 3,
    languageId: 3, // Arabic language ID
    testName: "Arabic Test III",
    difficulty: "Advanced",
  },
  {
    // testID: 4,
    languageId: 4, // Mandarin language ID
    testName: "Mandarin Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 4,
    languageId: 4, // Mandarin language ID
    testName: "Mandarin Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 4,
    languageId: 4, // Mandarin language ID
    testName: "Mandarin Test III",
    difficulty: "Advanced",
  },
  {
    // testID: 5,
    languageId: 5, // French language ID
    testName: "French Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 5,
    languageId: 5, // French language ID
    testName: "French Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 5,
    languageId: 5, // French language ID
    testName: "French Test III",
    difficulty: "Advanced",
  },
  {
    // testID: 6,
    languageId: 6, // Soninke language ID
    testName: "Soninke Test I",
    difficulty: "Beginner",
  },
  {
    // testID: 6,
    languageId: 6, // Soninke language ID
    testName: "Soninke Test II",
    difficulty: "Intermediate",
  },
  {
    // testID: 6,
    languageId: 6, // Soninke language ID
    testName: "Soninke Test III",
    difficulty: "Advanced",
  },
];

const seedTestQuestions = [
  {
    testId: 1, // Test ID for Beginner English Test
    question: "What is the plural form of 'book'?",
    testChoice: "A) books\nB) bookes\nC) book's\nD) bookes'",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 1, // Test ID for Beginner English Test
    question: "If you love cats, what will you call yourself in English?",
    testChoice: "A) Cat\nB) Cats\nC) Cat Person\nD) Cat People",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 1, // Test ID for Beginner English Test
    question: "Who wrote the play 'Romeo and Juliet'?",
    testChoice:
      "A) George Orwell\nB) Jane Austen\nC) Charles Dickens\nD) William Shakespeare",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 2, // Test ID for Intermediate English Test
    question: "What is the past tense of the verb 'run'?",
    testChoice: "A) running\nB) runned\nC) run\nD) ran",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 2, // Test ID for Intermediate English Test
    question: "Which word means 'a feeling of great happiness and excitement'?",
    testChoice: "A) sad\nB) anxious\nC) joyful\nD) angry",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 2, // Test ID for Intermediate English Test
    question: "What is the comparative form of the adjective 'big'?",
    testChoice: "A) biger\nB) bigger\nC) bigest\nD) bigged",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 3, // Test ID for Advanced English Test
    question:
      "What literary device is used in the phrase 'The world is my oyster'?",
    testChoice: "A) metaphor\nB) simile\nC) personification\nD) hyperbole",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 3, // Test ID for Advanced English Test
    question: "Who is considered the father of English literature?",
    testChoice:
      "A) Mark Twain\nB) Charles Dickens\nC) William Shakespeare\nD) Geoffrey Chaucer",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 3, // Test ID for Advanced English Test
    question: "What is the meaning of the word 'elucidate'?",
    testChoice: "A) to confuse\nB) to enlighten\nC) to amuse\nD) to criticize",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Beginner Spanish Test
    question: "Which verb means 'to eat' in Spanish?",
    testChoice: "A) beber\nB) escribir\nC) comer\nD) hablar",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Beginner Spanish Test
    question: "Which verb means 'to drink' in Spanish?",
    testChoice: "A) comer\nB) beber\nC) dormir\nD) bailar",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 4, // Test ID for Beginner Spanish Test
    question: "Which verb means 'to write' in Spanish?",
    testChoice: "A) leer\nB) escribir\nC) escuchar\nD) bailar",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for Intermediate Spanish Test
    question: "Which verb means 'to travel' in Spanish?",
    testChoice: "A) viajar\nB) hablar\nC) correr\nD) nadar",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for Intermediate Spanish Test
    question: "What is the Spanish word for 'beautiful'?",
    testChoice: "A) bonito\nB) feo\nC) hermoso\nD) grande",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 5, // Test ID for Intermediate Spanish Test
    question: "Which of the following means 'family' in Spanish?",
    testChoice: "A) trabajo\nB) comida\nC) casa\nD) familia",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Advanced Spanish Test
    question: "What is the meaning of the Spanish phrase 'no hay problema'?",
    testChoice:
      "A) no problem\nB) problem solved\nC) there is a problem\nD) problematic",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Advanced Spanish Test
    question: "Which famous artist is known for painting 'Guernica'?",
    testChoice:
      "A) Salvador Dalí\nB) Pablo Picasso\nC) Diego Rivera\nD) Frida Kahlo",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 6, // Test ID for Advanced Spanish Test
    question: "What is the Spanish word for 'freedom'?",
    testChoice: "A) libertad\nB) igualdad\nC) justicia\nD) paz",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 7, // Test ID for Beginner Arabic Test
    question: "How do you write 'hello' in Arabic?",
    testChoice: "A) مرحبا\nB) صباح الخير\nC) شكرا\nD) مع السلامة",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 7, // Test ID for Beginner Arabic Test
    question: "Which verb means 'to eat' in Arabic?",
    testChoice: "A) شرب\nB) كتب\nC) قرأ\nD) أكل",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 7, // Test ID for Beginner Arabic Test
    question: "Which verb means 'to drink' in Arabic?",
    testChoice: "A) أكل\nB) شرب\nC) نام\nD) رقص",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 8, // Test ID for Intermediate Arabic Test
    question: "What is the Arabic word for 'friend'?",
    testChoice: "A) معلم\nB) أخ\nC) أم\nD) والدة",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 8, // Test ID for Intermediate Arabic Test
    question: "Which of the following means 'thank you' in Arabic?",
    testChoice: "A) نعم\nB) مع السلامة\nC) شكرا\nD) أين",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 8, // Test ID for Intermediate Arabic Test
    question: "What is the Arabic word for 'beautiful'?",
    testChoice: "A) قبيح\nB) رائع\nC) سيء\nD) صغير",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 9, // Test ID for Advanced Arabic Test
    question: "What is the meaning of the Arabic word 'سلام'?",
    testChoice: "A) love\nB) peace\nC) hope\nD) dream",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 9, // Test ID for Advanced Arabic Test
    question:
      "Which famous Egyptian singer is known as the 'Star of the East'?",
    testChoice: "A) Amr Diab\nB) Umm Kulthum\nC) Mohamed Mounir\nD) Fairuz",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 9, // Test ID for Advanced Arabic Test
    question: "What is the Arabic word for 'knowledge'?",
    testChoice: "A) فن\nB) علم\nC) حب\nD) جمال",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 10, // Test ID for Beginner Mandarin Test
    question: "How do you write 'hello' in Mandarin?",
    testChoice: "A) 你好\nB) 再见\nC) 谢谢\nD) 对不起",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 10, // Test ID for Beginner Mandarin Test
    question:
      "Which dynasty is known as the 'First Emperor' in Chinese history?",
    testChoice: "A) 唐朝 \nB) 秦朝 \nC) 宋朝 \nD) 明朝 ",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 10, // Test ID for Beginner Mandarin Test
    question: "Who was the founder of the Ming Dynasty in Chinese history?",
    testChoice: "A) 李白 \nB) 孔子 \nC) 朱元璋 \nD) 刘备 ",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 11, // Test ID for Intermediate Mandarin Test
    question: "What is the Mandarin word for 'beautiful'?",
    testChoice: "A) 漂亮\nB) 聪明\nC) 高兴\nD) 幸福",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 11, // Test ID for Intermediate Mandarin Test
    question: "In Chinese cuisine, what does '包子' refer to?",
    testChoice: "A) Dumplings\nB) Spring rolls\nC) Mooncakes\nD) Buns",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 11, // Test ID for Intermediate Mandarin Test
    question: "What is the meaning of the Mandarin phrase '加油'?",
    testChoice: "A) Hello\nB) Goodbye\nC) Congratulations\nD) Go for it",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 12, // Test ID for Advanced Mandarin Test
    question:
      "Who was the famous Chinese philosopher and educator known as 'Confucius'?",
    testChoice: "A) 孟子\nB) 孔子\nC) 老子\nD) 墨子",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 12, // Test ID for Advanced Mandarin Test
    question: "Which Chinese holiday is also known as the 'Spring Festival'?",
    testChoice: "A) 中秋节\nB) 清明节\nC) 春节\nD) 端午节",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 12, // Test ID for Advanced Mandarin Test
    question:
      "Which famous Chinese novel is considered one of the Four Great Classical Novels of Chinese literature?",
    testChoice: "A) 三国演义\nB) 西游记\nC) 红楼梦\nD) 水浒传",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 13, // Test ID for Beginner French Test
    question: "How do you express 'late for work' in French?",
    testChoice:
      "A) Bonjour\nB) En retard pour le travail\nC) Merci\nD) Excusez-moi",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 13, // Test ID for Beginner French Test
    question: "What is the French word for 'blue'?",
    testChoice: "A) rouge\nB) vert\nC) jaune\nD) bleu",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 13, // Test ID for Beginner French Test
    question: "Which verb means 'to eat' in French?",
    testChoice: "A) lire\nB) écrire\nC) boire\nD) manger",
    correctChoice: "D",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 14, // Test ID for Intermediate French Test
    question: "What is the French word for 'friend'?",
    testChoice: "A) ami\nB) famille\nC) école\nD) maison",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 14, // Test ID for Intermediate French Test
    question: "In French cuisine, what does 'croissant' refer to?",
    testChoice: "A) Cake\nB) Pastry\nC) Soup\nD) Salad",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 14, // Test ID for Intermediate French Test
    question: "What is the meaning of the French phrase 'au revoir'?",
    testChoice: "A) Hello\nB) Goodbye\nC) Thank you\nD) Please",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 15, // Test ID for Advanced French Test
    question:
      "Who was the famous French writer known for his novel 'Les Misérables'?",
    testChoice:
      "A) Victor Hugo\nB) Alexandre Dumas\nC) Gustave Flaubert\nD) Albert Camus",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 15, // Test ID for Advanced French Test
    question: "Which French holiday is celebrated on July 14th?",
    testChoice: "A) Bastille Day\nB) Christmas\nC) Easter\nD) New Year's Day",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 15, // Test ID for Advanced French Test
    question:
      "Which famous French artist is known for his 'Water Lilies' paintings?",
    testChoice:
      "A) Claude Monet\nB) Vincent van Gogh\nC) Pablo Picasso\nD) Leonardo da Vinci",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 16, // Test ID for Beginner Soninke Test
    question: "How do you write 'thank you' in Soninke?",
    testChoice: "A) M'bara \nB) Ini cheh\nC) Nari \nD) Anke sire",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 16, // Test ID for Beginner Soninke Test
    question: "Anke Maa gidan yugo ni anke mani?",
    testChoice:
      "A) N'geh N'Negah\nB) N'geh Gidah\nC) N'geh Gogoneh\nD) N'geh Menjangeh",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 16, // Test ID for Beginner Soninke Test
    question: "Mali capiali n'togo ni mani?",
    testChoice:
      "A) Bamako\nB) Djenne\nC) Djewaye\nD) Timbuktu",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 17, // Test ID for Intermediate Soninke Test
    question: "What is the Soninke word for 'water'?",
    testChoice: "A) Jii\nB) Namasa\nC) Khachi\nD) Erejeh",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 17, // Test ID for Intermediate Soninke Test
    question: "What is the Soninke word for 'friend'?",
    testChoice: "A) Jageh \nB) N'Yagareh\nC) Menjangeh\nD) Lemeh",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 17, // Test ID for Intermediate Soninke Test
    question: "Which river is known as 'Joliba' in Soninke?",
    testChoice:
      "A) Niger River\nB) Nile River\nC) Congo River\nD) Amazon River",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 18, // Test ID for Advanced Soninke Test
    question:
      "Which historical figure is known as 'Sunjata Keita' in Soninke history?",
    testChoice:
      "A) Mansa Musa\nB) Askia Mohammad\nC) Sundiata Keita\nD) Sonni Ali",
    correctChoice: "C",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 18, // Test ID for Advanced Soninke Test
    question: "What was the capital of the Ghana Empire in Soninke history?",
    testChoice: "A) Koumbi Saleh\nB) Timbuktu\nC) Gao\nD) Jenne",
    correctChoice: "A",
    userScore: 0,
    pointWorth: 10,
  },
  {
    testId: 18, // Test ID for Advanced Soninke Test
    question:
      "Which empire was known for its wealth and trading centers in Soninke history?",
    testChoice:
      "A) Ghana Empire\nB) Mali Empire\nC) Songhai Empire\nD) Kanem-Bornu Empire",
    correctChoice: "B",
    userScore: 0,
    pointWorth: 10,
  },
];

const seedImages = [
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?seed=Felix&backgroundColor=fc8941",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundType=gradientLinear&mouth=smileTeeth&eyes=wink",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=fcee2d&mouth=tongueOut&eyes=tearDrop",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=5de8fa&mouth=kissHeart&eyes=wink",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=f83a3a&mouth=shout&eyes=glasses&translateY=-25",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=bd7bf3&mouth=pissed&eyes=shades&translateX=-25",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=52cf5d&mouth=drip&eyes=sleepClose&rotate=270",
  },
  {
    imageURL: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=e0218a&mouth=cute&eyes=cute",
  }
];

const seed = async () => {
  await Achievement.bulkCreate(seedAchievements);
  await User.bulkCreate(seedUsers);
  await Language.bulkCreate(seedLanguages);
  await Lesson.bulkCreate(seedLessons);
  await Quiz.bulkCreate(seedQuizzes);
  await QuizQuestion.bulkCreate(seedQuizQuestions);
  await Role.bulkCreate(seedRoles);
  await Avatar.bulkCreate(seedImages);
  await Test.bulkCreate(seedTests);
  await TestQuestion.bulkCreate(seedTestQuestions);

  const user = await User.findByPk(1); //manually populating the user achievement
  const achievement = await Achievement.findByPk(1);
  await user.addAchievement(achievement);
};

seed().then(() => process.exit());
