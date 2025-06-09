class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log("Hola a todos, soy un mensaje estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase",
    comida = ""
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    this.comida = comida;

    Persona._conteo++;
  }

  /**
   * @param {string} comida
   */
  set setComidaFavorita(comida) {
    this.comida = comida.charAt(0).toUpperCase() + comida.slice(1);
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    /*  this.quienSoy(); */
    console.log(`${this.nombre} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman"
);
const ironman = new Persona("Tony Stark", "Ironman", "Soy el hombre de hierro");
const capitanAmerica = new Persona("Steve Rogers", "Capitan America", "");
