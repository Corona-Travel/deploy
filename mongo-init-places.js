db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

db.places.createIndex({ place_id: 1 }, { unique: true });
db.places.createIndex({ pos: "2dsphere" });
db.places.insertMany([
  {
    name: "Moscow",
    place_id: "moscow",
    pos: { type: "Point", coordinates: [37.6203479, 55.7539765] }, 
  },
  {
    name: "Madrid",
    place_id: "madrid",
    pos: { type: "Point", coordinates: [-3.7039235, 40.4169471] }, 
  },
  {
    name: "New York",
    place_id: "ny",
    pos: { type: "Point", coordinates: [-74.010836, 40.7088014] }, 
  },
  {
    name: "Canberra",
    place_id: "ca",
    pos: { type: "Point", coordinates: [149.1292354, -35.2829955] }, 
  },
  {
    name: "Vienna",
    place_id: "vien",
    pos: { type: "Point", coordinates: [16.3676816, 48.2063187] },
  },
  {
    name: "Buenos Aires",
    place_id: "buen",
    pos: { type: "Point", coordinates: [-58.364295, -34.6067106] }, 
  },
  {
    name: "Minsk",
    place_id: "minsk",
    pos: { type: "Point", coordinates: [27.5563454, 53.8955448] }, 
  },
  {
    name: "Brussel",
    place_id: "brussel",
    pos: { type: "Point", coordinates: [4.3557445, 50.845534] }, 
  },
  {
    name: "Sofia",
    place_id: "sofia",
    pos: { type: "Point", coordinates: [23.3222746, 42.6925635] }, 
  },
  {
    name: "Baku",
    place_id: "baku",
    pos: { type: "Point", coordinates: [49.867913, 40.3946679] }, 
  },
  {
    name: "Tirana",
    place_id: "tirana",
    pos: { type: "Point", coordinates: [19.8192557, 41.3295584] }, 
  },
  {
    name: "Andorra la Vella",
    place_id: "andorra la vella",
    pos: { type: "Point", coordinates: [1.5278325, 42.5072776] }, 
  },
  {
    name: "Yerevan",
    place_id: "yerevan",
    pos: { type: "Point", coordinates: [44.5129276, 40.1776634] }, 
  },
  {
    name: "Ottawa",
    place_id: "ottawa",
    pos: { type: "Point", coordinates: [-75.6961092, 45.4234353] }, 
  },
  {
    name: "Beijing",
    place_id: "beijing",
    pos: { type: "Point", coordinates: [116.3970385, 39.9174415] },
  },
  {
    name: "Zagreb",
    place_id: "zagreb",
    pos: { type: "Point", coordinates: [15.984015, 45.8118181] },
  },
  {
    name: "Prague",
    place_id: "prague",
    pos: { type: "Point", coordinates: [14.4008603, 50.0904457] }, 
  },
  {
    name: "Copenhagen",
    place_id: "copenhagen",
    pos: { type: "Point", coordinates: [12.5691658, 55.6765257] },
  },
  {
    name: "London",
    place_id: "london",
    pos: { type: "Point", coordinates: [-0.1249472, 51.5009435] },
  },
  {
    name: "Helsinki",
    place_id: "helsinki",
    pos: { type: "Point", coordinates: [24.9436704, 60.1666476] }, 
  },
  {
    name: "Paris",
    place_id: "paris",
    pos: { type: "Point", coordinates: [2.2953614, 48.8578285] }, 
  },
  {
    name: "Tbilisi",
    place_id: "tbilisi",
    pos: { type: "Point", coordinates: [44.7947475, 41.7086168] },
  },
  {
    name: "Berlin",
    place_id: "berlin",
    pos: { type: "Point", coordinates: [13.3817285, 52.5165518] }, 
  },
  {
    name: "Budapest",
    place_id: "budapest",
    pos: { type: "Point", coordinates: [19.0398278, 47.4965327] }, 
  },
  {
    name: "Tokyo",
    place_id: "tokyo",
    pos: { type: "Point", coordinates: [139.7610707, 35.6833919] }, 
  },
  {
    name: "Bishkek",
    place_id: "bishkek",
    pos: { type: "Point", coordinates: [74.5965869, 42.8840898] }, 
  },
  {
    name: "Riga",
    place_id: "riga",
    pos: { type: "Point", coordinates: [24.1213471, 56.9578301] }, 
  },
  {
    name: "Oslo",
    place_id: "oslo",
    pos: { type: "Point", coordinates: [10.7300768, 59.9163674] },
  },
]);