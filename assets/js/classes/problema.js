const joshua = {
  nombre: "Joshua",
  edad: 25,
  imprimir() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 26,
};

const juan = {
  nombre: "Juan",
  edad: 27,
};

joshua.imprimir();

function Persona(nombre, edad) {
  console.log("Se ejecutó esta linea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  };
}

const maria = new Persona("Maria", 25);

maria.imprimir();
