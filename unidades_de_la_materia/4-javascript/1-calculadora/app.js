
const display = document.querySelector(".display"); // * Aqui se mostrara el resultado, selecciona el elemento del DOM con la clase display
const buttons = document.querySelectorAll("button"); // * Se utiliza para seleccionar todos los botones de la calculadora y darles eventos luego
const specialChars = ["%", "*", "/", "-", "+", "="]; // * Define la lista de caracteres especiales que corresponden a las operaciones matematicas
let output = ""; // * Esta variable almacena el estado actual de la entrada del usuario y el resultado de las operaciones

// ! Se define la funcion principal que calcula basado en los botones que se clicaron
const calculate = (btnValue) => {
    display.focus(); // ? Esta linea hace que el campo de entrada de texto este enfocado, util para navegadores moviles o accesibilidad
    if (btnValue === "=" && output !== "") {
        // ? Si el boton clicado es = y hay contenido, evalua la expresion. Si contiene %, lo convierte en /100 antes de evaluarlo.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        // ? Si el botn clicado es AC All Clear, borra el contenido del output.
        output = "";
    } else if (btnValue === "DEL") {
        // ? Si el boton clicado es DEL elimina el ultimo caracter de la entrada.
        output = output.toString().slice(0, -1);
    } else {
        // ? Si el output esta vacio y se intento agregar un opetado matematico la funcion no hace nada (Evita errores como iniciar con un opreador)
        if (output === "" && specialChars.includes(btnValue)) return;
        // ? Si no se cumple ninguna de las condiciones anteriores, agrega el valor del boton clicado al output.
        output += btnValue;
    }
    // ? Actualiza el display con el contenido del output.
    display.value = output;
};

// ! Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    // ? Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
