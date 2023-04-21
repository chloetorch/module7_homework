// function Electric(name, power, color) {
//    this.name = name,
//       this.power = power,
//       this.color = color,
//       this.enabled = false;
// }

class Electric {
   constructor(name, power, color) {
      this.name = name,
         this.power = power,
         this.color = color,
         this.enabled = false;
   }

   getPower() {
      return 'It has  ' + this.power + ' W';
   }
}

// const electric = new Electric('Comp');
// electric.getInfo();

class Comp extends Electric {
   constructor(isEnabled, power, name) {
      super(name);
      this.isEnabled = isEnabled;
      this.power = isEnabled ? true : false;
   }
   getPower() {
      let result = 0
      if (isEnabled) {
         return result += this.power;
      } else {
         return result;
      }
   }
}

// function Computer(name, power, color, processor) {
//    this.name = name,
//       this.power = power,
//       this.color = color,
//       this.processor = processor;
//    this.text = function () {
//       console.log(`${this.name} has: ${this.power} W, ${this.color} color and ${this.processor} core`)
//    }
// }

// Computer.prototype = new Electric();

// function Lamp(name, power, color, bright) {
//    this.name = name
//    this.power = power
//    this.color = color
//    this.bright = bright;
// }

// Lamp.prototype = new Electric();

// Electric.prototype.Enabled = function () {
//    console.log(this.name + ' is on');
//    this.enabled = true;
// }

// Electric.prototype.getPower = function () {
//    return this.enabled ? this.power : 0;
// }

// const comp = new Electric('Computer', 80, 'white');
// const lamp = new Electric('Lamp', 20, 'grey');

// comp.Enabled();
// lamp.Enabled();

// function sum(arr) {
//    let result = 0
//    arr.forEach((item) => {
//       result += item.getPower()
//    })
//    return result;
// }

// console.log(sum([comp, lamp]))



class Electric {
   constructor(name, power, color) {
      this.name = name,
         this.power = power,
         this.color = color,
         this.enabled = false;
   }
   getPower() {
      function () {
         return this.enabled ? this.power : 0;
      };
   }
}

class Comp extends Electric {
   constructor(processor, power, isEnabled, enabled, name) {
      super(name);
      this.processor = processor;
      this.power = power,
         this.isEnabled = isEnabled;
      this.enabled = isEnabled ? true : false;
   }
   getPower() {
      function sum(arr) {
         let result = 0
         arr.forEach((item) => {
            result += item.getPower()
         })
         return result;
      }
   }
}

class Lamp extends Electric {
   constructor(bright, power, isEnabled, enabled, name) {
      super(name);
      this.bright = bright;
      this.power = power,
         this.isEnabled = isEnabled;
      this.enabled = isEnabled ? true : false;
   }
   getPower() {
      function sum(arr) {
         let result = 0
         arr.forEach((item) => {
            result += item.getPower()
         })
         return result;
      }
   }
}

const comp = new Comp(4, 200, true, true, 'Comp');
console.log(comp.getPower(sum([comp, lamp])))

const lamp = new Lamp('bright', 80, true, true, 'Lamp');
console.log(lamp.getPower(sum([comp, lamp])))