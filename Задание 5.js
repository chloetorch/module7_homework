class Electric {
   constructor(name, power, color) {
      this.name = name,
         this.power = power,
         this.color = color,
         this.enabled = false
   }
   getPower() {
      return this.enabled ? this.power : 0;
   }
   toggleEnable() {
      this.enabled = !this.enabled
   }

   getInfo() {
      return `Устройство ${this.name} - ${this.enabled ? 'включено' : 'выключено'}, текущее потребление: ${this.getPower()} W`
   }
}

class Comp extends Electric {
   constructor(processor, power, name) {
      super(name, power),
         this.processor = processor,
         this.power = power,
         this.name = name
   }
}

class Lamp extends Electric {
   constructor(bright, power, name) {
      super(name, power),
         this.bright = bright,
         this.power = power,
         this.name = name
   }
}

function sum(arr) {
   let result = 0
   arr.forEach((item) => {
      result += item.getPower()
   })
   return result;
}

const comp = new Comp(4, 200, 'Computer');
const lamp = new Lamp('bright', 80, 'Lamp');

console.log(comp.getInfo())
comp.toggleEnable()
console.log(comp.getInfo())

console.log(lamp.getInfo())
lamp.toggleEnable()
console.log(lamp.getInfo())


console.log(`Общее потребление электроприборов ${sum([comp, lamp])} w`)
