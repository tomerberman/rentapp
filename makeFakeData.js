var faker = require('faker');


for (let i=0 ; i<5; i++) {


var user = {
    Name : faker.name.findName(),
    Rank : Number.parseInt(Math.random()*5),
    Image : faker.name.findName(),
    Email: faker.internet.email(),
    Phone: faker.phone.phoneNumber(),
    City: faker.address.city(),
    Latitude: faker.address.latitude(),
    Longitude: faker.address.longitude(),
  };

  var item = {
    Category : faker.name.findName(),
    Title : faker.name.jobTitle(),
    Price : faker.finance.amount(),
    Description : faker.name.findName(),
    Condition : faker.name.title(),
    Image : faker.image.imageUrl(),
    Description: faker.lorem.paragraph(3),
    Availibility: 'From ' + faker.date.weekday() + ' To ' + faker.date.weekday(),
  };

  console.log('\n____ OWNER: ____\n ', user);
  console.log('\n____ ITEM: ____\n ', item);
}  

var 
items = [
  {
      "id": "A",
      "category": [
          "travel"
      ],
      "title": "bagPack",
      "description": "grate back pack 80L Osprey",
      "ranking": 4,
      "price": 20,
      "dateCreated": "Date.now()",
      "keyWords": [
          "trip",
          "camping",
          "bag",
          "big"
      ],
      "ownerId": "A1",
      "occupiedDates": [
          "2.2.2018",
          "3.3.2018"
      ],
      "images": [
          "http://greensimon.zippykid.netdna-cdn.com/wp-content/uploads/2011/09/osprey-aether-207x300.png"
      ],
      "condition": "new"
  },
  {
      "id": "B",
      "category": [
          "travel"
      ],
      "title": "Diving suit",
      "description": "Full Body Dive Wetsuit Sports Skins Lycra Rash Guard for Men Women, UV Protection Long Sleeve One Piece Swimwear for Snorkeling Surfing Scuba Diving Swimming Kayaking Sailing Canoeing",
      "ranking": 4,
      "dateCreated": "Date.now()",
      "keyWords": [
          "travel",
          "dive",
          "suit",
          "scuba"
      ],
      "price": 80,
      "ownerId": "B1",
      "occupiedDates": [
          "2.2.2018",
          "3.3.2018"
      ],
      "images": [
          "https://images-na.ssl-images-amazon.com/images/I/61MgJslPL7L._SL1001_.jpg"
      ],
      "condition": "new"
  },
  {
      "id": "C",
      "category": [
          "kitchen",
          "travel"
      ],
      "title": "Charcoal Grill",
      "description": "The Outdoor Gourmet™ 14 Charcoal Grill features a 4.4 lb. lightweight design, making it an ideal choice for portable grilling. An adjustable vent offers enhanced temperature control over the 151 sq. in. grilling area. Steel construction ensures durability, and heat-resistant handles help protect your hands",
      "ranking": 4,
      "price": 15,
      "dateCreated": "Date.now()",
      "keyWords": [
          "kitchen",
          "BBQ",
          "meat",
          "mangal"
      ],
      "ownerId": "C1",
      "occupiedDates": [
          "2.2.2018",
          "3.3.2018"
      ],
      "images": [
          "https://assets.academy.com/mgen/83/10157883.jpg"
      ],
      "condition": "new"
  },
  {
      "id": "D",
      "category": [
          "kitchen"
      ],
      "title": "bread machine",
      "description": "Oster Expressbake Bread Machine",
      "ranking": 4,
      "price": 10,
      "dateCreated": "Date.now()",
      "keyWords": [
          "kitchen",
          "bread",
          "electric"
      ],
      "ownerId": "C1",
      "occupiedDates": [
          "2.2.2018",
          "3.3.2018"
      ],
      "images": [
          "https://images-na.ssl-images-amazon.com/images/I/814etiBMveL._SL1500_.jpg"
      ],
      "condition": "new"
  },
  {
      "id": "12WHSDE",
      "category": [
          "transportation"
      ],
      "title": "City Bike",
      "description": "1 year old city-bike , comes with battery, to move easily around the city",
      "ranking": 5,
      "price": 10,
      "dateCreated": "Date.now()",
      "keyWords": [
          "bike",
          "sport",
          "fun",
          "transportation"
      ],
      "ownerId": "njcnwe7",
      "occupiedDates": [
          "20.8.2018",
          "27.8.2018"
      ],
      "images": ["https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"],
      "condition": "used"
  },
  {
      "id": "A7r4hfw",
      "category": [
          "travel",
          "kids"
      ],
      "title": "Inflatable Pool",
      "description": "Big pool to enjoy the summer with your family anywhere",
      "ranking": 4,
      "price": 25,
      "dateCreated": "Date.now()",
      "keyWords": [
          "trip",
          "fun",
          "family",
          "camping",
          "summer",
          "big"
      ],
      "ownerId": "112AAmk",
      "occupiedDates": [
          "30.9.2018",
          "2.10.2018"
      ],
      "images": ["https://p1.akcdn.net/full/392557540.bestway-57313-syros-puhafalu-medence-szett-457x84cm-ffa-153.jpg"],
      "condition": "new"
  }
]

console.log('***********\n',JSON.parse(item));
