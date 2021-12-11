db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

// db.place.createIndex({ place_id: 1 }, { unique: true })
db.places.createIndex({ pos: "2dsphere" });
db.places.insert({
  name: "Moscow",
  place_id: "moscow",
  pos: [37.6195977, 55.7544836],
});
db.places.insert({
  name: "Madrid",
  place_id: "madrid",
  pos: [-3.70379, 40.416775],
});
db.places.insert({
  name: "New York",
  place_id: "ny",
  pos: [-73.935242, 40.73061],
});
db.places.insert({
  name: "Canberra",
  place_id: "ca",
  pos: [149.12383, -35.27583],
});
db.places.insert({ name: "Baku", place_id: "bak", pos: [49.86683, 40.3905] });
db.places.insert({
  name: "Vienna",
  place_id: "vien",
  pos: [16.311865, 48.184517],
});
db.places.insert({
  name: "Buenos Aires",
  place_id: "buen",
  pos: [-58.369523, 34.603625],
});
db.places.insert({ name: "Minsk", place_id: "minsk", pos: [4.3525, 50.8467] });
db.places.insert({
  name: "Brussel",
  place_id: "brussel",
  pos: [4.3525, 50.8467],
});
db.places.insert({
  name: "Sofia",
  place_id: "sofia",
  pos: [23.323177, 42.699368],
});
//factsearhcer
db.facts.createIndex({ pos: "2dsphere" });
db.facts.insert({
  name: "Req Square",
  description: "Red Square was built in 16-th century",
  fact_id: "moscow_red_sqr",
  pos: [37.5967391, 55.7446371],
});
db.facts.insert({
  name: "Christ the Saviour Cathedral",
  description: "The most important and the lergest cathedral in Russia",
  fact_id: "moscow_chr_sav_cath",
  pos: [37.6054939, 55.7446375],
});
db.facts.insert({
  name: "Tretyakov Gallery",
  description:
    "The Tretyakov Gallery is home to 170,000 art works ranging from the 11th to the 20th century",
  fact_id: "moscow_tret_gall",
  pos: [37.6208639, 55.741389],
});
db.facts.insert({
  name: "Gorky Park",
  description: "In winter this park turns into the biggest ice rink in Europe.",
  fact_id: "moscow_gorky_park",
  pos: [37.6012474, 55.729458],
});
db.facts.insert({
  name: "Moscow-City",
  description: "Here is Moscow's highest observation platform",
  fact_id: "moscow_mos_city",
  pos: [37.5391668, 55.7472154],
});
db.facts.insert({
  name: "The Armoury Chamber",
  description:
    "The main part of the museum's collection consists of precious objects that had been stored in the tsar's treasury and the Patriarch's Sacristy for centuries",
  fact_id: "moscow_arm_ch",
  pos: [37.6134111, 55.7495732],
});
db.facts.insert({
  name: "Moscow Kremlin",
  description:
    "Now this historical and artistic complex - the heart and symbol of the capital - is not only an architectural monument, but also the social and political center of Russia, known to the whole world",
  fact_id: "moscow_kreml",
  pos: [37.6174994, 55.7520233],
});
db.facts.insert({
  name: "Lenin's Mausoleum",
  description:
    "Here the embalmed body of Vladimir Lenin rests in a transparent sarcophagus",
  fact_id: "moscow_lenin_maus",
  pos: [37.6198845, 55.7537117],
});
db.facts.insert({
  name: "Saint Basil's Cathedral",
  description:
    "It was built in the 16th century, and consisted of 11 churches, standing on the same foundation and united into a single cathedral by the decree of Ivan the Terrible",
  fact_id: "moscow_basil_cath",
  pos: [37.6230868, 55.7525229],
});
db.facts.insert({
  name: "GUM",
  description:
    "The famous GUM is a large shopping mall with its facade overlooking Red Square. It was erected after the fire of 1812, which completely destroyed the trading rows of Kitay-Gorod",
  fact_id: "moscow_gum",
  pos: [37.6215216, 55.7546967],
});
db.facts.insert({
  name: "Kitay-gorod",
  description:
    "Kitay-Gorod is a large historical district of the capital, which existed since the 16th century",
  fact_id: "moscow_kitay",
  pos: [37.6211384, 55.7521239],
});
db.facts.insert({
  name: "Zaryadye park",
  description:
    "The park's most-visited attraction is the Soaring Bridge - a 70-meter-high console with no support structures soaring over the embankment and the Moskva River at an altitude of 15 metres",
  fact_id: "moscow_zaryadye",
  pos: [37.6287988, 55.7514578],
});
//factsearcher
db.facts.createIndex({ pos: "2dsphere" });
db.facts.insert({
  name: "Manhattan",
  description: "Manhattan is historical center on NY",
  fact_id: "ny_manh",
  pos: [-73.935242, 40.73061],
});
db.facts.insert({
  name: "The Royal Palace of Madrid",
  description:
    "The Royal Palace of Madrid is the official residence of the Spanish royal family at the city of Madrid, although now used only for state ceremonies",
  fact_id: "madrid_palace",
  pos: [-3.714312, 40.417953],
});
db.facts.insert({
  name: "City Hill",
  description:
    "City Hill is a five hectare landscaped hill located in the centre of Canberra and surrounded by Vernon Circle",
  fact_id: "city_hill_Canberra",
  pos: [149.12383, -35.27583],
});
db.facts.insert({
  name: "The Heydar Aliyev Center",
  description:
    "The Heydar Aliyev Center is a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles",
  fact_id: "thac",
  pos: [49.86683, 40.3905],
});
db.facts.insert({
  name: "Palais Schönborn",
  description:
    "Palais Schönburg is a magnificent baroque jewel located in the centre of Vienna, boasting a wonderfully large and serene garden away from the hustle and bustle of the city. ",
  fact_id: "p_schon",
  pos: [16.311865, 48.184517],
});
db.facts.insert({
  name: "Centro Cultural Kirchner",
  description:
    "The Kirchner Cultural Centre is a cultural centre located in Buenos Aires, Argentina. It is the largest of Latin America, and the third or fourth largest in the world.",
  fact_id: "cent_cult_kirch",
  pos: [-58.369523, 34.603625],
});
db.facts.insert({
  name: "Belarusian National Arts Museum",
  description: "The National Art Museum is a cultural house of Belarus",
  fact_id: "nat_art_mus",
  pos: [27.5607685, 53.8984747],
});
db.facts.insert({
  name: "The Grand-Place",
  description: "The Grand-Place is the central square of the City of Brussels",
  fact_id: "gr_pal",
  pos: [4.3525, 50.8467],
});
db.facts.insert({
  name: "Sofia History Museum",
  description:
    "The Sofia History Museum is housed in the former building of the Central Mineral Baths and is devoted to ethnography, archaeology, economy, and cultural life in Sofia and its region",
  fact_id: "shm",
  pos: [23.323177, 42.699368],
});

db.quizzes.createIndex({ pos: "2dsphere" });
db.quizzes.insert({
  quiz_id: "1",
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
  pos: [37.620795, 55.7539303],
});
