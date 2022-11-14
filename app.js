// Rooms

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
  Tu compra total es de: $${total}`);
  
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