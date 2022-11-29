class Room {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const room1 = new Room(
  1,
  "Estandar",
  5000,
  "https://www.ramadaplazaveracruz.com/img/FOTOhabstandar.jpg"
);
const room2 = new Room(
  2,
  "Deluxe",
  7000,
  "https://www.granhotelmonterrey.com/uploads/9/8/2/4/98249186/luxe_11_orig.jpg"
);
const room3 = new Room(
  3,
  "Familiar",
  12000,
  "https://www.seadustcancun.com/uploads/cms_apps/imagenes/seadust-inner-suites_UpUomnf_YImA7Z5.jpg"
);
const room4 = new Room(
  4,
  "Suite",
  17000,
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/80/49/ff/paradisus-cancun.jpg?w=1200&h=-1&s=1"
);
const room5 = new Room(
  5,
  "Premium",
  25000,
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/14/09/panama-jack-resorts-cancun.jpg?w=700&h=-1&s=1"
);
const room6 = new Room(
  6,
  "Gold",
  25000,
  "https://cdn.sandals.com/sandals/v11/site-elements/resorts/src/ows/ows-inside.jpg"
);

const rooms = [room1, room2, room3, room4, room5, room6];

const divRooms = document.getElementById("divRooms");

rooms.forEach((room) => {
  divRooms.innerHTML += `
  <div id="${room.id}" class="card">
          <h4 class="card-title">${room.nombre}</h4>
           <img src="${room.imagen}" alt="">
          <p class="card-text">$${room.precio}</p>
         <a href='#' class='btn-primary' id=${room.id}>COMPRAR</a>
      </div>
  `;
});
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const btnAgregar = document.querySelectorAll(".btn-primary");

btnAgregar.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const roomSeleccionado = rooms.find((rom) => rom.id === parseInt(btn.id));
    const roomCarrito = { ...roomSeleccionado, cantidad: 1 };

    const indexCarrito = carrito.findIndex((rom) => rom.id === roomCarrito.id);

    if (indexCarrito === -1) {
      carrito.push(roomCarrito);
    } else {
      carrito[indexCarrito].cantidad++;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
});

/* const botonFinalizar = document.querySelector("#finalizar");

botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((rom) => rom.precio * rom.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);
  console.log(totalCompra);
}; */












/* // Rooms
class Room {
    constructor(habitacion, precio, libre, balcon) {
      this.habitacion = habitacion;
      this.precio = precio;
      this.libre = libre;
      this.balcon = balcon;
      this.disponibilidad = true;
    }
    cambiarPrecio(precio) {
      this.precio = precio;
    }
    vender() {
      this.libre -= 1;
      if (this.libre < 1) {
        this.disponibilidad = false;
      }
    }
  }
  
  const estandar = new Room("Estandar", 5000, 23, "Balcon interno");
  const deluxe = new Room("Deluxe", 7000, 5, "Balcon al mar");
  const familiar = new Room("Familiar", 12000, 10, "Balcon interno");
  const suite = new Room("Suite", 17000, 2, "Balcon al mar");
  
  // Variables
  
  let decision;
  let posicion = -1;
  let existe = false;
  let total = 0;
  let carrito = [];
  let reserva = true;
  let seguirReservando;
  
  //
  
  function carritoPush(hab) {
    carrito.push(hab.habitacion);
  }
  
  function seleccionarHabitacion(habitacion) {
    if (habitacion.libre > 0) {
      
      carritoPush(habitacion);
  
      total = total + habitacion.precio;
      alert(`Reservaste una habitacion Suite. El precio es de: $${habitacion.precio}.
                El total de tu compra hasta el momento es de: $${total}`);
      seguirReservando = confirm("Queres seguir reservando?");
      if (seguirReservando === false) {
        reserva = false;
      }
      habitacion.vender();
    } else {
      alert("No quedan mas habitaciones disponibles");
    }
  }
  
  // While
  
  while (reserva === true) {
    decision = parseInt(
      prompt(`Ingresa que habitacion desea reservar:
          1. Estandar: Vista interna x $5000.
          2. Deluxe: Vista al mar x $7000.
          3. Familiar: Vista interna x 12000.
          4. Suite: Vista al mar x 17000.`)
    );
  
    if (decision === 1) {
      seleccionarHabitacion(estandar);
    } else if (decision === 2) {
      seleccionarHabitacion(deluxe);
    } else if (decision === 3) {
      seleccionarHabitacion(familiar);
    } else if (decision === 4) {
      seleccionarHabitacion(suite);
    } else {
      alert("Ingrese un numero correcto");
    }
  }
  
  alert(`Lista de reservas: ${carrito}.
  Tu compra total es de: $${total}`); */

/* // Declaro las funciones necesarias
  
  alert("Bienvenido al hotel Reef Airs, a continuacion te te pedimos que ingreses la cantidad de dias que te vas a hospedar.");
  
  // Declaramos las funciones necesarias
  
  let dias;
  const precioDia = 1550;
  let total;
  let totalDesc;
  let descuento = false;
  
  // Funciones
  // creo una funcion que va a recibir dos parametros con los que va a calcular el precio total de la estadia.
  function calcularPrecio(d, p) {
    return (total = d * p);
  }
  // Creo una funcion que va a guardar las instrucciones
  function hotel() {
    // Creo un bucle para obligar al usuario a que ingrese un numero.
    do {
      dias = parseInt(prompt("El precio por dia es de $1500, a continuacion ingrese la cantidad de dias que desea hospedarse"));
    } while (isNaN(dias) === true);
    calcularPrecio(dias, precioDia);
    descuento = confirm(
      "Apreta ACEPTAR si tenes un descuento, si no presiona CANCELAR"
    );
    if (descuento === true) {
      totalDesc = total - total * 0.2;
      alert(
        `El precio de la estadia por dia es de $${precioDia}. El precio total por los días seleccionados es de $${total}. Con el descuento del 20%, el total que le queda abonar es de $${totalDesc}`
      );
    } else {
      alert(`El precio total es de: $${total}`);
    }
  }
  hotel();
  
  
  
  
  
   */

