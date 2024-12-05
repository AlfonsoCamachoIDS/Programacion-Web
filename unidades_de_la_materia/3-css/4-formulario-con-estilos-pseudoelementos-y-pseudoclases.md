
# Formulario con estilos, pseudoelementos y pseudoclases

---

## Tarea

Utilizar el formulario hecho en la unidad 1 y dale estilos que combinen con la identidad del sitio que diseñaste. Puedes usar como ejemplo el que se hizo en clase.

Poner el enlace al repositorio de github y a la página.

## Desarrollo

Resultado:

Antes
![Form Antes](/imgs/unidad-2-ejercicio-3-formularios-y-metadatos/form.png)

Actualizado:
![Form Update](/imgs/unidad-3-ejercicio-4-formulario-con-estilos/form-styles.png)

```CSS
/* Forms */
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
    background-color: #1E3A5F;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #FF7F50;
}
```
