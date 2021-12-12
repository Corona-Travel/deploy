db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

db.places.createIndex({ place_id: 1 }, { unique: true })
db.places.createIndex({ pos: "2dsphere" });
db.places.insertMany([
  {
    name: "Moscow",
    place_id: "moscow",
    pos: { type: "Point", coordinates: [37.618423, 55.751244] },
  },
  {
    name: "Madrid",
    place_id: "madrid",
    pos: { type: "Point", coordinates: [-3.70379, 40.416775] },
  },
  {
    name: "New York",
    place_id: "ny",
    pos: { type: "Point", coordinates: [-73.935242, 40.73061] },
  },
  {
    name: "Canberra",
    place_id: "ca",
    pos: { type: "Point", coordinates: [149.12383, -35.27583] },
  },
  {
    name: "Vienna",
    place_id: "vien",
    pos: { type: "Point", coordinates: [16.311865, 48.184517] },
  },
  {
    name: "Buenos Aires",
    place_id: "buen",
    pos: { type: "Point", coordinates: [-58.369523, -34.603625] },
  },
  {
    name: "Minsk",
    place_id: "minsk",
    pos: { type: "Point", coordinates: [27.558972, 53.9006011] },
  },
  {
    name: "Brussel",
    place_id: "brussel",
    pos: { type: "Point", coordinates: [4.3571696, 50.8476424] },
  },
  {
    name: "Sofia",
    place_id: "sofia",
    pos: { type: "Point", coordinates: [23.323177, 42.699368] },
  },
  {
    name: "Baku",
    place_id: "baku",
    pos: { type: "Point", coordinates: [49.86876, 40.40194] },
  },
  {
    name: "Kabul",
    place_id: "kabul",
    pos: { type: "Point", coordinates: [69.207486, 34.5553494] },
  },
  {
    name: "Tirana",
    place_id: "tirana",
    pos: { type: "Point", coordinates: [19.8186982, 41.3275459] },
  },
  {
    name: "Algiers",
    place_id: "algiers",
    pos: { type: "Point", coordinates: [3.0876732, 36.7312661] },
  },
  {
    name: "Andorra la Vella",
    place_id: "andorra la vella",
    pos: { type: "Point", coordinates: [1.521835, 42.506317] },
  },
  {
    name: "Luanda",
    place_id: "luanda",
    pos: { type: "Point", coordinates: [13.2301756, -8.8146556] },
  },
  {
    name: "Yerevan",
    place_id: "yerevan",
    pos: { type: "Point", coordinates: [44.515209, 40.1872023] },
  },
  {
    name: "Ottawa",
    place_id: "ottawa",
    pos: { type: "Point", coordinates: [-75.6971931, 45.4215296] },
  },
  {
    name: "Beijing",
    place_id: "beijing",
    pos: { type: "Point", coordinates: [116.407395, 39.904211] },
  },
  {
    name: "Zagreb",
    place_id: "zagreb",
    pos: { type: "Point", coordinates: [15.9819189, 45.8150108] },
  },
  {
    name: "Prague",
    place_id: "prague",
    pos: { type: "Point", coordinates: [14.4378005, 50.0755381] },
  },
  {
    name: "Copenhagen",
    place_id: "copenhagen",
    pos: { type: "Point", coordinates: [12.5683372, 55.6760968] },
  },
  {
    name: "London",
    place_id: "london",
    pos: { type: "Point", coordinates: [-0.1275862, 51.5072178] },
  },
  {
    name: "Helsinki",
    place_id: "helsinki",
    pos: { type: "Point", coordinates: [24.9383791, 60.1698557] },
  },
  {
    name: "Paris",
    place_id: "paris",
    pos: { type: "Point", coordinates: [2.3522219, 48.856614] },
  },
  {
    name: "Tbilisi",
    place_id: "tbilisi",
    pos: { type: "Point", coordinates: [44.827096, 41.7151377] },
  },
  {
    name: "Berlin",
    place_id: "berlin",
    pos: { type: "Point", coordinates: [13.404954, 52.5200066] },
  },
  {
    name: "Budapest",
    place_id: "budapest",
    pos: { type: "Point", coordinates: [19.040235, 47.4979127] },
  },
  {
    name: "Tokyo",
    place_id: "tokyo",
    pos: { type: "Point", coordinates: [139.7690174, 35.6803997] },
  },
  {
    name: "Bishkek",
    place_id: "bishkek",
    pos: { type: "Point", coordinates: [74.5697617, 42.8746212] },
  },
  {
    name: "Riga",
    place_id: "riga",
    pos: { type: "Point", coordinates: [24.1051865, 56.9496487] },
  },
  {
    name: "Oslo",
    place_id: "oslo",
    pos: { type: "Point", coordinates: [10.7522454, 59.9138688] },
  },
]);


