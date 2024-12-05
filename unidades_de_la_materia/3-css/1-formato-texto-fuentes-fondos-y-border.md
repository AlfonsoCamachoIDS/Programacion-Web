
# Formato de texto, fuentes, fondos y border

---

## Ejercicio 1

Hacer una página web (puedes usar la que diseñaste en ejercicios pasados con HTML) en donde se apliquen estilos a los elementos, utilizando:

- Selectores básicos (de tipo, de clase y de id)
- Colores
- Fondos
- Fuentes
- Bordes

---

## Desarrollo

Use la pagina anterior, mi blog de Linux para mejorar los estilos CSS.

```CSS
/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

/* Header and Navigation Styles */
header {
    background-color: #1E3A5F;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav {
    background-color: #444;
    overflow: hidden;
}

nav a {
    float: left;
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: #FF7F50;
    color: #000;
}

/* Main Container */
.container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Content Sections */
.content {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.content:hover {
    transform: scale(1.02);
}

/* Typography */
h1 {
    color: #fff;
}

h2, h3, h4, h5, h6 {
    color: #1E3A5F;
}

p, li {
    font-size: 16px;
    line-height: 1.6;
}

blockquote {
    font-style: italic;
    color: #555;
    border-left: 4px solid #1E3A5F;
    padding-left: 10px;
    margin: 20px 0;
}

i {
    color: #999;
}

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

/* Tables */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 15px;
    text-align: left;
}

th {
    background-color: #1E3A5F;
    color: #fff;
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

/* Video and Image Text Sections */
.video-iframe-docu,
.image-text {
    margin-top: 20px;
}

.video-docu {
    width: 100%;
    height: 315px;
    border: none;
}

.image-text img {
    max-width: 100%;
    border-radius: 5px;
    margin-right: 20px;
}

.image-text div {
    flex: 1;
}

/* Footer */
footer p {
    text-align: right;
    margin-top: 20px;
    color: #999;
}

footer {
    background-color: #1E3A5F;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

.hr-footer {
    border: 1px solid #ddd;
    height: 5px;
    background-color: #ddd;
    margin: 20px 0;
}

/* Additional Styles */
.linux-page {
    background-color: #f4f4f4;
    width: 100%;
    height: 600px;
    border: none;
}

.video-iframe-docu {
    text-align: center;
}

.video-docu {
    width: 70%;
    height: 550px;
    border: none;
}
```
