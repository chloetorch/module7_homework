const languages = {
   EN: 'english',
   RU: 'русский',
   DE: 'deutsch'
};
console.log('EN' in languages);
console.log('RU' in languages);
console.log('ES' in languages);
console.log('DE' in languages);
//////////////////////////////////////////
function languages() {
   const obj = {
      EN: 'english',
      RU: 'русский',
      DE: 'deutsch'
   };
   console.log('EN' in obj)
}
languages();

///////////////////////////////////////

function car(str, obj) {
   const obj = {
      EN: 'english',
      RU: 'русский',
      DE: 'deutsch'
   }console.log('EN' in languages);
}


const car = {};
car.brand = 'VW';
car.color = 'blue';
car.year = '2018';

// const hasBrand = 'brand' in car;
// console.log(hasBrand);

function hasProperies(obj) {
   obj = Object.create(car);
   for (let key in obj) {
      if ('brand' in car) {
         console.log('brand' in car);
      };
   };
}

