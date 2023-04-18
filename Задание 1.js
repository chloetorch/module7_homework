const car = {
   brand: 'VW',
   color: 'blue',
   year: '2018'
};

function ownProperties(obj) {
   obj = Object.create(car);
   obj.ownPrice = 200000;
   obj.ownModel = 'Tarek';

   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         console.log(key)
      }
   }
}
console.log(ownProperties())


