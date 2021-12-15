db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

db.media.createIndex({ media_id: 1 }, { unique: true });
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
    pos: { type: "Point", coordinates: [37.619845, 55.7543362] },
    url: "https://media.istockphoto.com/videos/red-square-moscow-russia-people-skate-on-the-rink-video-id1098006864",
  },
  {
    media_id: "gu_video",
    name: "GUM",
    type: "video",
    pos: { type: "Point", coordinates: [37.621275, 55.754154] },
    url: "https://ak.picdn.net/shutterstock/videos/20733076/preview/stock-footage-russia-moscow-gum-department-store-october-people-walking-across-trading-rows-of-shop.webm",
  },
  {
    media_id: "lobn_video",
    name: "Lobnoe mesto",
    type: "video",
    pos: { type: "Point", coordinates: [37.6225886, 55.7532491] },
    url: "https://media.istockphoto.com/videos/victory-day-decoration-on-the-red-square-moscow-russia-video-id644998210",
  },
  {
    media_id: "spas_video",
    name: "Spasskaya tower",
    type: "video",
    pos: { type: "Point", coordinates: [37.621828, 55.752708] },
    url: "https://media.istockphoto.com/videos/spasskaya-tower-of-the-kremlin-moscow-russia-video-id940284514",
  },
  {
    media_id: "gostinyy_dvor",
    name: "Gostinnyy Dvor",
    type: "photo",
    pos: { type: "Point", coordinates: [37.623925, 55.754277] },
    url: "http://www.robertodemicheli.com/album_test/index.html?folder=Architecture/&file=IMG_2060.jpg",
  },
  {
    media_id: "ploshad_rev",
    name: "Ploshad Revolutsii",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6218699, 55.7565575] },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ploshchad_revolyutsii_Metro_2010.jpg/1280px-Ploshchad_revolyutsii_Metro_2010.jpg",
  },
  {
    media_id: "bolsh_theat",
    name: "Bolshoi theatre",
    type: "video",
    pos: { type: "Point", coordinates: [37.619085, 55.759611] },
    url: "https://assets.mixkit.co/videos/preview/mixkit-female-ballet-dancer-taking-a-leap-at-sunset-36619-large.mp4",
  },
  {
    media_id: "cafe_sobr",
    name: "Cafe_Sobranie",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6172352, 55.758649] },
    url: "https://www.sobranierf.ru/upload/medialibrary/cf9/cf98d21ea3efa0e2b2ac6cb856d747d3.png",
  },
  {
    media_id: "cdm",
    name: "Central children's store",
    type: "photo",
    pos: { type: "Point", coordinates: [37.624407, 55.759574] },
    url: "https://mos-holidays.ru/wp-content/uploads/2020/07/centralnyi-detskiy-mir-1.jpg",
  },
  {
    media_id: "biblio-globus",
    name: "Biblio Globus",
    type: "video",
    pos: { type: "Point", coordinates: [37.629739, 55.7583604] },
    url: "https://media.istockphoto.com/videos/stedicam-shot-camera-moves-forward-along-shelves-filled-with-paper-video-id1207745492",
  },
  {
    media_id: "zaryad",
    name: "Zaryadie park",
    type: "video",
    pos: { type: "Point", coordinates: [37.62428, 55.752072] },
    url: "https://ak.picdn.net/shutterstock/videos/1075758611/preview/stock-footage-moscow-russia-summer-amphitheater-in-zaryadye-park-the-glass-bark-which-covers.webm",
  },
  {
    media_id: "kolch_shop",
    name: "Kolchuga shop",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6276069, 55.7528956] },
    url: "https://retaildesignblog.net/wp-content/uploads/2013/12/Kolchugas-Weapons-Salon-by-ARCHPOINT-Moscow-Russia.jpg",
  },
  {
    media_id: "audio_red_square_christmas",
    name: "Red Square Christmas",
    type: "audio",
    pos: { type: "Point", coordinates: [37.6198864, 55.7541898] }, 
    url: "https://cdn.pixabay.com/download/audio/2021/10/23/audio_15e5f8466c.mp3?filename=christmas-cinematic-dream-piano-9784.mp3",
  },
  {
    media_id: "GUM_sound",
    name: "GUM people",
    type: "audio",
    pos: { type: "Point", coordinates: [37.6225106, 55.753579] },
    url: "https://cdn.pixabay.com/download/audio/2021/11/25/audio_91b32e02f9.mp3?filename=jazzy-abstract-beat-11254.mp3",
  },
  {
    media_id: "Moscow_ples_sound",
    name: "Pleasant sound of Moscow",
    type: "audio",
    pos: { type: "Point", coordinates: [37.6194444, 55.755316] }, 
    url: "https://cdn.pixabay.com/download/audio/2021/08/08/audio_c9a4a1d834.mp3?filename=the-way-home-6674.mp3",
  },
]);
