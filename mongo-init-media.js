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
    url: "https://www.youtube.com/watch?v=jCcd_96P5BA",
  },
  {
    media_id: "gu_video",
    name: "GUM",
    type: "video",
    pos: { type: "Point", coordinates: [37.621275, 55.754154] },
    url: "https://www.youtube.com/watch?v=GfwnH3ccEnc",
  },
  {
    media_id: "lobn_video",
    name: "Lobnoe mesto",
    type: "video",
    pos: { type: "Point", coordinates: [37.6225886, 55.7532491] },
    url: "https://www.youtube.com/watch?v=VIn5alKa6Yk",
  },
  {
    media_id: "spas_video",
    name: "Spasskaya tower",
    type: "video",
    pos: { type: "Point", coordinates: [37.621828, 55.752708] },
    url: "https://www.youtube.com/watch?v=c0mtdU6wV3I",
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
    url: "https://www.youtube.com/watch?v=uE2fjFMag7E",
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
    url: "https://www.youtube.com/watch?v=u2nY9MmlbvM",
  },
  {
    media_id: "zaryad",
    name: "Zaryadie park",
    type: "video",
    pos: { type: "Point", coordinates: [37.62428, 55.752072] },
    url: "https://www.youtube.com/watch?v=vnShcoOxx4Y",
  },
  {
    media_id: "kolch_shop",
    name: "Kolchuga shop",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6276069, 55.7528956] },
    url: "https://retaildesignblog.net/wp-content/uploads/2013/12/Kolchugas-Weapons-Salon-by-ARCHPOINT-Moscow-Russia.jpg",
  },
]);
