const car = {};
car.brand = 'VW';
car.color = 'blue';
car.year = '2018';

function hasProperies(obj) {
   obj = Object.create(car);
   for (let key in obj) {
      if ('brand' in car) {
         console.log('brand' in car);
      };
   };
}