/* const telefono = {
      marca: `Samsung`,
      color:`Azul`,
      sistemaOperativo:`Android`,
      nombre:`Galaxy A21s`,
      camara: `48Mp`,
  }
  
  telefono.compania = `Claro`,
  delete telefono.camara,
  console.log(telefono)
  
   // Agrego funcion constructor de objeto telefono
  
   function Telefono(marca, color, sistemaOperativo, nombre) {
      this.marca = marca,
      this.color = color,
      this.sistemaOperativo = sistemaOperativo,
      this.nombre = nombre
   };
  
   const telefono1 = new Telefono(`Apple`,`Blanco`,`Ios`,`Iphone 13`);
   const telefono2 = new Telefono(`Xiaomi`,`Negro`,`Android`,`Redmi Note 11`);
   const telefono3 = new Telefono(`Samsung`,`Azul`,`Android`,`Galaxy s20`);
   const telefono4 = new Telefono(`Motorola`,`Gris`,`Android`,`G200`);
  
   console.log(telefono1);
   console.log(telefono2);
   console.log(telefono3);
   console.log(telefono4);
  
   */

/* let operacion;
  do {
      let numero1 = parseFloat(prompt("ingrese un numero"));
      let numero2 = parseFloat(prompt("ingrese otro numero"));
      operacion = prompt("ingrese operacion a realizar (+, -, /, *), para salir ingrese .");
      
      switch (operacion) {
          case `+`:
              console.log(numero1+numero2);
              break;
          case `-`:
              console.log(numero1-numero2);
               break;
          case `/`:
              console.log(numero1/numero2);
              break;
          case `*`:
              console.log(numero1*numero2);
              break;
              case `.`:
                  console.log("Adios");
                  break;
              default:
                  console.log("operacion invalida");
                  break;
      }
  }while(operacion !== `.`); */

/* let contador = 5;
  let limite = parseInt(prompt("ingrese hasta que numero quiere calcular"));
  
  while(contador <= limite) {
      let resultado = contador*contador;
      console.log(resultado);
  
      contador++;
  } */

/* let boletosPrimeraClase = 0;
  let boletosStandard = 0;
  
  for(let i = 1; i <= 10; i++) {
      let boletoElegido = prompt("elige tu boleto: 1) Primera Clase. 2) Boleto Standard");
  
  
      if(boletoElegido == 1) {
          boletosPrimeraClase++;
      } else if(boletoElegido == 2) {
      boletosStandard += 1;
      }
  }
  
  alert(`${boletosPrimeraClase} eligieron primera clase y ${boletosStandard} eligieron standard`); */

/* let acumuladorDeCalificaiones = 0;
  
  for(let i = 0; i < 5; i++) {
      let calificacion = parseFloat(prompt("Ingrese su calificacion"));
  
      acumuladorDeCalificaiones += calificacion;
  }
  
  let promedioCalificaciones = acumuladorDeCalificaiones / 5;
  alert(`El promedio de calificaiones es: ${promedioCalificaciones}`); */

/* let kilosManzanas = parseInt(prompt("cuantos kilos de manzana compraras? "));
  let kilosNaranjas = parseInt(prompt("cuantos kilos de naranjas compraras? "));
  
  if(kilosManzanas > 10 && kilosNaranjas > 10) {
      alert("Obtendras un 20% de descuento en tu compra");
  } else if(kilosManzanas > 10 || kilosNaranjas > 10) {
      alert("Obtendras un 15% de descuento en tu compra");
  } else if((kilosManzanas >= 5 && kilosManzanas <= 9) || (kilosNaranjas >= 5 && kilosNaranjas <= 9)) {
      alert("Obtendras un 10% de descuento en tu compra");
  } else {            
      alert("No tienes descuentos");
  } */

/* let numero = parseInt(prompt("Ingresa un numero"));
  
  
  if (numero%3 == 0 && numero%5 ==0) {
      alert("FizzBuzz");
  } else if (numero%3 == 0){
      alert("Fizz");
  } else if (numero%5 == 0) {
      alert("Buzz");
  } else {
      alert("Par");
  } */

/* let numero = parseInt(prompt("ingresa un numero"));
  let esPar = numero%2 == 0;
  console.log(numero%2)
  
  if (esPar) {
      alert(`si es par!`);
  } else { 
      alert(`no es par!`);
  } */

/* let edadUsuario = parseInt (prompt("cual es tu edad?"));
  
  
  if (edadUsuario >= 18) {
      alert(`Puedes comprar alcohol`);
  } 
  
  else {
      alert(`No podes comprar alcohol JAJAJAJAJAJ`);
  } */

/* let nombre = prompt("Ingresa tu nombre");
  let anioNacimiento = prompt("En que año nacio?");
  
  let edad = 2022 - parseInt(anioNacimiento);
  let mensajeSalida = `Hola ${nombre}, tu tienes ${edad} años`;
  alert(mensajeSalida); */