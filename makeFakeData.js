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