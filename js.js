//Funciones



//Funciones


//Menú
let salirMenu = true;

do {
  //Este menú sería o un menú desplegable o diferentes tablas
  let opcionMenu = prompt(`Ingrese el número de la operación que desea realizar:
  1. Equivalencia GRAMOS/ML / TAZA.
  2. Equivalencia entre Manteca (gr) y Aceite (ml).
  3. Equivalencia ºC / ºF.
  0. Salir del menú.`);
  switch (opcionMenu) {
    // 1. Equivalencia GRAMOS/ML / TAZA.
    case "1":

      break;

    //Salir del menú
    case "0":
      console.log(`Salir del menú.`);
      salirMenu = false;
      break;

    //Si la opción no está dentro del menú
    default:
      console.log(`Opción no válida, vuelva a intentarlo.`);
      break;
  }
}while(salirMenu)


//Menú