# Formularios y Metadatos

---

Usando lo que hiciste en el ejercicio #2 organizar la página con las etiquetas semánticas (`<main>`, `<header>`, `<nav>`, `<article>`, etc) vistas en clase. Además, añadir un formulario de contacto utilizando las etiquetas de formularios, deberá tener:

- Un campo de entrada (`<input>`) para el nombre del usuario.
- Un área de texto (`<textarea>`) para que el usuario deje un mensaje.
- Un menú desplegable (`<select>`) para que el usuario elija el motivo de contacto, con opciones (`<option>`) agrupadas bajo un `<optgroup>`.
- Un botón de envío (`<button>`).
- Un campo con sugerencias de autocompletado usando `<datalist>`.

---

## Desarrollo

1. [x] Terminado, el codigo se encuentra en la carpeta /ejercicio-3-formularios-y-metadatos.

Imagen del Formulario final
![Formulario Ejercicio 3 Contactame](/imgs/unidad-2-ejercicio-3-formularios-y-metadatos/form.png)

Codigo del Formulario

```HTML
<section>
    <div id="contact" class="content">
        <h2>Contáctame</h2>
        <form>
            <label for="name">Correo:</label>
            <input type="email" id="name" name="name" list="suggestions" required>
            <datalist id="suggestions">
                <option value="usuario1@example.com"></option>
                <option value="usuario2@example.com"></option>
                <option value="usuario3@example.com"></option>
            </datalist>
            <br>

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea>
            <br>

            <label for="reason">Motivo de Contacto:</label>
            <select id="reason" name="reason" required>
                <optgroup label="Motivos Generales">
                    <option value="consulta">Consulta</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="soporte">Soporte Técnico</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="otros">Otros</option>
                </optgroup>
            </select>
            <br>

            <button type="submit">Enviar</button>
        </form>
    </div>
</section>
```

Estilos

```CSS
form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="email"],
textarea,
select {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #1e3a5f;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #ff7f50;
}
```
