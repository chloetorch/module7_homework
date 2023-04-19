function Electric(name, power, color) {
   this.name = name,
      this.power = power,
      this.color = color,
      this.enabled = false;

   this.enable = function () { // (1) это подходит в качестве метода включения и выключения приборов? Каким образом потом можно проверять вкл и выкл состояние?
      this.enabled = true;
   };
   this.disable = function () {
      this.enabled = false;
   };
}

function Computer(processor) {
   this.processor = processor;
   this.text = function () {
      console.log(`${this.name} has: ${this.power} W, ${this.color} color and ${this.processor} core`) // (2) как вывести этот текст с заполненными полями? 
   }
}

Computer.prototype = new Electric();

const comp = new Computer(4);
Computer.text('Computer', 200, 'blue', 4);

function Lamp(bright) {
   this.bright = bright;
}

Lamp.prototype = new Electric();

const lamp = new Lamp();

// (3) как посчитать сумму мощностей? должно быть что-то вроде этого? :
let arr = function () {
   let sum = 0;
   if (this.enabled === true) {
      let sum = sum + this.power;
   } if (this.enabled === false) {
      let sum = sum;
   } return sum;
}

comp.enabled(true);
console.log(arr);
