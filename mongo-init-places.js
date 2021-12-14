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