db.facts.createIndex({ fact_id: 1 }, { unique: true })
db.facts.createIndex({ pos: "2dsphere" });
db.facts.insertMany([
  {
    name: "Req Square",
    description: "Red Square was built in 16-th century",
    fact_id: "moscow_red_sqr",
    pos: { type: "Point", coordinates: [37.5967391, 55.7446371] },
  },
  {
    name: "Christ the Saviour Cathedral",
    description: "The most important and the lergest cathedral in Russia",
    fact_id: "moscow_chr_sav_cath",
    pos: { type: "Point", coordinates: [37.6054939, 55.7446375] },
  },
  {
    name: "Tretyakov Gallery",
    description:
      "The Tretyakov Gallery is home to 170,000 art works ranging from the 11th to the 20th century",
    fact_id: "moscow_tret_gall",
    pos: { type: "Point", coordinates: [37.6208639, 55.741389] },
  },
  {
    name: "Gorky Park",
    description:
      "In winter this park turns into the biggest ice rink in Europe.",
    fact_id: "moscow_gorky_park",
    pos: { type: "Point", coordinates: [37.6012474, 55.729458] },
  },
  {
    name: "Moscow-City",
    description: "Here is Moscow's highest observation platform",
    fact_id: "moscow_mos_city",
    pos: { type: "Point", coordinates: [37.5391668, 55.7472154] },
  },
  {
    name: "The Armoury Chamber",
    description:
      "The main part of the museum's collection consists of precious objects that had been stored in the tsar's treasury and the Patriarch's Sacristy for centuries",
    fact_id: "moscow_arm_ch",
    pos: { type: "Point", coordinates: [37.6134111, 55.7495732] },
  },
  {
    name: "Moscow Kremlin",
    description:
      "Now this historical and artistic complex - the heart and symbol of the capital - is not only an architectural monument, but also the social and political center of Russia, known to the whole world",
    fact_id: "moscow_kreml",
    pos: { type: "Point", coordinates: [37.6174994, 55.7520233] },
  },
  {
    name: "Lenin's Mausoleum",
    description:
      "Here the embalmed body of Vladimir Lenin rests in a transparent sarcophagus",
    fact_id: "moscow_lenin_maus",
    pos: { type: "Point", coordinates: [37.6198845, 55.7537117] },
  },
  {
    name: "Saint Basil's Cathedral",
    description:
      "It was built in the 16th century, and consisted of 11 churches, standing on the same foundation and united into a single cathedral by the decree of Ivan the Terrible",
    fact_id: "moscow_basil_cath",
    pos: { type: "Point", coordinates: [37.6230868, 55.7525229] },
  },
  {
    name: "GUM",
    description:
      "The famous GUM is a large shopping mall with its facade overlooking Red Square. It was erected after the fire of 1812, which completely destroyed the trading rows of Kitay-Gorod",
    fact_id: "moscow_gum",
    pos: { type: "Point", coordinates: [37.6215216, 55.7546967] },
  },
  {
    name: "Kitay-gorod",
    description:
      "Kitay-Gorod is a large historical district of the capital, which existed since the 16th century",
    fact_id: "moscow_kitay",
    pos: { type: "Point", coordinates: [37.6211384, 55.7521239] },
  },
  {
    name: "Zaryadye park",
    description:
      "The park's most-visited attraction is the Soaring Bridge - a 70-meter-high console with no support structures soaring over the embankment and the Moskva River at an altitude of 15 metres",
    fact_id: "moscow_zaryadye",
    pos: { type: "Point", coordinates: [37.6287988, 55.7514578] },
  },
  {
    name: "Manhattan",
    description: "Manhattan is historical center on NY",
    fact_id: "ny_manh",
    pos: { type: "Point", coordinates: [-73.935242, 40.73061] },
  },
  {
    name: "The Royal Palace of Madrid",
    description:
      "The Royal Palace of Madrid is the official residence of the Spanish royal family at the city of Madrid, although now used only for state ceremonies",
    fact_id: "madrid_palace",
    pos: { type: "Point", coordinates: [-3.714312, 40.417953] },
  },
  {
    name: "City Hill",
    description:
      "City Hill is a five hectare landscaped hill located in the centre of Canberra and surrounded by Vernon Circle",
    fact_id: "city_hill_Canberra",
    pos: { type: "Point", coordinates: [149.12383, -35.27583] },
  },
  {
    name: "The Heydar Aliyev Center",
    description:
      "The Heydar Aliyev Center is a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles",
    fact_id: "thac",
    pos: { type: "Point", coordinates: [49.86683, 40.3905] },
  },
  {
    name: "Palais Schönborn",
    description:
      "Palais Schönburg is a magnificent baroque jewel located in the centre of Vienna, boasting a wonderfully large and serene garden away from the hustle and bustle of the city. ",
    fact_id: "p_schon",
    pos: { type: "Point", coordinates: [16.311865, 48.184517] },
  },
  {
    name: "Centro Cultural Kirchner",
    description:
      "The Kirchner Cultural Centre is a cultural centre located in Buenos Aires, Argentina. It is the largest of Latin America, and the third or fourth largest in the world.",
    fact_id: "cent_cult_kirch",
    pos: { type: "Point", coordinates: [-58.369523, 34.603625] },
  },
  {
    name: "Belarusian National Arts Museum",
    description: "The National Art Museum is a cultural house of Belarus",
    fact_id: "nat_art_mus",
    pos: { type: "Point", coordinates: [27.5607685, 53.8984747] },
  },
  {
    name: "The Grand-Place",
    description:
      "The Grand-Place is the central square of the City of Brussels",
    fact_id: "gr_pal",
    pos: { type: "Point", coordinates: [4.3525, 50.8467] },
  },
  {
    name: "Sofia History Museum",
    description:
      "The Sofia History Museum is housed in the former building of the Central Mineral Baths and is devoted to ethnography, archaeology, economy, and cultural life in Sofia and its region",
    fact_id: "shm",
    pos: { type: "Point", coordinates: [23.323177, 42.699368] },
  },
]);

