//Funciones
//A ver si al final del curso logro una forma mucho más eficiente de presentar todo esto

//Función para obtener el primer tipo de equivalencia: GR/ML / TAZA
function ingredienteEquiv(ingrediente, equivalencia, cantidad) {
  if (equivalencia == 1) {
    //Gramos a Taza

    //Agua
    if (ingrediente == 1 && cantidad) {
      cantidadEquiv = cantidad / 240;
      console.log(
        `${cantidad}ml/gr de Agua equivalen a ${cantidadEquiv} Tazas.`
      );
    }

    //Aceite
    if (ingrediente == 2 && cantidad) {
      cantidadEquiv = cantidad / 180;
      console.log(
        `${cantidad}ml/gr de Aceite equivalen a ${cantidadEquiv} Tazas.`
      );
    }

    //Leche
    if (ingrediente == 3 && cantidad) {
      cantidadEquiv = cantidad / 240;
      console.log(
        `${cantidad}ml/gr de Leche equivalen a ${cantidadEquiv} Tazas.`
      );
    }

    //Harina
    if (ingrediente == 4 && cantidad) {
      cantidadEquiv = cantidad / 160;
      console.log(
        `${cantidad}ml/gr de Harina equivalen a ${cantidadEquiv} Tazas.`
      );
    }

    //Azúcar
    if (ingrediente == 5 && cantidad) {
      cantidadEquiv = cantidad / 200;
      console.log(
        `${cantidad}ml/gr de Azúcar equivalen a ${cantidadEquiv} Tazas.`
      );
    }

    //Almidón de Maíz
    if (ingrediente == 6 && cantidad) {
      cantidadEquiv = cantidad / 110;
      console.log(
        `${cantidad}ml/gr de Almidón de Maíz equivalen a ${cantidadEquiv} Tazas.`
      );
    } else {
      `No válido`;
    }
  }
  if (equivalencia == 2) {
    //Taza a Gramos

    //Agua
    if (ingrediente == 1 && cantidad) {
      cantidadEquiv = cantidad * 240;
      console.log(
        `${cantidad}Tazas de Agua equivalen a ${cantidadEquiv} gr/ml.`
      );
    }

    //Aceite
    if (ingrediente == 2 && cantidad) {
      cantidadEquiv = cantidad * 180;
      console.log(
        `${cantidad}Tazas de Aceite equivalen a ${cantidadEquiv} gr/ml.`
      );
    }
    //Leche
    if (ingrediente == 3 && cantidad) {
      cantidadEquiv = cantidad * 240;
      console.log(
        `${cantidad}Tazas de Leche equivalen a ${cantidadEquiv} gr/ml.`
      );
    }

    //Harina
    if (ingrediente == 4 && cantidad) {
      cantidadEquiv = cantidad * 160;
      console.log(
        `${cantidad}Tazas de Harina equivalen a ${cantidadEquiv} gr/ml.`
      );
    }

    //Azúcar
    if (ingrediente == 5 && cantidad) {
      cantidadEquiv = cantidad * 200;
      console.log(
        `${cantidad}Tazas de Azúcar equivalen a ${cantidadEquiv} gr/ml.`
      );
    }

    //Almidón de Maíz
    if (ingrediente == 6 && cantidad) {
      cantidadEquiv = cantidad * 110;
      console.log(
        `${cantidad}Tazas de Almidón de Maíz equivalen a ${cantidadEquiv} gr/ml.`
      );
    }else {
      (`No válido`);
    }
  }
}

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
    case "1":  //Hace falta agregar un mensaje de no válido cuando el usuario selecciona opciones no válidas al ingresar "ingrediente" y "Equivalencia"
      let ingrediente = parseInt(
        prompt(`Ingrese el tipo de ingrediente:
              1. Agua
              2. Aceite
              3. Leche
              4. Harina
              5. Azúcar
              6 Almidón de Maíz
              0. Salir del menú`)
      );
      //Obtenemos el tipo de equivalencia que desea hacer
      let equivalencia = parseInt(
        prompt(`Ingrese el tipo de equivalencia a realizar:
        1. GRAMOS/ML a TAZA
        2. TAZA a GRAMOS`)
      );
      //Obtenemos la cantidad que desea calcular
      let cantidad = parseInt(prompt(`Ingrese la cantidad deseada`));
      //Llamo a la función
      ingredienteEquiv(ingrediente, equivalencia, cantidad);
      break;

    //2. Equivalencia entre Manteca (gr) y Aceite (ml).
    case "2":
      console.log(
        `Estamos trabajando en esta sección, disculpe las molestias.`
      );
      break;

    //3. Equivalencia ºC / ºF.
    case "3":
      console.log(
        `Estamos trabajando en esta sección, disculpe las molestias.`
      );
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
} while (salirMenu);

//Menú
