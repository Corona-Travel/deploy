db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

db.quizzes.createIndex({ quiz_id: 1 }, { unique: true });
db.quizzes.createIndex({ pos: "2dsphere" });
db.quizzes.insertOne({
  quiz_id: "mscw_c",
  name: "Moscow center",
  questions: [
    {
      question:
        "When  was the beginning of the period of the new heyday of the Red Square?",
      answers: [
        { option: "12th century", correct: false },
        { option: "19th century", correct: true },
        { option: "20th century", correct: false },
      ],
    },
    {
      question: "When was Lenin's Mausoleum at Red Square opened?",
      answers: [
        { option: "it is not a Mausoleum", correct: false },
        { option: "1930", correct: true },
        { option: "1941", correct: false },
      ],
    },
    {
      question: "What is GUM famous for among the tourists?",
      answers: [
        { option: "clothes", correct: false },
        { option: "height of the building", correct: false },
        { option: "ice cream", correct: true },
      ],
    },
    {
      question: "What kind of sport could you do right on the Red Square?",
      answers: [
        { option: "ice skating", correct: true },
        { option: "golfing", correct: false },
        { option: "swimming", correct: false },
      ],
    },
    {
      question: "What happened on Nikolsakaya street in summer 2018?",
      answers: [
        { option: "massive football fans' festivities", correct: true },
        { option: "meeting of all presidents", correct: false },
        { option: "carnival", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.620795, 55.7539303] },
});

db.quizzes.insertOne({
  quiz_id: "mscw_h",
  name: "Moscow history",
  questions: [
    {
      question: "When were the first written mentions about Moscow made?",
      answers: [
        { option: "In the XI century", correct: false },
        { option: "In the XII century", correct: true },
        { option: "In the XV century", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of Russia?",
      answers: [
        { option: "In 1200", correct: false },
        { option: "In 1340", correct: true },
        { option: "In 1147", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of the Soviet state?",
      answers: [
        { option: "1931", correct: false },
        { option: "1925", correct: false },
        { option: "1922", correct: true },
      ],
    },
    {
      question:
        "The only sculptured monument on the square is a bronze statue of:",
      answers: [
        { option: "Kuzma Minin and Dmitry Pozharsky", correct: true },
        { option: "Tsar Nicholas and Empress Alexandra", correct: false },
        { option: "Ivan III", correct: false },
      ],
    },
    {
      question: "When did Moscow host the summer Olympic games?",
      answers: [
        { option: "In 1980", correct: true },
        { option: "In 1978", correct: false },
        { option: "In 1970", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.619556, 55.754496] },
});

db.quizzes.insertOne({
  quiz_id: "3",
  name: "mscw_g",
  questions: [
    {
      question: "When is the Constitution Day?",
      answers: [
        { option: "November 7", correct: false },
        { option: "June 12", correct: true },
        { option: "December 12", correct: false },
      ],
    },
    {
      question:
        "What are the three colors of the Russian flag from top to bottom?",
      answers: [
        { option: "red, blue, white", correct: false },
        { option: "white, blue, red", correct: true },
        { option: "blue, white, red", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of the Soviet state?",
      answers: [
        { option: "1931", correct: false },
        { option: "1925", correct: false },
        { option: "1922", correct: true },
      ],
    },
    {
      question:
        "What is the lower house of the bi-cameral Russian parliament called?",
      answers: [
        { option: "Duma", correct: true },
        { option: "Parliament", correct: false },
        { option: "Rada", correct: false },
      ],
    },
    {
      question: "Moscow was named after...",
      answers: [
        {
          option: "The Moskva river, which runs through the centre",
          correct: true,
        },
        {
          option: "The Moskva army commanded by Prince Yuri Dolgorukiy",
          correct: false,
        },
        {
          option: "The Moskva wall built after the Mongol invasion in 1238",
          correct: false,
        },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.615706, 55.757625] },
});

db.quizzes.insertOne({
  quiz_id: "4",
  name: "mscw_s",
  questions: [
    {
      question:
        "What was the name of the oldest street in Moscow whose name has survived in history?",
      answers: [
        { option: "Tverskaya", correct: false },
        { option: "Borovitskaya", correct: true },
        { option: "Arbat", correct: false },
      ],
    },
    {
      question: "The longest street in Moscow (Warsaw Highway) is ...",
      answers: [
        { option: "7 km", correct: false },
        { option: "19 km", correct: true },
        { option: "13 km", correct: false },
      ],
    },
    {
      question: "Moscow's widest street is ...",
      answers: [
        { option: "Warsaw highway", correct: false },
        { option: "Tverskaya Street", correct: false },
        { option: "Leningradsky Prospect", correct: true },
      ],
    },
    {
      question:
        "How many streets does Moscow include (taking into account New Moscow streets)?",
      answers: [
        { option: "Around 4800", correct: true },
        { option: "Around 5500", correct: false },
        { option: "Around 7000", correct: false },
      ],
    },
    {
      question:
        "Which of the city's central streets was called Rozhdestvenskaya in the 16th-17th centuries?",
      answers: [
        { option: "Stoleshnikov Lane", correct: true },
        { option: "Leninsky Prospect", correct: false },
        { option: "Tverskaya", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.625272, 55.757757] },
});

db.quizzes.insertOne({
  quiz_id: "mscw_the_most",
  name: "Moscow the most ...",
  questions: [
    {
      question: "Who is the biggest monument in Moscow?",
      answers: [
        { option: "Yuri Gagarin", correct: false },
        { option: "Peter The Grate", correct: true },
        { option: "Alexander Vasilievich Suvorov", correct: false },
      ],
    },
    {
      question: "Which bridge in Moscow is the highest?",
      answers: [
        { option: "Great Stone Bridge", correct: false },
        { option: "Picturesque Bridge", correct: true },
        { option: "Crimean bridge", correct: false },
      ],
    },
    {
      question: "Where is the largest clock in Russia located?",
      answers: [
        { option: "Kazansky Railway Station", correct: false },
        { option: "On Spasskaya Tower", correct: false },
        { option: "On the building of Moscow State University", correct: true },
      ],
    },
    {
      question:
        "Which city is connected to Moscow by the longest straight stretch of railway in Russia?",
      answers: [
        { option: "St Petersburg", correct: true },
        { option: "Kaliningrad", correct: false },
        { option: "Voronezh", correct: false },
      ],
    },
    {
      question:
        "Where in Moscow can you see the most monuments and sculptures in the open air?",
      answers: [
        { option: "The Museon Park", correct: true },
        { option: "The Kremlin", correct: false },
        { option: "In the Hermitage Garden", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.610932, 55.737108] },
});

db.quizzes.insertOne({
  quiz_id: "mscw_sights",
  name: "Moscow sights",
  questions: [
    {
      question: "Where is the kilometre zero sign in Moscow?",
      answers: [
        { option: "Lubyanka Square", correct: false },
        { option: "On Red Square", correct: true },
        { option: "Bolotnaya Square", correct: false },
      ],
    },
    {
      question: "What is the total length of the Kremlin walls?",
      answers: [
        { option: "3 065 metres", correct: false },
        { option: "2,235 metres", correct: true },
        { option: "2,450 metres", correct: false },
      ],
    },
    {
      question: "Who was the first monument erected in Moscow?",
      answers: [
        { option: "Cyril and Methodius", correct: false },
        { option: "Emperor Alexander I", correct: false },
        { option: "Minin and Pozharsky", correct: true },
      ],
    },
    {
      question: "What was the purpose of the Place of the Public in Moscow?",
      answers: [
        { option: "For announcing the Tsar's decrees", correct: true },
        { option: "For executions", correct: false },
        { option: "For public festivals", correct: false },
      ],
    },
    {
      question:
        'To which street is the proverb "A penny candle made all Moscow burn" associated?',
      answers: [
        { option: "Arbat", correct: true },
        { option: "Ostozhenka", correct: false },
        { option: "Ilyinka", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.618906, 55.752052] },
});

db.quizzes.insertOne({
  quiz_id: "mscw_bt",
  name: "Moscow Bolshoi Theatre",
  questions: [
    {
      question: "What was the name of the Bolshoi Theatre in 1776-1789?",
      answers: [
        { option: "Catherine's", correct: false },
        { option: "Petrovsky", correct: true },
        { option: "Imperial", correct: false },
      ],
    },
    {
      question: "In what year was the Bolshoi Theatre founded?",
      answers: [
        { option: "1862", correct: false },
        { option: "1776", correct: true },
        { option: "1812", correct: false },
      ],
    },
    {
      question:
        "Which bronze figure adorns the Bolshoi Theatre and is a symbol of this work of architecture?",
      answers: [
        { option: "Rotunda", correct: false },
        { option: "Pyramid", correct: false },
        { option: "Quadriga", correct: true },
      ],
    },
    {
      question: "Which award was twice presented to the Bolshoi Theatre?",
      answers: [
        { option: "Order of Lenin", correct: true },
        { option: "Order of Stalin", correct: false },
        { option: "Order of St. Anna", correct: false },
      ],
    },
    {
      question: "Which empress gave the go-ahead to establish this theatre?",
      answers: [
        { option: "Catherine II", correct: true },
        { option: "Sophia Mikhailovna", correct: false },
        { option: "Anna Ioannovna", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.618221, 55.759234] },
});

db.quizzes.insertOne({
  quiz_id: "mscw_facts",
  name: "Moscow facts",
  questions: [
    {
      question:
        "Moscow is one of the world's top ten cities in terms of population. Approximately how many people live in Moscow in 2017?",
      answers: [
        { option: "10-13 million", correct: false },
        { option: "12-17 million", correct: true },
        { option: "17-19 million", correct: false },
      ],
    },
    {
      question:
        "When it was built, Ostankino Tower was the tallest building in the world. Nowadays it is already on the 10th height after several skyscrapers and TV towers. How many meters tall is the Ostankino Tower?",
      answers: [
        { option: "700 m", correct: false },
        { option: "540 m", correct: true },
        { option: "360 m", correct: false },
      ],
    },
    {
      question:
        "In pagan times, the place where the Moscow Kremlin stands now was called the Witcher's Mountain, where the temple was located. What is the name of the hill in the centre of Moscow nowadays?",
      answers: [
        { option: "Spassky", correct: false },
        { option: "Tsarsky", correct: false },
        { option: "Borovitsky", correct: true },
      ],
    },
    {
      question: "How many towers does the Moscow Kremlin have?",
      answers: [
        { option: "20", correct: true },
        { option: "23", correct: false },
        { option: "16", correct: false },
      ],
    },
    {
      question:
        "Only the fourth generation of people living permanently in Moscow can be considered native Muscovites. How many indigenous Muscovites are there in the city at the moment?",
      answers: [
        { option: "3%", correct: true },
        { option: "7%", correct: false },
        { option: "19%", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.613692, 55.748748] },
});

db.quizzes.insertOne({
  quiz_id: "rus_lib",
  name: "Russian librirary",
  questions: [
    {
      question: "Who is the author of The History of the Russian State?",
      answers: [
        { option: "A.S. Pushkin", correct: false },
        { option: "N.M. Karamzin", correct: true },
        { option: "N.V. Gogol", correct: false },
      ],
    },
    {
      question: "Which of the above writers died in a duel?",
      answers: [
        { option: "L.N. Tolstoy", correct: false },
        { option: "M.Y. Lermontov", correct: true },
        { option: "I.V. Turgenev", correct: false },
      ],
    },
    {
      question: "Who of the following writers emigrated to the United States?",
      answers: [
        { option: "M.A. Bulgakov", correct: false },
        { option: "M. Gorky", correct: false },
        { option: "V.V. Nabokov", correct: true },
      ],
    },
    {
      question: "Who is the most famous Russian fable writer?",
      answers: [
        { option: "I.A. Krylov", correct: true },
        { option: "V.A. Zhukovsky", correct: false },
        { option: "D.V. Davydov", correct: false },
      ],
    },
    {
      question:
        'To whom the lines belong: "Moscow will always be the true capital of Russia"?',
      answers: [
        { option: "M.V. Lomonosov", correct: false },
        { option: "N.M. Karamzin", correct: true },
        { option: "G.R. Derzhavin", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.609372, 55.751316] },
});

db.quizzes.insertOne({
  quiz_id: "mgu_q",
  name: "MGU ",
  questions: [
    {
      question: "On whose proposal was the Moscow University opened in 1755?",
      answers: [
        { option: "Peter the Great", correct: false },
        { option: "M.V. Lomonosov", correct: true },
        { option: "A.S. Pushkin", correct: false },
      ],
    },
    {
      question: "What was the name of Moscow University before 1917?",
      answers: [
        { option: "Peter the Great University", correct: false },
        { option: "Imperial University", correct: true },
        { option: "The Great Empress Catherine's University", correct: false },
      ],
    },
    {
      question:
        "Which building was chosen as the first building for Moscow University?",
      answers: [
        { option: "In a building on Mokhovaya Street", correct: false },
        { option: "The house where Lomonosov lived", correct: false },
        {
          option: "The building of the Historical Museum on Red Square",
          correct: true,
        },
      ],
    },
    {
      question: "What was the original faculty of the university?",
      answers: [
        { option: "philosophy faculty", correct: true },
        { option: "linguistics department", correct: false },
        { option: "physics faculty", correct: false },
      ],
    },
    {
      question:
        "How many faculties are operating at Lomonosov Moscow State University nowadays?",
      answers: [
        { option: "41", correct: true },
        { option: "38", correct: false },
        { option: "26", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.535227, 55.705297] },
});