db.quizzes.createIndex({ quiz_id: 1 }, { unique: true })
db.quizzes.createIndex({ pos: "2dsphere" });
db.quizzes.insertOne({
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
  pos: { type: "Point", coordinates: [37.620795, 55.7539303] },
});


db.media.createIndex({ media_id: 1 }, { unique: true })
db.media.createIndex({ pos: "2dsphere" });
db.media.insertMany([
  {
    media_id: "red_sq_photo",
    name: "Red Square",
    type: "photo",
    pos: { type: "Point", coordinates: [37.5967391, 55.7446371] },
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lonelyplanet.com%2Farticles%2Fmoscow-e2-80-99s-red-square&psig=AOvVaw0mznzK4RolAkwM1p7E5cE_&ust=1639402766684000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOii77Cx3vQCFQAAAAAdAAAAABAS",
  },
  {
    media_id: "gum_photo",
    name: "GUM",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6215216, 55.7546967] },
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgum.ru%2Fnews%2F7721635%2F15.06.2020%2F&psig=AOvVaw2Ezg_5YJ2dweQbZgzdHVHW&ust=1639402989493000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDYh5qy3vQCFQAAAAAdAAAAABAD",
  },
  {
    media_id: "red_sq_video",
    name: "Red Square",
    type: "video",
    pos: { type: "Point", coordinates: [37.5967392, 55.7446371] },
    url: "https://www.youtube.com/watch?v=jCcd_96P5BA",
  },
  {
    media_id: "gu_video",
    name: "GUM",
    type: "video",
    pos: { type: "Point", coordinates: [37.6215215, 55.7546967] },
    url: "https://www.youtube.com/watch?v=GfwnH3ccEnc",
  },
]);
