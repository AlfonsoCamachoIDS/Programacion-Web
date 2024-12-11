


const display = document.querySelector(".display"); // * Donde se mostrará el resultado
const buttons = document.querySelectorAll("button"); // * Botones de la calculadora
const specialChars = ["%", "*", "/", "-", "+", "="]; // * Operaciones permitidas
const history = document.querySelector(".last-result"); // * Elemento del historial
let output = ""; // * Entrada y resultado actual
let historyList = []; // * Lista para almacenar los últimos 10 resultados

// ! Función principal que procesa los botones clicados
const calculate = (btnValue) => {
    display.focus(); // Enfoca el display
    if (btnValue === "=" && output !== "") {
        // Evalúa la expresión
        output = eval(output.replace("%", "/100"));
        updateHistory(output); // Guarda el resultado en el historial
    } else if (btnValue === "AC") {
        output = ""; // Limpia la entrada
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); // Borra el último carácter
    } else {
        if (output === "" && specialChars.includes(btnValue)) return; // Evita operadores iniciales
        output += btnValue; // Agrega el valor al output
    }
    display.value = output; // Actualiza el display
};

// ! Función para actualizar el historial
const updateHistory = (result) => {
    if (historyList.length === 10) {
        historyList.shift(); // Elimina el resultado más antiguo si hay 10 elementos
    }
    historyList.push(result); // Agrega el nuevo resultado
    renderHistory(); // Muestra el historial actualizado
};

// ! Función para renderizar el historial
const renderHistory = () => {
    history.innerHTML = historyList.join("<br>"); // Muestra los resultados separados por saltos de línea
};

// ! Añade eventos a los botones
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

