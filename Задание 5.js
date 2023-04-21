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
