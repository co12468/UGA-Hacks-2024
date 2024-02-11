const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = './cities.csv';
const jsonFilePath = './cityData.json';

const capitalizeWords = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
  };
  
  csv({
    noheader: true,
    headers: ['city'],
  })
    .fromFile(csvFilePath)
    .then((jsonArray) => {
      const cities = jsonArray.map((item) => capitalizeWords(item.city));
  
      const validCities = cities.filter((city) => city && city.trim());
  
      const jsonData = {
        wordList: validCities,
      };
  
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
      console.log('Conversion complete!');
    })
    .catch((error) => console.error(error));